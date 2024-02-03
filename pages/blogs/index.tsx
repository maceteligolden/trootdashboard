import React, { ReactElement } from 'react';
import Head from 'next/head';
import Layout from '@common/Layout';

const Blogs = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Blogs | Trootfindr</title>
            </Head>
        </React.Fragment>
    );
}

Blogs.getLayout = (page: ReactElement) => {
    return (
      <Layout>
        {page}
      </Layout>
    )
};


export default Blogs;