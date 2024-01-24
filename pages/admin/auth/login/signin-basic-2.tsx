import React, { ReactNode } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import NonAuthLayout from '@common/Layout/NonAuthLayout';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

//import images
import logoLightFull from "@assets/images/logo-light-full.png";
import authEffect2 from "@assets/images/effect-pattern/auth-effect-2.png" ;
import authEffect from "@assets/images/effect-pattern/auth-effect.png";
import Link from 'next/link';

const SigninBasic2 = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Sign In | Hybrix - Admin & Dashboard Template</title>
            </Head>
            <section className="auth-page-wrapper-2 py-4 position-relative d-flex align-items-center justify-content-center min-vh-100 bg-light">
                <Container>
                    <Row className="g-0">
                        <Col lg={5}>
                            <Card className="auth-card bg-primary h-100 rounded-0 rounded-start border-0 d-flex align-items-center justify-content-center overflow-hidden p-4">
                                <div className="auth-image">
                                    <Image src={logoLightFull} alt="" height="42" />
                                    <Image src={authEffect2} alt="" className="auth-effect-2" />
                                    <Image src={authEffect} alt="" className="auth-effect" />
                                    <Image src={authEffect} alt="" className="auth-effect" />
                                </div>
                            </Card>
                        </Col>
                        <Col lg={7}>
                            <Card className="mb-0 rounded-0 rounded-end border-0">
                                <Card.Body className="p-4 p-sm-5 m-lg-4">
                                    <div className="text-center mt-2">
                                        <h5 className="text-primary fs-22">Welcome Back !</h5>
                                        <p className="text-muted">Sign in to continue to Hybrix.</p>
                                    </div>
                                    <div className="p-2 mt-5">
                                        <form action="#">

                                            <div className="mb-3">
                                                <label htmlFor="username" className="form-label">Username</label>
                                                <div className="input-group">
                                                    <span className="input-group-text bg-card-custom" id="basic-addon1"><i className="ri-user-3-line"></i></span>
                                                    <input type="text" className="form-control" id="username" placeholder="Enter username" />
                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                <div className="float-end">
                                                    <Link href="/auth-pages/passwordreset/pass-reset-basic" className="text-muted">Forgot password?</Link>
                                                </div>
                                                <label className="form-label" htmlFor="password-input">Password</label>
                                                <div className="position-relative auth-pass-inputgroup overflow-hidden">
                                                    <div className="input-group">
                                                        <span className="input-group-text bg-card-custom" id="basic-addon1"><i className="ri-lock-2-line"></i></span>
                                                        <input type="password" className="form-control pe-5 password-input" placeholder="Enter password" id="password-input" />
                                                    </div>
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
                                            <p className="mb-0">Don't have an account ? <Link href="/auth-pages/singup/signup-basic-2" className="fw-semibold text-secondary text-decoration-underline"> SignUp</Link> </p>
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

SigninBasic2.getLayout = function getLayout(page: any) {
    return (
      <NonAuthLayout>
        {page}
      </NonAuthLayout>
    )
};
export default SigninBasic2;