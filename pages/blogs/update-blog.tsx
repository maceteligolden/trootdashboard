import React, { ReactElement, useState } from 'react';
import Head from 'next/head';
import Layout from '@common/Layout';
import Breadcrumb from '@common/Breadcrumb';
import { IBreadCrumb } from '@common/interfaces';
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import cookie from "cookie";
import { pageRoutes } from 'lib/constants';
import { Blog } from 'lib/models';
import { getBlog, updateBlog } from 'lib/services/blog.service';
import TextInput from 'Components/form/TextInput';
import { useRouter } from 'next/router';
import { getCategory } from 'lib/services/category.service';
import { Category, CategoryTypes } from 'lib/models/category.model';


const UpdateBlog = ({
    blogCategories,
    blogDetail
  }: InferGetServerSidePropsType<typeof getServerSideProps>) => {

    const router = useRouter();
    const [isError, setError] = useState<boolean>(false);
    const [isSuccess, setSuccess] = useState<boolean>(false);


    const breadcrumbItems: IBreadCrumb[] = [
        {
            label: "Dashboard",
            isLink: true,
            link: "/dashboard"
        },
        {
            label: "Blogs",
            link: "/blogs",
            isLink: true
        },
        {
            label: "Update Blog",
            isLink: false
        }
    ];

    const validation: any = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            title: blogDetail.title || "",
            content: blogDetail.content || "",
            category: blogDetail.category || ""
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Please Enter Your Blog Title"),
            content: Yup.string().required("Please Enter Your Blog Content"),
            category: Yup.string().required("Please Enter Your Category")
        }),
        onSubmit: async (values: Blog) => {
            try{
                setSuccess(false);
                setError(false)

                const stringId = router.query.id.toString();

                await updateBlog(stringId, values);
                setSuccess(true);

            } catch(err){
                setError(true);
            }
        }
    });

    return (
        <React.Fragment>
            <Breadcrumb pageName="Update blog" items={breadcrumbItems}/>
            <Row className="px-0">
                <Col lg={5}>
                    {isError && isError ? (<Alert variant="danger"> Blog name already taken </Alert>) : null}
                    {isSuccess && isSuccess ? (<Alert variant="success"> Blog updated </Alert>) : null}
                    <div className=" mt-5">
                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                                validation.handleSubmit();
                                return false;
                            }}
                        >
                            <div className="mb-3">
                                <Form.Label htmlFor="firstname" className="form-label">Category</Form.Label>
                                <Form.Select
                                     name="category"
                                     value={validation.values.category}
                                     onChange={validation.handleChange}
                                     onBlur={validation.handleBlur}
                                >
                                    <option>Select Category</option>
                                    { blogCategories && blogCategories.map((category: Category, index: number) => {
                                        return (
                                            <>
                                                <option value={category._id} key={index}>{category.name}</option>
                                            </>
                                        )
                                    })}
                                </Form.Select>
                                {validation.touched.category && validation.errors.category ? (
                                    <Form.Control.Feedback type="invalid">{validation.errors.category}</Form.Control.Feedback>
                                ) : null}
                            </div>
                            <TextInput
                                label={"Title"}
                                name="title"
                                placeholder="Enter Title"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.title}
                                isInvalid={validation.touched.title && validation.errors.title}
                                errors={validation.errors.title}
                            />

                            <TextInput
                                label={"Content"}
                                name="content"
                                placeholder="Enter Content"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.content}
                                isInvalid={validation.touched.content && validation.errors.content}
                                errors={validation.errors.content}
                            />


                            <div className="mt-4">
                                <Button variant="primary" className="w-100" type="submit">
                                    {/* {error || loading ? <Spinner animation="border" size="sm" className="me-2"></Spinner> : null} */}
                                    Create Blog
                                </Button>
                            </div>

                        
                        </Form>

                    
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    );
}

UpdateBlog.getLayout = (page: ReactElement) => {
    return (
      <Layout>
        <Head>
                <title>Update Blog | Trootfindr</title>
        </Head>
        {page}
      </Layout>
    )
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = cookie.parse(context.req.headers.cookie || '');
    const blogCategories = await getCategory(CategoryTypes.BLOG);
    const blogDetail = await getBlog(context.query.id.toString());
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
        blogCategories,
        blogDetail
      },
    };
  };
  
export default UpdateBlog;