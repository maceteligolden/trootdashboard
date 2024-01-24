import React, { ReactNode } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import NonAuthLayout from '@common/Layout/NonAuthLayout';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { LuAtSign } from 'react-icons/lu';

// import images
import logoLightFull from "@assets/images/logo-light-full.png";
import Link from 'next/link';

const TwoStepCover = () => {
    const moveToNext = (index: any) => {
        let nextEle = document.getElementById('digit' + index + '-input')

        if ((nextEle as HTMLInputElement).value.length === 1) {
            if (index !== 4) {
                document.getElementById('digit' + (index + 1) + '-input')?.focus();
            } else {
                nextEle?.blur();
                // Submit code
                console.log('submit code');
            }
        }
    }

    return (
        <React.Fragment>
            <Head>
                <title>Two Step Verification | Hybrix - Admin & Dashboard Template</title>
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
                                    <div className="mb-4 pb-2">
                                        <LuAtSign className="icon avatar-md" />
                                    </div>
                                    <div className="text-muted text-center mx-lg-3">
                                        <h4 className="">Verify Your Email</h4>
                                        <p>Please enter the 4 digit code sent to <span className="fw-semibold">example@abc.com</span></p>
                                    </div>

                                    <div className="mt-4">
                                        <form autoComplete="off">
                                            <Row>
                                                <div className="col-3">
                                                    <div className="mb-3">
                                                        <label htmlFor="digit1-input" className="visually-hidden">Digit 1</label>
                                                        <input type="text" className="form-control form-control-lg bg-light border-light text-center"
                                                            onKeyUp={() => moveToNext(1)}
                                                            maxLength={1} id="digit1-input" />
                                                    </div>
                                                </div>

                                                <div className="col-3">
                                                    <div className="mb-3">
                                                        <label htmlFor="digit2-input" className="visually-hidden">Digit 2</label>
                                                        <input type="text" className="form-control form-control-lg bg-light border-light text-center"
                                                            onKeyUp={() => moveToNext(2)}
                                                            maxLength={1} id="digit2-input" />
                                                    </div>
                                                </div>

                                                <div className="col-3">
                                                    <div className="mb-3">
                                                        <label htmlFor="digit3-input" className="visually-hidden">Digit 3</label>
                                                        <input type="text" className="form-control form-control-lg bg-light border-light text-center"
                                                            onKeyUp={() => moveToNext(3)}
                                                            maxLength={1} id="digit3-input" />
                                                    </div>
                                                </div>

                                                <div className="col-3">
                                                    <div className="mb-3">
                                                        <label htmlFor="digit4-input" className="visually-hidden">Digit 4</label>
                                                        <input type="text" className="form-control form-control-lg bg-light border-light text-center"
                                                            onKeyUp={() => moveToNext(4)}
                                                            maxLength={1} id="digit4-input" />
                                                    </div>
                                                </div>
                                            </Row>

                                            <div className="mt-3">
                                                <Button variant='primary' type="button" className="w-100">Confirm</Button>
                                            </div>
                                        </form>
                                    </div>

                                    <div className="mt-5 text-center">
                                        <p className="mb-0">Didn't receive a code ? <Link href="/auth-pages/passwordreset/pass-reset-cover" className="fw-semibold text-primary text-decoration-underline">Resend</Link> </p>
                                    </div>
                                </Card.Body>
                            </Card>

                            <div className="text-white text-center mt-5">
                                <p className="mb-0">&copy;{" "}
                                    {new Date().getFullYear()}{" "} Hybrix. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

TwoStepCover.getLayout = function getLayout(page: any) {
    return (
      <NonAuthLayout>
        {page}
      </NonAuthLayout>
    )
};
export default TwoStepCover;