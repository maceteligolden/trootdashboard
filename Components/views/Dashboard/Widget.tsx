import dynamic from 'next/dynamic';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import CountUp from 'react-countup';

const Widget = () => {
    return (
        <React.Fragment>
            <Col xl={4}>
                <Row>
                    <Col xl={12} md={6}>

                        <Card className="card-animate">
                            <Card.Body>
                                <div className="d-flex justify-content-between">
                                    <div className="flex-grow-1">
                                        <p className="text-uppercase fw-medium text-muted text-truncate fs-13">Total Earnings</p>
                                        <h4 className="fs-22 fw-semibold mb-3">
                                            <CountUp start={0} end={74535} prefix='$' />
                                        </h4>
                                        <div className="d-flex align-items-center gap-2">
                                            <h5 className="text-success fs-12 mb-0">
                                                <i className="ri-arrow-right-up-line fs-13 align-middle"></i> +18.30 %
                                            </h5>
                                            <p className="text-muted mb-0">than last week</p>
                                        </div>
                                    </div>
                                    <div className="avatar-sm flex-shrink-0">
                                        <span className="avatar-title bg-success-subtle rounded fs-3">
                                            <i className="bx bx-dollar-circle text-success"></i>
                                        </span>
                                    </div>
                                </div>
                            </Card.Body>
                            <div className="animation-effect-6 text-success opacity-25 fs-18">
                                <i className="bi bi-currency-dollar"></i>
                            </div>
                            <div className="animation-effect-4 text-success opacity-25 fs-18">
                                <i className="bi bi-currency-pound"></i>
                            </div>
                            <div className="animation-effect-3 text-success opacity-25 fs-18">
                                <i className="bi bi-currency-euro"></i>
                            </div>
                        </Card>
                    </Col>

                    <Col xl={12} md={6}>

                        <Card className="card-animate">
                            <Card.Body>
                                <div className="d-flex justify-content-between">
                                    <div className="avatar-sm flex-shrink-0">
                                        <span className="avatar-title bg-info-subtle rounded fs-3">
                                            <i className="bx bx-shopping-bag text-info"></i>
                                        </span>
                                    </div>
                                    <div className="text-end flex-grow-1">
                                        <p className="text-uppercase fw-medium text-muted text-truncate fs-13">Orders</p>
                                        <h4 className="fs-22 fw-semibold mb-3">
                                        <CountUp start={0} end={69836} duration={3} suffix='k'/>
                                        </h4>
                                        <div className="d-flex align-items-center justify-content-end gap-2">
                                            <h5 className="text-danger fs-12 mb-0">
                                                <i className="ri-arrow-right-down-line fs-13 align-middle"></i> -2.74 %
                                            </h5>
                                            <p className="text-muted mb-0">than last week</p>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                            <div className="animation-effect-6 text-info opacity-25 left fs-18">
                                <i className="bi bi-handbag"></i>
                            </div>
                            <div className="animation-effect-4 text-info opacity-25 left fs-18">
                                <i className="bi bi-shop"></i>
                            </div>
                            <div className="animation-effect-3 text-info opacity-25 left fs-18">
                                <i className="bi bi-bag-check"></i>
                            </div>
                        </Card>
                    </Col>

                    <Col xl={12} md={6}>

                        <Card className="card-animate">
                            <Card.Body>
                                <div className="d-flex justify-content-between">
                                    <div className="flex-grow-1">
                                        <p className="text-uppercase fw-medium text-muted text-truncate fs-13">Customers</p>
                                        <h4 className="fs-22 fw-semibold mb-3">
                                        <CountUp start={0} end={18335} duration={3} suffix='M'/>
                                        </h4>
                                        <div className="d-flex align-items-center gap-2">
                                            <h5 className="text-success fs-12 mb-0">
                                                <i className="ri-arrow-right-up-line fs-13 align-middle"></i> +29.08 %
                                            </h5>
                                            <p className="text-muted mb-0">than last week</p>
                                        </div>
                                    </div>
                                    <div className="avatar-sm flex-shrink-0">
                                        <span className="avatar-title bg-warning-subtle rounded fs-3">
                                            <i className="bx bx-user-circle text-warning"></i>
                                        </span>
                                    </div>
                                </div>
                            </Card.Body>
                            <div className="animation-effect-6 text-warning opacity-25 fs-18">
                                <i className="bi bi-person"></i>
                            </div>
                            <div className="animation-effect-4 text-warning opacity-25 fs-18">
                                <i className="bi bi-person-fill"></i>
                            </div>
                            <div className="animation-effect-3 text-warning opacity-25 fs-18">
                                <i className="bi bi-people"></i>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </React.Fragment>
    );
}

export default Widget;