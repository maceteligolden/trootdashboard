import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { SessionsByCountriesCharts } from "./widgetsCharts"

const SessionsbyCountries = () => {
    return (
        <React.Fragment>
            <Col xxl={4} xl={6}>
                <Card className="card-height-100">
                    <Card.Header className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Sessions by Countries</h4>
                        <div>
                            <Button variant='soft-secondary' size='sm' type="button" className="me-1">
                                ALL
                            </Button>
                            <Button variant='soft-primary' size='sm' type="button" className="me-1">
                                1M
                            </Button>
                            <Button variant='soft-secondary' size='sm' type="button">
                                6M
                            </Button>
                        </div>
                    </Card.Header>
                    <Card.Body className="p-0">
                        <div>
                            <div id="countries_charts" className="apex-charts" dir="ltr">
                                <SessionsByCountriesCharts dataColors='["--tb-info", "--tb-info", "--tb-info", "--tb-info", "--tb-danger", "--tb-info", "--tb-info", "--tb-info", "--tb-info", "--tb-info"]' />
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment >
    );
}

export default SessionsbyCountries;