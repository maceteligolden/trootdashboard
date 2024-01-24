import React, { ReactNode } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import NonAuthLayout from '@common/Layout/NonAuthLayout';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

//import images
import logoLightFull from "@assets/images/logo-light-full.png";
import authEffect2 from "@assets/images/effect-pattern/auth-effect-2.png";
import authEffect from "@assets/images/effect-pattern/auth-effect.png";
import Link from 'next/link';

const PassChangeBasic2 = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Create New Password | Hybrix - Admin & Dashboard Template</title>
            </Head>
            <section className="auth-page-wrapper-2 py-4 position-relative d-flex align-items-center justify-content-center min-vh-100 bg-light">
                <Container>
                    <Row className="g-0">
                        <Col lg={5}>
                            <div className="auth-card card bg-primary h-100 rounded-0 rounded-start border-0 d-flex align-items-center justify-content-center overflow-hidden p-4">
                                <div className="auth-image">
                                    <Image src={logoLightFull} alt="" height="42" />
                                    <Image src={authEffect2} alt="" className="auth-effect-2" />
                                    <Image src={authEffect} alt="" className="auth-effect" />
                                    <Image src={authEffect} alt="" className="auth-effect-3" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={7}>
                            <Card className="mb-0 border-0 shadow-none py-3">
                                <Card.Body className="p-4 p-sm-5 m-lg-4">
                                    <div className="text-center">
                                        <h5 className="text-primary fs-20">Create new password</h5>
                                        <p className="text-muted mb-5">Your new password must be different from previous used password.</p>
                                    </div>

                                    <div className="p-2">
                                        <form action="#">
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="password-input">Password</label>
                                                <div className="position-relative auth-pass-inputgroup">
                                                    <input type="password" className="form-control pe-5 password-input" placeholder="Enter password" id="password-input" aria-describedby="passwordInput" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required />
                                                    <Button variant='link' className="position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon"><i className="ri-eye-fill align-middle"></i></Button>
                                                </div>
                                                <div id="passwordInput" className="form-text">Your password must be 8-20 characters long.</div>
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="confirm-password-input">Confirm Password</label>
                                                <div className="position-relative auth-pass-inputgroup mb-3">
                                                    <input type="password" className="form-control pe-5 password-input" placeholder="Confirm password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" id="confirm-password-input" required />
                                                    <Button variant='link' className="position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="confirm-password-input"><i className="ri-eye-fill align-middle"></i></Button>
                                                </div>
                                            </div>

                                            <div id="password-contain" className="p-3 bg-light mb-2 rounded">
                                                <h5 className="fs-13">Password must contain:</h5>
                                                <p id="pass-length" className="invalid fs-12 mb-2">Minimum <b>8 characters</b></p>
                                                <p id="pass-lower" className="invalid fs-12 mb-2">At <b>lowercase</b> letter (a-z)</p>
                                                <p id="pass-upper" className="invalid fs-12 mb-2">At least <b>uppercase</b> letter (A-Z)</p>
                                                <p id="pass-number" className="invalid fs-12 mb-0">A least <b>number</b> (0-9)</p>
                                            </div>

                                            <div className="form-check form-check-primary">
                                                <input className="form-check-input" type="checkbox" value="" id="auth-remember-check" />
                                                <label className="form-check-label" htmlFor="auth-remember-check">Remember me</label>
                                            </div>

                                            <div className="mt-4">
                                                <Button variant='primary' className="w-100" type="submit">Reset Password</Button>
                                            </div>

                                        </form>
                                    </div>
                                    <div className="mt-4 text-center">
                                        <p className="mb-0">Wait, I remember my password... <Link href="/auth-pages/login/signin-basic" className="fw-semibold text-primary text-decoration-underline"> Click here </Link> </p>
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

PassChangeBasic2.getLayout = function getLayout(page: any) {
    return (
      <NonAuthLayout>
        {page}
      </NonAuthLayout>
    )
};
export default PassChangeBasic2;