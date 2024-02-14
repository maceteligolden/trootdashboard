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
import { useRouter } from 'next/router';
import { articleCategoryValidation } from 'lib/validation';
import { Category } from 'lib/models';
import { updateCategory } from 'lib/services/category.service';

const UpdateCategory = () => {

    const router = useRouter();
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
            link: "/blogs/categories"
        },
        {
            label: "Categories",
            link: "/blogs/categories",
            isLink: true,
        },
        {
            label: "Create Update Categories",
            isLink: false
        }
    ];

    const validation: any = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            description: router.query.description.toString() || "",
            name: router.query.name.toString() || ""
        },
        validationSchema: articleCategoryValidation,
        onSubmit: async (values: Category) => {
            try{
                setSuccess(false);
                setError(false)

                const stringId = router.query.categoryId.toString();

                await updateCategory(stringId, values.description, values.name);
                setSuccess(true);

            } catch(err){
                setError(true);
            }
        }
    });

    return (
        <React.Fragment>
            <Breadcrumb pageName="Update blog category" items={breadcrumbItems}/>
            <Row className="px-0">
                <Col lg={5}>
                {isError && isError ? (<Alert variant="danger"> Category name already taken </Alert>) : null}
                    {isSuccess && isSuccess ? (<Alert variant="success"> Category updated </Alert>) : null}
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
                                    Update Category
                                </Button>
                            </div>

                        
                        </Form>

                    
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    );
}

UpdateCategory.getLayout = (page: ReactElement) => {
    return (
      <Layout>
        <Head>
                <title>Update blog category | Trootfindr</title>
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

export default UpdateCategory;