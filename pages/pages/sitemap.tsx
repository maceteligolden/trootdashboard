import React, { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Breadcrumb from '@common/Breadcrumb';
import Layout from '@common/Layout';

const Sitemap = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Sitemap | Hybrix - Admin & Dashboard Template</title>
            </Head>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb breadcrumb="Pages" breadcrumbItem="Sitemap" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Body>
                                    <Row className="g-4">
                                        <Col lg={6}>
                                            <h5 className="fs-14">Example 1</h5>
                                            <p className="text-muted mb-4">Use <code>treemap-color="**"</code> attribute with <code>.treemap-elem</code> class for diffrent color icon treemap.</p>

                                            <ul className="treemap-elem">
                                                <li>
                                                    <input type="checkbox" id="check01" defaultChecked />
                                                    <label className="elem-label" htmlFor="check01">Admin</label>
                                                    <ul>
                                                        <li><span className="elem-label">Dashboard</span></li>
                                                        <li>
                                                            <input type="checkbox" id="check02" defaultChecked />
                                                            <label htmlFor="check02" className="elem-label">Apps</label>
                                                            <ul>
                                                                <li><span className="elem-label">Calender</span></li>
                                                                <li><span className="elem-label">Chat</span></li>
                                                                <li><span className="elem-label">Email</span></li>
                                                            </ul>
                                                        </li>
                                                        <li><span className="elem-label">Widgets</span></li>
                                                        <li>
                                                            <input type="checkbox" id="check03" />
                                                            <label htmlFor="check03" className="elem-label">Pages</label>
                                                            <ul>
                                                                <li><span className="elem-label">Sign in</span></li>
                                                                <li><span className="elem-label">Sign up</span></li>
                                                                <li><span className="elem-label">Forget password</span></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" id="check04" defaultChecked />
                                                            <label htmlFor="check04" className="elem-label">Components</label>
                                                            <ul>
                                                                <li>
                                                                    <input type="checkbox" id="check05" defaultChecked />
                                                                    <label htmlFor="check05" className="elem-label">UI Element</label>
                                                                    <ul>
                                                                        <li><span className="elem-label">Alerts</span></li>
                                                                        <li><span className="elem-label">Buttons</span></li>
                                                                        <li><span className="elem-label">Colors</span></li>
                                                                        <li>
                                                                            <input type="checkbox" id="check06" defaultChecked />
                                                                            <label htmlFor="check06" className="elem-label">Forms</label>
                                                                            <ul>
                                                                                <li><span className="elem-label">Basic</span></li>
                                                                                <li><span className="elem-label">Advanced</span></li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li><span className="elem-label">Advance UI</span></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </Col>
                                        <Col lg={6}>
                                            <h5 className="fs-14">Example 2 (Arrow icon)</h5>
                                            <p className="text-muted mb-4">Use <code>treemap-icon="arrow"</code> attribute with <code>.treemap-elem</code> class for arrow icon treemap.</p>
                                            <ul className="treemap-elem" treemap-icon="arrow" treemap-color="light">
                                                <li>
                                                    <input type="checkbox" id="check11" defaultChecked />
                                                    <label className="elem-label" htmlFor="check11">Admin</label>
                                                    <ul>
                                                        <li><span className="elem-label">Dashboard</span></li>
                                                        <li>
                                                            <input type="checkbox" id="check12" defaultChecked />
                                                            <label htmlFor="check12" className="elem-label">Apps</label>
                                                            <ul>
                                                                <li><span className="elem-label">Calender</span></li>
                                                                <li><span className="elem-label">Chat</span></li>
                                                                <li><span className="elem-label">Email</span></li>
                                                            </ul>
                                                        </li>
                                                        <li><span className="elem-label">Widgets</span></li>
                                                        <li>
                                                            <input type="checkbox" id="check13" />
                                                            <label htmlFor="check13" className="elem-label">Pages</label>
                                                            <ul>
                                                                <li><span className="elem-label">Sign in</span></li>
                                                                <li><span className="elem-label">Sign up</span></li>
                                                                <li><span className="elem-label">Forget password</span></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" id="check14" defaultChecked />
                                                            <label htmlFor="check14" className="elem-label">Components</label>
                                                            <ul>
                                                                <li>
                                                                    <input type="checkbox" id="check15" defaultChecked />
                                                                    <label htmlFor="check15" className="elem-label">UI Element</label>
                                                                    <ul>
                                                                        <li><span className="elem-label">Alerts</span></li>
                                                                        <li><span className="elem-label">Buttons</span></li>
                                                                        <li><span className="elem-label">Colors</span></li>
                                                                        <li>
                                                                            <input type="checkbox" id="check16" defaultChecked />
                                                                            <label htmlFor="check16" className="elem-label">Forms</label>
                                                                            <ul>
                                                                                <li><span className="elem-label">Basic</span></li>
                                                                                <li><span className="elem-label">Advanced</span></li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li><span className="elem-label">Advance UI</span></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>


                                            </ul>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Responsive Sitemap</h4>
                                </Card.Header>
                                <Card.Body>
                                    <div className="sitemap-content">
                                        <figure className="sitemap-horizontal">
                                            <ul className="administration">
                                                <li>
                                                    <ul className="director">
                                                        <li>
                                                            <Link scroll={false} href="#" className="fw-semibold bg-primary-subtle text-primary"><span className="">Hybrix Admin</span></Link>
                                                            <ul className="subdirector">
                                                                <li><Link scroll={false} href="#" className="fw-semibold"><span className="text-reset">Contact Us</span></Link></li>
                                                            </ul>
                                                            <ul className="departments">
                                                                <li><Link scroll={false} href="#" className="fw-semibold"><span className="text-reset">Main Pages</span></Link></li>

                                                                <li className="department">
                                                                    <Link scroll={false} href="#" className="fw-semibold bg-success-subtle text-success"><span className="">Account Management</span></Link>
                                                                    <ul>
                                                                        <li><Link scroll={false} href="#"><span>Sign Up</span></Link></li>
                                                                        <li><Link scroll={false} href="#"><span>Login</span></Link></li>
                                                                        <li><Link scroll={false} href="#"><span>Profile Settings</span></Link></li>
                                                                        <li><Link scroll={false} href="#"><span>Modify Reservation</span></Link></li>
                                                                        <li><Link scroll={false} href="#"><span>Cancel Reservation</span></Link></li>
                                                                        <li><Link scroll={false} href="#"><span>Write Reviews</span></Link></li>
                                                                    </ul>
                                                                </li>
                                                                <li className="department">
                                                                    <Link scroll={false} href="#" className="fw-semibold bg-success-subtle text-success"><span className="">About Us</span></Link>
                                                                    <ul>
                                                                        <li><Link scroll={false} href="#"><span>Overview</span></Link></li>
                                                                        <li><Link scroll={false} href="#"><span>Connect Via Social Media</span></Link></li>
                                                                        <li><Link scroll={false} href="#"><span>Careers</span></Link></li>
                                                                        <li><Link scroll={false} href="#"><span>Team Members</span></Link></li>
                                                                        <li><Link scroll={false} href="#"><span>Policies</span></Link></li>
                                                                    </ul>
                                                                </li>
                                                                <li className="department">
                                                                    <Link scroll={false} href="#" className="fw-semibold bg-success-subtle text-success"><span className="">Book a Trip</span></Link>
                                                                    <ul>
                                                                        <li><Link scroll={false} href="#"><span>Travel Details</span></Link></li>
                                                                        <li><Link scroll={false} href="#"><span>Reservation Process</span></Link></li>
                                                                        <li><Link scroll={false} href="#"><span>Payment Option</span></Link></li>
                                                                        <li><Link scroll={false} href="#"><span>Comfirmation</span></Link></li>
                                                                    </ul>
                                                                </li>
                                                                <li className="department">
                                                                    <Link scroll={false} href="#" className="fw-semibold bg-success-subtle text-success"><span className="">Destination</span></Link>
                                                                    <ul>
                                                                        <li><Link scroll={false} href="#"><span>Architecture</span></Link></li>
                                                                        <li><Link scroll={false} href="#"><span>Art</span></Link></li>
                                                                        <li><Link scroll={false} href="#"><span>Entertainment</span></Link></li>
                                                                        <li>
                                                                            <Link scroll={false} href="#"><span>History</span></Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link scroll={false} href="#"><span>Science</span></Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link scroll={false} href="#"><span>Sports</span></Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link scroll={false} href="#"><span>Music</span></Link>
                                                                        </li>
                                                                        <li><Link scroll={false} href="#"><span>Tracking Camp</span></Link></li>
                                                                    </ul>
                                                                </li>
                                                                <li className="department">
                                                                    <Link scroll={false} href="#" className="fw-semibold bg-success-subtle text-success"><span className="">Travel Tips</span></Link>
                                                                    <ul>
                                                                        <li><Link scroll={false} href="#"><span>General Travel</span></Link></li>
                                                                        <li><Link scroll={false} href="#"><span>Helpth Concerns</span></Link></li>
                                                                        <li><Link scroll={false} href="#"><span>Safety Measures</span></Link></li>
                                                                        <li>
                                                                            <Link scroll={false} href="#"><span>FAQ's</span></Link>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </figure>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Horizontal</h4>
                                </Card.Header>
                                <Card.Body>
                                    <div className="hori-sitemap">
                                        <ul className="list-unstyled mb-0">
                                            <li className="p-0 parent-title"><Link scroll={false} href="#" className="fw-semibold fs-14">My Account</Link></li>
                                            <li>
                                                <ul className="list-unstyled second-list row g-0 pt-0">
                                                    <li className="col-sm-3">
                                                        <Link scroll={false} href="#" className="fw-semibold sub-title">About Us</Link>
                                                        <ul className="list-unstyled row g-0 second-list">
                                                            <li className="col-sm-6">
                                                                <Link scroll={false} href="#">Overview</Link>
                                                            </li>
                                                            <li className="col-sm-6">
                                                                <Link scroll={false} href="#">History</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="col-sm-3">
                                                        <Link scroll={false} href="#" className="fw-semibold">My self-care Plan</Link>
                                                        <ul className="list-unstyled second-list pt-0">
                                                            <li>
                                                                <div>
                                                                    <Link scroll={false} href="#">Basic</Link>
                                                                    <Link scroll={false} href="#">Early Physiotherapy</Link>
                                                                    <Link scroll={false} href="#">Intermediate Physiotherapy</Link>
                                                                    <Link scroll={false} href="#">Return to Normal Activity</Link>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="col-sm-3">
                                                        <Link scroll={false} href="#" className="fw-semibold sub-title">Support Us</Link>
                                                        <ul className="list-unstyled row g-0 sub-list">
                                                            <li className="col-sm-6">
                                                                <Link scroll={false} href="#">Contact Us</Link>
                                                            </li>
                                                            <li className="col-sm-6">
                                                                <Link scroll={false} href="#">Customer Services</Link>
                                                                <ul className="list-unstyled second-list">
                                                                    <li>
                                                                        <div>
                                                                            <Link scroll={false} href="#">Chat With Us</Link>
                                                                            <Link scroll={false} href="#">Connect Information</Link>
                                                                            <Link scroll={false} href="#">FAQ'S</Link>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="col-sm-3">
                                                        <Link scroll={false} href="#" className="fw-semibold">Terms & Conditions</Link>
                                                    </li>
                                                </ul>
                                            </li>

                                        </ul>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Vertical</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col sm={6}>
                                            <div className="verti-sitemap">
                                                <ul className="list-unstyled mb-0">
                                                    <li className="p-0 parent-title">
                                                        <Link scroll={false} href="#" className="fw-medium fs-14">Nancy Martino - Project Director</Link>
                                                    </li>
                                                    <li>
                                                        <div className="first-list">
                                                            <div className="list-wrap">
                                                                <Link scroll={false} href="#" className="fw-medium text-primary">Erica Kernan - Team Leader</Link>
                                                            </div>
                                                            <ul className="second-list list-unstyled">
                                                                <li>
                                                                    <Link scroll={false} href="#">Jason McQuaid - Member</Link>
                                                                </li>
                                                                <li>
                                                                    <Link scroll={false} href="#">Elwood Arter - Member</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="first-list">
                                                            <div className="list-wrap">
                                                                <Link scroll={false} href="#" className="fw-medium text-primary">Mary Jones - Project Manager</Link>
                                                            </div>
                                                            <ul className="second-list list-unstyled">
                                                                <li><Link scroll={false} href="#">Jordyn Jones - Designer</Link></li>
                                                                <li><Link scroll={false} href="#">Ashlee Haney - Developer</Link></li>
                                                                <li><Link scroll={false} href="#">Rashad Charles - BackEnd Developer</Link></li>
                                                                <li><Link scroll={false} href="#">Walter Newman - Frontend Developer</Link></li>
                                                                <li><Link scroll={false} href="#">Adam Moss - Designer</Link></li>
                                                            </ul>
                                                        </div>
                                                        <div className="first-list">
                                                            <div className="list-wrap">
                                                                <Link scroll={false} href="#" className="fw-medium text-primary">Tilly Kent - Executive Manager</Link>
                                                            </div>
                                                            <ul className="second-list list-unstyled">
                                                                <li>
                                                                    <Link scroll={false} href="#">Tyler Porter - Account Executive</Link>
                                                                </li>
                                                                <li>
                                                                    <Link scroll={false} href="#">Alicia Thompson - Sales Executive</Link>
                                                                    <ul className="third-list list-unstyled">
                                                                        <li><Link scroll={false} href="#">Jack Coates - Member</Link></li>
                                                                        <li><Link scroll={false} href="#">Owen Jarvis - Member</Link></li>
                                                                        <li><Link scroll={false} href="#">Ashlee Haney - Member</Link></li>
                                                                        <li><Link scroll={false} href="#">Archie Cook - Member</Link></li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="first-list">
                                                            <div className="list-wrap">
                                                                <Link scroll={false} href="#" className="fw-medium text-primary">Rachel Rose - HR</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>

                                        <Col sm={6}>
                                            <div className="verti-sitemap">
                                                <ul className="list-unstyled mb-0">
                                                    <li className="p-0 parent-title"><Link scroll={false} href="#" className="fw-medium fs-14">Hybrix</Link></li>
                                                    <li>
                                                        <div className="first-list">
                                                            <div className="list-wrap">
                                                                <Link scroll={false} href="#" className="fw-medium text-primary"><i className="ri-airplay-line me-1 align-bottom"></i> Dashboards</Link>
                                                            </div>
                                                            <ul className="second-list list-unstyled">
                                                                <li>
                                                                    <Link scroll={false} href="#">Analytics</Link>
                                                                </li>
                                                                <li>
                                                                    <Link scroll={false} href="#">CRM</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="first-list">
                                                            <div className="list-wrap">
                                                                <Link scroll={false} href="#" className="fw-medium text-primary"><i className="ri-pencil-ruler-2-line me-1 align-bottom"></i> App Pages</Link>
                                                            </div>
                                                            <ul className="second-list list-unstyled">
                                                                <li><Link scroll={false} href="#">Calender</Link></li>
                                                                <li><Link scroll={false} href="#">Chat</Link></li>
                                                                <li><Link scroll={false} href="#">Email</Link></li>
                                                                <li><Link scroll={false} href="#">Ecommerce</Link></li>
                                                                <li><Link scroll={false} href="#">Projects</Link></li>
                                                                <li><Link scroll={false} href="#">Tasks</Link></li>
                                                            </ul>
                                                        </div>
                                                        <div className="first-list">
                                                            <div className="list-wrap">
                                                                <Link scroll={false} href="#" className="fw-medium text-primary"><i className="ri-file-list-3-line me-1 align-bottom"></i> Pages</Link>
                                                            </div>
                                                        </div>
                                                        <div className="first-list">
                                                            <div className="list-wrap">
                                                                <Link scroll={false} href="#" className="fw-medium text-primary"><i className="ri-stack-line me-1 align-bottom"></i> Components</Link>
                                                            </div>
                                                            <ul className="second-list list-unstyled">
                                                                <li>
                                                                    <Link scroll={false} href="#">Base UI</Link>
                                                                </li>
                                                                <li>
                                                                    <Link scroll={false} href="#">Advance UI</Link>
                                                                    <ul className="third-list list-unstyled">
                                                                        <li><Link scroll={false} href="#">Sweet Alerts</Link></li>
                                                                        <li><Link scroll={false} href="#">Range Slider</Link></li>
                                                                        <li><Link scroll={false} href="#">Nestable List</Link></li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment >
    );
};

Sitemap.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    );
};

export default Sitemap;