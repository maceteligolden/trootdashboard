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

const TwoStepBasic = () => {

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
            <section className="auth-page-wrapper py-5 position-relative d-flex align-items-center justify-content-center min-vh-100 bg-light">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Body>
                                    <Row className="g-0">
                                        <Col lg={5}>
                                            <Card className="auth-card bg-primary h-100 border-0 shadow-none p-sm-3 overflow-hidden">
                                                <Card.Body className="p-4 d-flex justify-content-between flex-column">
                                                    <div className="auth-image">
                                                        <Image src={logoLightFull} alt="" height="26" />
                                                        <Image src={authEffect2} alt="" className="auth-effect-2" />
                                                        <Image src={authEffect} alt="" className="auth-effect" />
                                                        <Image src={authEffect} alt="" className="auth-effect-3" />
                                                    </div>

                                                    <div>
                                                        <h3 className="text-white">Start your journey with us.</h3>
                                                        <p className="text-white-75 fs-15">It brings together your tasks, projects, timelines, files and more</p>
                                                    </div>
                                                    <div className="text-center text-white-75">
                                                        <p className="mb-0">©
                                                            {new Date().getFullYear()}{" "} Hybrix. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand
                                                        </p>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>


                                        <Col lg={7}>
                                            <Card className="mb-0 border-0 py-3 shadow-none">
                                                <Card.Body className="px-0 p-sm-5 m-lg-4 text-center">
                                                    <div className="mb-4">
                                                        {/* <lord-icon src="https://cdn.lordicon.com/diihvcfp.json" trigger="loop" className="avatar-md"> </lord-icon> */}
                                                    </div>

                                                    <div className="p-2 mt-4">
                                                        <div className="text-muted text-center mb-4 mx-lg-3">
                                                            <h4>Verify Your Email</h4>
                                                            <p>Please enter the 4 digit code sent to <span className="fw-semibold">example@abc.com</span></p>
                                                        </div>

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
                                                        </form>


                                                        <div className="mt-3">
                                                            <Button variant='primary' type="button" className="w-100">Confirm</Button>
                                                        </div>
                                                    </div>
                                                    <div className="mt-4 text-center">
                                                        <p className="mb-0">Didn't receive a code ? <Link href="/auth-pages/passwordreset/pass-reset-basic" className="fw-semibold text-primary text-decoration-underline">Resend</Link> </p>
                                                    </div>
                                                </Card.Body>

                                            </Card>

                                        </Col>


                                    </Row>


                                </Card.Body>
                            </Card>
                        </Col>


                    </Row>


                </Container>


            </section>
        </React.Fragment >
    );
}

TwoStepBasic.getLayout = function getLayout(page: any) {
    return (
      <NonAuthLayout>
        {page}
      </NonAuthLayout>
    )
};
export default TwoStepBasic;