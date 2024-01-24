import React from 'react';
import Image from 'next/image';
import { Button, Card, Col, Dropdown } from 'react-bootstrap';

//import Images
import avatar2 from "@assets/images/users/avatar-2.jpg";
import avatar3 from "@assets/images/users/avatar-3.jpg";
import avatar8 from "@assets/images/users/avatar-8.jpg";
import avatar9 from "@assets/images/users/avatar-9.jpg";
import Link from 'next/link';

const Connections = () => {

    const followBtn = (ele: any) => {
        let btn = ele.target.closest("button")
        if (btn.classList.contains("active")) {
            btn.classList.remove("active")
        } else {
            btn.classList.add("active")
        }
    }

    return (
        <React.Fragment>
            <Col xl={6}>
                <Card>
                    <Card.Header className="d-flex align-items-center">
                        <div className="flex-grow-1">
                            <h5 className="card-title mb-0">Connections</h5>
                        </div>
                        <div className="flex-shrink-0">
                            <Dropdown drop="start">
                                <Dropdown.Toggle as="a" className="arrow-none">
                                    <i className="ri-more-2-fill fs-14"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                    <li> <Dropdown.Item href="">View</Dropdown.Item> </li>
                                    <li> <Dropdown.Item href="">Edit</Dropdown.Item> </li>
                                    <li> <Dropdown.Item href="#">Delete</Dropdown.Item> </li>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <div>
                            <div className="d-flex align-items-center pb-3">
                                <div className="avatar-xs flex-shrink-0 me-3">
                                    <Image src={avatar3} alt="" className="img-fluid rounded-circle" />
                                </div>
                                <div className="flex-grow-1">
                                    <div>
                                        <h6 className="mb-1">Esther James</h6>
                                        <p className="fs-12 text-muted mb-0">475 Connections</p>
                                    </div>
                                </div>
                                <div className="flex-shrink-0 ms-2">
                                    <Button type="button" variant='outline-info' size='sm' className="custom-toggle active" onClick={(e) => followBtn(e)}>
                                        <span className="icon-on"><i className="ri-user-follow-line align-bottom me-1"></i> Follow</span>
                                        <span className="icon-off"><i className="ri-user-unfollow-line align-bottom me-1"></i> Unfollow</span>
                                    </Button>
                                </div>
                            </div>
                            <div className="d-flex align-items-center py-3">
                                <div className="avatar-xs flex-shrink-0 me-3">
                                    <Image src={avatar2} alt="" className="img-fluid rounded-circle" />
                                </div>
                                <div className="flex-grow-1">
                                    <div>
                                        <h6 className="mb-1">George Whalen</h6>
                                        <p className="fs-12 text-muted mb-0">Backend Developer</p>
                                    </div>
                                </div>
                                <div className="flex-shrink-0 ms-2">
                                    <Button type="button" variant='outline-info' size='sm' className="custom-toggle" onClick={(e) => followBtn(e)}>
                                        <span className="icon-on"><i className="ri-user-follow-line align-bottom me-1"></i> Follow</span>
                                        <span className="icon-off"><i className="ri-user-unfollow-line align-bottom me-1"></i> Unfollow</span>
                                    </Button>
                                </div>
                            </div>
                            <div className="d-flex align-items-center py-3">
                                <div className="avatar-xs flex-shrink-0 me-3">
                                    <Image src={avatar8} alt="" className="img-fluid rounded-circle" />
                                </div>
                                <div className="flex-grow-1">
                                    <div>
                                        <h6 className="mb-1">Daniel Gonzalez</h6>
                                        <p className="fs-12 text-muted mb-0">React JS Developer</p>
                                    </div>
                                </div>
                                <div className="flex-shrink-0 ms-2">
                                    <Button variant='outline-info' size='sm' type="button" className="custom-toggle" onClick={(e) => followBtn(e)}>
                                        <span className="icon-on"><i className="ri-user-follow-line align-bottom me-1"></i> Follow</span>
                                        <span className="icon-off"><i className="ri-user-unfollow-line align-bottom me-1"></i> Unfollow</span>
                                    </Button>
                                </div>
                            </div>
                            <div className="d-flex align-items-center py-3">
                                <div className="avatar-xs flex-shrink-0 me-3">
                                    <Image src={avatar9} alt="" className="img-fluid rounded-circle" />
                                </div>
                                <div className="flex-grow-1">
                                    <div>
                                        <h6 className="mb-1">Scott Wilson</h6>
                                        <p className="fs-12 text-muted mb-0">Full Stack Developer</p>
                                    </div>
                                </div>
                                <div className="flex-shrink-0 ms-2">
                                    <Button variant='outline-info' size='sm' type="button" className="custom-toggle" onClick={(e) => followBtn(e)}>
                                        <span className="icon-on"><i className="ri-user-follow-line align-bottom me-1"></i> Follow</span>
                                        <span className="icon-off"><i className="ri-user-unfollow-line align-bottom me-1"></i> Unfollow</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                    <div className="card-footer text-center">
                        <Link href="#!" className="link-secondar">View All Connections <i className="bi bi-arrow-right"></i></Link>
                    </div>
                </Card>
            </Col>
        </React.Fragment >
    );
}

export default Connections;