import React, { ReactElement, useState } from 'react';
import Head from 'next/head';
import Layout from '@common/Layout';
import { IBreadCrumb } from '@common/interfaces';
import { useRouter } from 'next/router';
import Breadcrumb from '@common/Breadcrumb';
import Taskbar from '@common/Taskbar';
import { Alert, Button, Table } from 'react-bootstrap';
import Link from 'next/link';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import cookie from "cookie";
import { pageRoutes } from 'lib/constants';
import { deleteArticle, getArticles } from 'lib/services/article.service';
import { formatDate } from 'lib/utils/formatDate';
import { Article } from 'lib/models';
import DeleteModal from '@common/modals/DeleteModal';

const Articles = ({
    articles
  }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const router = useRouter();
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [ isDeleted, setIsDeleted] = useState<boolean>(false);
    const [ selectedId, setSelectedId] = useState<string>("");
    const [ selectedName, setSelectedName ] = useState<string>("");

    const handleClose = () => setShowDeleteModal(false);
    const handleShow = (id: string, name: string) => {
        setSelectedId(id);
        setSelectedName(name);
        setShowDeleteModal(true);
    }

    const breadcrumbItems: IBreadCrumb[] = [
        {
            label: "Dashboard",
            isLink: true,
            link: "/dashboard"
        },
        {
            label: "Articles",
            isLink: false
        }
    ]

    const handleDelete = async () => {
        try{
            setIsDeleted(false);
            handleClose();
            await deleteArticle(selectedId);
    
            setIsDeleted(true);
    
            router.reload();
        } catch(err){
            
        }
    }

    return (
        <React.Fragment>
            <Breadcrumb pageName="Articles" items={breadcrumbItems}/>
            {isDeleted && isDeleted? (<Alert variant="danger"> Successfully deleted article </Alert>) : null}
            <Taskbar>
                <Button variant="primary" className="w-10" onClick={() => {
                    router.push("/articles/create-article")
                }}>
                    Add Articles
                </Button>
            </Taskbar>
            <div className="table-responsive">
                <Table className="table-borderless align-middle table-nowrap mb-0">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Payment model</th>
                            <th scope="col">Category</th>
                            <th scope="col">Date Created</th>
                            <th scope="col">Date Updated</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                    {articles && articles.map((article: Article)=> {
                            return (
                                <>
                        <tr>
                            <td className="fw-medium">{article.title}</td>
                            <td><span className={article.payment_model === "FREE" ? `badge badge-soft-success`: `badge badge-soft-primary`}>{article.payment_model}</span></td>
                            <td>{article.category ? article.category.name : "UNKNOWN"}</td>
                            <td>{formatDate(article.created_at)}</td>
                            <td>{formatDate(article.updated_at)}</td>
                            <td>
                                <div className="hstack gap-3 fs-15">
                                <Link href={`/articles/update-article?id=${article._id}`}><i className="ri-edit-line link-primary"></i></Link>
                                <i className="ri-delete-bin-5-line link-danger" onClick={() => handleShow(article._id, article.title)}></i>
                                </div>
                            </td>
                        </tr>
                        </>
                    )})}
                    </tbody>
                </Table>
                <DeleteModal 
                    item={selectedName} 
                    onDelete={handleDelete} 
                    onClose={handleClose} 
                    status={showDeleteModal}
                />
            </div>
        </React.Fragment>
    );
}

Articles.getLayout = (page: ReactElement) => {
    return (
      <Layout>
        <Head>
            <title>Articles | Trootfindr</title>
        </Head>
        {page}
      </Layout>
    )
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = cookie.parse(context.req.headers.cookie || '');
    const articles = await getArticles();

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
        articles
      },
    };
  };

export default Articles;