import React, { ReactNode } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import NonAuthLayout from '@common/Layout/NonAuthLayout';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

//import images
import logoLightFull from "@assets/images/logo-light-full.png";
import avatar1 from "@assets/images/users/avatar-1.jpg";

import Link from 'next/link';

const LockScreenCover = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Lock Screen | Hybrix - Admin & Dashboard Template</title>
            </Head>
            <section className="auth-bg-cover min-vh-100 p-4 p-lg-5 d-flex align-items-center justify-content-center">
                <div className="bg-overlay"></div>
                <Container className="px-0" fluid={true}>
                    <Row className="g-0 justify-content-center">
                        <Col xl={4} lg={6}>
                            <div className="text-center mb-4 pb-2">
                                <Image src={logoLightFull} alt="" height="32" />
                            </div>
                            <Card className="mb-0 py-4">
                                <Card.Body className="p-4 p-sm-5 m-lg-2 text-center">
                                    <div>
                                        <h5 className="text-primary fs-20">Lock Screen</h5>
                                        <p className="text-muted">Enter your password to unlock the screen!</p>
                                    </div>
                                    <div className="user-thumb text-center">
                                        <Image src={avatar1} className="rounded-circle img-thumbnail avatar-lg" alt="thumbnail" />
                                        <h5 className="font-size-15 mt-3">Hi ! Edward Diana</h5>
                                    </div>
                                    <div className="mt-4 text-start">
                                        <form>
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="userpassword">Password or Pin</label>
                                                <input type="password" className="form-control" id="userpassword" placeholder="Enter password" required />
                                            </div>
                                            <div className="mb-2 mt-4">
                                                <Button variant='primary' className="w-100" type="submit">Unlock</Button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="mt-5 text-center">
                                        <p className="mb-0">Not you ? return <Link href="/auth-pages/login/signin-cover" className="fw-semibold text-primary text-decoration-underline"> Signin</Link></p>
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
            </section>
        </React.Fragment >
    );
}

LockScreenCover.getLayout = function getLayout(page: any) {
    return (
      <NonAuthLayout>
        {page}
      </NonAuthLayout>
    )
};
export default LockScreenCover;