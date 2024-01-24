import React from 'react';
import Image from 'next/image';
import { EmployeesTableCharts } from './LeaderboardCharts';
import { Card, Col, Dropdown } from 'react-bootstrap';

import avatar1 from "@assets/images/users/avatar-1.jpg";
import avatar3 from "@assets/images/users/avatar-3.jpg";
import avatar8 from "@assets/images/users/avatar-8.jpg";
import avatar9 from "@assets/images/users/avatar-9.jpg";
import avatar10 from "@assets/images/users/avatar-10.jpg";
import Link from 'next/link';


const employeesTableData = [
    { id: 1, employeesId: "4", img: avatar1, name: "Edward Diana", designation: "Founder", totalWorkingTime: "12h 52m", accuracy: "452", aesthetic: "231", totalPoint: "5104", chartData: [5, 12, 30, 7, 25, 15] },
    { id: 2, employeesId: "5", img: avatar3, name: "Melvin J. Oxford", designation: "Product Manager", totalWorkingTime: "10h 23m", accuracy: "652", aesthetic: "345", totalPoint: "4163", chartData: [22, 7, 18, 7, 17, 8] },
    { id: 3, employeesId: "6", img: avatar8, name: "Marvin J. Veras", designation: "CEO", totalWorkingTime: "4h 12m", accuracy: "632", aesthetic: "412", totalPoint: "2361", chartData: [25, 32, 12, 25, 17, 25] },
    { id: 4, employeesId: "7", img: avatar9, name: "Henry S. Carter", designation: "Developer", totalWorkingTime: "21h 41m", accuracy: "235", aesthetic: "124", totalPoint: "2341", chartData: [23, 25, 12, 23, 17, 5] },
    { id: 5, employeesId: "8", img: avatar10, name: "Branded T-Shirts", designation: "Designer", totalWorkingTime: "32h 52m", accuracy: "632", aesthetic: "423", totalPoint: "3265", chartData: [23, 25, 12, 23, 17, 5] }
]

const Employees = () => {
    return (
        <React.Fragment>
            <Col xl={9}>
                <Card>
                    <Card.Header className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Employees</h4>
                        <div className="flex-shrink-0">
                            <Dropdown className="card-header-dropdown">
                                <Dropdown.Toggle as="a" className="text-reset dropdown-btn arrow-none">
                                    <span className="fw-semibold text-uppercase fs-12 d-none">Sort by:
                                    </span><span className="text-muted"> Report<i className="mdi mdi-chevron-down ms-1"></i></span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu-end">
                                    <Dropdown.Item href="#">Download Report</Dropdown.Item>
                                    <Dropdown.Item href="#">Export</Dropdown.Item>
                                    <Dropdown.Item href="#">Import</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <div className="table-responsive table-card">
                            <table className="table table-centered align-middle table-nowrap mb-0">
                                <tbody>

                                    {employeesTableData.map((item: any, key: number) => (
                                        <tr key={key}>
                                            <td>
                                                <span className="fw-medium">#{item.employeesId}</span>
                                            </td>
                                            <td style={{ width: "160px" }}>
                                                <div className="d-flex">
                                                    <div className="avatar-sm p-1 bg-card-custom border rounded-circle me-3">
                                                        <Image src={item.img} className="img-fluid rounded-circle" alt="" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="mb-1">{item.name}</h6>
                                                        <span className="text-muted fs-13">{item.designation}</span>
                                                    </div>
                                                </div>
                                            </td>

                                            <td>
                                                <div id="other-chart-1" className="apex-charts" dir="ltr">
                                                    <EmployeesTableCharts data={item.chartData} />
                                                </div>
                                            </td>

                                            <td>
                                                <h6 className="mb-1"> {item.totalWorkingTime}</h6>
                                                <span className="text-muted fs-13">Total Working Time</span>
                                            </td>

                                            <td>
                                                <h6 className="mb-1">{item.accuracy}</h6>
                                                <span className="text-muted fs-13">Accuracy</span>
                                            </td>
                                            <td>
                                                <h6 className="mb-1">{item.aesthetic}</h6>
                                                <span className="text-muted fs-13">Aesthetic</span>
                                            </td>
                                            <td>
                                                <h6 className="mb-1">{item.totalPoint}</h6>
                                                <span className="text-muted fs-13">Total Points</span>
                                            </td>

                                            <td>
                                                <span>
                                                    <Dropdown>
                                                        <Dropdown.Toggle className="btn btn-light btn-sm arrow-none">
                                                            <i className="ri-menu-add-fill fs-14"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                                            <li> <Dropdown.Item href=""><i className="ri-eye-fill align-bottom me-2 text-muted"></i> View</Dropdown.Item> </li>
                                                            <li> <Dropdown.Item className="edit-list" href=""><i className="ri-pencil-fill align-bottom me-2 text-muted"></i> Edit</Dropdown.Item> </li>
                                                            <li className="dropdown-divider"></li>
                                                            <li> <Dropdown.Item className="remove-list" href="#"><i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Delete</Dropdown.Item> </li>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </span>

                                            </td>
                                        </tr>))}
                                </tbody>
                            </table>
                        </div>

                        <div className="align-items-center mt-4 pt-2 justify-content-between d-flex">
                            <div className="flex-shrink-0">
                                <div className="text-muted">
                                    Showing <span className="fw-semibold">5</span> of <span className="fw-semibold">25</span> Results
                                </div>
                            </div>
                            <ul className="pagination pagination-separated pagination-sm mb-0">
                                <li className="page-item disabled">
                                    <Link href="#" className="page-link" scroll={false}>←</Link>
                                </li>
                                <li className="page-item">
                                    <Link href="#" className="page-link" scroll={false}>1</Link>
                                </li>
                                <li className="page-item active">
                                    <Link href="#" className="page-link" scroll={false}>2</Link>
                                </li>
                                <li className="page-item">
                                    <Link href="#" className="page-link" scroll={false}>3</Link>
                                </li>
                                <li className="page-item">
                                    <Link href="#" className="page-link" scroll={false}>→</Link>
                                </li>
                            </ul>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default Employees;