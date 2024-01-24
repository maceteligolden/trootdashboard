import React, { ReactNode } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import NonAuthLayout from '@common/Layout/NonAuthLayout';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

//import images
import logoLightFull from "@assets/images/logo-light-full.png";
import Link from 'next/link';

const PassResetCover = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Reset Password | Hybrix - Admin & Dashboard Template</title>
            </Head>
            <div className="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
                <div className="bg-overlay"></div>
                <Container fluid={true}>
                    <Row className="g-0 justify-content-center">
                        <Col xl={4} lg={6}>
                            <div className="text-center mb-4 pb-2">
                                <Image src={logoLightFull} alt="" height="32" />
                            </div>
                            <Card className="mb-0 border-0 py-3 shadow-none">
                                <Card.Body className="p-4 p-sm-5">
                                    <div className="text-center mt-2">
                                        <h5 className="text-primary fs-20">Forgot Password?</h5>
                                        <p className="text-muted mb-4">Reset password with Hybrix</p>
                                        <div className="display-5 mb-4 text-danger">
                                            <i className="bi bi-envelope"></i>
                                        </div>
                                    </div>

                                    <div className="alert alert-borderless alert-warning text-center mb-2 mx-2" role="alert">
                                        Enter your email and instructions will be sent to you!
                                    </div>
                                    <div className="p-2">
                                        <form>
                                            <div className="mb-4">
                                                <label className="form-label">Email</label>
                                                <input type="email" className="form-control" id="email" placeholder="Enter Email" required />
                                            </div>

                                            <div className="text-center mt-4">
                                                <Button variant='primary' className="w-100" type="submit">Send Reset Link</Button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="mt-4 text-center">
                                        <p className="mb-0">Wait, I remember my password... <Link href="/auth-pages/login/signin-basic" className="fw-semibold text-primary text-decoration-underline"> Click here </Link> </p>
                                    </div>
                                </Card.Body>
                            </Card>
                            <div className="text-white text-center mt-4">
                                <p className="mb-0">&copy;{" "}
                                    {new Date().getFullYear()}{" "} Hybrix. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment >
    );
}

PassResetCover.getLayout = function getLayout(page: any) {
    return (
      <NonAuthLayout>
        {page}
      </NonAuthLayout>
    )
};
export default PassResetCover;