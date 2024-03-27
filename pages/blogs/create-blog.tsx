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
import { createBlog } from 'lib/services/blog.service';
import TextInput from 'Components/form/TextInput';
import { Category, CategoryTypes } from 'lib/models/category.model';
import { getCategory } from 'lib/services/category.service';
import { EditorContent, useEditor } from '@tiptap/react';
import Dropcursor from '@tiptap/extension-dropcursor';
import Paragraph from '@tiptap/extension-paragraph';
import StarterKit from '@tiptap/starter-kit';
import Text from '@tiptap/extension-text';
import Document from '@tiptap/extension-document';


const CreateBlog =  ({
    blogCategories
  }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const formData = new FormData();
    const [isError, setError] = useState<boolean>(false);
    const [isSuccess, setSuccess] = useState<boolean>(false);
    const [content, setContent] = useState<string>("");
    const [contentStatus, setContentStatus] = useState<boolean>(true);
    const [selectedThumbnailFile, setSelectedThumbnailFile] = useState(null);

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
            label: "Create Blog",
            isLink: false
        }
    ];

    const validation: any = useFormik({

        initialValues: {
            title: "",
            content: "",
            category: '',
            thumbnail: null,
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Please Enter Your Blog Title"),
            content: Yup.string().required("Please Enter Your Blog Content"),
            thumbnail: Yup.mixed().required("Please Enter Your Thumbnail"),
            category: Yup.string().required("Please Enter Your Category")
        }),
        onSubmit: async (values: any, {resetForm}) => {
            try{
                setSuccess(false);
                setError(false)
                if(!contentStatus) {
                    formData.set('title', values.title);
                    formData.set('description', content);
                    formData.set('category', values.category);
                    formData.append('thumbnail', selectedThumbnailFile);
                    await createBlog(formData);
                } else {
                    
                }
                resetForm({values: {}});

                setSuccess(true);
            } catch(err){
                setError(true);
            }
        }
    });

    const editor = useEditor({
        extensions: [
          StarterKit,
          Document, Paragraph, Text, Dropcursor
        ],
        content: content,
        onUpdate: (props: any) => {
            setContent(props.editor.getHTML());
            setContentStatus(false)
        }
    });

    return (
        <React.Fragment>
            <Breadcrumb pageName="Create Blog" items={breadcrumbItems}/>
            <Row className="px-0">
                <Col lg={5}>
                    {isError && isError ? (<Alert variant="danger"> Blog name already taken </Alert>) : null}
                    {isSuccess && isSuccess ? (<Alert variant="success"> New blog added </Alert>) : null}
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

                            <div className="mb-3">
                                <Form.Label htmlFor="thumbnail" className="form-label">Thumbnail</Form.Label>
                                <Form.Control className="form-control" id="thumbnail" placeholder="Enter thumbnail"
                                    name="thumbnail"
                                    type="file"
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        validation.handleChange(event);
                                        setSelectedThumbnailFile(event.target.files[0]);
                                    }
                                    }
                                    onBlur={validation.handleBlur}
                                    value={validation.values.thumbnail}
                                    isInvalid={
                                        validation.touched.thumbnail && validation.errors.thumbnail ? true : false
                                    }
                                    accept=".jpg, .jpeg, .png"
                                />
                                {validation.touched.thumbnail && validation.errors.thumbnail ? (
                                    <Form.Control.Feedback type="invalid">{validation.errors.thumbnail}</Form.Control.Feedback>
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

                            <div className="mb-3">
                                <Form.Label htmlFor="description" className="form-label">Description</Form.Label>
                             
                                <EditorContent editor={editor} />

                                {contentStatus ? (
                                    <Form.Control.Feedback type="invalid">Description is missing</Form.Control.Feedback>
                                ) : null}
                               
                            </div>


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

CreateBlog.getLayout = (page: ReactElement) => {
    return (
      <Layout>
        <Head>
                <title>Create Blog | Trootfindr</title>
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
          destination: pageRoutes.auth.login, // Redirect to login page if not authenticated
          permanent: false,
        },
      };
    }
  
    return {
      props: {blogCategories},
    };
  };

export default CreateBlog;