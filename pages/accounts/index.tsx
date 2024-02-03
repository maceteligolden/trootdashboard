import React, { ReactElement } from 'react';
import Head from 'next/head';
import Layout from '@common/Layout';
import Link from 'next/link';
import { Table } from 'react-bootstrap';
import Breadcrumb from '@common/Breadcrumb';
import { IBreadCrumb } from '@common/interfaces';

const Accounts = () => {

    const breadcrumbItems: IBreadCrumb[] = [
        {
            label: "Dashboard",
            isLink: true,
            link: "/dashboard"
        },
        {
            label: "Accounts",
            isLink: false
        }
    ]

    return (
        <React.Fragment>
            <Breadcrumb pageName="Accounts" items={breadcrumbItems}/>
            <div className="table-responsive">
                <Table className="table-borderless align-middle table-nowrap mb-0">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Job Title</th>
                            <th scope="col">Date</th>
                            <th scope="col">Status</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="fw-medium">01</td>
                            <td>Annette Black</td>
                            <td>Industrial Designer</td>
                            <td>10, Nov 2021</td>
                            <td><span className="badge badge-soft-success">Active</span></td>
                            <td>
                                <div className="hstack gap-3 fs-15">
                                    <Link href="#" className="link-primary"><i className="ri-settings-4-line"></i></Link>
                                    <Link href="#" className="link-danger"><i className="ri-delete-bin-5-line"></i></Link>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="fw-medium">02</td>
                            <td>Bessie Cooper</td>
                            <td>Graphic Designer</td>
                            <td>13, Nov 2021</td>
                            <td><span className="badge badge-soft-success">Active</span></td>
                            <td>
                                <div className="hstack gap-3 fs-15">
                                    <Link href="#" className="link-primary"><i className="ri-settings-4-line"></i></Link>
                                    <Link href="#" className="link-danger"><i className="ri-delete-bin-5-line"></i></Link>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="fw-medium">03</td>
                            <td>Leslie Alexander</td>
                            <td>Product Manager</td>
                            <td>17, Nov 2021</td>
                            <td><span className="badge badge-soft-success">Active</span></td>
                            <td>
                                <div className="hstack gap-3 fs-15">
                                    <Link href="#" className="link-primary"><i className="ri-settings-4-line"></i></Link>
                                    <Link href="#" className="link-danger"><i className="ri-delete-bin-5-line"></i></Link>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="fw-medium">04</td>
                            <td>Lenora Sandoval</td>
                            <td>Applications Engineer</td>
                            <td>25, Nov 2021</td>
                            <td><span className="badge badge-soft-danger">Disabled</span></td>
                            <td>
                                <div className="hstack gap-3 fs-15">
                                    <Link href="#" className="link-primary"><i className="ri-settings-4-line"></i></Link>
                                    <Link href="#" className="link-danger"><i className="ri-delete-bin-5-line"></i></Link>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </React.Fragment>
    );
}

Accounts.getLayout = (page: ReactElement) => {
    return (
      <Layout>
        <Head>
                <title>Accounts | Trootfindr</title>
        </Head>
        {page}
      </Layout>
    )
};


export default Accounts;