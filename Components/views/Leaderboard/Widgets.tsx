import React from 'react';
import Image from 'next/image';

import { Card, Col, Row } from 'react-bootstrap';
import avatar1 from "@assets/images/users/avatar-1.jpg";
import { WidgetsCharts } from './LeaderboardCharts';
import CountUp from 'react-countup';

const Widgets = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={4} md={6}>
                    <Card className="bg-primary">
                        <Card.Body>
                            <div className="d-flex border-bottom pb-3 border-light border-opacity-25">
                                <div className="flex-grow-1 overflow-hidden">
                                    <h4 className="fs-17 fw-semibold text-white">Hello, Diana</h4>
                                    <p className="text-white text-truncate mb-0"> Welcome to Leaderboard</p>
                                </div>

                                <div className="flex-shrink-0">
                                    <div className="avatar-sm">
                                        <span className="avatar-title rounded fs-2">
                                            🎉
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2 pt-1">
                                <p className="text-white-50 mb-0 fs-14 mb-0 text-truncate"> <span className="text-white">#35</span> Leaderboard position to reach level 3</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={4} md={6}>
                    <Card>
                        <Card.Body>
                            <div className="d-flex border-bottom pb-3">
                                <div className="flex-grow-1">
                                    <h4 className="fs-17 fw-semibold">
                                    <CountUp start={0} end={1248} duration={3} suffix='k'/>
                                    </h4>
                                    <p className="text-muted mb-0">Total Member</p>
                                </div>

                                <div className="flex-shrink-0">
                                    <div className="avatar-sm">
                                        <span className="avatar-title bg-primary-subtle rounded fs-2">
                                            <div id="mini-chart-1" className="apex-charts" dir="ltr">
                                                <WidgetsCharts dataColors='["--tb-primary"]' />
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2 pt-1">
                                <p className="text-success mb-0 fs-14 mb-0 text-truncate"><i className="mdi mdi-trending-up align-middle me-1"></i>5.26 <span className="text-muted">VS Prev. 28 days</span></p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={4} md={12}>
                    <Card>
                        <Card.Body>
                            <div className="d-flex border-bottom pb-3">
                                <div className="flex-grow-1">
                                    <h4 className="fs-17 fw-semibold">Edward Diana</h4>
                                    <p className="text-muted mb-0">All Time Winner</p>
                                </div>

                                <div className="flex-shrink-0">
                                    <div className="avatar-sm">
                                        <span className="avatar-title rounded fs-2">
                                            <Image className="rounded img-fluid" src={avatar1} alt="Header Avatar" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2 pt-1">
                                <p className="text-muted mb-0 fs-14 mb-0 text-truncate"> 25 Points to Reach Level 3</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </React.Fragment>
    );
}

export default Widgets;