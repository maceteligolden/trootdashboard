import React, { ReactNode } from 'react';
import Head from 'next/head';
import NonAuthLayout from '@common/Layout/NonAuthLayout';
import Image from 'next/image';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import comingSoon from "@assets/images/comingsoon.png"
import logo from "@assets/images/logo-light-full.png"
import Countdown from "react-countdown"

const ComingSoon = () => {
    const renderer: any = (props: any) => {
        if (props.completed) {
            // Render a completed state
            return <span>You are good to go!</span>
        } else {
            return (
                <>
                    <div className="countdownlist">
                        <div className="countdownlist-item">
                            <div className="count-title">Days</div>
                            <div className="count-num">{props.days}</div></div>
                        <div className="countdownlist-item">
                            <div className="count-title">Hours</div>
                            <div className="count-num">{props.hours}</div></div>
                        <div className="countdownlist-item"><div className="count-title">Minutes</div>
                            <div className="count-num">{props.minutes}</div></div><div className="countdownlist-item">
                            <div className="count-title">Seconds</div>
                            <div className="count-num">{props.seconds}</div></div>
                    </div>
                </>
            )
        }
    }

    // const handleCountdownError = (error: Error) => {
    //     console.error(error);
    // }
    return (
        <React.Fragment>
            <Head>
                <title>Coming Soon | Hybrix - Admin & Dashboard Template</title>
            </Head>
            <section className="auth-bg-cover min-vh-100 p-4 p-lg-5 d-flex align-items-center justify-content-center">
                <div className="bg-overlay"></div>
                <Container fluid={true} className="px-0">
                    <Row className="g-0 justify-content-center">
                        <Col xl={4} lg={8}>
                            <div className="text-center mb-5">
                                <Image src={logo} alt="" height="32" />
                            </div>
                            <Card className="mb-0">
                                <Card.Body className="p-4 p-sm-4 m-lg-3 text-center">
                                    <div className="mb-sm-5 pb-sm-0 pb-5">
                                        <Image src={comingSoon} alt="" height="110" className="move-animation" />
                                    </div>
                                    <div className="mb-5">
                                        <h1>Coming Soon</h1>
                                    </div>
                                    <div>
                                        <Row className="justify-content-center mt-5">
                                            <Col lg={10}>
                                                <Countdown date="2023/10/30" renderer={renderer} className="countdownlist" />
                                            </Col>
                                        </Row>

                                        <div className="mt-5">
                                            <h4>Get notified when we launch</h4>
                                            <p className="text-muted">Don't worry we will not spam you 😊</p>
                                        </div>

                                        <form action="#!">
                                            <div className="countdown-input-subscribe mx-auto my-4">
                                                <input type="email" className="form-control shadow" placeholder="Enter your email address" required />
                                                <Button variant='primary' type="submit" id="button-email">Send<i className="ri-send-plane-2-fill align-bottom ms-2"></i></Button>
                                            </div>
                                        </form>
                                    </div>
                                </Card.Body>
                            </Card>

                            <div className="text-white text-center mt-5">
                                <p className="mb-0">&copy;{" "}
                                    {new Date().getFullYear()} Hybrix. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment >
    );
}

ComingSoon.getLayout = function getLayout(page: any) {
    return (
        <NonAuthLayout>
            {page}
        </NonAuthLayout>
    )
};

export default ComingSoon;