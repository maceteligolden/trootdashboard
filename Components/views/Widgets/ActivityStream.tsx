import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SimpleBar from 'simplebar-react';
import { Button, Card, Col, Row } from 'react-bootstrap';

import smallImg3 from "@assets/images/small/img-3.jpg"
import smallImg5 from "@assets/images/small/img-5.jpg"
import smallImg7 from "@assets/images/small/img-7.jpg"
import smallImg9 from "@assets/images/small/img-9.jpg"

const ActivityStream = () => {
    return (
        <React.Fragment>
            <Col xl={6}>
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
                        <SimpleBar style={{ maxHeight: "330px" }} className="p-3 pt-0">
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
                                                    <Link href="#" className="stretched-link">
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
                                                    <Link href="#" className="stretched-link">
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
                                                <div className="col-3">
                                                    <Image src={smallImg3} alt="" className="img-fluid rounded" />
                                                </div>

                                                <div className="col-3">
                                                    <Image src={smallImg5} alt="" className="img-fluid rounded" />
                                                </div>

                                                <div className="col-3">
                                                    <Image src={smallImg7} alt="" className="img-fluid rounded" />
                                                </div>

                                                <div className="col-3">
                                                    <Image src={smallImg9} alt="" className="img-fluid rounded" />
                                                </div>
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
        </React.Fragment >
    );
}

export default ActivityStream;