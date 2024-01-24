import React, { ReactNode } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import NonAuthLayout from '@common/Layout/NonAuthLayout';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import logo from "@assets/images/logo-light-full.png"
import Link from 'next/link';

const SigninCover = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Sign In | Hybrix - Admin & Dashboard Template</title>
            </Head>
            <section className="auth-bg-cover min-vh-100 p-4 p-lg-5 d-flex align-items-center justify-content-center">
                <div className="bg-overlay"></div>
                <Container className="px-0" fluid={true}>
                    <Row className="g-0">
                        <Col xl={8} lg={6}>
                            <div className="h-100 mb-0 p-4 d-flex flex-column justify-content-between">
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1">
                                        <Image src={logo} alt="" height="32" />
                                    </div>
                                </div>

                                <div className="text-white mt-4">
                                    <p className="mb-0">&copy;
                                        {new Date().getFullYear()}{" "} Hybrix. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col xl={4} lg={6}>
                            <Card className="mb-0 py-5">

                                <Card.Body className="p-4 p-sm-5 m-lg-2">
                                    <div className="text-center mt-2">
                                        <h5 className="text-primary fs-22">Welcome Back !</h5>
                                        <p className="text-muted">Sign in to continue to Hybrix.</p>
                                    </div>
                                    <div className="p-2 mt-5">
                                        <form action="#">

                                            <div className="mb-3">
                                                <label htmlFor="username" className="form-label">Username</label>
                                                <input type="text" className="form-control" id="username" placeholder="Enter username" />
                                            </div>

                                            <div className="mb-3">
                                                <div className="float-end">
                                                    <Link href="/auth-pages/passwordreset/pass-reset-basic" className="text-muted">Forgot password?</Link>
                                                </div>
                                                <label className="form-label" htmlFor="password-input">Password</label>
                                                <div className="position-relative auth-pass-inputgroup mb-3">
                                                    <input type="password" className="form-control pe-5 password-input" placeholder="Enter password" id="password-input" />
                                                    <Button variant='link' className="position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon"><i className="ri-eye-fill align-middle"></i></Button>
                                                </div>
                                            </div>

                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="auth-remember-check" />
                                                <label className="form-check-label" htmlFor="auth-remember-check">Remember me</label>
                                            </div>

                                            <div className="mt-4">
                                                <Button variant='primary' className="w-100" type="submit">Sign In</Button>
                                            </div>

                                            <div className="mt-4 pt-2 text-center">
                                                <div className="signin-other-title">
                                                    <h5 className="fs-13 mb-4 title">Sign In with</h5>
                                                </div>
                                                <div className="pt-2 hstack gap-2 justify-content-center">
                                                    <Button variant='soft-primary' type="button" className="btn-icon"><i className="ri-facebook-fill fs-16"></i></Button>
                                                    <Button variant='soft-danger' type="button" className="btn-icon"><i className="ri-google-fill fs-16"></i></Button>
                                                    <Button variant='soft-dark' type="button" className="btn-icon"><i className="ri-github-fill fs-16"></i></Button>
                                                    <Button variant='soft-info' type="button" className="btn-icon"><i className="ri-twitter-fill fs-16"></i></Button>
                                                </div>
                                            </div>
                                        </form>

                                        <div className="text-center mt-5">
                                            <p className="mb-0">Don't have an account ? <Link href="/auth-pages/singup/signup-cover" className="fw-semibold text-secondary text-decoration-underline"> SignUp</Link> </p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment >
    );
}

SigninCover.getLayout = function getLayout(page: any) {
    return (
      <NonAuthLayout>
        {page}
      </NonAuthLayout>
    )
};
export default SigninCover;