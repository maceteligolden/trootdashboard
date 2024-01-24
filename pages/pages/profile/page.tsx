import React, { ReactElement } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Button, Card, Col, Container, Dropdown, Nav, Row, Tab } from 'react-bootstrap';
import { simplePageProjectData } from '@common/data';

//import Images
import avatar1 from "@assets/images/users/avatar-1.jpg";
import avatar2 from "@assets/images/users/avatar-2.jpg";
import avatar3 from "@assets/images/users/avatar-3.jpg";
import avatar4 from "@assets/images/users/avatar-4.jpg";
import avatar5 from "@assets/images/users/avatar-5.jpg";
import avatar6 from "@assets/images/users/avatar-6.jpg";
import avatar8 from "@assets/images/users/avatar-8.jpg";
import avatar9 from "@assets/images/users/avatar-9.jpg";

import smallImg3 from "@assets/images/small/img-3.jpg"
import smallImg5 from "@assets/images/small/img-5.jpg"
import smallImg7 from "@assets/images/small/img-7.jpg"
import smallImg9 from "@assets/images/small/img-9.jpg"

import profilebgImg from "@assets/images/profile-bg.jpg"
import SimpleBar from 'simplebar-react';
import Link from 'next/link';
import Layout from '@common/Layout';

const Status = (props: any) => {
    switch (props.element) {
        case "New":
            return (<div className="badge text-info bg-info-subtle fs-10">{props.element}</div>)
        case "Progress":
            return (<div className="badge text-primary  bg-primary-subtle fs-10">{props.element}</div>)
        case "Inprogress":
            return (<div className="badge badge-soft-warning fs-10">{props.element}</div>)
        case "Completed":
            return (<div className="badge text-success bg-success-subtle fs-10">{props.element}</div>)
        default:
            return (<div className="badge text-success bg-success-subtle fs-10">{props.element}</div>)
    }
}

const SimplePage = () => {

    const favouriteBtn = (ele: any) => {
        let btn = ele.target.closest("button")
        if (btn.classList.contains("active")) {
            btn.classList.remove("active")
        } else {
            btn.classList.add("active")
        }
    }

    const connectionsData = [
        { id: 1, img: avatar3, name: "Esther James", designation: "475 Connections", isFollow: true },
        { id: 2, img: avatar6, name: "Jacqueline Steve", designation: "UI/UX Designer", isFollow: false },
        { id: 3, img: avatar2, name: "George Whalen", designation: "Backend Developer", isFollow: false },
        { id: 4, img: avatar8, name: "George Whalen", designation: "Backend Developer", isFollow: false },
        { id: 5, img: avatar9, name: "George Whalen", designation: "Backend Developer", isFollow: false },
    ]

    return (
        <React.Fragment>
            <Head>
                <title>Profile | Hybrix - Admin & Dashboard Template</title>
            </Head>
            <div className="page-content">
                <Container fluid={true}>
                    <Tab.Container defaultActiveKey="overview">
                        <Row>
                            <Col lg={12}>
                                <Card className="overflow-hidden">
                                    <div className="rounded profile-basic position-relative" style={{ backgroundImage: `url(${profilebgImg.src})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                                        <div className="bg-overlay bg-primary"></div>
                                    </div>
                                    <Card.Body>
                                        <div className="position-relative">
                                            <div className="mt-n5">
                                                <Image src={avatar2} alt="" className="avatar-lg rounded-circle p-1 bg-card-custom mt-n4" />
                                            </div>
                                        </div>
                                        <div className="pt-3">
                                            <Row className="justify-content-between gy-4">
                                                <Col xl={5} lg={5}>
                                                    <h5 className="fs-17">Edward Diana</h5>
                                                    <div className="hstack gap-1 mb-3 text-muted">
                                                        <div className="me-2"><i className="ri-map-pin-user-line me-1 fs-16 align-middle"></i>Phoenix, USA</div>
                                                        <div>
                                                            <i className="ri-building-line me-1 fs-16 align-middle"></i>Themesbrand
                                                        </div>
                                                    </div>
                                                    <p>Product visual designer, expert in UI design</p>

                                                    <div className="hstack gap-2">
                                                        <Button variant='success' type="button" className="custom-toggle" onClick={(e) => favouriteBtn(e)}>
                                                            <span className="icon-on"><i className="ri-user-add-line align-bottom me-1"></i> Connect</span>
                                                            <span className="icon-off"><i className="ri-check-fill align-bottom me-1"></i> Unconnect</span>
                                                        </Button>
                                                        <Button variant='soft-secondary' type="button" className="btn-icon"><i className="bi bi-chat-left-text"></i></Button>

                                                        <Dropdown>
                                                            <Dropdown.Toggle as="a" className="btn btn-soft-danger btn-icon arrow-none">
                                                                <i className="bi bi-three-dots-vertical"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul">
                                                                <li><Dropdown.Item href="#">Action</Dropdown.Item></li>
                                                                <li><Dropdown.Item href="#">Another action</Dropdown.Item></li>
                                                                <li><Dropdown.Item href="#">Something else here</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </Col>
                                                <Col xl={3} lg={5}>
                                                    <div>
                                                        <p className="text-muted fw-medium mb-2">Language Knows</p>
                                                        <ul className="list-inline mb-4">
                                                            <li className="list-inline-item">
                                                                <span className="badge text-info bg-info-subtle">English</span>
                                                            </li>{" "}
                                                            <li className="list-inline-item">
                                                                <span className="badge text-info bg-info-subtle">Russian</span>
                                                            </li>{" "}
                                                            <li className="list-inline-item">
                                                                <span className="badge text-info bg-info-subtle">Chinese</span>
                                                            </li>{" "}
                                                        </ul>
                                                    </div>

                                                    <div>
                                                        <p className="text-muted fw-medium mb-2">Featured Skills</p>
                                                        <ul className="d-flex gap-2 flex-wrap list-unstyled mb-0">
                                                            <li>
                                                                <span className="badge text-dark bg-dark-subtle">Business Marketing</span>
                                                            </li>
                                                            <li>
                                                                <span className="badge text-dark bg-dark-subtle">Google Ads Management</span>
                                                            </li>
                                                            <li>
                                                                <span className="badge text-dark bg-dark-subtle">Social Ads Management</span>
                                                            </li>
                                                            <li>
                                                                <span className="badge text-dark bg-dark-subtle">Content SEO</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <Row className="mt-2 mt-lg-4 gy-3">
                                            <Col lg className="order-1">
                                                <Nav as="ul" variant="pills" className="nav-pills animation-nav gap-2 gap-lg-3 flex-grow-1">
                                                    <Nav.Item as="li">
                                                        <Nav.Link eventKey="overview"><i className="ri-airplay-fill d-inline-block d-md-none"></i> <span className="d-none d-md-inline-block">Overview</span></Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item as="li">
                                                        <Nav.Link eventKey="activities"><i className="ri-list-unordered d-inline-block d-md-none"></i> <span className="d-none d-md-inline-block">Activities</span></Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item as="li">
                                                        <Nav.Link eventKey="projects"> <i className="ri-price-tag-line d-inline-block d-md-none"></i> <span className="d-none d-md-inline-block">Projects</span> </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item as="li">
                                                        <Nav.Link eventKey="friends"><i className="ri-folder-4-line d-inline-block d-md-none"></i> <span className="d-none d-md-inline-block">Friends</span></Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item as="li">
                                                        <Nav.Link eventKey="documents"><i className="ri-folder-4-line d-inline-block d-md-none"></i> <span className="d-none d-md-inline-block">Documents</span></Nav.Link>
                                                    </Nav.Item>
                                                </Nav>

                                            </Col>
                                            <Col lg={{ order: 2, span: "auto" }}>
                                                <Link href="/pages/profile/settings" className="btn btn-secondary"><i className="ri-edit-box-line align-bottom"></i> Edit Profile</Link>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={12}>
                                <Tab.Content className="text-muted">
                                    <Tab.Pane eventKey="overview" title="overview" className="fade">
                                        <Row>
                                            <Col xxl={3}>
                                                <Card>
                                                    <Card.Body className="p-2">
                                                        <Card.Body className="bg-primary rounded-3 pb-3">
                                                            <div className="mb-4 pb-1">
                                                                <h6 className="fs-16 text-white">Renew Premium License</h6>
                                                                <p className="text-white-75 mb-0">If you purchased an Annual plan and if you've not canceled the automatic renewal, our license management system automatically</p>
                                                            </div>
                                                        </Card.Body>
                                                        <Card.Body className="pt-4">
                                                            <div className="mt-n5 p-3 rounded shadow card border-0 mb-0">
                                                                <div className="d-flex align-items-center gap-3">
                                                                    <h4 className="mb-0">$351</h4>
                                                                    <div>
                                                                        <span className="badge text-success bg-success-subtle">25% Discount</span>
                                                                        <p className="text-muted mb-0 mt-2">Exclusively for our Premium members</p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="mt-4 hstack gap-2">
                                                                <Button variant='soft-secondary' className="w-100">Renew Plan</Button>
                                                                <Button variant='soft-danger' className="w-100">View All Plan</Button>
                                                            </div>
                                                        </Card.Body>
                                                    </Card.Body>
                                                </Card>

                                                <Card>
                                                    <Card.Body>
                                                        <h5 className="card-title mb-5">Complete Your Profile</h5>
                                                        <div className="progress animated-progress custom-progress progress-label">
                                                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: "67%" }}>
                                                                <div className="label">67%</div>
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Card>

                                                <Card>
                                                    <Card.Body>
                                                        <h5 className="card-title mb-4">Portfolio</h5>
                                                        <div className="d-flex flex-wrap gap-2">
                                                            <div>
                                                                <Link scroll={false} href="#" className="avatar-xs d-block">
                                                                    <span className="avatar-title rounded-circle fs-16 bg-dark text-light">
                                                                        <i className="ri-github-fill"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                            <div>
                                                                <Link scroll={false} href="#" className="avatar-xs d-block">
                                                                    <span className="avatar-title rounded-circle fs-16 bg-primary">
                                                                        <i className="ri-global-fill"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                            <div>
                                                                <Link scroll={false} href="#" className="avatar-xs d-block">
                                                                    <span className="avatar-title rounded-circle fs-16 bg-success">
                                                                        <i className="ri-dribbble-fill"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                            <div>
                                                                <Link scroll={false} href="#" className="avatar-xs d-block">
                                                                    <span className="avatar-title rounded-circle fs-16 bg-danger">
                                                                        <i className="ri-pinterest-fill"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Card>

                                                <Card>
                                                    <Card.Body>
                                                        <h5 className="card-title mb-4">Skills</h5>
                                                        <div className="d-flex flex-wrap gap-2 fs-15">
                                                            <Link href="#" className="badge text-primary  bg-primary-subtle" scroll={false}>Photoshop</Link>
                                                            <Link href="#" className="badge text-primary  bg-primary-subtle" scroll={false}>illustrator</Link>
                                                            <Link href="#" className="badge text-primary  bg-primary-subtle" scroll={false}>HTML</Link>
                                                            <Link href="#" className="badge text-primary  bg-primary-subtle" scroll={false}>CSS</Link>
                                                            <Link href="#" className="badge text-primary  bg-primary-subtle" scroll={false}>Javascript</Link>
                                                            <Link href="#" className="badge text-primary  bg-primary-subtle" scroll={false}>Php</Link>
                                                            <Link href="#" className="badge text-primary  bg-primary-subtle" scroll={false}>Python</Link>
                                                        </div>
                                                    </Card.Body>
                                                </Card>

                                                <Card>
                                                    <Card.Body>
                                                        <div className="d-flex align-items-center mb-4">
                                                            <div className="flex-grow-1">
                                                                <h5 className="card-title mb-0">Suggestions</h5>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <Dropdown role="button" drop="start">
                                                                    <Dropdown.Toggle as="a" className="arrow-none">
                                                                        <i className="ri-more-2-fill fs-14"></i>
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                                                        <li><Dropdown.Item href="#">View</Dropdown.Item></li>
                                                                        <li><Dropdown.Item href="#">Edit</Dropdown.Item></li>
                                                                        <li><Dropdown.Item href="#">Delete</Dropdown.Item></li>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="d-flex align-items-center py-3">
                                                                <div className="avatar-xs flex-shrink-0 me-3">
                                                                    <Image src={avatar3} alt="" className="img-fluid rounded-circle" />
                                                                </div>
                                                                <div className="flex-grow-1">
                                                                    <div>
                                                                        <h5 className="fs-14 mb-1">Esther James</h5>
                                                                        <p className="fs-13 text-muted mb-0">Frontend Developer</p>
                                                                    </div>
                                                                </div>
                                                                <div className="flex-shrink-0 ms-2">
                                                                    <Button variant='outline-success' size='sm' type="button"><i className="ri-user-add-line align-middle"></i></Button>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-center py-3">
                                                                <div className="avatar-xs flex-shrink-0 me-3">
                                                                    <Image src={avatar4} alt="" className="img-fluid rounded-circle" />
                                                                </div>
                                                                <div className="flex-grow-1">
                                                                    <div>
                                                                        <h5 className="fs-14 mb-1">Jacqueline Steve</h5>
                                                                        <p className="fs-13 text-muted mb-0">UI/UX Designer</p>
                                                                    </div>
                                                                </div>
                                                                <div className="flex-shrink-0 ms-2">
                                                                    <Button variant='outline-success' size='sm' type="button"><i className="ri-user-add-line align-middle"></i></Button>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-center py-3">
                                                                <div className="avatar-xs flex-shrink-0 me-3">
                                                                    <Image src={avatar5} alt="" className="img-fluid rounded-circle" />
                                                                </div>
                                                                <div className="flex-grow-1">
                                                                    <div>
                                                                        <h5 className="fs-14 mb-1">George Whalen</h5>
                                                                        <p className="fs-13 text-muted mb-0">Backend Developer</p>
                                                                    </div>
                                                                </div>
                                                                <div className="flex-shrink-0 ms-2">
                                                                    <Button variant='outline-success' size='sm' type="button"><i className="ri-user-add-line align-middle"></i></Button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>

                                            <Col xxl={9}>
                                                <Card>
                                                    <Card.Body>
                                                        <h5 className="card-title mb-3">About</h5>
                                                        <p>Hi I'm Anna Adame, It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is European languages are members of the same family.</p>
                                                        <p>A lead designer is responsible for addressing the clients' needs of digital content and coordinating with the design team for the planning and innovation of the visual design and concept. Experiment and play around with the fonts that you already have in the software you’re working with reputable font websites. This may be the most commonly encountered tip I received from the designers I spoke with. They highly encourage that you use different fonts in one design, but do not over-exaggerate and go overboard.</p>
                                                        <Row>
                                                            <Col md={4}>
                                                                <div className="d-flex mt-4">
                                                                    <div className="flex-shrink-0 avatar-sm align-self-center me-3">
                                                                        <div className="avatar-title border border-dashed rounded-circle fs-16 text-primary bg-transparent">
                                                                            <i className="bi bi-person-bounding-box"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex-grow-1 overflow-hidden">
                                                                        <p className="mb-1">Designation :</p>
                                                                        <h6 className="text-truncate mb-0">Lead Designer / Developer</h6>
                                                                    </div>
                                                                </div>
                                                            </Col>

                                                            <Col md={4}>
                                                                <div className="d-flex mt-4">
                                                                    <div className="flex-shrink-0 avatar-sm align-self-center me-3">
                                                                        <div className="avatar-title border border-dashed rounded-circle fs-16 text-primary bg-transparent">
                                                                            <i className="bi bi-globe"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex-grow-1 overflow-hidden">
                                                                        <p className="mb-1">Website :</p>
                                                                        <Link href="#" className="fw-semibold text-body">www.hybrix.com</Link>
                                                                    </div>
                                                                </div>
                                                            </Col>

                                                            <Col md={4}>
                                                                <div className="d-flex mt-4">
                                                                    <div className="flex-shrink-0 avatar-sm align-self-center me-3">
                                                                        <div className="avatar-title border border-dashed rounded-circle fs-16 text-primary bg-transparent">
                                                                            <i className="bi bi-telephone"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex-grow-1 overflow-hidden">
                                                                        <p className="mb-2">Mobile :</p>
                                                                        <h6 className="text-truncate mb-0">+(241) 12345 67890</h6>
                                                                    </div>
                                                                </div>
                                                            </Col>

                                                            <Col md={4}>
                                                                <div className="d-flex mt-4">
                                                                    <div className="flex-shrink-0 avatar-sm align-self-center me-3">
                                                                        <div className="avatar-title border border-dashed rounded-circle fs-16 text-primary bg-transparent">
                                                                            <i className="bi bi-envelope"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex-grow-1 overflow-hidden">
                                                                        <p className="mb-2">E-mail :</p>
                                                                        <h6 className="text-truncate mb-0">edward@hybrix.com</h6>
                                                                    </div>
                                                                </div>
                                                            </Col>

                                                            <Col md={4}>
                                                                <div className="d-flex mt-4">
                                                                    <div className="flex-shrink-0 avatar-sm align-self-center me-3">
                                                                        <div className="avatar-title border border-dashed rounded-circle fs-16 text-primary bg-transparent">
                                                                            <i className="bi bi-geo-alt"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex-grow-1 overflow-hidden">
                                                                        <p className="mb-2">Location :</p>
                                                                        <h6 className="text-truncate mb-0">Phoenix, USA</h6>
                                                                    </div>
                                                                </div>
                                                            </Col>

                                                            <Col md={4}>
                                                                <div className="d-flex mt-4">
                                                                    <div className="flex-shrink-0 avatar-sm align-self-center me-3">
                                                                        <div className="avatar-title border border-dashed rounded-circle fs-16 text-primary bg-transparent">
                                                                            <i className="bi bi-calendar-check"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex-grow-1 overflow-hidden">
                                                                        <p className="mb-2">Joining Date :</p>
                                                                        <h6 className="text-truncate mb-0">16 Aug 2023</h6>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Card.Body>
                                                </Card>

                                                <Row>
                                                    <Col lg={6}>
                                                        <Card>
                                                            <Card.Header className="d-flex align-items-center">
                                                                <div className="flex-grow-1">
                                                                    <h5 className="card-title mb-0">Connections</h5>
                                                                </div>
                                                                <div className="flex-shrink-0">

                                                                    <Dropdown role="button" drop="start">
                                                                        <Dropdown.Toggle as="a" className="arrow-none">
                                                                            <i className="ri-more-2-fill fs-14"></i>
                                                                        </Dropdown.Toggle>
                                                                        <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                                                            <li><Dropdown.Item href="#">View</Dropdown.Item></li>
                                                                            <li><Dropdown.Item href="#">Edit</Dropdown.Item></li>
                                                                            <li><Dropdown.Item href="#">Delete</Dropdown.Item></li>
                                                                        </Dropdown.Menu>
                                                                    </Dropdown>
                                                                </div>
                                                            </Card.Header>
                                                            <Card.Body>
                                                                <div>

                                                                    {connectionsData.map((item: any, key: number) => (<div className={key === 0 ? "d-flex align-items-center pb-3" : "d-flex align-items-center py-3"} key={key}>
                                                                        <div className="avatar-xs flex-shrink-0 me-3">
                                                                            <Image src={item.img} alt="" className="img-fluid rounded-circle" />
                                                                        </div>
                                                                        <div className="flex-grow-1">
                                                                            <div>
                                                                                <h5 className="fs-14 mb-1">{item.name}</h5>
                                                                                <p className="fs-13 text-muted mb-0">{item.designation}</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex-shrink-0 ms-2">
                                                                            <Button variant='outline-info' size='sm' type="button" className={item.isFollow ? "custom-toggle active" : "btn btn-sm btn-outline-info custom-toggle"} onClick={(e) => favouriteBtn(e)}>
                                                                                <span className="icon-on"><i className="ri-user-follow-line align-bottom me-1"></i> Follow</span>
                                                                                <span className="icon-off"><i className="ri-user-unfollow-line align-bottom me-1"></i> Unfollow</span>
                                                                            </Button>
                                                                        </div>
                                                                    </div>))}
                                                                </div>
                                                            </Card.Body>
                                                            <Card.Footer className="text-center">
                                                                <Link href="#!" className="link-secondar">View All Connections <i className="bi bi-arrow-right"></i></Link>
                                                            </Card.Footer>
                                                        </Card>

                                                    </Col>
                                                    <Col lg={6}>
                                                        <Card>
                                                            <Card.Header className="d-flex align-items-center">
                                                                <h5 className="card-title mb-0 flex-grow-1">Activity Stream</h5>
                                                                <div className="flex-shrink-0">
                                                                    <Button variant='soft-primary' size='sm' type="button">
                                                                        View All Activity
                                                                    </Button>
                                                                </div>
                                                            </Card.Header>
                                                            <Card.Body className="px-0">
                                                                <SimpleBar style={{ maxHeight: "400px" }} className="p-3 pt-0">
                                                                    <ul className="acitivity-timeline-2 list-unstyled mb-0">
                                                                        <li>
                                                                            <h6 className="fs-14">Purchase by James Price</h6>
                                                                            <p>09:24 PM</p>
                                                                            <p className="mb-0">Product noise evolve smartwatch</p>
                                                                        </li>
                                                                        <li>
                                                                            <h6 className="fs-14">New ticket received <span className="badge text-bg-info align-middle ms-1">New</span></h6>
                                                                            <p className="mb-3">4 days ago</p>
                                                                            <p className="text-muted mb-0">User <span className="text-secondary">Erica245</span> submitted a ticket</p>
                                                                        </li>
                                                                        <li>
                                                                            <h6 className="fs-14">Adding a new event with attachments</h6>
                                                                            <p className="mb-3">30 days ago</p>
                                                                            <Row className="g-3">
                                                                                <div className="col-auto">
                                                                                    <div className="d-flex position-relative gap-2 border border-dashed p-2 rounded-3">
                                                                                        <div className="flex-shrink-0">
                                                                                            <i className="bi bi-file-earmark-image fs-17 text-danger"></i>
                                                                                        </div>
                                                                                        <div className="flex-grow-1 ms-2">
                                                                                            <Link scroll={false} href="#" className="stretched-link">
                                                                                                <h6 className="mb-1 fs-12">UI/UX design</h6>
                                                                                            </Link>
                                                                                            <small className="text-muted">685 KB</small>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-auto">
                                                                                    <div className="d-flex position-relative gap-2 border border-dashed p-2 rounded-3">
                                                                                        <div className="flex-shrink-0">
                                                                                            <i className="bi bi-file-pdf fs-17 text-info"></i>
                                                                                        </div>
                                                                                        <div className="flex-grow-1 ms-2">
                                                                                            <Link scroll={false} href="#" className="stretched-link">
                                                                                                <h6 className="mb-1 fs-12">Hybrix Invoice</h6>
                                                                                            </Link>
                                                                                            <small className="text-muted">342 KB</small>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </Row>
                                                                        </li>
                                                                        <li>
                                                                            <h6 className="fs-14">Templates layout upload</h6>
                                                                            <p className="mb-3">1 week ago</p>
                                                                            <p className="text-muted fst-italic">
                                                                                Powerful, clean & modern responsive bootstrap 5 admin template. The maximum file size for uploads in this demo :
                                                                            </p>
                                                                            <Row className="mt-2">
                                                                                <Col xxl={10}>
                                                                                    <Row className="border border-dashed gx-2 p-2">
                                                                                        <Col>
                                                                                            <Image src={smallImg3} alt="" className="img-fluid rounded" />
                                                                                        </Col>

                                                                                        <Col>
                                                                                            <Image src={smallImg5} alt="" className="img-fluid rounded" />
                                                                                        </Col>

                                                                                        <Col>
                                                                                            <Image src={smallImg7} alt="" className="img-fluid rounded" />
                                                                                        </Col>

                                                                                        <Col>
                                                                                            <Image src={smallImg9} alt="" className="img-fluid rounded" />
                                                                                        </Col>

                                                                                    </Row>

                                                                                </Col>
                                                                            </Row>
                                                                        </li>
                                                                        <li>
                                                                            <div className="time">01:30 PM</div>
                                                                            <p>Lunch time after which sleep just doesn't want to let go of me. 🤝</p>
                                                                        </li>
                                                                        <li>
                                                                            <div className="time">3:30 PM</div>
                                                                            <p>Drink the magical chai, it will ward off sleep they said. 🤷‍</p>
                                                                        </li>
                                                                        <li>
                                                                            <div className="time">4:30 PM </div>
                                                                            <p>The only time I don't feel sleepy cause it's work out time. I mean walking time. 😹</p>
                                                                        </li>
                                                                        <li>
                                                                            <div className="time">07:00 PM </div>
                                                                            <p>Food my tummy needs, sleep my body needs.👿</p>
                                                                        </li>
                                                                        <li>
                                                                            <div className="time">07:30 PM </div>
                                                                            <p>My tummy's happy time 🍝</p>
                                                                        </li>
                                                                        <li>
                                                                            <div className="time">10:00 PM </div>
                                                                            <p>uh oh!!! fuel low, get some snacks but wait should I just take a quick nap?🤓 </p>
                                                                        </li>
                                                                        <li>
                                                                            <div className="time">2:30 PM </div>
                                                                            <p>All hail! The time to sleep has finally arrived.😴😴😴😴😴 </p>
                                                                        </li>
                                                                    </ul>
                                                                </SimpleBar>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="activities" title="activities" className="fade">
                                        <Card>
                                            <Card.Body className="px-0">
                                                <h5 className="card-title mb-4 px-3">Activity Stream</h5>
                                                <SimpleBar style={{ maxHeight: "405px" }} className="p-3 pt-0">
                                                    <ul className="acitivity-timeline-2 list-unstyled mb-0">
                                                        <li>
                                                            <h6 className="fs-14">Purchase by James Price</h6>
                                                            <p>09:24 PM</p>
                                                            <p className="mb-0">Product noise evolve smartwatch</p>
                                                        </li>
                                                        <li>
                                                            <h6 className="fs-14">New ticket received <span className="badge text-bg-info align-middle ms-1">New</span></h6>
                                                            <p className="mb-3">4 days ago</p>
                                                            <p className="text-muted mb-0">User <span className="text-secondary">Erica245</span> submitted a ticket</p>
                                                        </li>
                                                        <li>
                                                            <h6 className="fs-14">Adding a new event with attachments</h6>
                                                            <p className="mb-3">30 days ago</p>
                                                            <div className="border border-dashed p-2 rounded-3">
                                                                <Row className="g-3">
                                                                    <div className="col-auto">
                                                                        <div className="d-flex position-relative gap-2">
                                                                            <div className="flex-shrink-0">
                                                                                <i className="bi bi-file-earmark-image fs-17 text-danger"></i>
                                                                            </div>
                                                                            <div className="flex-grow-1 ms-2">
                                                                                <Link scroll={false} href="#" className="stretched-link">
                                                                                    <h6>UI/UX design</h6>
                                                                                </Link>
                                                                                <small>685 KB</small>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-auto">
                                                                        <div className="d-flex position-relative gap-2">
                                                                            <div className="flex-shrink-0">
                                                                                <i className="bi bi-file-pdf fs-17 text-info"></i>
                                                                            </div>
                                                                            <div className="flex-grow-1 ms-2">
                                                                                <Link scroll={false} href="#" className="stretched-link">
                                                                                    <h6>Hybrix Invoice</h6>
                                                                                </Link>
                                                                                <small>342 KB</small>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Row>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <h6 className="fs-14">Templates layout upload</h6>
                                                            <p className="mb-3">1 week ago</p>
                                                            <p className="text-muted fst-italic">
                                                                Powerful, clean & modern responsive bootstrap 5 admin template. The maximum file size for uploads in this demo :
                                                            </p>
                                                            <Row className="mt-2">
                                                                <Col xxl={10}>
                                                                    <Row className="border border-dashed gx-2 p-2">
                                                                        <Col>
                                                                            <Image src={smallImg3} alt="" className="img-fluid rounded" />
                                                                        </Col>

                                                                        <Col>
                                                                            <Image src={smallImg5} alt="" className="img-fluid rounded" />
                                                                        </Col>

                                                                        <Col>
                                                                            <Image src={smallImg7} alt="" className="img-fluid rounded" />
                                                                        </Col>

                                                                        <Col>
                                                                            <Image src={smallImg9} alt="" className="img-fluid rounded" />
                                                                        </Col>
                                                                    </Row>
                                                                </Col>
                                                            </Row>
                                                        </li>
                                                        <li>
                                                            <div className="time">01:30 PM</div>
                                                            <p>Lunch time after which sleep just doesn't want to let go of me. 🤝</p>
                                                        </li>
                                                        <li>
                                                            <div className="time">3:30 PM</div>
                                                            <p>Drink the magical chai, it will ward off sleep they said. 🤷‍</p>
                                                        </li>
                                                        <li>
                                                            <div className="time">4:30 PM </div>
                                                            <p>The only time I don't feel sleepy cause it's work out time. I mean walking time. 😹</p>
                                                        </li>
                                                        <li>
                                                            <div className="time">07:00 PM </div>
                                                            <p>Food my tummy needs, sleep my body needs.👿</p>
                                                        </li>
                                                        <li>
                                                            <div className="time">07:30 PM </div>
                                                            <p>My tummy's happy time 🍝</p>
                                                        </li>
                                                        <li>
                                                            <div className="time">10:00 PM </div>
                                                            <p>uh oh!!! fuel low, get some snacks but wait should I just take a quick nap?🤓 </p>
                                                        </li>
                                                        <li>
                                                            <div className="time">2:30 PM </div>
                                                            <p>All hail! The time to sleep has finally arrived.😴😴😴😴😴 </p>
                                                        </li>
                                                    </ul>
                                                </SimpleBar>
                                            </Card.Body>
                                        </Card>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="projects" title="projects" className="fade">
                                        <Card>
                                            <Card.Body>
                                                <Row>
                                                    {(simplePageProjectData || []).map((item: any, key: number) => (<Col xxl={3} sm={6} key={key}>
                                                        <Card className="profile-project-card shadow-none mt-3">
                                                            <Card.Body className="p-4">
                                                                <div className="d-flex">
                                                                    <div className="text-center mb-4 me-3">
                                                                        <Image src={item.companyLogo} alt="" width={30} height={30} className="" />
                                                                    </div>
                                                                    <div className="flex-grow-1 text-muted overflow-hidden">
                                                                        <h5 className="fs-14 text-truncate"><Link scroll={false} href="#" className="text-dark">{item.title}</Link></h5>
                                                                        <p className="text-muted text-truncate mb-0">Last Update : <span className="fw-semibold text-dark">{item.lastUpdate}</span></p>
                                                                    </div>
                                                                    <div className="flex-shrink-0 ms-2">
                                                                        <Dropdown role="button" drop="start" className="col text-end">
                                                                            <Dropdown.Toggle as="a" className="arrow-none">
                                                                                <i className="bi bi-three-dots-vertical"></i>
                                                                            </Dropdown.Toggle>
                                                                            <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                                                                <li><Dropdown.Item href="#" className="edit-list"><i className="ri-pencil-line me-2 align-bottom text-muted"></i>Edit</Dropdown.Item></li>
                                                                                <li><Dropdown.Item href="#" className="remove-list"><i className="ri-delete-bin-5-line me-2 align-bottom text-muted"></i>Remove</Dropdown.Item></li>
                                                                            </Dropdown.Menu>
                                                                        </Dropdown>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex mt-3 align-items-center">
                                                                    <div className="flex-grow-1">
                                                                        <div className="d-flex align-items-center gap-2">
                                                                            <div>
                                                                                <h5 className="fs-12 text-muted mb-0">Members :</h5>
                                                                            </div>
                                                                            <div className="avatar-group">
                                                                                {item.members.map((item: any, key: number) => (<div className="avatar-group-item" key={key}>
                                                                                    <div className="avatar-xs">
                                                                                        {item.img ? <Image src={item.img} alt="" className="rounded-circle img-fluid" /> :
                                                                                            <div className="avatar-title rounded-circle bg-light text-primary">
                                                                                                {item.text}
                                                                                            </div>}
                                                                                    </div>
                                                                                </div>))}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex-shrink-0 ms-2">
                                                                        <Status element={item.status} />
                                                                    </div>
                                                                </div>

                                                                <div className="mt-3">
                                                                    <h5 className="fs-12">Progress <span className="text-danger float-end">{item.progress}</span></h5>
                                                                    <div className="progress progress-bar-alt-danger progress-sm">
                                                                        <div className="progress-bar bg-danger progress-animated wow animated animated" role="progressbar" style={{ width: item.progress, visibility: "visible", animationName: "animationProgress" }}>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>))}

                                                    <Col lg={12}>
                                                        <div className="mt-4">
                                                            <ul className="pagination pagination-separated justify-content-center mb-0">
                                                                <li className="page-item disabled">
                                                                    <Link scroll={false} href="#" className="page-link"><i className="mdi mdi-chevron-left"></i></Link>
                                                                </li>
                                                                <li className="page-item active">
                                                                    <Link scroll={false} href="#" className="page-link">1</Link>
                                                                </li>
                                                                <li className="page-item">
                                                                    <Link scroll={false} href="#" className="page-link">2</Link>
                                                                </li>
                                                                <li className="page-item">
                                                                    <Link scroll={false} href="#" className="page-link">3</Link>
                                                                </li>
                                                                <li className="page-item">
                                                                    <Link scroll={false} href="#" className="page-link">4</Link>
                                                                </li>
                                                                <li className="page-item">
                                                                    <Link scroll={false} href="#" className="page-link">5</Link>
                                                                </li>
                                                                <li className="page-item">
                                                                    <Link scroll={false} href="#" className="page-link"><i className="mdi mdi-chevron-right"></i></Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="friends" title="friends" className="fade">
                                        <Card>
                                            <Card.Body>
                                                <div className="d-flex align-items-center mb-4">
                                                    <h5 className="card-title flex-grow-1 mb-0">Friends</h5>
                                                </div>
                                                <Row>
                                                    <Col xxl={3}>
                                                        <Card>
                                                            <Card.Body>
                                                                <Dropdown role="button" drop="start" className="position-absolute end-0 pe-3">
                                                                    <Dropdown.Toggle as="a" className="fs-18 arrow-none">
                                                                        <i className="ri-more-2-fill align-baseline"></i>
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                                                        <li><Dropdown.Item href="#"><i className="ri-pencil-line me-2 align-bottom text-muted"></i>Edit</Dropdown.Item></li>
                                                                        <li><Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-bottom text-muted"></i>Remove</Dropdown.Item></li>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>

                                                                <div className="text-center mb-4">
                                                                    <Image src={avatar1} alt="" className="avatar-md rounded-3" />
                                                                </div>
                                                                <div className="text-center">
                                                                    <Link href="#member-overview" data-bs-toggle="offcanvas">
                                                                        <h5 className="fs-17">Cristofer Leblanc</h5>
                                                                    </Link>
                                                                    <span className="badge badge-soft-secondary">Product Manager</span>
                                                                </div>
                                                                <div className="mt-2 text-center pt-4 hstack gap-2 justify-content-center">
                                                                    <div className="avatar-xs">
                                                                        <Link scroll={false} href="#" className="avatar-title rounded-circle bg-info-subtle text-info"><i className="ri-facebook-fill align-middle"></i></Link>
                                                                    </div>
                                                                    <div className="avatar-xs">
                                                                        <Link scroll={false} href="#" className="avatar-title rounded-circle bg-success-subtle text-success"><i className="ri-twitter-fill align-middle"></i></Link>
                                                                    </div>
                                                                    <div className="avatar-xs">
                                                                        <Link scroll={false} href="#" className="avatar-title rounded-circle bg-danger-subtle text-danger"><i className="ri-linkedin-fill align-middle"></i></Link>
                                                                    </div>
                                                                </div>
                                                            </Card.Body>
                                                            <Card.Body className="hstack gap-2 border-top">
                                                                <Button variant='soft-info' className="w-100">Message</Button>
                                                                <Button variant='soft-primary' className="w-100">Overview</Button>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                    <Col xxl={3}>
                                                        <Card>
                                                            <Card.Body>
                                                                <Dropdown role="button" drop="start" className="position-absolute end-0 pe-3">
                                                                    <Dropdown.Toggle as="a" className="fs-18 arrow-none">
                                                                        <i className="ri-more-2-fill align-baseline"></i>
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                                                        <li><Dropdown.Item href="#"><i className="ri-pencil-line me-2 align-bottom text-muted"></i>Edit</Dropdown.Item></li>
                                                                        <li><Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-bottom text-muted"></i>Remove</Dropdown.Item></li>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                                <div className="text-center mb-4">
                                                                    <Image src={avatar2} alt="" className="avatar-md rounded-3" />
                                                                </div>
                                                                <div className="text-center">
                                                                    <Link href="#member-overview" data-bs-toggle="offcanvas">
                                                                        <h5 className="fs-17">Jordan Villareal</h5>
                                                                    </Link>
                                                                    <span className="badge badge-soft-secondary">Software Engineer</span>
                                                                </div>
                                                                <div className="mt-2 text-center pt-4 hstack gap-2 justify-content-center">
                                                                    <div className="avatar-xs">
                                                                        <Link scroll={false} href="#" className="avatar-title rounded-circle bg-info-subtle text-info"><i className="ri-facebook-fill align-middle"></i></Link>
                                                                    </div>
                                                                    <div className="avatar-xs">
                                                                        <Link scroll={false} href="#" className="avatar-title rounded-circle bg-success-subtle text-success"><i className="ri-twitter-fill align-middle"></i></Link>
                                                                    </div>
                                                                    <div className="avatar-xs">
                                                                        <Link scroll={false} href="#" className="avatar-title rounded-circle bg-danger-subtle text-danger"><i className="ri-linkedin-fill align-middle"></i></Link>
                                                                    </div>
                                                                </div>
                                                            </Card.Body>
                                                            <Card.Body className="hstack gap-2 border-top">
                                                                <Button variant='soft-info' className="btn btn-soft-info w-100">Message</Button>
                                                                <Button variant='soft-primary' className="btn btn-soft-primary w-100">Overview</Button>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                    <Col xxl={3}>
                                                        <Card>
                                                            <Card.Body>
                                                                <Dropdown role="button" drop="start" className="position-absolute end-0 pe-3">
                                                                    <Dropdown.Toggle as="a" className="fs-18 arrow-none">
                                                                        <i className="ri-more-2-fill align-baseline"></i>
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                                                        <li><Dropdown.Item href="#"><i className="ri-pencil-line me-2 align-bottom text-muted"></i>Edit</Dropdown.Item></li>
                                                                        <li><Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-bottom text-muted"></i>Remove</Dropdown.Item></li>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                                <div className="text-center mb-4">
                                                                    <Image src={avatar3} alt="" className="avatar-md rounded-3" />
                                                                </div>
                                                                <div className="text-center">
                                                                    <Link href="#member-overview" data-bs-toggle="offcanvas">
                                                                        <h5 className="fs-17">Damon Boxter</h5>
                                                                    </Link>
                                                                    <span className="badge badge-soft-secondary">UI/UX Designer</span>
                                                                </div>
                                                                <div className="mt-2 text-center pt-4 hstack gap-2 justify-content-center">
                                                                    <div className="avatar-xs">
                                                                        <Link scroll={false} href="#" className="avatar-title rounded-circle bg-info-subtle text-info"><i className="ri-facebook-fill align-middle"></i></Link>
                                                                    </div>
                                                                    <div className="avatar-xs">
                                                                        <Link scroll={false} href="#" className="avatar-title rounded-circle bg-success-subtle text-success"><i className="ri-twitter-fill align-middle"></i></Link>
                                                                    </div>
                                                                    <div className="avatar-xs">
                                                                        <Link scroll={false} href="#" className="avatar-title rounded-circle bg-danger-subtle text-danger"><i className="ri-linkedin-fill align-middle"></i></Link>
                                                                    </div>
                                                                </div>
                                                            </Card.Body>
                                                            <Card.Body className="hstack gap-2 border-top">
                                                                <Button variant='soft-info' className="w-100">Message</Button>
                                                                <Button variant='soft-primary' className="w-100">Overview</Button>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                    <Col xxl={3}>
                                                        <Card>
                                                            <Card.Body>
                                                                <Dropdown role="button" drop="start" className="position-absolute end-0 pe-3">
                                                                    <Dropdown.Toggle as="a" className="fs-18 arrow-none">
                                                                        <i className="ri-more-2-fill align-baseline"></i>
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                                                        <li><Dropdown.Item href="#"><i className="ri-pencil-line me-2 align-bottom text-muted"></i>Edit</Dropdown.Item></li>
                                                                        <li><Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-bottom text-muted"></i>Remove</Dropdown.Item></li>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                                <div className="text-center mb-4">
                                                                    <Image src={avatar4} alt="" className="avatar-md rounded-3" />
                                                                </div>
                                                                <div className="text-center">
                                                                    <Link href="#member-overview" data-bs-toggle="offcanvas">
                                                                        <h5 className="fs-17">Bryant Diaz</h5>
                                                                    </Link>
                                                                    <span className="badge badge-soft-secondary">Engineering Manager</span>
                                                                </div>
                                                                <div className="mt-2 text-center pt-4 hstack gap-2 justify-content-center">
                                                                    <div className="avatar-xs">
                                                                        <Link scroll={false} href="#" className="avatar-title rounded-circle bg-info-subtle text-info"><i className="ri-facebook-fill align-middle"></i></Link>
                                                                    </div>
                                                                    <div className="avatar-xs">
                                                                        <Link scroll={false} href="#" className="avatar-title rounded-circle bg-success-subtle text-success"><i className="ri-twitter-fill align-middle"></i></Link>
                                                                    </div>
                                                                    <div className="avatar-xs">
                                                                        <Link scroll={false} href="#" className="avatar-title rounded-circle bg-danger-subtle text-danger"><i className="ri-linkedin-fill align-middle"></i></Link>
                                                                    </div>
                                                                </div>
                                                            </Card.Body>
                                                            <Card.Body className="hstack gap-2 border-top">
                                                                <Button variant='soft-info' className="w-100">Message</Button>
                                                                <Button variant='soft-primary' className="w-100">Overview</Button>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="documents" title="documents" className="fade">
                                        <Card>
                                            <Card.Body>
                                                <div className="d-flex align-items-center mb-4">
                                                    <h5 className="card-title flex-grow-1 mb-0">Documents</h5>
                                                    <div className="flex-shrink-0">
                                                        <input className="form-control d-none" type="file" id="formFile" />
                                                        <label htmlFor="formFile" className="btn btn-danger"><i className="ri-upload-2-fill me-1 align-bottom"></i> Upload File</label>
                                                    </div>
                                                </div>
                                                <Row>
                                                    <Col lg={12}>
                                                        <div className="table-responsive">
                                                            <table className="table table-borderless align-middle mb-0">
                                                                <thead className="table-light">
                                                                    <tr>
                                                                        <th scope="col">
                                                                            <div className="form-check">
                                                                                <input className="form-check-input" type="checkbox" name="chk_child" value="option1" />
                                                                            </div>
                                                                        </th>
                                                                        <th scope="col">File Name</th>
                                                                        <th scope="col">Type</th>
                                                                        <th scope="col">Size</th>
                                                                        <th scope="col">Upload Date</th>
                                                                        <th scope="col">Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <th scope="col">
                                                                            <div className="form-check">
                                                                                <input className="form-check-input" type="checkbox" name="chk_child" value="option1" />
                                                                            </div>
                                                                        </th>
                                                                        <td>
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="avatar-sm">
                                                                                    <div className="avatar-title bg-transparent text-primary rounded fs-20">
                                                                                        <i className="bi bi-file-earmark-zip-fill"></i>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="ms-3 flex-grow-1">
                                                                                    <h6 className="fs-15 mb-0"><Link scroll={false} href="#" className="text-dark">Artboard-documents.zip</Link>
                                                                                    </h6>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>Zip File</td>
                                                                        <td>4.57 MB</td>
                                                                        <td>12 Dec 2022</td>
                                                                        <td>
                                                                            <Dropdown role="button">
                                                                                <Dropdown.Toggle as="a" className="btn btn-light btn-icon arrow-none">
                                                                                    <i className="bi bi-sliders2"></i>
                                                                                </Dropdown.Toggle>
                                                                                <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                                                                    <li><Dropdown.Item href="#"><i className="ri-eye-fill me-2 align-middle text-muted"></i>View</Dropdown.Item></li>
                                                                                    <li><Dropdown.Item href="#"><i className="ri-download-2-fill me-2 align-middle text-muted"></i>Download</Dropdown.Item></li>
                                                                                    <li><Dropdown.Divider /></li>
                                                                                    <li><Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle text-muted"></i>Delete</Dropdown.Item></li>
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="col">
                                                                            <div className="form-check">
                                                                                <input className="form-check-input" type="checkbox" name="chk_child" value="option1" />
                                                                            </div>
                                                                        </th>
                                                                        <td>
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="avatar-sm">
                                                                                    <div className="avatar-title bg-transparent text-danger rounded fs-20">
                                                                                        <i className="bi bi-file-earmark-pdf-fill"></i>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="ms-3 flex-grow-1">
                                                                                    <h6 className="fs-15 mb-0"><Link scroll={false} href="#" className="text-dark">Bank Management System</Link></h6>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>PDF File</td>
                                                                        <td>8.89 MB</td>
                                                                        <td>24 Nov 2022</td>
                                                                        <td>
                                                                            <Dropdown role="button">
                                                                                <Dropdown.Toggle as="a" className="btn btn-light btn-icon arrow-none">
                                                                                    <i className="bi bi-sliders2"></i>
                                                                                </Dropdown.Toggle>
                                                                                <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                                                                    <li><Dropdown.Item href="#"><i className="ri-eye-fill me-2 align-middle text-muted"></i>View</Dropdown.Item></li>
                                                                                    <li><Dropdown.Item href="#"><i className="ri-download-2-fill me-2 align-middle text-muted"></i>Download</Dropdown.Item></li>
                                                                                    <li><Dropdown.Divider /></li>
                                                                                    <li><Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle text-muted"></i>Delete</Dropdown.Item></li>
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="col">
                                                                            <div className="form-check">
                                                                                <input className="form-check-input" type="checkbox" name="chk_child" value="option1" />
                                                                            </div>
                                                                        </th>
                                                                        <td>
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="avatar-sm">
                                                                                    <div className="avatar-title bg-transparent text-secondary rounded fs-20">
                                                                                        <i className="bi bi-file-earmark-play"></i>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="ms-3 flex-grow-1">
                                                                                    <h6 className="fs-15 mb-0"><Link scroll={false} href="#" className="text-dark">Tour-video.mp4</Link></h6>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>MP4 File</td>
                                                                        <td>14.62 MB</td>
                                                                        <td>19 Nov 2022</td>
                                                                        <td>
                                                                            <Dropdown role="button">
                                                                                <Dropdown.Toggle as="a" className="btn btn-light btn-icon arrow-none">
                                                                                    <i className="bi bi-sliders2"></i>
                                                                                </Dropdown.Toggle>
                                                                                <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                                                                    <li><Dropdown.Item href="#"><i className="ri-eye-fill me-2 align-middle text-muted"></i>View</Dropdown.Item></li>
                                                                                    <li><Dropdown.Item href="#"><i className="ri-download-2-fill me-2 align-middle text-muted"></i>Download</Dropdown.Item></li>
                                                                                    <li><Dropdown.Divider /></li>
                                                                                    <li><Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle text-muted"></i>Delete</Dropdown.Item></li>
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="col">
                                                                            <div className="form-check">
                                                                                <input className="form-check-input" type="checkbox" name="chk_child" value="option1" />
                                                                            </div>
                                                                        </th>
                                                                        <td>
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="avatar-sm">
                                                                                    <div className="avatar-title bg-transparent text-success rounded fs-20">
                                                                                        <i className="bi bi-filetype-exe"></i>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="ms-3 flex-grow-1">
                                                                                    <h6 className="fs-15 mb-0"><Link scroll={false} href="#" className="text-dark">Account-statement.xsl</Link></h6>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>XSL File</td>
                                                                        <td>2.38 KB</td>
                                                                        <td>14 Nov 2022</td>
                                                                        <td>
                                                                            <Dropdown role="button">
                                                                                <Dropdown.Toggle as="a" className="btn btn-light btn-icon arrow-none">
                                                                                    <i className="bi bi-sliders2"></i>
                                                                                </Dropdown.Toggle>
                                                                                <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                                                                    <li><Dropdown.Item href="#"><i className="ri-eye-fill me-2 align-middle text-muted"></i>View</Dropdown.Item></li>
                                                                                    <li><Dropdown.Item href="#"><i className="ri-download-2-fill me-2 align-middle text-muted"></i>Download</Dropdown.Item></li>
                                                                                    <li><Dropdown.Divider /></li>
                                                                                    <li><Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle text-muted"></i>Delete</Dropdown.Item></li>
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="col">
                                                                            <div className="form-check">
                                                                                <input className="form-check-input" type="checkbox" name="chk_child" value="option1" />
                                                                            </div>
                                                                        </th>
                                                                        <td>
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="avatar-sm">
                                                                                    <div className="avatar-title bg-transparent text-info rounded fs-20">
                                                                                        <i className="bi bi-folder"></i>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="ms-3 flex-grow-1">
                                                                                    <h6 className="fs-15 mb-0">
                                                                                        <Link scroll={false} href="#" className="text-dark">Project Screenshots Collection</Link></h6>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>Floder File</td>
                                                                        <td>87.24 MB</td>
                                                                        <td>08 Nov 2022</td>
                                                                        <td>
                                                                            <Dropdown role="button">
                                                                                <Dropdown.Toggle as="a" className="btn btn-light btn-icon arrow-none">
                                                                                    <i className="bi bi-sliders2"></i>
                                                                                </Dropdown.Toggle>
                                                                                <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                                                                    <li><Dropdown.Item href="#"><i className="ri-eye-fill me-2 align-middle text-muted"></i>View</Dropdown.Item></li>
                                                                                    <li><Dropdown.Item href="#"><i className="ri-download-2-fill me-2 align-middle text-muted"></i>Download</Dropdown.Item></li>
                                                                                    <li><Dropdown.Divider /></li>
                                                                                    <li><Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle text-muted"></i>Delete</Dropdown.Item></li>
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="col">
                                                                            <div className="form-check">
                                                                                <input className="form-check-input" type="checkbox" name="chk_child" value="option1" />
                                                                            </div>
                                                                        </th>
                                                                        <td>
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="avatar-sm">
                                                                                    <div className="avatar-title bg-transparent text-danger rounded fs-20">
                                                                                        <i className="bi bi-images"></i>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="ms-3 flex-grow-1">
                                                                                    <h6 className="fs-15 mb-0">
                                                                                        <Link scroll={false} href="#" className="text-dark">Hybrix-logo.png</Link>
                                                                                    </h6>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>PNG File</td>
                                                                        <td>879 KB</td>
                                                                        <td>02 Nov 2022</td>
                                                                        <td>
                                                                            <Dropdown role="button">
                                                                                <Dropdown.Toggle as="a" className="btn btn-light btn-icon arrow-none">
                                                                                    <i className="bi bi-sliders2"></i>
                                                                                </Dropdown.Toggle>
                                                                                <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                                                                    <li><Dropdown.Item href="#"><i className="ri-eye-fill me-2 align-middle text-muted"></i>View</Dropdown.Item></li>
                                                                                    <li><Dropdown.Item href="#"><i className="ri-download-2-fill me-2 align-middle text-muted"></i>Download</Dropdown.Item></li>
                                                                                    <li><Dropdown.Divider /></li>
                                                                                    <li><Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle text-muted"></i>Delete</Dropdown.Item></li>
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div className="text-center mt-3">
                                                            <a href="#" className="text-success"><i className="mdi mdi-loading mdi-spin fs-20 align-middle me-2"></i> Load more </a>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>

                        </Row>
                    </Tab.Container>
                </Container>
            </div >
        </React.Fragment >
    );
};

SimplePage.getLayout = (page: ReactElement) => {
    return (
      <Layout>
        {page}
      </Layout>
    )
};

export default SimplePage;