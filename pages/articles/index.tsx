import React, { ReactElement } from 'react';
import Head from 'next/head';
import Layout from '@common/Layout';

const Articles = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Articles | Trootfindr</title>
            </Head>
        </React.Fragment>
    );
}

Articles.getLayout = (page: ReactElement) => {
    return (
      <Layout>
        {page}
      </Layout>
    )
};


export default Articles;