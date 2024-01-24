import React, { ReactNode } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import NonAuthLayout from '@common/Layout/NonAuthLayout';
import { Card, Col, Container, Row } from 'react-bootstrap';

//import images
import logoLightFull from "@assets/images/logo-light-full.png";
import error400 from "@assets/images/error400.png";

import Link from 'next/link';

const Error404Cover = () => {
    return (
        <React.Fragment>
            <Head>
                <title>404 Error Cover | Hybrix - Admin & Dashboard Template</title>
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
                            <Card className="mb-0 py-5">
                                <Card.Body className="p-4 p-sm-5 m-lg-2">
                                    <div className="error-img text-center px-5">
                                        <Image src={error400} className="img-fluid" alt="" />
                                    </div>
                                    <div className="mt-4 text-center pt-3">
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

Error404Cover.getLayout = function getLayout(page: any) {
    return (
      <NonAuthLayout>
        {page}
      </NonAuthLayout>
    )
};
export default Error404Cover;