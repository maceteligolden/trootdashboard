import React, { ReactElement } from 'react';
import Head from 'next/head';

import { Col, Container, Row } from 'react-bootstrap';
import Breadcrumb from '@common/Breadcrumb';
import IncomeDetails from '@component/Widgets/IncomeDetails';
import IncomeBreakdown from '@component/Widgets/IncomeBreakdown';
import SessionsbyCountries from '@component/Widgets/SessionsbyCountries';
import AudiencesMetrics from '@component/Widgets/AudiencesMetrics';
import MyPortfolio from '@component/Widgets/MyPortfolio';
import TopReferralsPages from '@component/Widgets/TopReferralsPages';
import TileBoxs from '@component/Widgets/TileBoxs';
import OtherWidgets from '@component/Widgets/OtherWidgets';
import LatestSales from '@component/Widgets/LatestSales';
import UpcomingActivities from '@component/Widgets/UpcomingActivities';
import Connections from '@component/Widgets/Connections';
import ActivityStream from '@component/Widgets/ActivityStream';
import Layout from '@common/Layout';
import TopRetailSalesLocation from '@component/Widgets/TopRetailSalesLocation';
import { VectorMap } from '@south-paw/react-vector-maps';
import world from '@common/world.svg.json';
import LiveUsersByCountry from '@component/Widgets/LiveUsersByCountry';
const Widgets = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Widgets | Hybrix - Admin & Dashboard Template</title>
            </Head>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb breadcrumb="Hybrix" breadcrumbItem="Widgets" />
                    <TileBoxs />
                    <OtherWidgets />
                    <Row>
                        <IncomeDetails />
                        <IncomeBreakdown />
                        <LatestSales />
                    </Row>
                    <Row>

                        <UpcomingActivities />

                        <Col xxl={7} className="card-height-100">
                            <Row>
                                <Connections />
                                <ActivityStream />
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <div className="col-12">
                            <h5 className="text-decoration-underline mb-3 mt-2 pb-3">Chart & Map Widgets</h5>
                        </div>
                    </Row>
                    <Row>
                        <LiveUsersByCountry/>
                        {/* <SalesByCategory dataColors='["--tb-primary", "--tb-info", "--tb-success", "--tb-secondary"]' /> */}
                        <AudiencesMetrics />
                        <MyPortfolio />
                    </Row>

                    <Row>
                        <TopReferralsPages />
                        <TopRetailSalesLocation />
                    </Row>
                </Container>
            </div>
        </React.Fragment >
    );
}

Widgets.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

export default Widgets;