import React, { ReactElement } from 'react';
import Head from 'next/head';
import Layout from '@common/Layout';

const AccountCategories = () => {
    return (
        <React.Fragment>
            <Head>
                <title>AccountCategories | Trootfindr</title>
            </Head>
        </React.Fragment>
    );
}

AccountCategories.getLayout = (page: ReactElement) => {
    return (
      <Layout>
        {page}
      </Layout>
    )
};


export default AccountCategories;