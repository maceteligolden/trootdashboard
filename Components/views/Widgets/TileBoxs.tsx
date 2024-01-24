import Link from 'next/link';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import CountUp from 'react-countup';

const TileBoxs = () => {
    return (
        <React.Fragment>
            <Row>
                <div className="col-12">
                    <h5 className="text-decoration-underline mb-3 pb-1">Tile Boxs</h5>
                </div>
            </Row>

            <Row>
                <Col xl={3} md={6}>
                    <Card className="card-animate">
                        <Card.Body>
                            <div className="d-flex justify-content-between">
                                <div className="flex-grow-1">
                                    <p className="text-uppercase fw-medium text-muted text-truncate fs-13">Total Earnings</p>
                                    <h4 className="fs-22 fw-semibold mb-3">
                                        <CountUp start={0} end={74535} duration={3} prefix='$' />
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
                        <div className="animation-effect-6 text-success opacity-25">
                            <i className="bi bi-currency-dollar"></i>
                        </div>
                        <div className="animation-effect-4 text-success opacity-25">
                            <i className="bi bi-currency-pound"></i>
                        </div>
                        <div className="animation-effect-3 text-success opacity-25">
                            <i className="bi bi-currency-euro"></i>
                        </div>
                    </Card>
                </Col>

                <Col xl={3} md={6}>

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
                                        <CountUp start={0} end={69836} duration={3} suffix='k' />
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
                        <div className="animation-effect-6 text-info opacity-25 left">
                            <i className="bi bi-handbag"></i>
                        </div>
                        <div className="animation-effect-4 text-info opacity-25 left">
                            <i className="bi bi-shop"></i>
                        </div>
                        <div className="animation-effect-3 text-info opacity-25 left">
                            <i className="bi bi-bag-check"></i>
                        </div>
                    </Card>
                </Col>

                <Col xl={3} md={6}>

                    <Card className="card-animate">
                        <Card.Body>
                            <div className="d-flex justify-content-between">
                                <div className="flex-grow-1">
                                    <p className="text-uppercase fw-medium text-muted text-truncate fs-13">Customers</p>
                                    <h4 className="fs-22 fw-semibold mb-3">
                                        <CountUp start={0} end={19538} duration={3} suffix='M' />
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
                        <div className="animation-effect-6 text-warning opacity-25">
                            <i className="bi bi-person"></i>
                        </div>
                        <div className="animation-effect-4 text-warning opacity-25">
                            <i className="bi bi-person-fill"></i>
                        </div>
                        <div className="animation-effect-3 text-warning opacity-25">
                            <i className="bi bi-people"></i>
                        </div>
                    </Card>
                </Col>

                <Col xl={3} md={6}>

                    <Card className="card-animate">
                        <Card.Body>
                            <div className="d-flex justify-content-between">
                                <div className="avatar-sm flex-shrink-0">
                                    <span className="avatar-title bg-primary-subtle rounded fs-3">
                                        <i className="bx bx-wallet text-primary"></i>
                                    </span>
                                </div>
                                <div className="text-end flex-grow-1">
                                    <p className="text-uppercase fw-medium text-muted text-truncate fs-13">MY BALANCE</p>
                                    <h4 className="fs-22 fw-semibold mb-3">
                                        <CountUp start={0} end={19538} duration={3} suffix='k' />
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
                        <div className="animation-effect-6 text-info opacity-25 left">
                            <i className="bi bi-handbag"></i>
                        </div>
                        <div className="animation-effect-4 text-info opacity-25 left">
                            <i className="bi bi-shop"></i>
                        </div>
                        <div className="animation-effect-3 text-info opacity-25 left">
                            <i className="bi bi-bag-check"></i>
                        </div>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xl={3} md={6}>

                    <Card className="card-animate">
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1">
                                    <p className="text-uppercase fw-medium text-muted mb-0 fs-13">Total Earnings</p>
                                </div>
                                <div className="flex-shrink-0">
                                    <h5 className="text-success fs-14 mb-0">
                                        <i className="ri-arrow-right-up-line fs-13 align-middle"></i> +16.24 %
                                    </h5>
                                </div>
                            </div>
                            <div className="d-flex align-items-end justify-content-between mt-4">
                                <div>
                                    <h4 className="fs-22 fw-semibold mb-4">
                                        <CountUp start={0} end={55925} duration={3} suffix='k' prefix='$' />
                                    </h4>
                                    <Link href="#" scroll={false} className="text-decoration-underline">View net earnings</Link>
                                </div>
                                <div className="avatar-sm flex-shrink-0">
                                    <span className="avatar-title bg-success-subtle rounded fs-3">
                                        <i className="bx bx-dollar-circle text-success"></i>
                                    </span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={3} md={6}>

                    <Card className="card-animate bg-info">
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1">
                                    <p className="text-uppercase fw-medium text-white-50 mb-0 fs-13">Orders</p>
                                </div>
                                <div className="flex-shrink-0">
                                    <h5 className="text-warning fs-14 mb-0">
                                        <i className="ri-arrow-right-down-line fs-13 align-middle"></i> -3.57 %
                                    </h5>
                                </div>
                            </div>
                            <div className="d-flex align-items-end justify-content-between mt-4">
                                <div>
                                    <h4 className="fs-22 fw-semibold mb-4 text-white">
                                        <CountUp start={0} end={36894} duration={3} />
                                    </h4>
                                    <Link href="#" scroll={false} className="text-decoration-underline text-white-50">View all orders</Link>
                                </div>
                                <div className="avatar-sm flex-shrink-0">
                                    <span className="avatar-title bg-primary rounded fs-3">
                                        <i className="bx bx-shopping-bag text-white"></i>
                                    </span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={3} md={6}>

                    <Card className="card-animate">
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1">
                                    <p className="text-uppercase fw-medium text-muted mb-0 fs-13">Customers</p>
                                </div>
                                <div className="flex-shrink-0">
                                    <h5 className="text-success fs-14 mb-0">
                                        <i className="ri-arrow-right-up-line fs-13 align-middle"></i> +29.08 %
                                    </h5>
                                </div>
                            </div>
                            <div className="d-flex align-items-end justify-content-between mt-4">
                                <div>
                                    <h4 className="fs-22 fw-semibold mb-4">
                                        <CountUp start={0} end={18335} duration={3} suffix='M' />
                                    </h4>
                                    <Link href="#" scroll={false} className="text-decoration-underline">See details</Link>
                                </div>
                                <div className="avatar-sm flex-shrink-0">
                                    <span className="avatar-title bg-warning-subtle rounded fs-3">
                                        <i className="bx bx-user-circle text-warning"></i>
                                    </span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={3} md={6}>

                    <Card className="card-animate">
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1">
                                    <p className="text-uppercase fw-medium text-muted mb-0 fs-13">My Balance</p>
                                </div>
                                <div className="flex-shrink-0">
                                    <h5 className="text-muted fs-14 mb-0">
                                        +0.00 %
                                    </h5>
                                </div>
                            </div>
                            <div className="d-flex align-items-end justify-content-between mt-4">
                                <div>
                                    <h4 className="fs-22 fw-semibold mb-4">
                                        <CountUp start={0} end={19073} duration={3} suffix='k' prefix='$' />
                                    </h4>
                                    <Link href="#" scroll={false} className="text-decoration-underline">Withdraw money</Link>
                                </div>
                                <div className="avatar-sm flex-shrink-0">
                                    <span className="avatar-title bg-primary-subtle rounded fs-3">
                                        <i className="bx bx-wallet text-primary"></i>
                                    </span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xl={3} md={6}>
                    <Card className="bg-success card-height-100">
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div className="avatar-sm flex-shrink-0">
                                    <span className="avatar-title bg-primary text-white rounded-2 fs-2">
                                        <i className="bx bx-shopping-bag"></i>
                                    </span>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <p className="text-uppercase fw-medium text-white-75 mb-3 fs-13">Total Sales</p>
                                    <h4 className="fs-4 mb-3 text-white">
                                        <CountUp start={0} end={2045} duration={3} />
                                    </h4>
                                    <p className="text-white-75 mb-0">From 1930 last year</p>
                                </div>
                                <div className="flex-shrink-0 align-self-center">
                                    <span className="badge text-dark-emphasis bg-light-subtle fs-12"><i className="ri-arrow-up-s-line fs-13 align-middle me-1"></i>6.11 %<span></span></span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={3} md={6}>
                    <Card className="card-height-100">
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div className="avatar-sm flex-shrink-0">
                                    <span className="avatar-title bg-warning-subtle text-warning rounded-2 fs-2">
                                        <i className="bx bxs-user-account"></i>
                                    </span>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <p className="text-uppercase fw-medium text-muted mb-3 fs-13">Number of Users</p>
                                    <h4 className="fs-4 mb-3">
                                        <CountUp start={0} end={7522} duration={3} />
                                    </h4>
                                    <p className="text-muted mb-0">From 9530 last year</p>
                                </div>
                                <div className="flex-shrink-0 align-self-center">
                                    <span className="badge bg-danger-subtle text-danger fs-12"><i className="ri-arrow-down-s-line fs-13 align-middle me-1"></i>10.35 %<span></span></span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={3} md={6}>
                    <Card className="card-height-100">
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div className="avatar-sm flex-shrink-0">
                                    <span className="avatar-title bg-danger-subtle text-danger rounded-2 fs-2">
                                        <i className="bx bxs-badge-dollar"></i>
                                    </span>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <p className="text-uppercase fw-medium text-muted mb-3 fs-13">Total Revenue</p>
                                    <h4 className="fs-4 mb-3">
                                        $
                                        <CountUp start={0} end={284505} duration={3} />
                                    </h4>
                                    <p className="text-muted mb-0">From $1,750.04 last year</p>
                                </div>
                                <div className="flex-shrink-0 align-self-center">
                                    <span className="badge text-success bg-success-subtle fs-12"><i className="ri-arrow-up-s-line fs-13 align-middle me-1"></i>22.96 %<span></span></span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={3} md={6}>
                    <Card className="card-height-100">
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div className="avatar-sm flex-shrink-0">
                                    <span className="avatar-title bg-info-subtle text-info rounded-2 fs-2">
                                        <i className="bx bx-store-alt"></i>
                                    </span>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <p className="text-uppercase fw-medium text-muted mb-3 fs-13">Number of Stores</p>
                                    <h4 className="fs-4 mb-3">
                                    <CountUp start={0} end={405} duration={3} suffix='k'/>
                                    </h4>
                                    <p className="text-muted mb-0">From 308 last year</p>
                                </div>
                                <div className="flex-shrink-0 align-self-center">
                                    <span className="badge text-success bg-success-subtle fs-12"><i className="ri-arrow-up-s-line fs-13 align-middle me-1"></i>16.31 %<span></span></span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment >
    );
}

export default TileBoxs;