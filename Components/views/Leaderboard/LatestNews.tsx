import React from 'react';
import Image from 'next/image';
import SimpleBar from 'simplebar-react';
import { Button, Card, Col } from 'react-bootstrap';

import avatar1 from "@assets/images/users/avatar-1.jpg";
import avatar3 from "@assets/images/users/avatar-3.jpg";
import avatar8 from "@assets/images/users/avatar-8.jpg";
import avatar9 from "@assets/images/users/avatar-9.jpg";
import Link from 'next/link';


const LatestNews = () => {
    return (
        <React.Fragment>
            <Col xl={3}>
                <Card>
                    <Card.Header className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Latest News</h4>
                        <div className="flex-shrink-0">
                            <Button variant='soft-primary' size='sm' type="button">
                                Show All
                            </Button>
                        </div>
                    </Card.Header>
                    <Card.Body className="px-0">
                        <SimpleBar style={{ maxHeight: "380px" }} className="p-3 pt-0">
                            <Link href="#!" className="d-flex border-bottom pb-3">
                                <div className="flex-shrink-0">
                                    <div className="avatar-sm p-1 bg-card-custom border rounded-circle me-3">
                                        <Image src={avatar1} className="img-fluid rounded-circle" alt="" />
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-16 mb-1">Henry Carter</h5>
                                    <span className="text-muted mb-0">Andrei Coman magna sed porta finibus, risus posted a new article: <b className="text-primary">Forget UX Rowland</b></span>
                                </div>
                            </Link>

                            <Link href="#!" className="d-flex border-bottom py-3">
                                <div className="flex-shrink-0">
                                    <div className="avatar-sm p-1 bg-card-custom border rounded-circle me-3">
                                        <Image src={avatar3} className="img-fluid rounded-circle" alt="" />
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-16 mb-1">Melvin J. Oxford</h5>
                                    <span className="text-muted">Andrei Coman posted a new article: <b className="text-primary">Designer Alex</b></span>
                                </div>
                            </Link>

                            <Link href="#!" className="d-flex border-bottom py-3">
                                <div className="flex-shrink-0">
                                    <div className="avatar-sm p-1 bg-card-custom border rounded-circle me-3">
                                        <Image src={avatar8} className="img-fluid rounded-circle" alt="" />
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-16 mb-1">Marvin J. Veras</h5>
                                    <span className="text-muted">Edward Diana, sed porta finibus, risus Chris Wallace Commented <b className="text-primary"> Developer Moreno</b></span>
                                </div>
                            </Link>

                            <Link href="#!" className="d-flex border-bottom py-3">
                                <div className="flex-shrink-0">
                                    <div className="avatar-sm p-1 bg-card-custom border rounded-circle me-3">
                                        <Image src={avatar9} className="img-fluid rounded-circle" alt="" />
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-16 mb-1">Marvin J. Veras</h5>
                                    <span className="text-muted">Edward Diana, Chris combined with Wallace They Commented <b className="text-primary">UX Murphy</b></span>
                                </div>
                            </Link>

                            <Link href="#!" className="d-flex pt-3">
                                <div className="flex-shrink-0">
                                    <div className="avatar-sm p-1 bg-white border rounded-circle me-3">
                                        <Image src={avatar1} className="img-fluid rounded-circle" alt="" />
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-16 mb-1">Henry Carter</h5>
                                    <span className="text-muted mb-0">Andrei Coman magna sed porta finibus, risus posted a new article: <b className="text-primary">Forget UX Rowland</b></span>
                                </div>
                            </Link>
                        </SimpleBar>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default LatestNews;