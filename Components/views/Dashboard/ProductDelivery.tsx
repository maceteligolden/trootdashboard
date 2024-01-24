import React from 'react';
import Image from 'next/image';
import SimpleBar from 'simplebar-react';
import { Card, Col } from 'react-bootstrap';
import Link from 'next/link';

import productImg3 from "@assets/images/products/img-3.png"
import productImg4 from "@assets/images/products/img-4.png"
import productImg6 from "@assets/images/products/img-6.png"
import productImg8 from "@assets/images/products/img-8.png"
import productImg9 from "@assets/images/products/img-9.png"

const ProductDelivery = () => {
    return (
        <React.Fragment>
            <Col xl={4}>
                <Card>
                    <Card.Header className="d-flex">
                        <h5 className="card-title flex-grow-1 mb-0">Product Delivery</h5>
                        <Link href="#!" className="flex-shrink-0">View All <i className="ri-arrow-right-line align-bottom ms-1"></i></Link>
                    </Card.Header>
                    <Card.Body className="px-0">
                        <SimpleBar data-simplebar style={{ maxHeight: "320px" }}>
                            <div className="vstack gap-3 px-3">
                                <div className="p-3 border border-dashed rounded-3">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="avatar-sm bg-light rounded p-1 flex-shrink-0">
                                            <Image src={productImg8} alt="" className="img-fluid d-block" />
                                        </div>
                                        <div className="flex-grow-1 overflow-hidden">
                                            <h6 className="text-truncate">Men's Running Shoes Activ... </h6>
                                            <p className="text-truncate mb-0">by: <span className="text-info">Aaron Bauer</span></p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <span className="badge text-warning bg-warning-subtle">Shipping</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 border border-dashed rounded-3">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="avatar-sm bg-light rounded p-1 flex-shrink-0">
                                            <Image src={productImg4} alt="" className="img-fluid d-block" />
                                        </div>
                                        <div className="flex-grow-1 overflow-hidden">
                                            <h6 className="text-truncate">Striped Baseball Cap</h6>
                                            <p className="text-truncate mb-0">by: <span className="text-info">Jansh Brown</span></p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <span className="badge text-success bg-success-subtle">Delivered</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 border border-dashed rounded-3">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="avatar-sm bg-light rounded p-1 flex-shrink-0">
                                            <Image src={productImg3} alt="" className="img-fluid d-block" />
                                        </div>
                                        <div className="flex-grow-1 overflow-hidden">
                                            <h6 className="text-truncate">350 ml Glass Groce...</h6>
                                            <p className="text-truncate mb-0">by: <span className="text-info">Scott Wilson</span></p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <span className="badge text-danger  bg-danger-subtle">Out of Delivery</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 border border-dashed rounded-3">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="avatar-sm bg-light rounded p-1 flex-shrink-0">
                                            <Image src={productImg6} alt="" className="img-fluid d-block" />
                                        </div>
                                        <div className="flex-grow-1 overflow-hidden">
                                            <h6 className="text-truncate">Monte Carlo Sweaters</h6>
                                            <p className="text-truncate mb-0">by: <span className="text-info">Daniel Gonzalez</span></p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <span className="badge text-success bg-success-subtle">Delivered</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 border border-dashed rounded-3">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="avatar-sm bg-light rounded p-1 flex-shrink-0">
                                            <Image src={productImg9} alt="" className="img-fluid d-block" />
                                        </div>
                                        <div className="flex-grow-1 overflow-hidden">
                                            <h6 className="text-truncate">Ceramic Coffee Mug</h6>
                                            <p className="text-truncate mb-0">by: <span className="text-info">Stephen Garrison</span></p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <span className="badge text-warning bg-warning-subtle">Shipping</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SimpleBar>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default ProductDelivery;