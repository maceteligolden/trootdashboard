import React, { ReactElement } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import { Accordion, Button, Card, Col, Container, Row } from 'react-bootstrap';

import faqImage from "@assets/images/faq.png"
import Layout from '@common/Layout';

const Faqs = () => {
    return (
        <React.Fragment>
            <Head>
                <title>FAQs | Hybrix - Admin & Dashboard Template</title>
            </Head>
            <div className="page-content">
                <Container fluid={true}>
                    <Row className="mt-n1">
                        <Col lg={12}>
                            <Card className="rounded-0 bg-light mx-n4 mt-n4 border-0 shadow-none border-top">
                                <Card.Body className="px-4 py-5">
                                    <Row className="justify-content-center">
                                        <Col xxl={5} className="align-self-center">
                                            <div className="text-center py-4">
                                                <h2 className="mb-3">Frequently Asked Questions</h2>
                                                <p className="text-muted fs-15 mb-0">If you can not find answer to your question in our FAQ, you can always contact us or email us. We will answer you shortly!</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row className="gy-4">
                        <Col xxl={4} lg={6}>
                            <div>
                                <div className="mb-3">
                                    <h5 className="fs-16 mb-0 fw-semibold">General Questions</h5>
                                </div>
                                <Accordion className="accordion-border-box" defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>What are FAQ questions?</Accordion.Header>
                                        <Accordion.Body>
                                            An FAQ page <b>(short for Frequently Asked Question page)</b> is a part of your website that provides answers to common questions, assuages concerns, and overcomes objections. It's a space where customers away from your sales-focused landing pages and homepage.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>What is FAQ process?</Accordion.Header>
                                        <Accordion.Body>
                                            FAQ stands for Frequently Asked Questions. It's <b>your opportunity to communicate with the most important visitors to your website</b> – those who have begun the decision-making process about whether to do business with you can't fit elsewhere on their website.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>What is the purpose of FAQ?</Accordion.Header>
                                        <Accordion.Body>
                                            The purpose of a FAQ is generally to provide information on frequent questions or concerns; however, the format is a useful means of organizing information, and text consisting of questions and their answers may thus be called a FAQ regardless.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>What is an online FAQ?</Accordion.Header>
                                        <Accordion.Body>
                                            FAQs stand for frequently asked questions. It is one of the many crucial pages of your website. It gives your customers answers to recurring and common questions and addresses their concerns public product documentation that is released at the same time.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </Col>

                        <Col xxl={4} lg={6}>
                            <div>
                                <div className="mb-3">
                                    <h5 className="fs-16 mb-0 fw-semibold">Manage Account</h5>
                                </div>
                                <Accordion className="accordion-border-box" defaultActiveKey="1">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>What is account management process?</Accordion.Header>
                                        <Accordion.Body>
                                            If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple their most common words.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Why is account management important?</Accordion.Header>
                                        <Accordion.Body>
                                            The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>What is account manager role?</Accordion.Header>
                                        <Accordion.Body>
                                            he wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>What is a key account strategy?</Accordion.Header>
                                        <Accordion.Body>
                                            Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis aliquam ultrices mauris.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </Col>

                        <Col xxl={4} lg={6} className="align-self-center">
                            <div className="text-center">
                                <div className="mb-4">
                                    <Image src={faqImage} alt="" height="200" />
                                </div>
                                <h4>Any Questions ?</h4>
                                <p className="text-muted mb-4">You can ask anything you want to know about Feedback.</p>
                                <div className="hstack flex-wrap gap-2 justify-content-center">
                                    <Button variant='primary' type="button" className="btn-label rounded-pill"><i className="ri-mail-line label-icon align-middle rounded-pill fs-16"></i> Email Us</Button>
                                    <Button variant='info' type="button" className="btn-label rounded-pill"><i className="ri-twitter-line label-icon align-middle rounded-pill fs-16"></i> Send Us Tweet</Button>
                                </div>
                            </div>
                        </Col>

                        <Col xxl={12} lg={6}>
                            <div>
                                <div className="mb-3">
                                    <h5 className="fs-16 mb-0 fw-semibold">Privacy &amp; Security</h5>
                                </div>

                                <Accordion className="accordion-border-box" defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Which is important privacy or security?</Accordion.Header>
                                        <Accordion.Body>
                                        If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple their most common words.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>What is security and privacy?</Accordion.Header>
                                        <Accordion.Body>
                                        The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>How can I protect my privacy?</Accordion.Header>
                                        <Accordion.Body>
                                        He wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Why is privacy so important?</Accordion.Header>
                                        <Accordion.Body>
                                        Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis aliquam ultrices mauris.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment >
    );
}

Faqs.getLayout = (page: ReactElement) => {
    return (
      <Layout>
        {page}
      </Layout>
    )
};

export default Faqs;