import React, { ReactNode } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import NonAuthLayout from '@common/Layout/NonAuthLayout';
import { Card, Col, Container, Row } from 'react-bootstrap';

//import images
import logoLightFull from "@assets/images/logo-light-full.png";
import authEffect2 from "@assets/images/effect-pattern/auth-effect-2.png";
import authEffect from "@assets/images/effect-pattern/auth-effect.png";
import Link from 'next/link';

const SuccessMsgBasic2 = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Success Message | Hybrix - Admin & Dashboard Template</title>
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
                                    <Image src={authEffect} alt="" className="auth-effect-3" />
                                </div>
                            </Card>
                        </Col>
                        <Col lg={7}>
                            <Card className="mb-0 rounded-0 rounded-end border-0">
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
                                            <Link href="/auth-pages/login/signin-basic" className="btn btn-primary w-100"><i className="ri-home-5-line me-1 align-bottom"></i> Back to Dashboard</Link>
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

SuccessMsgBasic2.getLayout = function getLayout(page: any) {
    return (
      <NonAuthLayout>
        {page}
      </NonAuthLayout>
    )
};
export default SuccessMsgBasic2;