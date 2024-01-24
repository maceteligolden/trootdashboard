import Link from 'next/link';
import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { TopReferralsPagesCharts } from './widgetsCharts';

const TopReferralsPages = () => {
    return (
        <React.Fragment>
            <Col xxl={4}>
                <Card className="card-height-100">
                    <Card.Header className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Top Referrals Pages</h4>
                        <div className="flex-shrink-0">
                            <Button variant='soft-primary' size='sm' type="button">
                                Export Report
                            </Button>
                        </div>
                    </Card.Header>

                    <Card.Body>

                        <div id="color_heatmap" className="apex-charts mt-n3" dir="ltr">
                            <TopReferralsPagesCharts dataColors='["--tb-success", "--tb-info", "--tb-primary", "--tb-warning", "--tb-secondary"]'/>
                        </div>

                        <Row className="g-3">
                            <Col md={6}>
                                <div className="d-flex mb-3">
                                    <div className="flex-grow-1">
                                        <p className="text-truncate text-muted fs-14 mb-0">
                                            <i className="mdi mdi-circle align-middle text-primary me-2"></i>www.google.com
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <p className="mb-0">24.58%</p>
                                    </div>
                                </div>
                                <div className="d-flex mb-3">
                                    <div className="flex-grow-1">
                                        <p className="text-truncate text-muted fs-14 mb-0">
                                            <i className="mdi mdi-circle align-middle text-warning me-2"></i>www.medium.com
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <p className="mb-0">12.22%</p>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="flex-grow-1">
                                        <p className="text-truncate text-muted fs-14 mb-0">
                                            <i className="mdi mdi-circle align-middle text-secondary me-2"></i>Other
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <p className="mb-0">17.58%</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="d-flex mb-3">
                                    <div className="flex-grow-1">
                                        <p className="text-truncate text-muted fs-14 mb-0">
                                            <i className="mdi mdi-circle align-middle text-info me-2"></i>www.youtube.com
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <p className="mb-0">17.51%</p>
                                    </div>
                                </div>
                                <div className="d-flex mb-3">
                                    <div className="flex-grow-1">
                                        <p className="text-truncate text-muted fs-14 mb-0">
                                            <i className="mdi mdi-circle align-middle text-success me-2"></i>www.meta.com
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <p className="mb-0">23.05%</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <div className="mt-2 text-center">
                            <Link scroll={false} href="#" className="text-muted text-decoration-underline">Show All</Link>
                        </div>

                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment >
    );
}

export default TopReferralsPages;