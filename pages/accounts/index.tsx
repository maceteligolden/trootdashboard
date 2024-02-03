import React, { ReactElement } from 'react';
import Head from 'next/head';
import Layout from '@common/Layout';

const Accounts = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Accounts | Trootfindr</title>
            </Head>
        </React.Fragment>
    );
}

Accounts.getLayout = (page: ReactElement) => {
    return (
      <Layout>
        {page}
      </Layout>
    )
};


export default Accounts;