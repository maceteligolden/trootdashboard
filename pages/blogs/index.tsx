import React, { ReactElement, useState } from 'react';
import Head from 'next/head';
import Layout from '@common/Layout';
import { IBreadCrumb } from '@common/interfaces';
import { useRouter } from 'next/router';
import Breadcrumb from '@common/Breadcrumb';
import Taskbar from '@common/Taskbar';
import { Alert, Button, Table } from 'react-bootstrap';
import Link from 'next/link';
import cookie from "cookie";
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { pageRoutes } from 'lib/constants';
import { deleteBlog, getBlogs } from 'lib/services/blog.service';
import { formatDate } from 'lib/utils/formatDate';
import { Blog } from 'lib/models';
import DeleteModal from '@common/modals/DeleteModal';

const Blogs = ({
    blogs
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
            label: "Blogs",
            isLink: false
        }
    ]

    const handleDelete = async () => {
        try{
            setIsDeleted(false);
            handleClose();
            await deleteBlog(selectedId);
    
            setIsDeleted(true);
    
            router.reload();
        } catch(err){
            
        }
       }

    return (
        <React.Fragment>
            <Breadcrumb pageName="Blogs" items={breadcrumbItems}/>
            {isDeleted && isDeleted? (<Alert variant="danger"> Successfully deleted blog </Alert>) : null}
            <Taskbar>
                <Button variant="primary" className="w-10" onClick={() => {
                    router.push("/blogs/create-blog")
                }}>
                    Add Blog
                </Button>
            </Taskbar>
            <div className="table-responsive">
                <Table className="table-borderless align-middle table-nowrap mb-0">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Category</th>
                            <th scope="col">Date Created</th>
                            <th scope="col">Date Updated</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs && blogs.map((blog: Blog)=> {
                            return (
                                <>
                                    <tr>
                                        <td className="fw-medium">{blog.title}</td>
                                        <td>{blog.category ? blog.category.name : "UNKNOWN"}</td>
                                        <td>{formatDate(blog.created_at)}</td>
                                        <td>{formatDate(blog.updated_at)}</td>
                                        <td>
                                            <div className="hstack gap-3 fs-15">
                                                <Link href={`/blogs/update-blog?id=${blog._id}`}><i className="ri-edit-line link-primary"></i></Link>
                                                <i className="ri-delete-bin-5-line link-danger" onClick={() => handleShow(blog._id, blog.title)}></i>
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

Blogs.getLayout = (page: ReactElement) => {
    return (
      <Layout>
        <Head>
            <title>Blogs | Trootfindr</title>
        </Head>
        {page}
      </Layout>
    )
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = cookie.parse(context.req.headers.cookie || '');
    const blogs = await getBlogs();

    if (!session['token']) {
      return {
        redirect: {
          destination: pageRoutes.auth.login, // Redirect to login page if not authenticated
          permanent: false,
        },
      };
    }
  
    return {
      props: {blogs},
    };
  };

export default Blogs;