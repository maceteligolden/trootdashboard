import React, { ReactElement, useState } from 'react';
import Head from 'next/head';
import Layout from '@common/Layout';
import Breadcrumb from '@common/Breadcrumb';
import { IBreadCrumb } from '@common/interfaces';
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';
import { useFormik } from 'formik';
import { GetServerSideProps } from 'next';
import cookie from "cookie";
import { pageRoutes } from 'lib/constants';
import TextInput from 'Components/form/TextInput';
import { articleCategoryValidation } from 'lib/validation';
import { Category, CategoryTypes } from 'lib/models/category.model';
import { createCategory } from 'lib/services/category.service';

const CreateBlog = () => {

    const [isError, setError] = useState<boolean>(false);
    const [isSuccess, setSuccess] = useState<boolean>(false);


    const breadcrumbItems: IBreadCrumb[] = [
        {
            label: "Dashboard",
            isLink: true,
            link: "/dashboard"
        },
        {
            label: "Blogs",
            isLink: true,
            link: "/blogs"
        },
        {
            label: "Categories",
            link: "/blogs/categories",
            isLink: true,
        },
        {
            label: "Create Blog Categories",
            isLink: false
        }
    ];

    const validation: any = useFormik({

        initialValues: {
            description: "",
            name: ""
        },
        validationSchema: articleCategoryValidation,
        onSubmit: async(values: Category, {resetForm}) => {
            try{
                setSuccess(false);
                setError(false)
                // Use the user's token for a server-side request
                await createCategory(values.description, values.name, CategoryTypes.BLOG);

                resetForm({values: {}});

                setSuccess(true);

            } catch(err){
                setError(true);
            }
        }
    });

    return (
        <React.Fragment>
            <Breadcrumb pageName="Create Blog Category" items={breadcrumbItems}/>
            <Row className="px-0">
                <Col lg={5}>
                    {isError && isError ? (<Alert variant="danger"> Category name already taken </Alert>) : null}
                    {isSuccess && isSuccess ? (<Alert variant="success"> New category added </Alert>) : null}
                    <div className=" mt-5">
                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                                validation.handleSubmit();
                                return false;
                            }}
                        >

                            <TextInput
                                label={"Name"}
                                name="name"
                                placeholder="Enter Name"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.name}
                                isInvalid={validation.touched.name && validation.errors.name}
                                errors={validation.errors.name}
                            />

                            <TextInput
                                label={"Description"}
                                name="description"
                                placeholder="Enter Description"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.description}
                                isInvalid={validation.touched.description && validation.errors.description}
                                errors={validation.errors.description}
                            />


                            <div className="mt-4">
                                <Button variant="primary" className="w-100" type="submit">
                                    {/* {error || loading ? <Spinner animation="border" size="sm" className="me-2"></Spinner> : null} */}
                                    Create Category
                                </Button>
                            </div>

                        
                        </Form>

                    
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    );
}

CreateBlog.getLayout = (page: ReactElement) => {
    return (
      <Layout>
        <Head>
                <title>Create Blog Category | Trootfindr</title>
        </Head>
        {page}
      </Layout>
    )
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = cookie.parse(context.req.headers.cookie || '');
 
    if (!session['token']) {
      return {
        redirect: {
          destination: pageRoutes.auth.login, // Redirect to login page if not authenticated
          permanent: false,
        },
      };
    }
  
    return {
      props: {},
    };
  };


export default CreateBlog;