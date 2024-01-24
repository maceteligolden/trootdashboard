import React from 'react';
import Image from 'next/image';
import { Card, Col, Dropdown } from 'react-bootstrap';
import { MyPortfolioCharts } from './widgetsCharts';

import btc from "@assets/images/svg/crypto-icons/btc.svg"
import eth from "@assets/images/svg/crypto-icons/eth.svg"
import ltc from "@assets/images/svg/crypto-icons/ltc.svg"
import dash from "@assets/images/svg/crypto-icons/dash.svg"

const MyPortfolio = () => {
    return (
        <React.Fragment>
            <Col xxl={4} xl={6}>
                <Card className="card-height-100">
                    <Card.Header className="border-bottom-dashed align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">My Portfolio</h4>
                        <div>
                            <Dropdown drop="start">
                                <Dropdown.Toggle className="btn btn-soft-primary btn-sm arrow-none">
                                    <span className="text-uppercase">Btc<i className="mdi mdi-chevron-down align-middle ms-1"></i></span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                    <li> <Dropdown.Item href="#">BTC</Dropdown.Item> </li>
                                    <li> <Dropdown.Item href="#">USD</Dropdown.Item> </li>
                                    <li> <Dropdown.Item href="#">Euro</Dropdown.Item> </li>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Card.Header>

                    <Card.Body>
                        <div id="portfolio_donut_charts" className="apex-charts" dir="ltr">
                            <MyPortfolioCharts dataColors='["--tb-primary", "--tb-info", "--tb-warning", "--tb-success"]' />
                        </div>

                        <ul className="list-group list-group-flush border-dashed mb-0">
                            <li className="list-group-item px-0">
                                <div className="d-flex">
                                    <div className="flex-shrink-0 avatar-xs">
                                        <span className="avatar-title bg-light p-1 rounded-circle">
                                            <Image src={btc} className="img-fluid" alt="" />
                                        </span>
                                    </div>
                                    <div className="flex-grow-1 ms-2">
                                        <h6 className="mb-1">Bitcoin</h6>
                                        <p className="fs-12 mb-0 text-muted">
                                            <i className="mdi mdi-circle fs-10 align-middle text-primary me-1"></i>BTC
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0 text-end">
                                        <h6 className="mb-1">BTC 0.00584875</h6>
                                        <p className="text-success fs-12 mb-0">$19,405.12</p>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item px-0">
                                <div className="d-flex">
                                    <div className="flex-shrink-0 avatar-xs">
                                        <span className="avatar-title bg-light p-1 rounded-circle">
                                            <Image src={eth} className="img-fluid" alt="" />
                                        </span>
                                    </div>
                                    <div className="flex-grow-1 ms-2">
                                        <h6 className="mb-1">Ethereum</h6>
                                        <p className="fs-12 mb-0 text-muted">
                                            <i className="mdi mdi-circle fs-10 align-middle text-info me-1"></i>ETH
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0 text-end">
                                        <h6 className="mb-1">ETH 2.25842108</h6>
                                        <p className="text-danger fs-12 mb-0">$40552.18</p>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item px-0">
                                <div className="d-flex">
                                    <div className="flex-shrink-0 avatar-xs">
                                        <span className="avatar-title bg-light p-1 rounded-circle">
                                            <Image src={ltc} className="img-fluid" alt="" />
                                        </span>
                                    </div>
                                    <div className="flex-grow-1 ms-2">
                                        <h6 className="mb-1">Litecoin</h6>
                                        <p className="fs-12 mb-0 text-muted">
                                            <i className="mdi mdi-circle fs-10 align-middle text-warning me-1"></i>LTC
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0 text-end">
                                        <h6 className="mb-1">LTC 10.58963217</h6>
                                        <p className="text-success fs-12 mb-0">$15824.58</p>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item px-0 pb-0">
                                <div className="d-flex">
                                    <div className="flex-shrink-0 avatar-xs">
                                        <span className="avatar-title bg-light p-1 rounded-circle">
                                            <Image src={dash} className="img-fluid" alt="" />
                                        </span>
                                    </div>
                                    <div className="flex-grow-1 ms-2">
                                        <h6 className="mb-1">Dash</h6>
                                        <p className="fs-12 mb-0 text-muted">
                                            <i className="mdi mdi-circle fs-10 align-middle text-success me-1"></i>DASH
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0 text-end">
                                        <h6 className="mb-1">DASH 204.28565885</h6>
                                        <p className="text-success fs-12 mb-0">$30635.84</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment >
    );
}

export default MyPortfolio;