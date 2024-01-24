import React from 'react';
import { Card, Col, Dropdown, Row } from 'react-bootstrap';
import { IncomeBreakdownCharts } from "./widgetsCharts"

const IncomeBreakdown = () => {
    return (
        <React.Fragment>
            <Col xxl={4}>
                <Card className="card-height-100">
                    <Card.Header className="d-flex">
                        <h5 className="card-title flex-grow-1 mb-0">Income Breakdown</h5>
                        <div className="flex-shrink-0">
                            <Dropdown drop="start">
                                <Dropdown.Toggle as="a" className="arrow-none">
                                    <i className="ri-more-2-fill fs-14"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                    <li> <Dropdown.Item href="#">View</Dropdown.Item> </li>
                                    <li> <Dropdown.Item href="#">Edit</Dropdown.Item> </li>
                                    <li> <Dropdown.Item href="#">Delete</Dropdown.Item> </li>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <div className="widgets-piechart pt-3 pb-2">
                            <div id="simple_dount_chart" className="apex-charts" dir="ltr">
                                <IncomeBreakdownCharts dataColors='["--tb-info", "--tb-danger", "--tb-warning", "--tb-success"]' />
                            </div>
                        </div>
                    </Card.Body>
                    <div className="border-top border-top-dashed">
                        <Row className="g-0">
                            <Col md={6}>
                                <Card.Body className="border-end border-end-dashed d-flex">
                                    <div className="me-2 text-info fs-16"><i className="ri-record-circle-fill"></i></div>
                                    <div>
                                        <h5 className="fs-13 mb-1">Marketing Channels</h5>
                                        <p className="mb-0 fs-11 text-muted">$22.0k</p>
                                    </div>

                                </Card.Body>
                                <Card.Body className="border-end border-end-dashed d-flex">
                                    <div className="me-2 text-warning fs-16"><i className="ri-record-circle-fill"></i></div>
                                    <div>
                                        <h5 className="fs-13 mb-1">Direct Sales</h5>
                                        <p className="mb-0 fs-11 text-muted">$8.4k</p>
                                    </div>
                                </Card.Body>
                            </Col>
                            <Col md={6}>
                                <Card.Body className="d-flex">
                                    <div className="me-2 text-danger fs-16"><i className="ri-record-circle-fill"></i></div>
                                    <div>
                                        <h5 className="fs-13 mb-1">Offline Channels</h5>
                                        <p className="mb-0 fs-11 text-muted">$18.6k</p>
                                    </div>

                                </Card.Body>
                                <Card.Body className="d-flex">
                                    <div className="me-2 text-success fs-16"><i className="ri-record-circle-fill"></i></div>
                                    <div>
                                        <h5 className="fs-13 mb-1">Other Channels</h5>
                                        <p className="mb-0 fs-11 text-muted">$15.3k</p>
                                    </div>

                                </Card.Body>
                            </Col>
                        </Row>
                    </div>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default IncomeBreakdown;