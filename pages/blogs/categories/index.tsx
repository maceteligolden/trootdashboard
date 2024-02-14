import React, { ReactElement, useState } from 'react';
import Head from 'next/head';
import Layout from '@common/Layout';
import { IBreadCrumb } from '@common/interfaces';
import { useRouter } from 'next/router';
import { Alert, Button, Table } from 'react-bootstrap';
import Taskbar from '@common/Taskbar';
import Breadcrumb from '@common/Breadcrumb';
import Link from 'next/link';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import cookie from "cookie";
import { pageRoutes } from 'lib/constants';
import { Category, CategoryTypes } from 'lib/models/category.model';
import { deleteCategory, getCategory } from 'lib/services/category.service';
import { formatDate } from 'lib/utils/formatDate';
import DeleteModal from '@common/modals/DeleteModal';

const Categories = ({
    blogCategories
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
            isLink: true,
            link: "/blogs"
        },
        {
            label: "Categories",
            isLink: false,
        }
    ];

    const handleDelete = async () => {
        try{
            setIsDeleted(false);
            handleClose();
            await deleteCategory(selectedId);
    
            setIsDeleted(true);
    
            router.reload();
        } catch(err){
            
        }
       }

    return (
        <React.Fragment>
            <Breadcrumb pageName="Blog Category" items={breadcrumbItems}/>
            {isDeleted && isDeleted? (<Alert variant="danger"> Successfully deleted category </Alert>) : null}
            <Taskbar>
                <Button variant="primary" className="w-10" onClick={() => {
                    router.push("/blogs/categories/create-categories")
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
                        {blogCategories && blogCategories.map((category: Category)=> {
                            return (
                                <>
                                    <tr>
                                        <td className="fw-medium">{category.name}</td>
                                        <td>{category.description}</td>
                                        <td>{formatDate(category.created_at)}</td>
                                        <td>{formatDate(category.updated_at)}</td>
                                        <td>
                                            <div className="hstack gap-3 fs-15">
                                                <Link href={`/blogs/categories/update-categories?categoryId=${category._id}&&name=${category.name}&&description=${category.description}`}><i className="ri-edit-line link-primary"></i></Link>
                                                <i className="ri-delete-bin-5-line link-danger" onClick={() => handleShow(category._id, category.name)}></i>
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

Categories.getLayout = (page: ReactElement) => {
    return (
      <Layout>
            <Head>
                <title>BlogCategories | Trootfindr</title>
            </Head>
        {page}
      </Layout>
    )
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = cookie.parse(context.req.headers.cookie || '');
    const blogCategories = await getCategory(CategoryTypes.BLOG);

    if (!session['token']) {
      return {
        redirect: {
          destination: pageRoutes.auth.login, 
          permanent: false,
        },
      };
    }
  
    return {
      props: {blogCategories},
    };
  };

export default Categories;