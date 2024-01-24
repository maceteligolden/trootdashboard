import React from 'react';
import Image from 'next/image';
import { Card, Col, Dropdown, Row } from 'react-bootstrap';

//import Images
import avatar1 from "@assets/images/users/avatar-1.jpg";
import avatar2 from "@assets/images/users/avatar-2.jpg";
import avatar3 from "@assets/images/users/avatar-3.jpg";
import avatar4 from "@assets/images/users/avatar-4.jpg";
import avatar5 from "@assets/images/users/avatar-5.jpg";
import avatar6 from "@assets/images/users/avatar-6.jpg";
import avatar7 from "@assets/images/users/avatar-7.jpg";
import avatar8 from "@assets/images/users/avatar-8.jpg";
import Link from 'next/link';

const UpcomingActivities = () => {
    return (
        <React.Fragment>
            <Col xxl={5}>
                <Card className="card-height-100">
                    <Card.Header className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Upcoming Activities</h4>
                        <div className="flex-shrink-0">
                            <Dropdown drop="start" className="card-header-dropdown">
                                <Dropdown.Toggle as="a" className="text-reset dropdown-btn arrow-none">
                                    <span className="text-muted fs-18"><i className="mdi mdi-dots-vertical"></i></span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                    <li> <Dropdown.Item href="#">Edit</Dropdown.Item> </li>
                                    <li> <Dropdown.Item href="#">Remove</Dropdown.Item> </li>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Card.Header>
                    <Card.Body className="pt-0">
                        <ul className="list-group list-group-flush border-dashed">
                            <li className="list-group-item ps-0">
                                <Row className="align-items-center g-3">
                                    <div className="col-auto">
                                        <div className="avatar-sm p-1 py-2 h-auto bg-light rounded-3">
                                            <div className="text-center">
                                                <h5 className="mb-0">25</h5>
                                                <div className="text-muted">Tue</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <h5 className="text-muted mt-0 mb-1 fs-13">12:00am - 03:30pm</h5>
                                        <Link href="#" scroll={false} className="text-reset fs-14 mb-0">Meeting for campaign with sales team</Link>
                                    </div>
                                    <div className="col-sm-auto">
                                        <div className="avatar-group">
                                            <div className="avatar-group-item">
                                                <Link href="#" scroll={false} className="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Stine Nielsen">
                                                    <Image src={avatar1} alt="" className="rounded-circle avatar-xxs" />
                                                </Link>
                                            </div>
                                            <div className="avatar-group-item">
                                                <Link href="#" scroll={false} className="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Jansh Brown">
                                                    <Image src={avatar2} alt="" className="rounded-circle avatar-xxs" />
                                                </Link>
                                            </div>
                                            <div className="avatar-group-item">
                                                <Link href="#" scroll={false} className="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Dan Gibson">
                                                    <Image src={avatar3} alt="" className="rounded-circle avatar-xxs" />
                                                </Link>
                                            </div>
                                            <div className="avatar-group-item">
                                                <Link href="#" scroll={false}>
                                                    <div className="avatar-xxs">
                                                        <span className="avatar-title rounded-circle bg-info text-white">
                                                            5
                                                        </span>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                            </li>
                            <li className="list-group-item ps-0">
                                <Row className="align-items-center g-3">
                                    <div className="col-auto">
                                        <div className="avatar-sm p-1 py-2 h-auto bg-light rounded-3">
                                            <div className="text-center">
                                                <h5 className="mb-0">20</h5>
                                                <div className="text-muted">Wed</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <h5 className="text-muted mt-0 mb-1 fs-13">02:00pm - 03:45pm</h5>
                                        <Link href="#" scroll={false} className="text-reset fs-14 mb-0">Adding a new event with attachments</Link>
                                    </div>
                                    <div className="col-sm-auto">
                                        <div className="avatar-group">
                                            <div className="avatar-group-item">
                                                <Link href="#" scroll={false} className="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Frida Bang">
                                                    <Image src={avatar4} alt="" className="rounded-circle avatar-xxs" />
                                                </Link>
                                            </div>
                                            <div className="avatar-group-item">
                                                <Link href="#" scroll={false} className="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Malou Silva">
                                                    <Image src={avatar5} alt="" className="rounded-circle avatar-xxs" />
                                                </Link>
                                            </div>
                                            <div className="avatar-group-item">
                                                <Link href="#" scroll={false} className="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Simon Schmidt">
                                                    <Image src={avatar6} alt="" className="rounded-circle avatar-xxs" />
                                                </Link>
                                            </div>
                                            <div className="avatar-group-item">
                                                <Link href="#" scroll={false} className="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Tosh Jessen">
                                                    <Image src={avatar7} alt="" className="rounded-circle avatar-xxs" />
                                                </Link>
                                            </div>
                                            <div className="avatar-group-item">
                                                <Link href="#" scroll={false}>
                                                    <div className="avatar-xxs">
                                                        <span className="avatar-title rounded-circle bg-success text-white">
                                                            3
                                                        </span>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                            </li>
                            <li className="list-group-item ps-0">
                                <Row className="align-items-center g-3">
                                    <div className="col-auto">
                                        <div className="avatar-sm p-1 py-2 h-auto bg-light rounded-3">
                                            <div className="text-center">
                                                <h5 className="mb-0">17</h5>
                                                <div className="text-muted">Wed</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <h5 className="text-muted mt-0 mb-1 fs-13">04:30pm - 07:15pm</h5>
                                        <Link href="#" scroll={false} className="text-reset fs-14 mb-0">Create new project Bundling Product</Link>
                                    </div>
                                    <div className="col-sm-auto">
                                        <div className="avatar-group">
                                            <div className="avatar-group-item">
                                                <Link href="#" scroll={false} className="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Nina Schmidt">
                                                    <Image src={avatar8} alt="" className="rounded-circle avatar-xxs" />
                                                </Link>
                                            </div>
                                            <div className="avatar-group-item">
                                                <Link href="#" scroll={false} className="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Stine Nielsen">
                                                    <Image src={avatar1} alt="" className="rounded-circle avatar-xxs" />
                                                </Link>
                                            </div>
                                            <div className="avatar-group-item">
                                                <Link href="#" scroll={false} className="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Jansh Brown">
                                                    <Image src={avatar2} alt="" className="rounded-circle avatar-xxs" />
                                                </Link>
                                            </div>
                                            <div className="avatar-group-item">
                                                <Link href="#" scroll={false}>
                                                    <div className="avatar-xxs">
                                                        <span className="avatar-title rounded-circle bg-primary text-white">
                                                            4
                                                        </span>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                            </li>
                            <li className="list-group-item ps-0">
                                <Row className="align-items-center g-3">
                                    <div className="col-auto">
                                        <div className="avatar-sm p-1 py-2 h-auto bg-light rounded-3">
                                            <div className="text-center">
                                                <h5 className="mb-0">12</h5>
                                                <div className="text-muted">Tue</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <h5 className="text-muted mt-0 mb-1 fs-13">10:30am - 01:15pm</h5>
                                        <Link href="#" scroll={false} className="text-reset fs-14 mb-0">Weekly closed sales won checking with sales team</Link>
                                    </div>
                                    <div className="col-sm-auto">
                                        <div className="avatar-group">
                                            <div className="avatar-group-item">
                                                <Link href="#" scroll={false} className="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Stine Nielsen">
                                                    <Image src={avatar1} alt="" className="rounded-circle avatar-xxs" />
                                                </Link>
                                            </div>
                                            <div className="avatar-group-item">
                                                <Link href="#" scroll={false} className="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Jansh Brown">
                                                    <Image src={avatar5} alt="" className="rounded-circle avatar-xxs" />
                                                </Link>
                                            </div>
                                            <div className="avatar-group-item">
                                                <Link href="#" scroll={false} className="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Dan Gibson">
                                                    <Image src={avatar2} alt="" className="rounded-circle avatar-xxs" />
                                                </Link>
                                            </div>
                                            <div className="avatar-group-item">
                                                <Link href="#" scroll={false}>
                                                    <div className="avatar-xxs">
                                                        <span className="avatar-title rounded-circle bg-warning text-white">
                                                            9
                                                        </span>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                            </li>
                            {/* <li className="list-group-item ps-0">
                                <Row className="align-items-center g-3">
                                    <div className="col-auto">
                                        <div className="avatar-sm p-1 py-2 h-auto bg-light rounded-3">
                                            <div className="text-center">
                                                <h5 className="mb-0">20</h5>
                                                <div className="text-muted">Wed</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <h5 className="text-muted mt-0 mb-1 fs-13">02:00pm - 03:45pm</h5>
                                        <Link href="#" scroll={false} className="text-reset fs-14 mb-0">Adding a new event with attachments</Link>
                                    </div>
                                    <div className="col-sm-auto">
                                        <div className="avatar-group">
                                            <div className="avatar-group-item">
                                                <Link href="#" scroll={false} className="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Frida Bang">
                                                    <Image src={avatar4} alt="" className="rounded-circle avatar-xxs" />
                                                </Link>
                                            </div>
                                            <div className="avatar-group-item">
                                                <Link href="#" scroll={false} className="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Malou Silva">
                                                    <Image src={avatar5} alt="" className="rounded-circle avatar-xxs" />
                                                </Link>
                                            </div>
                                            <div className="avatar-group-item">
                                                <Link href="#" scroll={false} className="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Simon Schmidt">
                                                    <Image src={avatar6} alt="" className="rounded-circle avatar-xxs" />
                                                </Link>
                                            </div>
                                            <div className="avatar-group-item">
                                                <Link href="#" scroll={false} className="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Tosh Jessen">
                                                    <Image src={avatar7} alt="" className="rounded-circle avatar-xxs" />
                                                </Link>
                                            </div>
                                            <div className="avatar-group-item">
                                                <Link href="#" scroll={false}>
                                                    <div className="avatar-xxs">
                                                        <span className="avatar-title rounded-circle bg-success text-white">
                                                            3
                                                        </span>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                            </li> */}
                        </ul>
                        <div className="align-items-center mt-2 row text-center text-sm-start">
                            <div className="col-sm">
                                <div className="text-muted">Showing<span className="fw-semibold">4</span> of <span className="fw-semibold">125</span> Results</div>
                            </div>
                            <div className="col-sm-auto">
                                <ul className="pagination pagination-separated pagination-sm justify-content-center justify-content-sm-start mb-0">
                                    <li className="page-item disabled">
                                        <Link href="#" scroll={false} className="page-link">←</Link>
                                    </li>
                                    <li className="page-item">
                                        <Link href="#" scroll={false} className="page-link">1</Link>
                                    </li>
                                    <li className="page-item active">
                                        <Link href="#" scroll={false} className="page-link">2</Link>
                                    </li>
                                    <li className="page-item">
                                        <Link href="#" scroll={false} className="page-link">3</Link>
                                    </li>
                                    <li className="page-item">
                                        <Link href="#" scroll={false} className="page-link">→</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment >
    );
}

export default UpcomingActivities;