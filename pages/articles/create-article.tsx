import React, { ReactElement, useState } from 'react';
import Head from 'next/head';
import Layout from '@common/Layout';
import Breadcrumb from '@common/Breadcrumb';
import { IBreadCrumb } from '@common/interfaces';
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { GetServerSideProps } from 'next';
import cookie from "cookie";
import { pageRoutes } from 'lib/constants';

const CreateArticle = () => {

    const [passwordtype, setPasswordtype] = useState<boolean>(true)

    const breadcrumbItems: IBreadCrumb[] = [
        {
            label: "Dashboard",
            isLink: true,
            link: "/dashboard"
        },
        {
            label: "Articles",
            link: "/articles",
            isLink: true
        },
        {
            label: "Create Article",
            isLink: false
        }
    ];

    const validation: any = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            firstname: "",
            lastname: "",
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Please Enter Your Email"),
            password: Yup.string().required("Please Enter Your Password"),
            firstname: Yup.string().required("Please Enter Your Firstname"),
            lastname: Yup.string().required("Please Enter Your Lastname")
        }),
        onSubmit: (values) => {
         
        }
    });

    return (
        <React.Fragment>
            <Breadcrumb pageName="Create Article" items={breadcrumbItems}/>
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

                            <div className="mb-3">
                                <Form.Label htmlFor="firstname" className="form-label">FirstName</Form.Label>
                                <Form.Control className="form-control" id="firstname" placeholder="Enter firstname"
                                    name="firstname"
                                    type="text"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.firstname || ""}
                                    isInvalid={
                                        validation.touched.firstname && validation.errors.firstname ? true : false
                                    }

                                />
                                {validation.touched.firstname && validation.errors.firstname ? (
                                    <Form.Control.Feedback type="invalid">{validation.errors.firstname}</Form.Control.Feedback>
                                ) : null}
                            </div>

                            <div className="mb-3">
                                <Form.Label htmlFor="lastname" className="form-label">LastName</Form.Label>
                                <Form.Control className="form-control" id="lastname" placeholder="Enter lastname"
                                    name="lastname"
                                    type="text"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.lastname || ""}
                                    isInvalid={
                                        validation.touched.lastname && validation.errors.lastname ? true : false
                                    }

                                />
                                {validation.touched.lastname && validation.errors.lastname ? (
                                    <Form.Control.Feedback type="invalid">{validation.errors.lastname}</Form.Control.Feedback>
                                ) : null}
                            </div>

                            <div className="mb-3">
                                <Form.Label htmlFor="email" className="form-label">Email</Form.Label>
                                <Form.Control className="form-control" id="email" placeholder="Enter email"
                                    name="email"
                                    type="email"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.email || ""}
                                    isInvalid={
                                        validation.touched.email && validation.errors.email ? true : false
                                    }

                                />
                                {validation.touched.email && validation.errors.email ? (
                                    <Form.Control.Feedback type="invalid">{validation.errors.email}</Form.Control.Feedback>
                                ) : null}
                            </div>

                            <div className="mb-3">
                            
                                <Form.Label className="form-label" htmlFor="password-input">Password</Form.Label>
                                <div className="position-relative auth-pass-inputgroup mb-3">
                                    <Form.Control type={passwordtype ? "password" : "text"} className="form-control pe-5 password-input" placeholder="Enter password" id="password-input"
                                        name="password"
                                        value={validation.values.password || ""}
                                        onChange={validation.handleChange}
                                        onBlur={validation.handleBlur}
                                        isInvalid={
                                            validation.touched.password && validation.errors.password ? true : false
                                        }
                                    />
                                    {validation.touched.password && validation.errors.password ? (
                                        <Form.Control.Feedback type="invalid">{validation.errors.password}</Form.Control.Feedback>
                                    ) : null}
                                    <Button variant='link' className="position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon" onClick={() => setPasswordtype(!passwordtype)}><i className="ri-eye-fill align-middle"></i></Button>
                                </div>
                            </div>


                            <div className="mt-4">
                                <Button variant="primary" className="w-100" type="submit">
                                    {/* {error || loading ? <Spinner animation="border" size="sm" className="me-2"></Spinner> : null} */}
                                    Create Account
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