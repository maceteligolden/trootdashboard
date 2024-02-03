import React, { ReactElement } from 'react';
import Head from 'next/head';
import Layout from '@common/Layout';

const ArticlesCategories = () => {
    return (
        <React.Fragment>
            <Head>
                <title>ArticlesCategories | Trootfindr</title>
            </Head>
        </React.Fragment>
    );
}

ArticlesCategories.getLayout = (page: ReactElement) => {
    return (
      <Layout>
        {page}
      </Layout>
    )
};


export default ArticlesCategories;