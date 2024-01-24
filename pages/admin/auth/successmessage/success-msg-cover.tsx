import React, { ReactNode } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import NonAuthLayout from '@common/Layout/NonAuthLayout';
import { Card, Col, Container, Row } from 'react-bootstrap';

//import images
import logoLightFull from "@assets/images/logo-light-full.png";
import Link from 'next/link';

const SuccessMsgCover = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Success Message | Hybrix - Admin & Dashboard Template</title>
            </Head>
            <section className="auth-bg-cover min-vh-100 p-4 p-lg-5 d-flex align-items-center justify-content-center">
                <div className="bg-overlay"></div>
                <Container className="px-0" fluid={true}>
                    <Row className="g-0 justify-content-center">
                        <Col xl={4} lg={6}>
                            <div className="text-center mb-5">
                                <Image src={logoLightFull} alt="" height="32" />
                            </div>
                            <Card className="mb-0 py-5">
                                <Card.Body className="p-4 p-sm-5 m-lg-4 text-center">
                                    <div className="avatar-lg mx-auto mt-2">
                                        <div className="avatar-title bg-card-custom text-primary display-3 rounded-circle">
                                            <i className="bi bi-emoji-smile"></i>
                                        </div>
                                    </div>
                                    <div className="mt-4 pt-2">
                                        <h4>Well done !</h4>
                                        <p className="text-muted mx-4">Aww yeah, you successfully read this important message.</p>
                                        <div className="mt-4">
                                            <Link href="/auth-pages/login/signin-basic" className="btn btn-primary w-100">Back to Dashboard</Link>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            <div className="text-white text-center mt-5">
                                <p className="mb-0">&copy;
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

SuccessMsgCover.getLayout = function getLayout(page: any) {
    return (
      <NonAuthLayout>
        {page}
      </NonAuthLayout>
    )
};
export default SuccessMsgCover;