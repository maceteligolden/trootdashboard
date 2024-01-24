import React, { ReactElement } from 'react';
import Head from 'next/head';
import { Col, Container, Row } from 'react-bootstrap';
import Layout from '@common/Layout';

//imoprt Components
import Widget from "@component/Dashboard/Widget";
import Revenue from "@component/Dashboard/Revenue";
import MoreSales from '@component/Dashboard/MoreSales';
import RecentOrders from '@component/Dashboard/RecentOrders';
import RecentChat from '@component/Dashboard/RecentChat';
import BestSellingProducts from '@component/Dashboard/BestSellingProducts';
import ProductDelivery from '@component/Dashboard/ProductDelivery';
import SalesByCategory from '@component/Dashboard/SalesByCategory';
import StockReport from '@component/Dashboard/StockReport';
import TopRetailSalesLocation from '@component/Dashboard/TopRetailSalesLocation';

const Dashboard = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Dashboard | Trootfindr</title>
            </Head>
            <div className="page-content">
                <Container fluid>
                    <Row>
                        <Col>
                            <div className="h-100">
                                <Row>
                                    <Widget />
                                    <Revenue dataColors='["--tb-light", "--tb-primary", "--tb-secondary"]' />
                                </Row>
                                <Row>
                                    <MoreSales />
                                    <RecentOrders />
                                </Row>
                                <Row>
                                    <BestSellingProducts />
                                    <ProductDelivery />
                                </Row>
                                <Row>
                                    <SalesByCategory dataColors='["--tb-primary", "--tb-info", "--tb-success", "--tb-secondary"]' />
                                    <StockReport />
                                </Row>
                                <TopRetailSalesLocation />
                            </div>
                        </Col>
                        <RecentChat />
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

Dashboard.getLayout = (page: ReactElement) => {
    return (
      <Layout>
        {page}
      </Layout>
    )
};


export default Dashboard;