import React from 'react';
import { Card, Col, Dropdown, Row } from 'react-bootstrap';
import { IncomeDetailsCharts } from './widgetsCharts';

const IncomeDetails = () => {
    return (
        <React.Fragment>
            <Col xxl={4}>
                <Card className="card-height-100">
                    <Card.Header className="d-flex">
                        <h5 className="card-title flex-grow-1 mb-0">Income Details</h5>
                        <div className="flex-shrink-0">
                            <Dropdown drop='start'>
                                <Dropdown.Toggle as="a" className="arrow-none">
                                    <i className="ri-more-2-fill fs-14"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                    <li><Dropdown.Item href="#">View</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#">Edit</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#">Delete</Dropdown.Item></li>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Card.Header>
                    <Card.Body className="pb-0">
                        <h6 className="fs-15 mb-1">$380.50</h6>
                        <p className="text-muted fs-12 mb-0">Total Income</p>
                    </Card.Body>
                    <div>
                        <div id="area_chart_basic" className="apex-charts" dir="ltr">
                            <IncomeDetailsCharts dataColors='["--tb-success"]'/>
                        </div>
                    </div>
                    <div className="border-top border-top-dashed">
                        <Row className="g-0">
                            <Col md={4}>
                                <Card.Body className="text-center border-end border-end-dashed">
                                    <h5 className="fs-13 mb-1">$324.00</h5>
                                    <p className="mb-0 fs-11 text-muted">Total Sales</p>
                                </Card.Body>
                            </Col>
                            <Col md={4}>
                                <Card.Body className="text-center border-end border-end-dashed">
                                    <h5 className="fs-13 mb-1">$250.00</h5>
                                    <p className="mb-0 fs-11 text-muted">Spendings</p>
                                </Card.Body>
                            </Col>
                            <Col md={4}>
                                <Card.Body className="text-center">
                                    <h5 className="fs-13 mb-1">$380.50</h5>
                                    <p className="mb-0 fs-11 text-muted">Income</p>
                                </Card.Body>
                            </Col>
                        </Row>
                    </div>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default IncomeDetails;