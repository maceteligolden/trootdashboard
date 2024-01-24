import React, { ReactElement, useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Card, Col, Container, Dropdown, Nav, Row, Tab } from 'react-bootstrap';
import Breadcrumb from '@common/Breadcrumb';

import { searchResultsSwiperData, searchResultsGalleryData, searchResultsNewsData, searchResultsImagesData } from "@common/data"

import logo from "@assets/images/logo-sm.png"
import smallImg1 from "@assets/images/small/img-1.jpg"
import smallImg2 from "@assets/images/small/img-2.jpg"
import smallImg3 from "@assets/images/small/img-3.jpg"
import smallImg4 from "@assets/images/small/img-4.jpg"
import smallImg8 from "@assets/images/small/img-8.jpg"

import { Swiper, SwiperSlide } from "swiper/react";
import Layout from '@common/Layout';


const SearchResults = () => {

    const [isopen, setIsOpen] = useState<boolean>(true)
    const [imageInfo, setImageInfo] = useState<any>("")

    useEffect(() => {
        setImageInfo(searchResultsGalleryData[0])
    }, [])

    const prevImage = () => {
        let length = searchResultsGalleryData.length
        setImageInfo(searchResultsGalleryData[(imageInfo.id + length - 2) % length])
    }

    const nextImage = () => {
        let length = searchResultsGalleryData.length
        setImageInfo(searchResultsGalleryData[(imageInfo.id + length) % length])
    }

    return (
        <React.Fragment>
            <Head>
                <title>Search Result | Hybrix - Admin & Dashboard Template</title>
            </Head>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb breadcrumb="Pages" breadcrumbItem="Search Results" />
                    <Tab.Container defaultActiveKey="all">
                        <Row>
                            <Col lg={12}>
                                <Card>
                                    <Card.Header className="bg-light pb-0 border-0">
                                        <Row className="justify-content-between">
                                            <Col md={5}>
                                                <div className="d-flex align-items-center gap-3">
                                                    <Image src={logo} alt="" height="22" />
                                                    <div className="position-relative flex-grow-1">
                                                        <input type="text" className="form-control border-0" placeholder="Search here.." defaultValue="Themesbrand" />
                                                        <Link scroll={false} href="#" className="btn btn-link link-secondary position-absolute end-0 top-0" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><i className="ri-mic-fill"></i></Link>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md="auto">
                                                <div className="hstack gap-2">

                                                    <Dropdown>
                                                        <Dropdown.Toggle as="a" className="fw-medium btn btn-ghost-primary btn-icon arrow-none">
                                                            <i className="ph-gear-six fs-20"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu as="ul">
                                                            <li><Dropdown.Item href="#">Search Settings</Dropdown.Item></li>
                                                            <li><Dropdown.Item href="#">Advanced Search</Dropdown.Item></li>
                                                            <li><Dropdown.Item href="#">Search History</Dropdown.Item></li>
                                                            <li><Dropdown.Item href="#">Search Help</Dropdown.Item></li>
                                                            <Dropdown.Divider />
                                                            <li><Dropdown.Item href="#">Dark Mode:Off</Dropdown.Item></li>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                    <Link scroll={false} className="fw-medium btn btn-ghost-secondary btn-icon" href="#!" role="button">
                                                        <i className="ph-list-bold fs-20"></i>
                                                    </Link>
                                                </div>
                                            </Col>
                                        </Row>
                                        <div className="mt-4">
                                            <Nav as="ul" variant="pills" className="nav-tabs-custom nav-secondary">
                                                <Nav.Item as="li">
                                                    <Nav.Link eventKey="all">All Results</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item as="li">
                                                    <Nav.Link eventKey="images">Images</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item as="li">
                                                    <Nav.Link eventKey="news"> News </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item as="li">
                                                    <Nav.Link eventKey="video">Videos</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </div>
                                    </Card.Header>
                                    <Card.Body className="p-4">
                                        <Tab.Content>
                                            <Tab.Pane eventKey="all" title="all">
                                                <p className="text-muted mb-4">Showing results for "Themesbrand"</p>
                                                <Row className="gy-3">
                                                    <Col xxl={8}>
                                                        <div className="mb-4">
                                                            <h5><Link scroll={false} href="#">Themesbrand | Web design and development company</Link></h5>
                                                            <p className="text-muted mb-2">Hybrix admin is super flexible, powerful, clean, modern & responsive admin template based on <span className="fw-semibold">bootstrap 5</span> stable with unlimited possibilities. You can simply change to any layout or mode by changing a couple of lines of code. You can start small and large projects or update design in your existing project using Hybrix it is very quick and easy as it is beautiful, adroit, and delivers the ultimate user experience.</p>
                                                            <Link scroll={false} href="#!" className="text-info">https://themesbrand.com/works</Link>
                                                        </div>

                                                        <div className="mb-4">
                                                            <h5 className="mb-3"><i className="ph-image-bold align-middle"></i> Images for Themesbrand</h5>

                                                            <Row className="g-2 mb-3">
                                                                <Col lg={2}>
                                                                    <Link scroll={false} href="#!">
                                                                        <Image src={smallImg1} alt="" className="img-fluid rounded" />
                                                                    </Link>
                                                                </Col>
                                                                <Col lg={2}>
                                                                    <Link scroll={false} href="#!">
                                                                        <Image src={smallImg3} alt="" className="img-fluid rounded" />
                                                                    </Link>
                                                                </Col>
                                                                <Col lg={2}>
                                                                    <Link scroll={false} href="#!">
                                                                        <Image src={smallImg4} alt="" className="img-fluid rounded" />
                                                                    </Link>
                                                                </Col>
                                                            </Row>

                                                            <div className="d-flex gap-2">
                                                                <Link scroll={false} href="#!" className="border rounded-pill p-1 d-flex align-items-center">
                                                                    <Image src={smallImg2} alt="" className="avatar-xs rounded-circle object-cover" />
                                                                    <span className="inline-block fw-medium px-2">themesbrand Hybrix</span>
                                                                </Link>
                                                                <Link scroll={false} href="#!" className="border rounded-pill p-1 d-flex align-items-center">
                                                                    <Image src={smallImg8} alt="" className="avatar-xs rounded-circle object-cover" />
                                                                    <span className="inline-block fw-medium px-2">skote</span>
                                                                </Link>
                                                            </div>
                                                        </div>

                                                        <div className="mb-4">
                                                            <h5><Link scroll={false} href="#">Themesbrand - Portfolio - ThemeForest</Link></h5>
                                                            <p className="text-muted mb-2">Hybrix admin is super flexible, powerful, clean, modern & responsive admin template based on <span className="fw-semibold">bootstrap 5</span> stable with unlimited possibilities. You can simply change to any layout or mode by changing a couple of lines of code. You can start small and large projects or update design in your existing project using Hybrix it is very quick and easy as it is beautiful, adroit, and delivers the ultimate user experience.</p>
                                                            <Link scroll={false} href="#!" className="text-info">https://themesbrand.com/works</Link>
                                                        </div>
                                                        <div className="mb-4">
                                                            <h5><Link scroll={false} href="#">themesbrand (ThemesBrand) - GitHub</Link></h5>
                                                            <p className="text-muted mb-2">Hybrix admin is super flexible, powerful, clean, modern & responsive admin template based on <span className="fw-semibold">bootstrap 5</span> stable with unlimited possibilities. You can simply change to any layout or mode by changing a couple of lines of code. You can start small and large projects or update design in your existing project using Hybrix it is very quick and easy as it is beautiful, adroit, and delivers the ultimate user experience.</p>
                                                            <Link scroll={false} href="#!" className="text-info">https://themesbrand.com/works</Link>
                                                        </div>
                                                        <div className="mb-4">
                                                            <h5><Link scroll={false} href="#">Hybrix - Admin & Dashboard Templates by ThemesBrand</Link></h5>
                                                            <p className="text-muted mb-2">We design and develop web applications that matter. 5 posts. 41 followers. 37 following. Hybrix 13 in 1 Premium Multipurpose Admin & Dashboard Template.</p>
                                                            <Link scroll={false} href="#!" className="text-info">https://themesbrand.com/works</Link>
                                                        </div>
                                                        <div className="mb-4">
                                                            <h5><Link scroll={false} href="#">Themes Brand - Dribbble</Link></h5>
                                                            <p className="text-muted mb-2">Hybrix admin is super flexible, powerful, clean, modern & responsive admin template based on <span className="fw-semibold">bootstrap 5</span> stable with unlimited possibilities. You can simply change to any layout or mode by changing a couple of lines of code. You can start small and large projects or update design in your existing project using Hybrix it is very quick and easy as it is beautiful, adroit, and delivers the ultimate user experience.</p>
                                                            <Link scroll={false} href="#!" className="text-info">https://themesbrand.com/works</Link>
                                                        </div>
                                                        <div className="mb-4">
                                                            <h5><Link scroll={false} href="#">Themesbrand - Portfolio | ThemeForest</Link></h5>
                                                            <p className="text-muted mb-2">Hybrix admin is super flexible, powerful, clean, modern & responsive admin template based on <span className="fw-semibold">bootstrap 5</span> stable with unlimited possibilities. You can simply change to any layout or mode by changing a couple of lines of code. You can start small and large projects or update design in your existing project using Hybrix it is very quick and easy as it is beautiful, adroit, and delivers the ultimate user experience.</p>
                                                            <Link scroll={false} href="#!" className="text-info">https://themesbrand.com/works</Link>
                                                        </div>
                                                        <div className="mb-4">
                                                            <h5><Link scroll={false} href="#">Skote - Admin & Dashboard Templates</Link></h5>
                                                            <p className="text-muted mb-2">Hybrix admin is super flexible, powerful, clean, modern & responsive admin template based on <span className="fw-semibold">bootstrap 5</span> stable with unlimited possibilities. You can simply change to any layout or mode by changing a couple of lines of code. You can start small and large projects or update design in your existing project using Hybrix it is very quick and easy as it is beautiful, adroit, and delivers the ultimate user experience.</p>
                                                            <Link scroll={false} href="#!" className="text-info">https://themesbrand.com/works</Link>
                                                        </div>
                                                        <div className="mb-4">
                                                            <h5><Link scroll={false} href="#">Themesbrand | Web design and development company</Link></h5>
                                                            <p className="text-muted mb-2">Hybrix admin is super flexible, powerful, clean, modern & responsive admin template based on <span className="fw-semibold">bootstrap 5</span> stable with unlimited possibilities. You can simply change to any layout or mode by changing a couple of lines of code. You can start small and large projects or update design in your existing project using Hybrix it is very quick and easy as it is beautiful, adroit, and delivers the ultimate user experience.</p>
                                                            <Link scroll={false} href="#!" className="text-info">https://themesbrand.com/works</Link>
                                                        </div>

                                                        <div className="d-md-flex align-items-center border-top pt-3 text-center text-md-start">
                                                            <div className="flex-grow-1 mt-2">
                                                                <div className="text-muted">Showing <span className="fw-semibold">8</span> of <span className="fw-semibold">125</span> Results</div>
                                                            </div>
                                                            <ul className="pagination pagination-separated justify-content-center mb-0 mt-2">
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
                                                    <Col xxl={4}>
                                                        <Card className="overflow-hidden">
                                                            <Card.Header className="p-4">
                                                                <div className="d-flex gap-3 align-items-center mb-4">
                                                                    <div className="flex-shrink-0">
                                                                        <Image src={logo} alt="" height="25" />
                                                                    </div>
                                                                    <div className="flex-grow-1">
                                                                        <h5 className="mb-1">Themes Brand - IT Company</h5>
                                                                        <div className="d-flex align-items-center gap-2">
                                                                            <p className="text-muted mb-0">5.0</p>
                                                                            <div className="text-warning">
                                                                                <i className="ph-star-fill"></i> <i className="ph-star-fill"></i> <i className="ph-star-fill"></i> <i className="ph-star-fill"></i> <i className="ph-star-fill"></i>
                                                                            </div>
                                                                            <p className="text-muted mb-0">1663 reviews</p>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <ul className="list-inline mb-2">
                                                                    <li className="list-inline-item">
                                                                        <Link scroll={false} href="#!" className="btn btn-sm btn-soft-info"><i className="ph-globe-simple align-middle"></i> Website</Link>
                                                                    </li>{" "}
                                                                    <li className="list-inline-item">
                                                                        <Link scroll={false} href="#!" className="btn btn-sm btn-soft-info"><i className="ph-map-pin align-middle"></i> Locations</Link>
                                                                    </li>{" "}
                                                                    <li className="list-inline-item">
                                                                        <Link scroll={false} href="#!" className="btn btn-sm btn-soft-info"><i className="ph-phone align-middle"></i> Contact Us</Link>
                                                                    </li>
                                                                </ul>
                                                                <p className="text-muted">Website designer in Surat, Gujarat</p>

                                                                <p className="text-muted mb-0">We understand how crucial a good User Interface is. UI is what keeps a user engaged or detached from a website. So we craft something that users can’t resist <Link scroll={false} href="#!">Read More</Link>.</p>

                                                            </Card.Header>
                                                            <Card.Body>
                                                                <div className="table-card table-responsive">
                                                                    <table className="table mb-0">
                                                                        <tbody>
                                                                            <tr>
                                                                                <th style={{ width: "110px" }}>Address</th>
                                                                                <td className="text-muted">404-B, Deepkamal 2, Nr. Sarthana Zoo Park, Sarthana Jakat Naka, Surat, Gujarat 395006</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th style={{ width: "110px" }}>Hours</th>
                                                                                <td className="text-muted">24/7 Hours</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th style={{ width: "110px" }}>Contact Us</th>
                                                                                <td className="text-muted"><Link scroll={false} href="#!" className="link-dark">078028 01866</Link></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th style={{ width: "110px" }}>Social Media</th>
                                                                                <td>
                                                                                    <div className="hstack gap-3">
                                                                                        <Link scroll={false} href="#!"><i className="bi bi-whatsapp"></i></Link>
                                                                                        <Link scroll={false} href="#!"><i className="bi bi-facebook"></i></Link>
                                                                                        <Link scroll={false} href="#!"><i className="bi bi-twitter"></i></Link>
                                                                                        <Link scroll={false} href="#!"><i className="bi bi-linkedin"></i></Link>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </Card.Body>
                                                            <Card.Body className="p-0">
                                                                <Row className="g-0">
                                                                    <Col lg={6}>
                                                                        <iframe className="w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.063273560225!2d72.89517741533432!3d21.229339386275537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f294a061655%3A0xae0998c532a11f96!2sThemes%20Brand%20-%20IT%20Company%20in%20Surat!5e0!3m2!1sen!2sin!4v1665380345709!5m2!1sen!2sin" style={{ border: "0" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                                                    </Col>
                                                                    <Col lg={6}>
                                                                        <Link scroll={false} href="#!">
                                                                            <Image src={smallImg2} alt="" className="img-fluid object-cover h-100" />
                                                                        </Link>
                                                                    </Col>
                                                                </Row>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="images" title="images">
                                                <Row>
                                                    <Col lg={12}>
                                                        <Swiper className="images-menu mb-3"
                                                            slidesPerView={25}
                                                            spaceBetween={10}
                                                            pagination={{ clickable: true }}
                                                        >
                                                            <div className="swiper-wrapper">
                                                                {(searchResultsSwiperData || []).map((item: any, key: number) => (<SwiperSlide key={key}>
                                                                    <div>
                                                                        <Link scroll={false} href="#" className="stretched-link" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="item.title"><Image src={item.img} alt="" className="avatar-sm rounded-circle object-cover" /></Link>
                                                                    </div>
                                                                </SwiperSlide>))}
                                                            </div>
                                                        </Swiper>
                                                    </Col>
                                                </Row>

                                                <Row className="g-4">
                                                    <Col>
                                                        <div className="imgs">
                                                            <Row id="gallery-element">

                                                                {(searchResultsGalleryData || []).map((item: any, key: number) => (
                                                                    <Col lg={4} key={key}>
                                                                        <Card className="border-0 gallery-card cursor-pointer" onClick={() => { setImageInfo(item); setIsOpen(true) }}>
                                                                            <div>
                                                                                <Image src={item.img} alt="" className="card-img-top gallery-img" height={208} width={313} />
                                                                            </div>
                                                                            <Card.Body>
                                                                                <Link scroll={false} href="#!"><h5 className="overlay-caption card-caption-title text-truncate mb-0">{item.caption}</h5></Link>
                                                                                <p className="card-caption-desc d-none">{item.captiondesc}</p>
                                                                            </Card.Body>
                                                                        </Card>
                                                                    </Col>))}
                                                            </Row>
                                                        </div>
                                                    </Col>

                                                    <Col xxl={4} id="overview-cardelem" className={isopen ? "" : "d-none"}>
                                                        <div className="main-img card p-2" id="gallerycard-overview">
                                                            <div className="position-relative">
                                                                <Button variant='light' size='sm' type="button" className="btn-close btn btn-icon position-absolute top-0 end-0 m-2" aria-label="Close" onClick={() => setIsOpen(false)}></Button>
                                                                <Image src={imageInfo.img} alt="" id="current" className="img-fluid rounded" />
                                                                <div className="position-absolute bottom-0 end-0 m-3 d-flex align-items-center gap-2">
                                                                    <Dropdown>
                                                                        <Dropdown.Toggle as="a" className="btn btn-icon btn-light arrow-none">
                                                                            <i className="ph-share-network fs-20"></i>
                                                                        </Dropdown.Toggle>
                                                                        <Dropdown.Menu as="ul">
                                                                            <li><Dropdown.Item href="#" className="link-primary"><i className="ph-facebook-logo-bold align-middle me-1"></i> Facebook</Dropdown.Item></li>
                                                                            <li><Dropdown.Item href="#" className="link-info"><i className="ph-twitter-logo-bold align-middle me-1"></i> Twitter</Dropdown.Item></li>
                                                                            <li><Dropdown.Item href="#" className="link-danger"><i className="ph-envelope-bold align-middle me-1"></i> Email</Dropdown.Item></li>
                                                                        </Dropdown.Menu>
                                                                    </Dropdown>
                                                                    <Button variant='light' type="button" className="btn-icon" id="prev-btn" onClick={() => prevImage()}><i className="ph-caret-double-left-bold fs-20"></i></Button>
                                                                    <Button variant='light' type="button" className="btn-icon" id="next-btn" onClick={() => nextImage()}><i className="ph-caret-double-right-bold fs-20"></i></Button>
                                                                </div>
                                                            </div>
                                                            <Card.Body>
                                                                <Link scroll={false} href="#!" className="link-success">themesbrand.com/portfolio</Link>
                                                                <Link scroll={false} href="#!"><h5 className="mt-2 overview-title">{imageInfo.caption}</h5></Link>
                                                                <p className="text-muted overview-desc text-truncate-two-lines mb-0">{imageInfo.captiondesc} <Link scroll={false} href="#!">Read More</Link>.</p>
                                                            </Card.Body>
                                                        </div>
                                                        <div className="d-flex align-items-center">
                                                            <h5 className="flex-grow-1 mb-0">Related images</h5>
                                                            <div className="flex-shrink-0">
                                                                <Link scroll={false} href="#!" className="text-decoration-underline">See More</Link>
                                                            </div>
                                                        </div>
                                                        <Row className="mt-3 g-3">

                                                            {(searchResultsImagesData || []).map((item: any, key: number) => (<Col lg={4} key={key}>
                                                                <div className="position-relative border-0">
                                                                    <div>
                                                                        <Image src={item.img} alt="" className="img-fluid rounded" />
                                                                    </div>
                                                                    <div className="mt-2">
                                                                        <Link scroll={false} href="#!" className="stretched-link">
                                                                            <h6 className="overlay-caption mb-0 text-truncate-two-lines">{item.caption}</h6>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </Col>))}
                                                        </Row>
                                                    </Col>

                                                </Row>

                                                <div className="text-center mt-3">
                                                    <button type="button" className="btn btn-ghost-success btn-load">
                                                        <span className="d-flex align-items-center">
                                                            <span className="spinner-border flex-shrink-0" role="status">
                                                                <span className="visually-hidden">Loading...</span>
                                                            </span>
                                                            <span className="flex-grow-1 ms-2">
                                                                Loading...
                                                            </span>
                                                        </span>
                                                    </button>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="news" title="news">
                                                <Row>
                                                    <Col xxl={8}>
                                                        {(searchResultsNewsData || []).map((item: any, key: number) => (<Card key={key}>
                                                            <Card.Body>
                                                                <div className="d-sm-flex">
                                                                    <div className="flex-shrink-0">
                                                                        <Image src={item.img} alt="" width="125" className="rounded" />
                                                                    </div>
                                                                    <div className="flex-grow-1 ms-sm-4 mt-3 mt-sm-0">
                                                                        <ul className="list-inline mb-2">
                                                                            <li className="list-inline-item"><i className="ph-broadcast-bold me-1"></i> {item.newsoutlet}</li>
                                                                        </ul>
                                                                        <Link scroll={false} href="#"><h5 className="mb-3">{item.newstitle}</h5></Link>
                                                                        <ul className="list-inline mb-0">
                                                                            <li className="list-inline-item"><i className="ph-user-bold text-primary align-middle me-1"></i> {item.name}</li>
                                                                            <li className="list-inline-item"><i className="ph-clock-bold text-primary align-middle me-1"></i> {item.time}</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>))}

                                                        <div className="d-flex align-items-center border-top pt-3">
                                                            <div className="flex-grow-1">
                                                                <div className="text-muted">Showing <span className="fw-semibold">8</span> of <span className="fw-semibold">125</span> Results</div>
                                                            </div>
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

                                                    <Col xxl={4}>
                                                        <Card className="overflow-hidden">
                                                            <Card.Header className="p-4">
                                                                <div className="d-flex gap-3 align-items-center mb-4">
                                                                    <div className="flex-shrink-0">
                                                                        <Image src={smallImg1} alt="" width="125" className="rounded" />
                                                                    </div>
                                                                    <div className="flex-grow-1">
                                                                        <h5>A mix of friends and strangers heading off to find an adventure</h5>
                                                                        <ul className="list-inline mb-2">
                                                                            <li className="list-inline-item"><i className="ph-broadcast-bold me-1"></i> CNBC News</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>

                                                                <ul className="list-inline mb-2">
                                                                    <li className="list-inline-item">
                                                                        <Link scroll={false} href="#!" className="btn btn-sm btn-soft-info"><i className="ph-globe-simple align-middle"></i> Website</Link>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <Link scroll={false} href="#!" className="btn btn-sm btn-soft-info"><i className="ph-map-pin align-middle"></i> Locations</Link>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <Link scroll={false} href="#!" className="btn btn-sm btn-soft-info"><i className="ph-phone align-middle"></i> Contact Us</Link>
                                                                    </li>
                                                                </ul>
                                                                <p className="text-muted">Website designer in Surat, Gujarat</p>

                                                                <p className="text-muted mb-0">We understand how crucial a good User Interface is. UI is what keeps a user engaged or detached from a website. So we craft something that users can’t resist Hybrix admin is super flexible, powerful, clean, modern & responsive admin template based on bootstrap 5 stable with unlimited possibilities. You can simply change to any layout or mode by changing a couple of lines of code. You can start small and large projects or update design. <Link scroll={false} href="#!">Read More</Link>.</p>

                                                            </Card.Header>
                                                            <Card.Body className="p-0">
                                                                <Row className="g-0">
                                                                    <Col lg={6}>
                                                                        <iframe className="w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.063273560225!2d72.89517741533432!3d21.229339386275537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f294a061655%3A0xae0998c532a11f96!2sThemes%20Brand%20-%20IT%20Company%20in%20Surat!5e0!3m2!1sen!2sin!4v1665380345709!5m2!1sen!2sin" style={{ border: "0" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                                                    </Col>
                                                                    <Col lg={6}>
                                                                        <Link scroll={false} href="#!">
                                                                            <Image src={smallImg2} alt="" className="img-fluid object-cover h-100" />
                                                                        </Link>
                                                                    </Col>
                                                                </Row>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="video" title="video">
                                                <p className="text-muted mb-4">Showing results for "Themesbrand"</p>
                                                <Row>
                                                    <Col xxl={8} className="video-list">
                                                        <div className="list-element">
                                                            <div className="d-flex flex-column flex-sm-row">
                                                                <div className="flex-shrink-0">
                                                                    <iframe src="https://www.youtube.com/embed/GfSZtaoc5bw" title="YouTube video" allowFullScreen className="rounded"></iframe>
                                                                </div>
                                                                <div className="flex-grow-1 ms-sm-3 mt-2 mt-sm-0">
                                                                    <div className="position-relative">
                                                                        <p className="text-success mb-2">themesbrand.com/Hybrix/index.html</p>
                                                                        <Link scroll={false} href="#" className="stretched-link"><h5 className="mb-3">Admin dashboard templates - Material Design for Hybrix</h5></Link>
                                                                    </div>
                                                                    <p className="text-muted mb-2">Hybrix admin is super flexible, powerful, clean, modern & responsive admin template based on <b>bootstrap 5</b> stable with unlimited possibilities. You can simply change to any layout or mode by changing a couple of lines of code. You can start small and large projects or update design.</p>
                                                                    <ul className="list-unstyled d-flex align-items-center gap-3 text-muted fs-14 mb-0">
                                                                        <li>
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="flex-shrink-0">
                                                                                    <i className="ph-youtube-logo-bold"></i>
                                                                                </div>
                                                                                <div className="flex-grow-1 fs-13 ms-1">
                                                                                    <Link scroll={false} href="#!" className="fw-medium">Themesbrand</Link>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                        <li><i className="ph-clock-bold align-middle"></i> 3 days ago</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="list-element mt-4">
                                                            <div className="d-flex flex-column flex-sm-row">
                                                                <div className="flex-shrink-0">
                                                                    <iframe src="https://www.youtube.com/embed/Z-fV2lGKnnU" title="YouTube video" allowFullScreen className="rounded"></iframe>
                                                                </div>
                                                                <div className="flex-grow-1 ms-sm-3 mt-2 mt-sm-0">
                                                                    <div className="position-relative">
                                                                        <p className="text-success mb-2">themesbrand.com/Hybrix/index.html</p>
                                                                        <Link scroll={false} href="#" className="stretched-link">
                                                                            <h5 className="mb-3">Create Responsive Admin Dashboard using Html CSS</h5>
                                                                        </Link>
                                                                    </div>
                                                                    <p className="text-muted mb-2">Hybrix admin is super flexible, powerful, clean, modern & responsive admin template based on <b>bootstrap 5</b> stable with unlimited possibilities. You can simply change to any layout or mode by changing a couple of lines of code. You can start small and large projects or update design.</p>
                                                                    <ul className="list-unstyled d-flex align-items-center gap-3 text-muted fs-14 mb-0">
                                                                        <li>
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="flex-shrink-0">
                                                                                    <i className="ph-youtube-logo-bold"></i>
                                                                                </div>
                                                                                <div className="flex-grow-1 fs-13 ms-1">
                                                                                    <Link scroll={false} href="#!" className="fw-medium">Themesbrand</Link>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                        <li><i className="ph-clock-bold align-middle"></i> 15 days ago</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="list-element mt-4">
                                                            <div className="d-flex flex-column flex-sm-row">
                                                                <div className="flex-shrink-0">
                                                                    <iframe src="https://www.youtube.com/embed/2RZQN_ko0iU" title="YouTube video" allowFullScreen className="rounded"></iframe>
                                                                </div>
                                                                <div className="flex-grow-1 ms-sm-3 mt-2 mt-sm-0">
                                                                    <div className="position-relative">
                                                                        <p className="text-success mb-2">themesbrand.com/Hybrix/index.html</p>
                                                                        <Link scroll={false} href="#" className="stretched-link">
                                                                            <h5 className="mb-3">Hybrix - The Most Popular Bootstrap 5 HTML, Angular & React Js Admin</h5>
                                                                        </Link>
                                                                    </div>
                                                                    <p className="text-muted mb-2">Hybrix admin is super flexible, powerful, clean, modern & responsive admin template based on <b>bootstrap 5</b> stable with unlimited possibilities. You can simply change to any layout or mode by changing a couple of lines of code. You can start small and large projects or update design.</p>
                                                                    <ul className="list-unstyled d-flex align-items-center gap-3 text-muted fs-14 mb-0">
                                                                        <li>
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="flex-shrink-0">
                                                                                    <i className="ph-youtube-logo-bold"></i>
                                                                                </div>
                                                                                <div className="flex-grow-1 fs-13 ms-1">
                                                                                    <Link scroll={false} href="#!" className="fw-medium">Themesbrand</Link>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                        <li><i className="ph-clock-bold align-middle"></i> 17 Nov, 2022</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="list-element mt-4">
                                                            <div className="d-flex flex-column flex-sm-row">
                                                                <div className="flex-shrink-0">
                                                                    <iframe src="https://www.youtube.com/embed/Z-fV2lGKnnU" title="YouTube video" allowFullScreen className="rounded"></iframe>
                                                                </div>
                                                                <div className="flex-grow-1 ms-sm-3 mt-2 mt-sm-0">
                                                                    <div className="position-relative">
                                                                        <p className="text-success mb-2">themesbrand.com/Hybrix/index.html</p>
                                                                        <Link scroll={false} href="#" className="stretched-link">
                                                                            <h5 className="mb-3">Hybrix Admin Dashboard (website analytics) with Bootstrap 5</h5>
                                                                        </Link>
                                                                    </div>
                                                                    <p className="text-muted mb-2">Hybrix admin is super flexible, powerful, clean, modern & responsive admin template based on <b>bootstrap 5</b> stable with unlimited possibilities. You can simply change to any layout or mode by changing a couple of lines of code. You can start small and large projects or update design.</p>
                                                                    <ul className="list-unstyled d-flex align-items-center gap-3 text-muted fs-14 mb-0">
                                                                        <li>
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="flex-shrink-0">
                                                                                    <i className="ph-youtube-logo-bold"></i>
                                                                                </div>
                                                                                <div className="flex-grow-1 fs-13 ms-1">
                                                                                    <Link scroll={false} href="#!" className="fw-medium">Themesbrand</Link>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                        <li><i className="ph-clock-bold align-middle"></i> 02 Nov, 2022</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="list-element mt-4">
                                                            <div className="d-flex flex-column flex-sm-row">
                                                                <div className="flex-shrink-0">
                                                                    <iframe src="https://www.youtube.com/embed/1y_kfWUCFDQ" title="YouTube video" allowFullScreen className="rounded"></iframe>
                                                                </div>
                                                                <div className="flex-grow-1 ms-sm-3 mt-2 mt-sm-0">
                                                                    <div className="position-relative">
                                                                        <p className="text-success mb-2">themesbrand.com/Hybrix/index.html</p>
                                                                        <Link scroll={false} href="#" className="stretched-link">
                                                                            <h5 className="mb-3">Dashboard Admin Basics - YouTube</h5>
                                                                        </Link>
                                                                    </div>
                                                                    <p className="text-muted mb-2">Hybrix admin is super flexible, powerful, clean, modern & responsive admin template based on <b>bootstrap 5</b> stable with unlimited possibilities. You can simply change to any layout or mode by changing a couple of lines of code. You can start small and large projects or update design.</p>
                                                                    <ul className="list-unstyled d-flex align-items-center gap-3 text-muted fs-14 mb-0">
                                                                        <li>
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="flex-shrink-0">
                                                                                    <i className="ph-youtube-logo-bold"></i>
                                                                                </div>
                                                                                <div className="flex-grow-1 fs-13 ms-1">
                                                                                    <Link scroll={false} href="#!" className="fw-medium">Themesbrand</Link>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                        <li><i className="ph-clock-bold align-middle"></i> 30 Oct, 2022</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>


                                                    </Col>

                                                    <div className="text-center mt-4">
                                                        <button type="button" className="btn btn-ghost-success btn-load">
                                                            <span className="d-flex align-items-center">
                                                                <span className="spinner-border flex-shrink-0" role="status">
                                                                    <span className="visually-hidden">Loading...</span>
                                                                </span>
                                                                <span className="flex-grow-1 ms-2">
                                                                    Load More
                                                                </span>
                                                            </span>
                                                        </button>
                                                    </div>
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>
            </div >
        </React.Fragment >

    );
}

SearchResults.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

export default SearchResults;