import React, { ReactNode } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import NonAuthLayout from '@common/Layout/NonAuthLayout';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

//import images
import logoLightFull from "@assets/images/logo-light-full.png";
import Link from 'next/link';

const SingupCover = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Sign Up | Hybrix - Admin & Dashboard Template</title>
            </Head>
            <section className="auth-bg-cover min-vh-100 p-4 p-lg-5 d-flex align-items-center justify-content-center">
                <div className="bg-overlay"></div>
                <Container className="px-0" fluid={true}>
                    <Row className="g-0">
                        <Col xl={8} lg={6}>
                            <div className="h-100 mb-0 p-4 d-flex flex-column justify-content-between">
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1">
                                        <Image src={logoLightFull} alt="" height="32" />
                                    </div>
                                </div>

                                <div className="text-white mt-4">
                                    <p className="mb-0">&copy;{" "}
                                        {new Date().getFullYear()}{" "} Hybrix. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col xl={4} lg={6}>
                            <Card className="mb-0 py-4">

                                <Card.Body className="p-4 p-sm-5 m-lg-2">
                                    <div className="text-center mt-2">
                                        <h5 className="text-primary fs-20">Create New Account</h5>
                                        <p className="text-muted">Get your free Hybrix account now</p>
                                    </div>
                                    <div className="p-2 mt-5">
                                        <form className="needs-validation" noValidate action="#">

                                            <div className="mb-3">
                                                <label htmlFor="useremail" className="form-label">Email <span className="text-danger">*</span></label>
                                                <input type="email" className="form-control" id="useremail" placeholder="Enter email address" required />
                                                <div className="invalid-feedback">
                                                    Please enter email
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="username" className="form-label">Username <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="username" placeholder="Enter username" required />
                                                <div className="invalid-feedback">
                                                    Please enter username
                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="password-input">Password</label>
                                                <div className="position-relative auth-pass-inputgroup">
                                                    <input type="password" className="form-control pe-5 password-input" placeholder="Enter password" id="password-input" aria-describedby="passwordInput" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required />
                                                    <Button variant='link' className="position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon"><i className="ri-eye-fill align-middle"></i></Button>
                                                    <div className="invalid-feedback">
                                                        Please enter password
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mb-4">
                                                <p className="mb-0 fs-12 text-muted fst-italic">By registering you agree to the Hybrix <Link href="#" className="text-primary text-decoration-underline fst-normal fw-medium">Terms of Use</Link></p>
                                            </div>

                                            <div id="password-contain" className="p-3 bg-light mb-2 rounded">
                                                <h5 className="fs-13">Password must contain:</h5>
                                                <p id="pass-length" className="invalid fs-12 mb-2">Minimum <b>8 characters</b></p>
                                                <p id="pass-lower" className="invalid fs-12 mb-2">At <b>lowercase</b> letter (a-z)</p>
                                                <p id="pass-upper" className="invalid fs-12 mb-2">At least <b>uppercase</b> letter (A-Z)</p>
                                                <p id="pass-number" className="invalid fs-12 mb-0">A least <b>number</b> (0-9)</p>
                                            </div>

                                            <div className="mt-4">
                                                <Button variant='primary' className="w-100" type="submit">Sign Up</Button>
                                            </div>

                                            <div className="mt-4 text-center">
                                                <div className="signin-other-title">
                                                    <h5 className="fs-13 mb-4 title text-muted">Create account with</h5>
                                                </div>

                                                <div>
                                                    <Button variant='soft-primary' type="button" className="btn-icon me-1"><i className="ri-facebook-fill fs-16"></i></Button>
                                                    <Button variant='soft-danger' type="button" className="btn-icon me-1"><i className="ri-google-fill fs-16"></i></Button>
                                                    <Button variant='soft-dark' type="button" className="btn-icon me-1"><i className="ri-github-fill fs-16"></i></Button>
                                                    <Button variant='soft-info' type="button" className="btn-icon"><i className="ri-twitter-fill fs-16"></i></Button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="mt-4 text-center">
                                        <p className="mb-0">Already have an account ? <Link href="/auth-pages/login/signin-basic" className="fw-semibold text-primary text-decoration-underline"> Signin </Link> </p>
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

SingupCover.getLayout = function getLayout(page: any) {
    return (
      <NonAuthLayout>
        {page}
      </NonAuthLayout>
    )
};
export default SingupCover;