import React, { ReactElement } from 'react';
import Head from 'next/head';
import Layout from '@common/Layout';

const BlogCategories = () => {
    return (
        <React.Fragment>
            <Head>
                <title>BlogCategories | Trootfindr</title>
            </Head>
        </React.Fragment>
    );
}

BlogCategories.getLayout = (page: ReactElement) => {
    return (
      <Layout>
        {page}
      </Layout>
    )
};


export default BlogCategories;