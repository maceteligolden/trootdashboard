import { VectorMap } from '@south-paw/react-vector-maps';
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import world from '@common/world.svg.json'
const LiveUsersByCountry = () => {
    return (
        <React.Fragment>
            <Col xxl={4} xl={6}>
                <Card className="card-height-100">
                    <Card.Header className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Live Users By Country</h4>
                        <div className="flex-shrink-0">
                            <Button variant='soft-primary' size='sm' type="button">
                                Export Report
                            </Button>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <div
                            className="text-center"
                        >
                            <div id="world_map_line_markers" className="custom-vector-map">
                                <VectorMap {...world} />
                            </div>
                        </div>
                        <div className="table-responsive table-card mt-4 pt-2 border-top-dashed border-top border-start-0 border-end-0 bg-light-subtle">
                            <table className="table table-borderless table-sm table-centered align-middle table-nowrap mt-3">
                                <thead className="text-muted">
                                    <tr>
                                        <th>Parameters</th>
                                        <th>Today</th>
                                        <th>Total</th>
                                        <th>Status</th>
                                        <th>Percent</th>
                                    </tr>
                                </thead>
                                <tbody className="border-0">
                                    <tr>
                                        <th>Duration (Secs)</th>
                                        <td>0-30</td>
                                        <td>35000</td>
                                        <td>
                                            <div className="progress progress-sm">
                                                <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: "73%" }}></div>
                                            </div>
                                        </td>
                                        <td>73</td>
                                    </tr>
                                    <tr>
                                        <th style={{ width: "30%" }}>Sessions</th>
                                        <td>250</td>
                                        <td>2,750</td>
                                        <td>
                                            <div className="progress progress-sm">
                                                <div className="progress-bar bg-success" role="progressbar" aria-label="Basic example" style={{ width: "90%" }}></div>
                                            </div>
                                        </td>
                                        <td>90</td>
                                    </tr>
                                    <tr>
                                        <th style={{ width: "30%" }}>Views</th>
                                        <td>180</td>
                                        <td>4,950</td>
                                        <td>
                                            <div className="progress progress-sm">
                                                <div className="progress-bar bg-info" role="progressbar" aria-label="Basic example" style={{ width: "87%" }}></div>
                                            </div>
                                        </td>
                                        <td>87</td>
                                    </tr>
                                    <tr>
                                        <th style={{ width: "30%" }}>User</th>
                                        <td>120</td>
                                        <td>3,010</td>
                                        <td>
                                            <div className="progress progress-sm">
                                                <div className="progress-bar bg-danger" role="progressbar" aria-label="Basic example" style={{ width: "36%" }}></div>
                                            </div>
                                        </td>
                                        <td>36</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment >
    );
}

export default LiveUsersByCountry;