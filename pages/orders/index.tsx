import React, { ReactElement } from 'react';
import Head from 'next/head';
import Layout from '@common/Layout';
import { IBreadCrumb } from '@common/interfaces';
import { useRouter } from 'next/router';
import Breadcrumb from '@common/Breadcrumb';
import Taskbar from '@common/Taskbar';
import { Button, Table } from 'react-bootstrap';
import Link from 'next/link';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import cookie from "cookie";
import { pageRoutes } from 'lib/constants';
import { getOrders } from 'lib/services/order.service';
import { Order } from 'lib/models';

const Orders = ({
    orders
  }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const router = useRouter();

    const breadcrumbItems: IBreadCrumb[] = [
        {
            label: "Dashboard",
            isLink: true,
            link: "/dashboard"
        },
        {
            label: "Orders",
            isLink: false
        }
    ]

    return (
        <React.Fragment>
            <Breadcrumb pageName="Orders" items={breadcrumbItems}/>
            {/* <Taskbar>
                <Button variant="primary" className="w-10" onClick={() => {
                    router.push("/orders/create-order")
                }}>
                    Add Order
                </Button>
            </Taskbar> */}
            <div className="table-responsive">
                <Table className="table-borderless align-middle table-nowrap mb-0">
                    <thead>
                        <tr>
                            <th scope="col">Reference No</th>
                            <th scope="col">Email</th>
                            <th scope="col">Transaction Type</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders && orders.data.map((order: Order)=> {
                            return (
                                <>
                                    <tr>
                                        <td className="fw-medium">{order.reference_no}</td>
                                        <td>{order.customer_email}</td>
                                        <td>{order.transaction_type}</td>
                                        <td>{order.amount}</td>
                                        <td><span className="badge badge-soft-success">{order.status}</span></td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        </React.Fragment>
    );
}

Orders.getLayout = (page: ReactElement) => {
    return (
      <Layout>
        <Head>
            <title>Orders | Trootfindr</title>
        </Head>
        {page}
      </Layout>
    )
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = cookie.parse(context.req.headers.cookie || '');
    const orders = await getOrders();

    if (!session['token']) {
      return {
        redirect: {
          destination: pageRoutes.auth.login, // Redirect to login page if not authenticated
          permanent: false,
        },
      };
    }
  
    return {
      props: {
        orders
      },
    };
};

export default Orders;