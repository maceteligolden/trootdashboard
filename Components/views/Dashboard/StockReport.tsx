import React from 'react';
import Image from 'next/image';
import { Button, Card, Col } from 'react-bootstrap';
import { stockReportData } from '@common/data';
import Link from 'next/link';

const StockReport = () => {
    return (
        <React.Fragment>
            <Col xl={8}>
                <Card>
                    <Card.Header className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Stock Report</h4>
                        <div className="flex-shrink-0">
                            <Button variant='soft-info' size='sm' type="button">
                                <i className="ri-file-list-3-line align-middle"></i> Generate Report
                            </Button>
                        </div>
                    </Card.Header>

                    <Card.Body>
                        <div className="table-responsive table-card">
                            <table className="table table-borderless table-centered table-hover align-middle table-nowrap mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th scope="col">Product ID</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Updated Date</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Stock Status</th>
                                        <th scope="col">Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {stockReportData.map((item: any, key: number) => (<tr key={key}>
                                        <td>
                                            <Link href="#!" className="fw-medium link-primary">{item.ProductId}</Link>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 me-2">
                                                    <Image src={item.productImg} alt="" className="avatar-xs rounded-circle" />
                                                </div>
                                                <div className="flex-grow-1">{item.productName}</div>
                                            </div>
                                        </td>
                                        <td>{item.date}</td>
                                        <td>
                                            <span className="text-secondary">{item.amount}</span>
                                        </td>
                                        <td>
                                            <span className={"badge text-" + item.color + " bg-" + item.color + "-subtle"}>{item.status}</span>
                                        </td>
                                        <td>{item.quantity} PCS</td>
                                    </tr>))}
                                </tbody>
                            </table>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default StockReport;