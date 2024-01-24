import React, { ReactElement, useEffect, useState } from 'react';
import Head from 'next/head';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Breadcrumb from '@common/Breadcrumb';
import { pricingPriceList, pricingPlans, pricingPackageplan, pricingPriceplan } from "@common/data";
import Link from 'next/link';
import Layout from '@common/Layout';

const Pricing = () => {
    const [price, setPrice] = useState<any>(true)
    const [plan, setPlan] = useState<any>("")

    useEffect(() => {
        setPlan(pricingPriceList[0])
    }, []);

    return (
        <React.Fragment>
            <Head>
                <title>Pricing | Hybrix - Admin & Dashboard Template</title>
            </Head>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb breadcrumb="Pages" breadcrumbItem="Pricing" />
                    <Row className="justify-content-center mt-4">
                        <Col lg={5}>
                            <div className="text-center mb-5">
                                <h4 className="fw-semibold fs-22">Plans & Pricing</h4>
                                <p className="text-muted mb-4 fs-15">Simple pricing. No hidden fees. Advanced features for you business.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="justify-content-center">
                        <Col xxl={8}>
                            <Row>
                                <Col lg={6}>
                                    <Card>
                                        <Card.Body>
                                            <ul className="nav nav-pills plan-nav nav-info mb-4 p-2 d-inline-flex bg-light rounded" id="pills-tab" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button className={price ? "nav-link fw-semibold active" : "nav-link fw-semibold"} id="month-tab" data-bs-toggle="pill" data-bs-target="#month" type="button" role="tab" aria-selected="true" onClick={() => setPrice(true)}>Monthly</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className={price ? "nav-link fw-semibold" : "nav-link fw-semibold active"} id="annual-tab" data-bs-toggle="pill" data-bs-target="#annual" type="button" role="tab" aria-selected="false" onClick={() => setPrice(false)}>Annually <span className="badge bg-success">25% Off</span></button>
                                                </li>
                                            </ul>
                                            <ul className="list-unstyled vstack gap-4 text-muted mb-0" id="plan-list">
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 text-success me-2">
                                                            <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <b>{plan.projects}</b> Projects
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 text-success me-2">
                                                            <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <b>{plan.customers}</b> Customers
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 text-success me-2">
                                                            <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            Scalable Bandwidth
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 text-success me-2">
                                                            <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <b>{plan.ftpLogin}</b> FTP Login
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 text-success me-2">
                                                            <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <b>{plan.support}</b> Support
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 text-success me-2">
                                                            <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <b>{plan.storage}</b> Storage
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 text-success me-2">
                                                            <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            Domain
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col lg={6}>
                                    <div className="vstack gap-3">
                                        {(pricingPriceList || []).map((item: any, key: number) => (
                                            <div className="form-check card-radio" key={key} onClick={() => setPlan(item)}>
                                                {item.checked ? <input id={"plans" + item.id} type="radio" value={item.plan} className="form-check-input plan-radio" name="plan-month" defaultChecked /> :
                                                    <input id={"plans" + item.id} type="radio" value={item.plan} className="form-check-input plan-radio" name="plan-month" />}
                                                <label className="form-check-label" htmlFor={"plans" + item.id}>
                                                    <span className="d-flex align-items-center">
                                                        <span className="flex-grow-1">
                                                            <span className={`fw-semibold d-block flex-grow-1 fs-15 text-uppercase ` + item.planClass}>{item.plan}</span>
                                                            <span className="badge text-bg-danger">{item.badge}</span>
                                                        </span>
                                                        {price ? <span className="month fw-semibold flex-shrink-0 fs-24 text-uppercase">{item.montlyPlane} <small className="fs-12 text-muted">/Month</small></span> :
                                                            <span className="annual fw-semibold flex-shrink-0 fs-24 text-uppercase"><small className="fs-16"><del>{item.delAnnuPlane}</del></small> {item.annuPlane} <small className="fs-12 text-muted">/Year</small></span>}
                                                    </span>
                                                </label>
                                            </div>))}
                                        <div>
                                            <Link href="#!" className="btn btn-primary w-100" scroll={false}>Get Started</Link>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className="justify-content-center mt-5">
                        <Col lg={5}>
                            <div className="text-center mb-5">
                                <h3 className="fw-semibold fs-22">Our plans for your Business</h3>
                                <p className="text-muted fs-15">Simple pricing. No hidden fees. Advanced features for you business.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        {(pricingPlans || []).map((item: any, key: number) => (<Col xxl={3} lg={6} key={key}>
                            <Card className={"pricing-box card-animate shadow-lg border-0 border-top border-2 rounded-0 rounded-bottom border-" + item.topBorderColor}>
                                {item.popular && <div className="p-1 bg-info bg-opacity-10 text-center text-info fw-semibold"><span><i className="ri-flashlight-fill align-bottom me-1"></i> Most Popular Choice</span></div>}
                                <Card.Body className="m-2 p-4">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="flex-grow-1">
                                            <h5 className="mb-0 fw-semibold">{item.plan}</h5>
                                        </div>
                                        <div className="ms-auto">
                                            <h2 className="mb-0">{item.price} <small className="fs-13 text-muted">/Month</small></h2>
                                        </div>
                                    </div>

                                    <p className="text-muted">{item.planDesc}</p>
                                    <ul className="list-unstyled vstack gap-3">
                                        <li>
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 text-success me-1">
                                                    <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <b>{item.projects}</b> Projects
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 text-success me-1">
                                                    <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <b>{item.customers}</b> Customers
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 text-success me-1">
                                                    <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div className="flex-grow-1">
                                                    Scalable Bandwidth
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 text-success me-1">
                                                    <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <b>{item.ftpLogin}</b> FTP Login
                                                </div>
                                            </div>
                                        </li>

                                        {item.support && <li>
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 text-success me-1">
                                                    <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <b>24/7</b> Support
                                                </div>
                                            </div>
                                        </li>}

                                        {item.storage && <li>
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 text-success me-1">
                                                    <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <b>{item.storage}</b> Storage
                                                </div>
                                            </div>
                                        </li>}

                                        {item.domian && <li>
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 text-success me-1">
                                                    <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div className="flex-grow-1">
                                                    Domain
                                                </div>
                                            </div>
                                        </li>}

                                    </ul>
                                    <div className="mt-3 pt-2">
                                        <Link href="#" className={item.currentplan ? "btn btn-danger disabled w-100" : "btn btn-info w-100"} scroll={false}>{item.currentplan ? "Your Current Plan" : "Change Plan"}</Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>))}
                    </Row>

                    <Row className="justify-content-center mt-5">
                        <Col xl={5}>
                            <div className="text-center mb-4 pb-4">
                                <h4 className="fw-semibold fs-22">Package for your plans</h4>
                                <p className="text-muted mb-4 fs-15">Simple pricing. No hidden fees. Advanced features for you business.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="justify-content-center">
                        <Col xxl={9}>
                            <Row className="gy-5 gy-lg-4">
                                {(pricingPackageplan || []).map((item: any, key: number) => (<Col xxl={4} lg={6} key={key}>
                                    <Card className="pricing-box">
                                        <div className="mt-n4">
                                            <div className="avatar-md mt-n3 mx-auto p-1 bg-card-custom border rounded-circle">
                                                <div className="avatar-title bg-light rounded-circle text-primary">
                                                    <i className={item.icon + " fs-20"}></i>
                                                </div>
                                            </div>
                                        </div>
                                        <Card.Body className="p-4 m-2 mt-0">
                                            <div>
                                                <h5 className="mb-1 fw-semibold">{item.plan}</h5>
                                                <p className="text-muted mb-0">{item.planfor}</p>
                                            </div>
                                            <div className="pt-4">
                                                <h2><sup><small>$</small></sup>{item.price}<span className="fs-13 text-muted">/Month</span></h2>
                                            </div>
                                            <hr className="my-4 text-muted border-dashed" />
                                            <div>
                                                <ul className="list-unstyled text-muted vstack gap-3">
                                                    <li>
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0 text-success me-1">
                                                                <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                {item.uptoProject}  <b>{item.projects}</b> Projects
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0 text-success me-1">
                                                                <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                {item.uptoCustomer} <b>{item.customers}</b> Customers
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0 text-success me-1">
                                                                <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                Scalable Bandwidth
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0 text-success me-1">
                                                                <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <b>{item.ftpLogin}</b> FTP Login
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex">
                                                            <div className={item.support ? "flex-shrink-0 text-success me-1" : "flex-shrink-0 text-danger me-1"}>
                                                                {item.support ? <i className="ri-checkbox-circle-fill fs-15 align-middle"></i> : <i className="ri-close-circle-fill fs-15 align-middle"></i>}
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <b>24/7</b> Support
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex">
                                                            <div className={item.storage ? "flex-shrink-0 text-success me-1" : "flex-shrink-0 text-danger me-1"}>
                                                                {item.storage ? <i className="ri-checkbox-circle-fill fs-15 align-middle"></i> : <i className="ri-close-circle-fill fs-15 align-middle"></i>}
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <b>Unlimited</b> Storage
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex">
                                                            <div className={item.domain ? "flex-shrink-0 text-success me-1" : "flex-shrink-0 text-danger me-1"}>
                                                                {item.domain ? <i className="ri-checkbox-circle-fill fs-15 align-middle"></i> : <i className="ri-close-circle-fill fs-15 align-middle"></i>}
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                Domain
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="mt-4">
                                                    <Link href="#" className={"btn btn-" + item.btnColor + " w-100"} scroll={false}>{item.btntext}</Link>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>))}
                            </Row>
                        </Col>
                    </Row>


                    <Row className="justify-content-center mt-5">
                        <Col xl={4}>
                            <div className="text-center mb-4 pb-2">
                                <h4 className="fw-semibold fs-22">Simple Pricing Plan</h4>
                                <p className="text-muted mb-4 fs-15">Simple pricing. No hidden fees. Advanced features for you business.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {(pricingPriceplan || []).map((item: any, key: number) => (<Col xxl={4} lg={6} key={key}>
                            <Card className={item.isRibbon ? "ribbon-box ribbon-fill right bg-opacity-10 border-0 bg-" + item.bgColor : "bg-opacity-10 border-0 bg-" + item.bgColor}>
                                {item.isRibbon && <div className="ribbon ribbon-danger shadow-none">New</div>}
                                <Card.Body className="p-4 m-2">
                                    <Row className="mb-3">
                                        <Col lg={6}>
                                            <div>
                                                <h5 className="mb-1">{item.plan}</h5>
                                                <p className="text-muted">{item.planfor}</p>
                                            </div>

                                            <div className="py-4">
                                                <h2><sup><small>$</small></sup>{item.price} <span className="fs-13 text-muted"> /Per month</span></h2>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <ul className="list-unstyled vstack gap-3 mb-0">
                                                <li>Users: <span className={"text-" + item.color + " fw-semibold"}>{item.users}</span></li>
                                                <li>Storage: <span className={"text-" + item.color + " fw-semibold"}>{item.storage}</span></li>
                                                <li>Domain: <span className={"text-" + item.color + " fw-semibold"}>{item.domain}</span></li>
                                                <li>Support: <span className={"text-" + item.color + " fw-semibold"}>{item.support}</span></li>
                                            </ul>
                                        </Col>
                                    </Row>
                                    <div>
                                        <Link href="#!" className={"w-100 btn btn-" + item.btnColor} scroll={false}>Buy Now</Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>))}
                    </Row>
                </Container>
            </div>
        </React.Fragment >
    );
}

Pricing.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

export default Pricing;