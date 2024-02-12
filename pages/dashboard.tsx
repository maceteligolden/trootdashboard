import React, { ReactElement } from 'react';
import Head from 'next/head';
import Layout from '@common/Layout';
import { GetServerSideProps } from 'next';
import cookie from "cookie"

const Dashboard = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Dashboard | Trootfindr</title>
            </Head>
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


export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = cookie.parse(context.req.headers.cookie || '');;
 
  if (!session['token']) {
    return {
      redirect: {
        destination: '/auth/login', // Redirect to login page if not authenticated
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Dashboard;