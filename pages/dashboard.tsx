import React, { ReactElement } from 'react';
import Head from 'next/head';
import Layout from '@common/Layout';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

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
  const session = await getSession(context);

  if (!session) {
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