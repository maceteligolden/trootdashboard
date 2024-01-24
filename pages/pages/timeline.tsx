import React, { ReactElement, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Breadcrumb from '@common/Breadcrumb';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import avatar4 from "@assets/images/users/avatar-4.jpg"
import avatar5 from "@assets/images/users/avatar-5.jpg"
import avatar6 from "@assets/images/users/avatar-6.jpg"
import Link from 'next/link';
import Layout from '@common/Layout';

const Timeline = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    return (
        <React.Fragment>
            <Head>
                <title>Timeline | Hybrix - Admin & Dashboard Template</title>
            </Head>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb breadcrumb="Pages" breadcrumbItem="Timeline" />
                    <Row>
                        <Col lg={12}>
                            <div className="timeline mt-5">
                                <div className="timeline-line">
                                    <div className="timeline-box ">
                                        <div className="date">22 Oct 2022</div>
                                        <div className="content">
                                            <h5>Frank hook joined with our company</h5>
                                            <p className="text-muted mb-0">
                                                It makes a statement, it’s impressive graphic design. Increase or decrease the letter spacing depending on the situation and try, try again until it looks right, and each letter has the perfect spot of its own.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline-line">
                                    <div className="timeline-box">
                                        <div className="date">30 Oct 2022</div>
                                        <div className="content">
                                            <h5>Design Review with Timeless</h5>
                                            <p className="text-muted">
                                                12:30 - 03:20 PM, California, US.
                                            </p>
                                            <div className="avatar-group">
                                                <div className="avatar-group-item">
                                                    <Image src={avatar4} alt="" className="rounded-circle avatar-xs" />
                                                </div>
                                                <div className="avatar-group-item">
                                                    <Image src={avatar5} alt="" className="rounded-circle avatar-xs" />
                                                </div>
                                                <div className="avatar-group-item">
                                                    <div className="avatar-xs">
                                                        <div className="avatar-title rounded-circle bg-light text-primary">
                                                            A
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="avatar-group-item">
                                                    <Image src={avatar6} alt="" className="rounded-circle avatar-xs" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline-line">
                                    <div className="timeline-box">
                                        <div className="date">19 Nov 2022</div>
                                        <div className="content">
                                            <div className="d-flex gap-3 mb-3">
                                                <div className="flex-shrink-0">
                                                    <Image src={avatar6} alt="" className="avatar-sm rounded-circle" />
                                                </div>
                                                <div>
                                                    <h5 className="mb-1">Brianna Clinton</h5>
                                                    <p className="text-muted mb-0">Creative Designer</p>
                                                </div>
                                            </div>
                                            <p className="text-muted mb-0">
                                                I'm so impressed by your dedication to learning. I know it wasn't easy when that technology solution you presented didn't work out.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline-line">
                                    <div className="timeline-box">
                                        <div className="date">24 Nov 2022</div>
                                        <div className="content">
                                            <div className="mb-3">
                                                <span className="badge text-secondary bg-secondary-subtle">Business</span>
                                                <span className="badge text-secondary bg-secondary-subtle ms-1">Marketing</span>
                                            </div>
                                            <p className="text-muted mb-2">
                                                A business is defined as <b>an organization or enterprising entity engaged in commercial, industrial, or professional activities.</b> Businesses can be for-profit entities or non-profit organizations. Business types range from limited liability companies to sole proprietorships, corporations, and partnerships.
                                            </p>

                                            <ul className="list-inline mb-0">
                                                <li className="list-inline-item">
                                                    <div className="d-flex gap-2">
                                                        <i className="bi bi-emoji-smile text-muted"></i> 3 reactions
                                                    </div>
                                                </li>
                                                <li className="list-inline-item">
                                                    <div className="d-flex gap-2">
                                                        <i className="bi bi-chat-left-text text-muted"></i> 245
                                                    </div>
                                                </li>
                                                <li className="list-inline-item">
                                                    <div className="d-flex gap-2">
                                                        <i className="bi bi-eye text-muted"></i> 530
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline-line">
                                    <div className="timeline-box">
                                        <div className="date">15 Dec 2022</div>
                                        <div className="content">
                                            <h5>Project</h5>
                                            <p className="text-muted">
                                                <b>@jennifer_daina</b> edited <b>hybrix.zip</b> and attach 2 files to the hybrix project.
                                            </p>

                                            <Row>
                                                <Col lg={5}>
                                                    <Card className="border-dashed shadow-none mb-0">
                                                        <Card.Body className="p-2">
                                                            <div className="d-flex align-items-center gap-2">
                                                                <div className="avatar-xs flex-shrink-0">
                                                                    <div className="avatar-title bg-light text-muted rounded">
                                                                        <i className="bi bi-file-earmark-zip"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="flex-grow-1">
                                                                    <h6 className="mb-1">hybrix.zip</h6>
                                                                    <p className="fs-11 text-muted mb-0">12.76 MP</p>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col lg={5}>
                                                    <Card className="border-dashed shadow-none mb-0">
                                                        <Card.Body className="p-2">
                                                            <div className="d-flex align-items-center gap-2">
                                                                <div className="avatar-xs flex-shrink-0">
                                                                    <div className="avatar-title bg-light text-muted rounded">
                                                                        <i className="bi bi-file-earmark-pdf"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="flex-grow-1">
                                                                    <h6 className="mb-1">documentation.pdf</h6>
                                                                    <p className="fs-11 text-muted mb-0">754 KB</p>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline-line">
                                    <div className="timeline-box">
                                        <div className="date">8 Jan 2023</div>
                                        <div className="content">
                                            <h5>New ticket received <span className="badge bg-info-subtle text-info fs-10 align-middle ms-1">New</span></h5>
                                            <p className="text-muted mb-2">
                                                It is important for us that we receive email notifications when a ticket is created as our IT staff are mobile and will not always be looking at the dashboard for new tickets.
                                            </p>
                                            <Link scroll={false} href="#" className="link-secondary">Read More <i className="ri-arrow-right-line"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-4">
                        <Col lg={12}>
                            <div>
                                <h5>Horizontal Timeline</h5>
                                <div className="horizontal-timeline my-3">
                                    <Swiper className="timelineSlider"
                                        navigation={true}
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false,
                                        }}
                                        thumbs={{ swiper: thumbsSwiper }}
                                        modules={[Autoplay, Navigation, Thumbs]}
                                        slidesPerView={5}
                                    >
                                        <div className="swiper-wrapper">
                                            <SwiperSlide>
                                                <Card className="pt-2 border-0 item-box text-center">
                                                    <div className="timeline-content p-3 rounded border border-dashed">
                                                        <div>
                                                            <p className="text-muted fw-medium mb-2">October, 2022</p>
                                                            <h6 className="mb-0 fs-15">Plateform Development</h6>
                                                        </div>
                                                    </div>
                                                    <div className="time"><span className="badge text-bg-secondary">23 Oct</span></div>
                                                </Card>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <Card className="pt-2 border-0 item-box text-center">
                                                    <div className="timeline-content p-3 rounded border border-dashed">
                                                        <div>
                                                            <p className="text-muted mb-2">October, 2022</p>
                                                            <h6 className="mb-0 fs-15">Release Bank & Cards Phase</h6>
                                                        </div>
                                                    </div>
                                                    <div className="time"><span className="badge text-bg-secondary">31 Oct</span></div>
                                                </Card>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <Card className="pt-2 border-0 item-box text-center">
                                                    <div className="timeline-content p-3 rounded border border-dashed">
                                                        <div>
                                                            <p className="text-muted mb-2">November, 2022</p>
                                                            <h6 className="mb-0 fs-15">Beta Launch of Plateform</h6>
                                                        </div>
                                                    </div>
                                                    <div className="time"><span className="badge text-bg-secondary">24 Nov</span></div>
                                                </Card>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <Card className="pt-2 border-0 item-box text-center">
                                                    <div className="timeline-content p-3 rounded border border-dashed">
                                                        <div>
                                                            <p className="text-muted mb-2">December, 2022</p>
                                                            <h6 className="mb-0 fs-15">First Crypto Bank Transfers</h6>
                                                        </div>
                                                    </div>
                                                    <div className="time"><span className="badge text-bg-secondary">07 Dec</span></div>
                                                </Card>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <Card className="pt-2 border-0 item-box text-center">
                                                    <div className="timeline-content p-3 rounded border border-dashed">
                                                        <div>
                                                            <p className="text-muted mb-2">January, 2023</p>
                                                            <h6 className="mb-0 fs-15">Launch Ethbay Services</h6>
                                                        </div>
                                                    </div>
                                                    <div className="time"><span className="badge text-bg-secondary">15 Jan</span></div>
                                                </Card>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <Card className="pt-2 border-0 item-box text-center">
                                                    <div className="timeline-content p-3 rounded border border-dashed">
                                                        <div>
                                                            <p className="text-muted mb-2">February, 2023</p>
                                                            <h6 className="mb-0 fs-15">Fastest Crypto Transaction</h6>
                                                        </div>
                                                    </div>
                                                    <div className="time"><span className="badge text-bg-secondary">03 Feb</span></div>
                                                </Card>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <Card className="pt-2 border-0 item-box text-center">
                                                    <div className="timeline-content p-3 rounded border border-dashed">
                                                        <div>
                                                            <p className="text-muted mb-2">July, 2023</p>
                                                            <h6 className="mb-0 fs-15">Crypto Blockchain Release</h6>
                                                        </div>
                                                    </div>
                                                    <div className="time"><span className="badge text-bg-secondary">24 July</span></div>
                                                </Card>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <Card className="pt-2 border-0 item-box text-center">
                                                    <div className="timeline-content p-3 rounded border border-dashed">
                                                        <div>
                                                            <p className="text-muted mb-2">August, 2023</p>
                                                            <h6 className="mb-0 fs-16">Launch Ethereum Classifieds</h6>
                                                        </div>
                                                    </div>
                                                    <div className="time"><span className="badge text-bg-secondary">16 Aug</span></div>
                                                </Card>
                                            </SwiperSlide>
                                        </div>
                                        {/* <div className="swiper-button-next"></div>
                                        <div className="swiper-button-prev"></div> */}
                                    </Swiper>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment >
    );
}

Timeline.getLayout = (page: ReactElement) => {
    return (
      <Layout>
        {page}
      </Layout>
    )
};

export default Timeline;