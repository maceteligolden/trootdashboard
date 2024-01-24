import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const MoreSales = () => {
    return (
        <React.Fragment>
            <Col xl={12}>
                <Card className="bg-info-subtle text-info border-0">
                    <Card.Body>
                        <Row className="gy-3">
                            <div className="col-sm">
                                <h5 className="card-title fs-17">Need More Sales?</h5>
                                <p className="mb-0">Upgrade to pro for added benefits.</p>
                            </div>
                            <div className="col-sm-auto">
                                <Button variant='info' type="button" className="btn-label rounded-pill"><i className="ri-markup-line label-icon align-middle rounded-pill fs-16 me-2"></i> Upgrade Account</Button>
                            </div>
                        </Row>
                        <div className="position-absolute top-0 start-50 mt-2 opacity-25">
                            <i className="bi bi-shop display-4"></i>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default MoreSales;