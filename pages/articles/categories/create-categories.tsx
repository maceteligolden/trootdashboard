import React, { ReactElement, useState } from 'react';
import Head from 'next/head';
import Layout from '@common/Layout';
import Breadcrumb from '@common/Breadcrumb';
import { IBreadCrumb } from '@common/interfaces';
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';
import { useFormik } from 'formik';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { pageRoutes } from 'lib/constants';
import cookie from "cookie";
import { articleCategoryValidation } from 'lib/validation';
import { Category, CategoryTypes } from 'lib/models/category.model';
import TextInput from 'Components/form/TextInput';

const CreateArticle = () => {

    const [passwordtype, setPasswordtype] = useState<boolean>(true)

    const breadcrumbItems: IBreadCrumb[] = [
        {
            label: "Dashboard",
            isLink: true,
            link: pageRoutes.dashboard
        },
        {
            label: "Articles",
            isLink: true,
            link: pageRoutes.articles.home
        },
        {
            label: "Categories",
            link: pageRoutes.articles.category.home,
            isLink: true,
        }, 
        {
            label: "Create Article Categories",
            isLink: false
        }
    ];

    const validation: any = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            description: "",
            name: ""
        },
        validationSchema: articleCategoryValidation,
        onSubmit: async (values: Category) => {
            const response = await fetch("/api/categories/create", {
                method: "POST",
            body: JSON.stringify({
                description: values.description,
                name: values.name
            })});

            console.log("response: "+ JSON.stringify(response))
        }
    });

    return (
        <React.Fragment>
            <Breadcrumb pageName="Create Article Category" items={breadcrumbItems}/>
            <Row className="px-0">
                <Col lg={5}>
                    {false && true ? (<Alert variant="danger"> error message goes here </Alert>) : null}
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

CreateArticle.getLayout = (page: ReactElement) => {
    return (
      <Layout>
        <Head>
                <title>Create Article | Trootfindr</title>
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


export default CreateArticle;