import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const OtherWidgets = () => {
    return (
        <React.Fragment>
            <Row>
                <div className="col-12">
                    <h5 className="text-decoration-underline mb-3 mt-2 pb-3">Other Widgets</h5>
                </div>
            </Row>
            <Row>
                <Col lg={6} className="col-12">
                    <Card className="bg-info-subtle text-info border-0">
                        <Card.Body>
                            <Row className="gy-3">
                                <div className="col-sm">
                                    <h5 className="card-title fs-17">Need More Sales?</h5>
                                    <p className="mb-0">Upgrade to pro for added benefits.</p>
                                </div>
                                <div className="col-sm-auto">
                                    <Button variant='info' type="button" className="btn-label rounded-pill"><i className="ri-markup-line label-icon align-middle rounded-pill fs-16 me-2"></i> Go Pro Now</Button>
                                </div>
                            </Row>
                            <div className="position-absolute top-0 start-50 mt-2 opacity-25">
                                <i className="bi bi-shop display-4"></i>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6} className="col-12">
                    <Card className="card-primary border-0">
                        <Card.Body>
                            <Row className="gy-3">
                                <div className="col-sm">
                                    <h5 className="card-title fs-17">Need More Sales?</h5>
                                    <p className="mb-0">Upgrade to pro for added benefits.</p>
                                </div>
                                <div className="col-sm-auto">
                                    <button type="button" className="btn btn-darken-primary btn-label rounded-pill"><i className="ri-markup-line label-icon align-middle rounded-pill fs-16 me-2"></i> Go Pro Now</button>
                                </div>
                            </Row>
                            <div className="position-absolute top-0 start-50 mt-2 opacity-25">
                                <i className="bi bi-shop display-4"></i>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg={4}>
                    <Card>
                        <Card.Body>
                            <h5 className="fs-15 fw-semibold">Brand Logo Design - MD</h5>
                            <p className="text-muted">Graphics Work</p>
                            <div className="d-flex flex-wrap justify-content-evenly">
                                <p className="text-muted mb-0">
                                    <i className="mdi mdi-numeric-1-circle text-success fs-18 align-middle me-2"></i>Completed
                                </p>
                                <p className="text-muted mb-0">
                                    <i className="mdi mdi-numeric-3-circle text-info fs-18 align-middle me-2"></i>In Progress
                                </p>
                                <p className="text-muted mb-0"><i className="mdi mdi-numeric-2-circle text-primary fs-18 align-middle me-2"></i>To Do</p>
                            </div>
                        </Card.Body>
                        <div className="progress animated-progress rounded-bottom rounded-0" style={{ height: "6px" }}>
                            <div className="progress-bar bg-success rounded-0" role="progressbar" style={{ width: "30%" }}></div>
                            <div className="progress-bar bg-info rounded-0" role="progressbar" style={{ width: "50%" }}></div>
                            <div className="progress-bar rounded-0" role="progressbar" style={{ width: "20%" }}></div>
                        </div>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card>
                        <Card.Body>
                            <h5 className="fs-15 fw-semibold">Redesign - Landing Page</h5>
                            <p className="text-muted">UI/UX Design</p>
                            <div className="d-flex flex-wrap justify-content-evenly">
                                <p className="text-muted mb-0">
                                    <i className="mdi mdi-numeric-3-circle text-success fs-18 align-middle me-2"></i>Completed
                                </p>
                                <p className="text-muted mb-0"><i className="mdi mdi-numeric-0-circle text-info fs-18 align-middle me-2"></i>In Progress</p>
                                <p className="text-muted mb-0"><i className="mdi mdi-numeric-8-circle text-primary fs-18 align-middle me-2"></i>To Do</p>
                            </div>
                        </Card.Body>
                        <div className="progress animated-progress rounded-bottom rounded-0" style={{ height: "6px" }}>
                            <div className="progress-bar bg-success rounded-0" role="progressbar" style={{ width: "30%" }}></div>
                            <div className="progress-bar bg-info rounded-0" role="progressbar" style={{ width: "0%" }}></div>
                            <div className="progress-bar rounded-0" role="progressbar" style={{ width: "70%" }}></div>
                        </div>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card>
                        <Card.Body>
                            <h5 className="fs-15 fw-semibold">Ecommerce App for Web</h5>
                            <p className="text-muted">CRM Project</p>
                            <div className="d-flex flex-wrap justify-content-evenly">
                                <p className="text-muted mb-0">
                                    <i className="mdi mdi-numeric-10-circle text-success fs-18 align-middle me-2"></i>Completed
                                </p>
                                <p className="text-muted mb-0"><i className="mdi mdi-numeric-3-circle text-info fs-18 align-middle me-2"></i>In Progress</p>
                                <p className="text-muted mb-0"><i className="mdi mdi-numeric-2-circle text-primary fs-18 align-middle me-2"></i>To Do</p>
                            </div>
                        </Card.Body>
                        <div className="progress animated-progress rounded-bottom rounded-0" style={{ height: "6px" }}>
                            <div className="progress-bar bg-success rounded-0" role="progressbar" style={{ width: "60%" }}></div>
                            <div className="progress-bar bg-info rounded-0" role="progressbar" style={{ width: "25%" }}></div>
                            <div className="progress-bar rounded-0" role="progressbar" style={{ width: "15%" }}></div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </React.Fragment >
    );
}

export default OtherWidgets;