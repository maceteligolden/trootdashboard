import React, { ReactElement } from 'react';
import Head from 'next/head';
import Layout from '@common/Layout';

const Orders = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Orders | Trootfindr</title>
            </Head>
        </React.Fragment>
    );
}

Orders.getLayout = (page: ReactElement) => {
    return (
      <Layout>
        {page}
      </Layout>
    )
};


export default Orders;