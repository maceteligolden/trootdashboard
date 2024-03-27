import React, { ReactElement, useState } from 'react';
import Head from 'next/head';
import Layout from '@common/Layout';
import Link from 'next/link';
import { Alert, Button, Table } from 'react-bootstrap';
import Breadcrumb from '@common/Breadcrumb';
import { IBreadCrumb } from '@common/interfaces';
import Taskbar from '@common/Taskbar';
import { useRouter } from 'next/router';
import cookie from "cookie";
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { pageRoutes } from 'lib/constants';
import { deleteAccount, getAccounts } from 'lib/services/account.service';
import { Account } from 'lib/models';
import DeleteModal from '@common/modals/DeleteModal';
import { formatDate } from 'lib/utils/formatDate';

const Accounts = ({
    accounts
  }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    console.log("accounts: " + JSON.stringify(accounts));
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
            label: "Accounts",
            isLink: false
        }
    ]

    const handleDelete = async () => {
        try{
            setIsDeleted(false);
            handleClose();
            await deleteAccount(selectedId);
    
            setIsDeleted(true);
    
            router.reload();
        } catch(err){
            
        }
    }

    return (
        <React.Fragment>
            <Breadcrumb pageName="Accounts" items={breadcrumbItems}/>
            {isDeleted && isDeleted? (<Alert variant="danger"> Successfully deleted blog </Alert>) : null}
            <Taskbar>
                <Button variant="primary" className="w-10" onClick={() => {
                    router.push("/accounts/create-account")
                }}>
                    Add Account
                </Button>
            </Taskbar>
            <div className="table-responsive">
                <Table className="table-borderless align-middle table-nowrap mb-0">
                    <thead>
                        <tr>
                            <th scope="col">FirstName</th>
                            <th scope="col">LastName</th>
                            <th scope="col">Email</th>
                            <th scope="col">Role</th>
                            <th scope="col">Date Created</th>
                            <th scope="col">Date Updated</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {accounts && accounts.map((account: Account)=> {
                            return (
                                <>
                                <tr>
                                    <td>{account.firstname}</td>
                                    <td>{account.lastname}</td>
                                    <td>{account.email}</td>
                                    <td><span className="badge badge-soft-success">{account.role}</span></td>
                                    <td>{formatDate(account.created_at)}</td>
                                    <td>{formatDate(account.updated_at)}</td>
                                    <td>
                                        <div className="hstack gap-3 fs-15">
                                            <Link href={`/accounts/update-account?id=${account._id}`}><i className="ri-edit-line link-primary"></i></Link>
                                            <i className="ri-delete-bin-5-line link-danger" onClick={() => handleShow(account._id, account.email)}></i>
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

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = cookie.parse(context.req.headers.cookie || '');
    const accounts = await getAccounts();
    
    if (!session['token']) {
      return {
        redirect: {
          destination: pageRoutes.auth.login, // Redirect to login page if not authenticated
          permanent: false,
        },
      };
    }
  
    return {
      props: {accounts},
    };
  };


export default Accounts;