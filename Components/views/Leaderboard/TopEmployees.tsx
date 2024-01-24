import React from 'react';
import Image from 'next/image';
import { EmployeesWidgetsCharts } from './LeaderboardCharts';

import { Card, Col, Dropdown, Row } from 'react-bootstrap';

import avatar2 from "@assets/images/users/avatar-2.jpg";
import avatar6 from "@assets/images/users/avatar-6.jpg";
import avatar7 from "@assets/images/users/avatar-7.jpg";

const TopEmployees = () => {
    return (
        <React.Fragment>
            <div className="align-items-center d-flex pb-4">
                <h4 className="card-title mb-0 flex-grow-1">Top 3 Employees Of The Month</h4>
                <div className="flex-shrink-0">
                    <Dropdown className="card-header-dropdown">
                        <Dropdown.Toggle as="a" className="text-reset dropdown-btn arrow-none">
                            <span className="fw-semibold text-uppercase fs-12">Sort by:
                            </span><span className="text-muted"> This Month<i className="mdi mdi-chevron-down ms-1"></i></span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu-end">
                            <Dropdown.Item href="#">Today</Dropdown.Item>
                            <Dropdown.Item href="#">Yesterday</Dropdown.Item>
                            <Dropdown.Item href="#">Last 7 Days</Dropdown.Item>
                            <Dropdown.Item href="#">Last 30 Days</Dropdown.Item>
                            <Dropdown.Item href="#">This Month</Dropdown.Item>
                            <Dropdown.Item href="#">Last Month</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>

            <Row>
                <Col lg={4} md={6}>
                    <Card>
                        <Card.Body className="ribbon-box right">
                            <div className="text-center py-3">
                                <div className="ribbon ribbon-info vertical-shape"><span>1<sup>st</sup></span></div>
                                <div className="mx-auto avatar-md p-1 bg-card-custom border rounded-circle">
                                    <Image src={avatar2} className="img-fluid rounded-circle" alt="" />
                                </div>

                                <h5 className="mt-3 fs-17">Mildred O. Schultz</h5>
                                <p className="text-muted mb-0">Manager</p>

                                <Row className="mt-4 pt-2">
                                    <div className="col-6">
                                        <div id="user-chart-1" className="apex-charts" dir="ltr">
                                            <EmployeesWidgetsCharts data={[2, 22, 11, 21, 17, 25]} dataColors='["--tb-primary"]'/>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <h5 className="mb-1"> 16h 9m</h5>
                                        <p className="text-muted mb-0">Working Time</p>
                                    </div>
                                </Row>

                                <Row className="text-muted text-center mt-4 pt-3">
                                    <div className="col-4 border-end border-end-dashed">
                                        <h5 className="mb-1 projects-num">874</h5>
                                        <p className="text-muted mb-0">Accuracy</p>
                                    </div>
                                    <div className="col-4 border-end border-end-dashed">
                                        <h5 className="mb-1 projects-num">21</h5>
                                        <p className="text-muted mb-0">Aesthetic</p>
                                    </div>
                                    <div className="col-4">
                                        <h5 className="mb-1 tasks-num">8741</h5>
                                        <p className="text-muted mb-0">Points</p>
                                    </div>
                                </Row>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={4} md={6}>
                    <Card>
                        <Card.Body className="ribbon-box right">
                            <div className="text-center py-3">
                                <div className="ribbon ribbon-success vertical-shape"><span>2<sup>nd</sup></span></div>
                                <div className="mx-auto avatar-md p-1 bg-card-custom border rounded-circle">
                                    <Image src={avatar6} className="img-fluid rounded-circle" alt="" />
                                </div>

                                <h5 className="mt-3 fs-17">Joanna W. Owens</h5>
                                <p className="text-muted mb-0">Ux Designer</p>

                                <Row className="mt-4 pt-2">
                                    <div className="col-6">
                                        <div id="user-chart-2" className="apex-charts" dir="ltr">
                                            <EmployeesWidgetsCharts data={[18, 17, 21, 11, 21, 5]} dataColors='["--tb-primary"]'/>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <h5 className="mb-1"> 13h 12m</h5>
                                        <p className="text-muted mb-0">Working Time</p>
                                    </div>
                                </Row>

                                <Row className="text-muted text-center mt-4 pt-3">
                                    <div className="col-4 border-end border-end-dashed">
                                        <h5 className="mb-1 projects-num">562</h5>
                                        <p className="text-muted mb-0">Accuracy</p>
                                    </div>
                                    <div className="col-4 border-end border-end-dashed">
                                        <h5 className="mb-1 projects-num">45</h5>
                                        <p className="text-muted mb-0">Aesthetic</p>
                                    </div>
                                    <div className="col-4">
                                        <h5 className="mb-1 tasks-num">8402</h5>
                                        <p className="text-muted mb-0">Points</p>
                                    </div>
                                </Row>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={4} md={12}>
                    <Card>
                        <Card.Body className="ribbon-box right">
                            <div className="text-center py-3">
                                <div className="ribbon ribbon-danger vertical-shape"><span>3<sup>rd</sup></span></div>
                                <div className="mx-auto avatar-md p-1 bg-card-custom border rounded-circle">
                                    <Image src={avatar7} className="img-fluid rounded-circle" alt="" />
                                </div>

                                <h5 className="mt-3 fs-17">Robert J. Napier</h5>
                                <p className="text-muted mb-0">Marketer</p>

                                <Row className="mt-4 pt-2">
                                    <div className="col-6">
                                        <div id="user-chart-3" className="apex-charts" dir="ltr">
                                            <EmployeesWidgetsCharts data={[22, 7, 18, 7, 17, 8]} dataColors='["--tb-primary"]'/>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <h5 className="mb-1"> 10h 52m</h5>
                                        <p className="text-muted mb-0">Working Time</p>
                                    </div>
                                </Row>

                                <Row className="text-muted text-center mt-4 pt-3">
                                    <div className="col-4 border-end border-end-dashed">
                                        <h5 className="mb-1 projects-num">965</h5>
                                        <p className="text-muted mb-0">Accuracy</p>
                                    </div>
                                    <div className="col-4 border-end border-end-dashed">
                                        <h5 className="mb-1 projects-num">632</h5>
                                        <p className="text-muted mb-0">Aesthetic</p>
                                    </div>
                                    <div className="col-4">
                                        <h5 className="mb-1 tasks-num">5663</h5>
                                        <p className="text-muted mb-0">Points</p>
                                    </div>
                                </Row>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default TopEmployees;