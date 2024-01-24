import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { AudiencesMetricsCharts } from './widgetsCharts';
import Link from 'next/link';
import CountUp from 'react-countup';

const AudiencesMetrics = () => {
    return (
        <React.Fragment>
            <Col xxl={4}>
                <Card className="card-height-100">
                    <Card.Header className="border-0 align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Audiences Metrics</h4>
                        <div>
                            <Button variant='soft-secondary' size='sm' type="button" className="me-1">
                                ALL
                            </Button>
                            <Button variant='soft-secondary' size='sm' type="button" className="me-1">
                                1M
                            </Button>
                            <Button variant='soft-secondary' size='sm' type="button" className="me-1">
                                6M
                            </Button>
                            <Button variant='soft-primary' size='sm' type="button">
                                1Y
                            </Button>
                        </div>
                    </Card.Header>
                    <Card.Header className="p-0">
                        <div className="alert alert-warning alert-solid alert-label-icon border-0 rounded-0 m-0 d-flex align-items-center" role="alert">
                            <i className="ri-error-warning-line label-icon"></i>
                            <div className="flex-grow-1 text-truncate">
                                Your free trial expired in <b>17</b> days.
                            </div>
                            <div className="flex-shrink-0">
                                <Link href="/pages/pricing" className="text-reset text-decoration-underline"><b>Upgrade</b></Link>
                            </div>
                        </div>
                    </Card.Header>
                    <Card.Header className="p-0 border-0 bg-light-subtle">
                        <Row className="g-0 text-center">
                            <Col sm={4} className="col-6">
                                <div className="p-3 border border-dashed border-start-0">
                                    <h5 className="mb-1">
                                        <CountUp start={0} end={854} duration={3} />
                                        <span className="text-success ms-1 fs-12">49%<i className="ri-arrow-right-up-line ms-1 align-middle"></i></span>
                                    </h5>
                                    <p className="text-muted mb-0">Avg.Earning</p>
                                </div>
                            </Col>

                            <Col sm={4} className="col-6">
                                <div className="p-3 border border-dashed border-start-0">
                                    <h5 className="mb-1">
                                        <CountUp start={0} end={1278} duration={3} />
                                        <span className="text-success ms-1 fs-12">60%<i className="ri-arrow-right-up-line ms-1 align-middle"></i></span>
                                    </h5>
                                    <p className="text-muted mb-0">Total Conversation</p>
                                </div>
                            </Col>

                            <Col sm={4} className="col-6">
                                <div className="p-3 border border-dashed border-start-0 border-end-0">
                                    <h5 className="mb-1">
                                        <CountUp start={0} end={3} duration={3} suffix='m'/>
                                        <CountUp start={0} end={40} duration={3} suffix='sec'/>
                                    </h5>
                                    <p className="text-muted mb-0">Total Order</p>
                                </div>
                            </Col>

                        </Row>
                    </Card.Header>

                    <Card.Body className="p-0 pb-2">
                        <div>
                            <div id="column_stacked" className="apex-charts" dir="ltr">
                                <AudiencesMetricsCharts dataColors='["--tb-primary", "--tb-danger"]' />
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment >
    );
}

export default AudiencesMetrics;