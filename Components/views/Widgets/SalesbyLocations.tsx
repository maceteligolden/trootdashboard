import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const SalesbyLocations = () => {
    return (
        <React.Fragment>
            <Col xxl={4} xl={6}>
                <Card className="card-height-100">
                    <Card.Header className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Sales by Locations</h4>
                        <div className="flex-shrink-0">
                            <Button variant='soft-primary' size='sm' type="button">
                                Export Report
                            </Button>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <div id="sales-by-locations" data-colors='["--tb-light"]' style={{ height: "269px" }}>
                        </div>

                        <div className="px-2 py-2 mt-1">
                            <p className="mb-1">New Maxico <span className="float-end">75%</span></p>
                            <div className="progress mt-2" style={{ height: "6px" }}>
                                <div className="progress-bar progress-bar-striped bg-primary" role="progressbar" style={{ width: "75%" }}></div>
                            </div>

                            <p className="mt-3 mb-1">California <span className="float-end">47%</span></p>
                            <div className="progress mt-2" style={{ height: "6px" }}>
                                <div className="progress-bar progress-bar-striped bg-primary" role="progressbar" style={{ width: "47%" }}></div>
                            </div>

                            <p className="mt-3 mb-1">Texas <span className="float-end">82%</span></p>
                            <div className="progress mt-2" style={{ height: "6px" }}>
                                <div className="progress-bar progress-bar-striped bg-primary" role="progressbar" style={{ width: "82%" }}></div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment >
    );
}

export default SalesbyLocations;