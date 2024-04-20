import React, { ReactElement, useState } from 'react';
import Head from 'next/head';
import Layout from '@common/Layout';
import Breadcrumb from '@common/Breadcrumb';
import { IBreadCrumb } from '@common/interfaces';
import { Alert, Button, Col, Form, Row, Spinner } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import cookie from "cookie";
import { pageRoutes } from 'lib/constants';
import { getCategory } from 'lib/services/category.service';
import { Category, CategoryTypes } from 'lib/models/category.model';
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { PaymentModel } from 'lib/models/article.model';
import { createArticle } from 'lib/services/article.service';
import Document from '@tiptap/extension-document';
import Dropcursor from '@tiptap/extension-dropcursor';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import TagsInput from 'Components/form/TagsInput';
import { Tag } from 'lib/models';


const CreateArticle = ({
    articleCategories
  }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const formData = new FormData();
    const [isError, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [isSuccess, setSuccess] = useState<boolean>(false);
    const [selectedThumbnailFile, setSelectedThumbnailFile] = useState(null);
    const [selectedArticleFile, setSelectedArticleFile] = useState(null);
    const [content, setContent] = useState<string>("");
    const [contentStatus, setContentStatus] = useState<boolean>(true);
    const [tags, setTags] = useState<Tag[]>([]);

    const updateTagsState = (tags: Tag[]) => {
        setTags(tags)
    }

    const breadcrumbItems: IBreadCrumb[] = [
        {
            label: "Dashboard",
            isLink: true,
            link: "/dashboard"
        },
        {
            label: "Articles",
            link: "/articles",
            isLink: true
        },
        {
            label: "Create Article",
            isLink: false
        }
    ];

    const validation: any = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            title: "",
            category: "",
            amount: "",
            payment_model: "",
            tags: [],
            thumbnail: null,
            article: null
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Please Enter Your Title"),
            amount: Yup.string(),
            tags: Yup.array(),
            category: Yup.string().required("Please Enter Your Category"),
            payment_model: Yup.string().required("Please Enter Your Payment Model"),
            thumbnail: Yup.mixed().required("Please Enter Your Thumbnail"),
            article: Yup.mixed().required("Please Enter Your Article"),
        }),
        onSubmit: async (values: any, {resetForm}) => {
            try{
                setLoading(true);
                setSuccess(false);
                // setContentStatus(false);
                setError(false)
                if(!contentStatus) {
                    formData.set('title', values.title);
                    formData.set('description', content);
                    formData.set('category', values.category);
                    formData.set('payment_model', values.payment_model);
                    formData.set('tags', JSON.stringify(tags));
                    formData.append('thumbnail', selectedThumbnailFile);
                    formData.append('article', selectedArticleFile);
                    if(values.amount) {
                        formData.set('amount', values.amount.toString())
                    }
                    await createArticle(formData);    

                    resetForm({values: {}});
                    setContentStatus(true)
                    setSuccess(true);
                    setLoading(false)
                } else {
                    
                }
            } catch(err){
                setLoading(false)
                console.log("error: " + JSON.stringify(err));
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
            <Breadcrumb pageName="Create Article" items={breadcrumbItems}/>
            <Row className="px-0">
                <Col lg={5}>
                    {isError && isError ? (<Alert variant="danger"> Article name already taken </Alert>) : null}
                    {isSuccess && isSuccess ? (<Alert variant="success"> New Article added </Alert>) : null}
                    <div className=" mt-5">
                        <Form
                            encType="multipart/form-data"
                            method="post"
                            onSubmit={(e) => {
                                e.preventDefault();
                                validation.handleSubmit();
                                return false;
                            }}
                        >   
                            <div className="mb-3">
                                <Form.Label htmlFor="category" className="form-label">Category</Form.Label>
                                <Form.Select
                                     name="category"
                                     value={validation.values.category}
                                     onChange={validation.handleChange}
                                     onBlur={validation.handleBlur}
                                >
                                    <option>Select Category</option>
                                    { articleCategories && articleCategories.data.map((category: Category, index: number) => {
                                        return (
                                            <>
                                                <option value={category._id} key={index}>{category.name}</option>
                                            </>
                                        )
                                    })}
                                </Form.Select>
                                {validation.touched.category && validation.errors.category ? (
                                    <Form.Control.Feedback type="invalid">{validation.errors.category.message}</Form.Control.Feedback>
                                ) : null}
                            </div>

                            <div className="mb-3">
                                <Form.Label htmlFor="payment_model" className="form-label">Payment Model</Form.Label>
                                <Form.Select
                                     name="payment_model"
                                     value={validation.values.payment_model}
                                     onChange={validation.handleChange}
                                     onBlur={validation.handleBlur}
                                >
                                    <option>Select Payment Model</option>
                                   
                                    <option value={PaymentModel.FREE}>{PaymentModel.FREE}</option>
                                    <option value={PaymentModel.PREMIUM}>{PaymentModel.PREMIUM}</option>
                                  
                                </Form.Select>
                                {validation.touched.payment_model && validation.errors.payment_model ? (
                                    <Form.Control.Feedback type="invalid">{validation.errors.payment_model}</Form.Control.Feedback>
                                ) : null}
                            </div>

                            {
                                (validation.values.payment_model === PaymentModel.PREMIUM) && (
                                    <>
                                        <div className="mb-3">
                                            <Form.Label htmlFor="amount" className="form-label">Amount</Form.Label>
                                            <Form.Control className="form-control" id="title" placeholder="Enter amount"
                                                name="amount"
                                                type="number"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                value={validation.values.amount || ""}
                                                isInvalid={
                                                    validation.touched.amount && validation.errors.amount ? true : false
                                                }

                                            />
                                            {validation.touched.amount && validation.errors.amount ? (
                                                <Form.Control.Feedback type="invalid">{validation.errors.amount}</Form.Control.Feedback>
                                            ) : null}
                                        </div>
                                    </>
                                )
                            }

                            <div className="mb-3">
                                <Form.Label htmlFor="title" className="form-label">Title</Form.Label>
                                <Form.Control className="form-control" id="title" placeholder="Enter title"
                                    name="title"
                                    type="text"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.title || ""}
                                    isInvalid={
                                        validation.touched.title && validation.errors.title ? true : false
                                    }

                                />
                                {validation.touched.title && validation.errors.title ? (
                                    <Form.Control.Feedback type="invalid">{validation.errors.title}</Form.Control.Feedback>
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

                            <div className="mb-3">
                                <Form.Label htmlFor="article" className="form-label">Article</Form.Label>
                                <Form.Control className="form-control" id="description" placeholder="Enter article"
                                    name="article"
                                    type="file"
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        validation.handleChange(event);
                                        setSelectedArticleFile(event.target.files[0]);
                                    }}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.article}
                                    isInvalid={
                                        validation.touched.article && validation.errors.article ? true : false
                                    }
                                    accept=".pdf"
                                />
                                {validation.touched.article && validation.errors.article ? (
                                    <Form.Control.Feedback type="invalid">{validation.errors.article}</Form.Control.Feedback>
                                ) : null}
                            </div>

                            <div className="mb-3">
                                <Form.Label htmlFor="tags" className="form-label">Tags</Form.Label>
                             
                                <TagsInput tags={tags} setTags={updateTagsState}/>
                            </div>

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
                                    {loading ? <Spinner animation="border" size="sm" className="me-2"></Spinner> : "Add Article"}
                                </Button>
                            </div>

                        
                        </Form>

                    
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    );
}

CreateArticle.getLayout = (page: ReactElement) => {
    return (
      <Layout>
        <Head>
                <title>Create Article | Trootfindr</title>
        </Head>
        {page}
      </Layout>
    )
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = cookie.parse(context.req.headers.cookie || '');
    const articleCategories = await getCategory(CategoryTypes.ARTICLE);
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
        articleCategories
      },
    };
  };
  
export default CreateArticle;