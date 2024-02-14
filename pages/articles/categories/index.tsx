import React, { ReactElement } from 'react';
import Head from 'next/head';
import Layout from '@common/Layout';
import { IBreadCrumb } from '@common/interfaces';
import { useRouter } from 'next/router';
import { Button, Table } from 'react-bootstrap';
import Taskbar from '@common/Taskbar';
import Breadcrumb from '@common/Breadcrumb';
import Link from 'next/link';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import cookie from "cookie";
import { pageRoutes } from 'lib/constants';
import { getCategory } from 'lib/services/category.service';
import { Category, CategoryTypes } from 'lib/models/category.model';
import { formatDate } from 'lib/utils/formatDate';

const ArticlesCategories = ({
    articleCategories
  }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const router = useRouter();

    const breadcrumbItems: IBreadCrumb[] = [
        {
            label: "Dashboard",
            isLink: true,
            link: "/dashboard"
        },
        {
            label: "Articles",
            isLink: true,
            link: "/articles"
        },
        {
            label: "Categories",
            isLink: false,
        }
    ]

    console.log("category: " + JSON.stringify(articleCategories));

    return (
        <React.Fragment>
            <Breadcrumb pageName="Articles Category" items={breadcrumbItems}/>
            <Taskbar>
                <Button variant="primary" className="w-10" onClick={() => {
                    router.push("/articles/categories/create-categories")
                }}>
                    Add Categories
                </Button>
            </Taskbar>
            <div className="table-responsive">
                <Table className="table-borderless align-middle table-nowrap mb-0">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Date Created</th>
                            <th scope="col">Date Updated</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {articleCategories && articleCategories.map((category: Category)=> {
                            return (
                                <>
                                    <tr>
                                        <td className="fw-medium">{category.name}</td>
                                        <td>{category.description}</td>
                                        <td>{formatDate(category.created_at)}</td>
                                        <td>{formatDate(category.updated_at)}</td>
                                        <td>
                                            <div className="hstack gap-3 fs-15">
                                                <Link href="#" className="link-primary"><i className="ri-settings-4-line"></i></Link>
                                                <Link href="#" className="link-danger"><i className="ri-delete-bin-5-line"></i></Link>
                                            </div>
                                        </td>
                                    </tr>
                                </>
                            )})}
                    </tbody>
                </Table>
            </div>
        </React.Fragment>
    );
}

ArticlesCategories.getLayout = (page: ReactElement) => {
    return (
      <Layout>
            <Head>
                <title>ArticlesCategories | Trootfindr</title>
            </Head>
        {page}
      </Layout>
    )
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = cookie.parse(context.req.headers.cookie || '');
    const articleCategories = await getCategory(CategoryTypes.ARTICLE);

    if (session['token'] === '') {
      return {
        redirect: {
          destination: pageRoutes.auth.login, // Redirect to login page if not authenticated
          permanent: false,
        },
      };
    }
  
    return {
      props: {articleCategories},
    };
  };

export default ArticlesCategories;