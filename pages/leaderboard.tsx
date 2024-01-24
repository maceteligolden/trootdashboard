import React, { ReactElement } from 'react';
import Head from 'next/head';
import { Col, Container, Row } from 'react-bootstrap';

import Breadcrumb from '@common/Breadcrumb';
import Widget from '@component/Leaderboard/Widgets';
import TopEmployees from '@component/Leaderboard/TopEmployees';
import LeaderboardCharts from '@component/Leaderboard/Hours&ProductivityCharts';
import Employees from '@component/Leaderboard/Employees';
import LatestNews from '@component/Leaderboard/LatestNews';
import Layout from '@common/Layout';

const Leaderboard = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Leaderboard | Hybrix - Admin & Dashboard Template</title>
            </Head>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb breadcrumb="Apps" breadcrumbItem="Leaderboard" />
                    <Row>
                        <Col xl={8}>
                            <Widget />
                            <TopEmployees />
                        </Col>
                        <LeaderboardCharts />
                    </Row>
                    <Row>
                        <Employees />
                        <LatestNews />
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

Leaderboard.getLayout = (page: ReactElement) => {
    return (
      <Layout>
        {page}
      </Layout>
    )
};

export default Leaderboard;