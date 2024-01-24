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

const Error404Alt = () => {
    return (
        <React.Fragment>
            <Head>
                <title>404 Error alt | Hybrix - Admin & Dashboard Template</title>
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
                                    <div className="text-center px-5">
                                        <h1 className="error-title mb-0">404</h1>
                                    </div>
                                    <div className="mt-2 text-center">
                                        <div className="position-relative">
                                            <h4 className="fs-18 error-subtitle text-uppercase mb-0">Opps, page not found</h4>
                                            <p className="fs-15 text-muted mt-3">It will be as simple as Occidental in fact,
                                                it will Occidental to an English person</p>
                                            <div className="mt-4">
                                                <Link href="/" className="btn btn-primary"><i className="mdi mdi-home me-1"></i>Back to home</Link>
                                            </div>
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

Error404Alt.getLayout = function getLayout(page: any) {
    return (
      <NonAuthLayout>
        {page}
      </NonAuthLayout>
    )
};
export default Error404Alt;