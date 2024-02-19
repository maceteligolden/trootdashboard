import React, { ReactElement, useState } from 'react';
import Head from 'next/head';
import Layout from '@common/Layout';
import Breadcrumb from '@common/Breadcrumb';
import { IBreadCrumb } from '@common/interfaces';
import { Alert, Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from "yup";
import cookie from "cookie";
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { pageRoutes } from 'lib/constants';
import { Account } from 'lib/models';
import { getAccount, updateAccount } from 'lib/services/account.service';
import { useRouter } from 'next/router';

const UpdateAccounts = ({
    accountDetail
  }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const router = useRouter();
    const [passwordtype, setPasswordtype] = useState<boolean>(true);
    const [isError, setError] = useState<boolean>(false);
    const [isSuccess, setSuccess] = useState<boolean>(false);

    const breadcrumbItems: IBreadCrumb[] = [
        {
            label: "Dashboard",
            isLink: true,
            link: "/dashboard"
        },
        {
            label: "Accounts",
            link: "/accounts",
            isLink: true
        },
        {
            label: "Update Account",
            isLink: false
        }
    ];

    const validation: any = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            firstname: accountDetail.firstname || "",
            lastname: accountDetail.lastname || "",
            email: accountDetail.email || '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Please Enter Your Email"),
            firstname: Yup.string().required("Please Enter Your Firstname"),
            lastname: Yup.string().required("Please Enter Your Lastname")
        }),
        onSubmit: async (values: Account) => {
            try{
                setSuccess(false);
                setError(false)

                const stringId = router.query.id.toString();

                await updateAccount(stringId, values);
                setSuccess(true);

            } catch(err){
                setError(true);
            }
        }
    });

    return (
        <React.Fragment>
            <Breadcrumb pageName="Create Account" items={breadcrumbItems}/>
            <Row className="px-0">
                <Col lg={5}>
                {isError && isError ? (<Alert variant="danger"> Email already taken </Alert>) : null}
                    {isSuccess && isSuccess ? (<Alert variant="success"> Account updated </Alert>) : null}
                    <div className=" mt-5">
                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                                validation.handleSubmit();
                                return false;
                            }}
                        >

                            <div className="mb-3">
                                <Form.Label htmlFor="firstname" className="form-label">FirstName</Form.Label>
                                <Form.Control className="form-control" id="firstname" placeholder="Enter firstname"
                                    name="firstname"
                                    type="text"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.firstname || ""}
                                    isInvalid={
                                        validation.touched.firstname && validation.errors.firstname ? true : false
                                    }

                                />
                                {validation.touched.firstname && validation.errors.firstname ? (
                                    <Form.Control.Feedback type="invalid">{validation.errors.firstname}</Form.Control.Feedback>
                                ) : null}
                            </div>

                            <div className="mb-3">
                                <Form.Label htmlFor="lastname" className="form-label">LastName</Form.Label>
                                <Form.Control className="form-control" id="lastname" placeholder="Enter lastname"
                                    name="lastname"
                                    type="text"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.lastname || ""}
                                    isInvalid={
                                        validation.touched.lastname && validation.errors.lastname ? true : false
                                    }

                                />
                                {validation.touched.lastname && validation.errors.lastname ? (
                                    <Form.Control.Feedback type="invalid">{validation.errors.lastname}</Form.Control.Feedback>
                                ) : null}
                            </div>

                            <div className="mb-3">
                                <Form.Label htmlFor="email" className="form-label">Email</Form.Label>
                                <Form.Control className="form-control" id="email" placeholder="Enter email"
                                    name="email"
                                    type="email"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.email || ""}
                                    isInvalid={
                                        validation.touched.email && validation.errors.email ? true : false
                                    }

                                />
                                {validation.touched.email && validation.errors.email ? (
                                    <Form.Control.Feedback type="invalid">{validation.errors.email}</Form.Control.Feedback>
                                ) : null}
                            </div>

                            <div className="mt-4">
                                <Button variant="primary" className="w-100" type="submit">
                                    {/* {error || loading ? <Spinner animation="border" size="sm" className="me-2"></Spinner> : null} */}
                                    Update Account
                                </Button>
                            </div>

                        
                        </Form>

                    
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    );
}

UpdateAccounts.getLayout = (page: ReactElement) => {
    return (
      <Layout>
        <Head>
                <title>Update Account | Trootfindr</title>
        </Head>
        {page}
      </Layout>
    )
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = cookie.parse(context.req.headers.cookie || '');
    const accountDetail = await getAccount(context.query.id.toString());
    if (!session['token']) {
      return {
        redirect: {
          destination: pageRoutes.auth.login, // Redirect to login page if not authenticated
          permanent: false,
        },
      };
    }
  
    return {
      props: {accountDetail},
    };
  };


export default UpdateAccounts;