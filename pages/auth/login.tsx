import React, { useState } from 'react';
import Head from 'next/head';
import {  Alert, Button, Card, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as Yup from "yup";
import { useFormik } from "formik";
//import images
import logoLightFull from "@assets/images/logo-light-full.png";
import authEffect2 from "@assets/images/effect-pattern/auth-effect-2.png";
import authEffect from "@assets/images/effect-pattern/auth-effect.png";
import NonAuthLayout from '@common/Layout/NonAuthLayout';
import { GetServerSideProps } from 'next';
import { getSession, signIn } from 'next-auth/react';
import { httpClient } from 'lib/utils';
import { getToken } from 'next-auth/jwt';
import axios from 'axios';
import cookie from 'cookie';
import Cookies from 'js-cookie';

const Login = () => {

    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false)
    const [passwordtype, setPasswordtype] = useState<boolean>(true)
    const [userLogin, setUserLogin] = useState<any>([]);
    const [error, setError] = useState<boolean>(false);

    const validation: any = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            email: userLogin.email || "admin@themesbrand.com" || '',
            password: userLogin.password || "123456" || '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Please Enter Your Email"),
            password: Yup.string().required("Please Enter Your Password"),
        }),
        onSubmit: async (values) => {
            setLoading(true)
            setError(false)
            const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}`;

            axios.post(`${BASE_URL}/auth/login`, {
                ...values
            }).then((res)=> {
                const TOKEN = res.data.token;

                Cookies.set('token', TOKEN);
         
                httpClient.defaults.headers.common.Authorization = `Bearer ${TOKEN}`;
                
                router.push('/dashboard');
            }).catch((err)=> {
               setError(true);
               setLoading(false);
            });

        }
    });


    return (
        <React.Fragment>
            <Head>
                <title>Login | Hybrix - Admin & Dashboard Template</title>
            </Head>
            <section className="auth-page-wrapper py-5 position-relative d-flex align-items-center justify-content-center min-vh-100 bg-light">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Body>
                                    <Row className="g-0">
                                        <Col lg={5}>
                                            <Card className="auth-card bg-primary h-100 border-0 shadow-none p-sm-3 overflow-hidden mb-0">
                                                <Card.Body className="p-4 d-flex justify-content-between flex-column">
                                                    <div className="auth-image mb-3">
                                                        <Image src={logoLightFull} alt="" height="26" />
                                                        <Image src={authEffect2} alt="" className="auth-effect-2" priority />
                                                        <Image src={authEffect} alt="" className="auth-effect" />
                                                        <Image src={authEffect} alt="" className="auth-effect-3" />
                                                    </div>

                                                    <div>
                                                        <h3 className="text-white">Start your journey with us.</h3>
                                                        <p className="text-white-75 fs-15">It brings together your tasks, projects, timelines, files and more</p>
                                                    </div>
                                                    <div className="text-center text-white-75">
                                                        <p className="mb-0">©
                                                            {new Date().getFullYear()}{" "}
                                                            Trootfindr
                                                        </p>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                        <Col lg={7}>
                                            <Card className="mb-0 border-0 shadow-none">
                                                <Card.Body className="px-0 p-sm-5 m-lg-4">
                                                    <div className="text-center mt-2">
                                                        <h5 className="text-primary fs-20">Welcome Back !</h5>
                                                        <p className="text-muted">Sign in to continue to Trootfindr.</p>
                                                    </div>
                                                    {error && error ? (<Alert variant="danger"> invalid email/password </Alert>) : null}
                                                    <div className="p-2 mt-5">
                                                        <Form
                                                            onSubmit={(e) => {
                                                                e.preventDefault();
                                                                validation.handleSubmit();
                                                                return false;
                                                            }}
                                                        >

                                                            <div className="mb-3">
                                                                <Form.Label htmlFor="username" className="form-label">Email</Form.Label>
                                                                <Form.Control className="form-control" id="username" placeholder="Enter email"
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
                                                                <Button variant="primary" className="w-100" type="submit" disabled={false}>
                                                                    {null || loading ? <Spinner animation="border" size="sm" className="me-2"></Spinner> : null}
                                                                    Sign In
                                                                </Button>
                                                            </div>

                                                          
                                                        </Form>

                                                     
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                    </Row>

                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>

                </Container>
            </section>
        </React.Fragment>
    );
}

Login.getLayout = function getLayout(page: any) {
    return (
      <NonAuthLayout>
        {page}
      </NonAuthLayout>
    )
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = cookie.parse(context.req.headers.cookie || '');
  
    if (session['token']) {
      return {
        redirect: {
          destination: '/dashboard', // Redirect to login page if not authenticated
          permanent: false,
        },
      };
    }
  
    return {
      props: {},
    };
  };

export default Login;