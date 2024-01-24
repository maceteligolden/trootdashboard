import React from 'react';
import Head from 'next/head';
import NonAuthLayout from '@common/Layout/NonAuthLayout';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import maintenance from "@assets/images/maintenance.png"
import logo from "@assets/images/logo-light-full.png"
import effect from "@assets/images/effect-pattern/auth-effect.png"
import effect2 from "@assets/images/effect-pattern/auth-effect-2.png"
import Link from 'next/link';

const Maintenance = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Maintenance | Hybrix - Admin & Dashboard Template</title>
            </Head>
            <section className="auth-page-wrapper-2 py-4 position-relative d-flex align-items-center justify-content-center min-vh-100 bg-light">
                <Container>
                    <Row className="g-0">
                        <Col lg={5}>
                            <div className="auth-card card bg-primary h-100 rounded-0 rounded-start border-0 d-flex align-items-center justify-content-center overflow-hidden p-4">
                                <div className="auth-image">
                                    <Image src={logo} alt="" height="42" />
                                    <Image src={effect2} alt="" className="auth-effect-2" />
                                    <Image src={effect} alt="" className="auth-effect" />
                                    <Image src={effect} alt="" className="auth-effect-3" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={7}>
                            <Card className="mb-0 rounded-0 rounded-end border-0 py-lg-3">
                                <Card.Body className="p-4 p-sm-5 m-lg-4">
                                    <div className="text-center">
                                        <div className="mb-5">
                                            <h3>Site is Under Maintenance</h3>
                                            <p className="text-muted fs-14">Please check back in sometime</p>
                                            <div className="mt-4 pt-2">
                                                <Link href="/" className="btn btn-primary"><i className="mdi mdi-home me-1"></i> Back to Home</Link>
                                            </div>
                                        </div>
                                        <Row className="justify-content-center">
                                            <Col xl={8}>
                                                <Image src={maintenance} alt="" className="img-fluid" />
                                            </Col>
                                        </Row>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

Maintenance.getLayout = function getLayout(page: any) {
    return (
      <NonAuthLayout>
        {page}
      </NonAuthLayout>
    )
};

export default Maintenance;