import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="footer">
                <Container fluid={true}>
                    <Row>
                        <Col sm={6}>
                            {new Date().getFullYear()} © Trootfindr
                        </Col>
                        <Col sm={6}>
                            
                        </Col>
                    </Row>
                </Container>
            </footer>
        </React.Fragment >
    );
}

export default Footer;