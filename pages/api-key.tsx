import React, { useMemo, useState, useEffect, useCallback, ReactElement } from 'react';
import TableContainer from '@common/TableContainer';
import Breadcrumb from '@common/Breadcrumb';
import APIKeyReportChart from '@component/APIKey/apiKeyChart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';
import * as Yup from "yup";
import { useFormik } from "formik";
import moment from 'moment';
import { Button, Card, Col, Container, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { BsTrash3 } from "react-icons/bs";

import { getAPIKey as onGetAPIKey, addNewAPIKey as onAddNewAPIKey, updateAPIKey as onUpdateAPIKey, deleteAPIKey as onDeleteAPIKey } from 'Components/slices/thunk';
import Layout from '@common/Layout';
import { createSelector } from 'reselect';
import CountUp from 'react-countup';

const APIKey = () => {
    const dispatch: any = useDispatch();

    const selectDashboardData = createSelector(
        (state: any) => state.APIKey.apiKey,
        (apiKey) => apiKey
    );
    // Inside your component
    const APIKey = useSelector(selectDashboardData);

    const [apiKeyList, setApiKeyList] = useState<any>("")
    const [apikey, setApiKey] = useState<any>()

    const [modalShow, setModalShow] = useState<boolean>(false)
    const [deleteModal, setDeleteModal] = useState<boolean>(false)
    const [isEdit, setIsEdit] = useState<boolean>(false)

    const [issubmitBtn, setsubmitBtn] = useState<boolean>(false)
    const [isRegenerateAPI, setIsRegenerateAPI] = useState<boolean>(false)

    const [isGenerateAPIKey, setIisGenerateAPIKey] = useState<any>()

    const [apiKeyName, setApiKeyName] = useState<any>()

    const toggle = useCallback(() => {
        if (modalShow) {
            setModalShow(false)
            setIsEdit(false);
            setsubmitBtn(false)
            setIsRegenerateAPI(false)
            setApiKey(null)
            setIisGenerateAPIKey(null)
            setApiKeyName(null)
        } else {
            setModalShow(true)
            // setApiKey(null)
        }
    }, [modalShow])

    const toggleDelete = () => {
        setDeleteModal(false);
        setApiKey(null)
    }

    useEffect(() => {
        if (APIKey && !APIKey.length) {
            dispatch(onGetAPIKey());
        }
    }, [dispatch, APIKey]);

    useEffect(() => {
        setApiKeyList(APIKey)
    }, [APIKey])

    // Delete API key
    const onClickDelete = (apikey: any) => {
        setApiKey(apikey);
        setDeleteModal(true);
    };

    const handleDeleteAPIKey = () => {
        if (apikey) {
            dispatch(onDeleteAPIKey(apikey.id));
            setDeleteModal(false);
            setApiKey(null)
        }
    };

    // Rename API Key
    const handleRenameAPIKey = useCallback((ele: any) => {
        setsubmitBtn(true)
        const apiKey = ele;
        setApiKey({
            id: apiKey.id,
            name: apiKey.name,
            apiKey: apiKey.apiKey,
        });
        setIsEdit(true);
        toggle();
    }, [toggle]);

    // Regenerate API Key
    const handleRegenerateAPIKey = useCallback((ele: any) => {
        setsubmitBtn(true)
        setIsRegenerateAPI(true)
        setIisGenerateAPIKey(generateApiID())
        const apiKey = ele;
        setApiKey({
            id: apiKey.id,
            name: apiKey.name,
            apiKey: apiKey.apiKey,
        });
        setIsEdit(true);
        toggle();
    }, [toggle]);

    // Generate API Key
    const generateApiID = () => {
        var d = new Date().getTime();

        if (window.performance && typeof window.performance.now === "function") {
            d += performance.now();
        }

        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
        });

        return uuid;
    }

    const validation: any = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            name: (apikey && apikey.name) || apiKeyName || '',
            apiKey: isGenerateAPIKey || (apikey && apikey.apiKey),
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Please enter a name.")
        }),
        onSubmit: (values) => {
            if (isEdit) {
                const updateAPIKey = {
                    id: apikey ? apikey.id : 0,
                    name: values.name,
                    apiKey: isGenerateAPIKey || values.apiKey,
                };
                // update API Key
                dispatch(onUpdateAPIKey(updateAPIKey));
                validation.resetForm();
            } else {
                const newAPIKey = {
                    id: (Math.floor(Math.random() * (30 - 20)) + 20).toString(),
                    name: values.name,
                    apiKey: isGenerateAPIKey,
                    createdBy: "Edward Diana",
                    status: "Active",
                    createDate: moment(new Date()).format("D MMM YYYY"),
                    expirydate: moment(new Date(new Date().setMonth(new Date().getMonth() + 6))).format("D MMM YYYY")
                };
                // save new API Key
                dispatch(onAddNewAPIKey(newAPIKey));
                validation.resetForm();
            }
            toggle();
        },
    });

    const createApibutton = (e: any) => {
        e.preventDefault();
        let inputValue = (document.getElementById("api-key-name") as HTMLInputElement).value
        setApiKeyName(inputValue)
        if (inputValue) {
            setsubmitBtn(true)
            setIisGenerateAPIKey(generateApiID())
        } else {
            document.getElementById("api-key-error-msg")?.classList.remove("d-none")
            document.getElementById("api-key-error-msg")?.classList.add("d-block")
            setTimeout(() => {
                document.getElementById("api-key-error-msg")?.classList.remove("d-block")
                document.getElementById("api-key-error-msg")?.classList.add("d-none")
            }, 1000);
        }
    }

    const columns = useMemo(
        () => [
            {
                id: "#",
                Header: "#",
                disableFilters: true,
                filterable: false,
                accessor: (cellProps: any) => {
                    return (
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="chk_child" value="option1" />
                        </div>)
                },
            },
            {
                Header: "Name",
                disableFilters: true,
                filterable: true,
                accessor: (cellProps: any) => {
                    return (cellProps.name)
                },
            },
            {
                Header: "Created By",
                disableFilters: true,
                filterable: true,
                accessor: (cellProps: any) => {
                    return cellProps.createdBy;
                },
            },
            {
                Header: "API Key",
                disableFilters: true,
                filterable: true,
                accessor: (cellProps: any) => {
                    return (
                        <input type="text" className="form-control apikey-value user-select-all" readOnly value={cellProps.apiKey} />
                    );
                },
            },
            {
                Header: "Status",
                disableFilters: true,
                filterable: true,
                accessor: (cellProps: any) => {
                    switch (cellProps.status) {
                        case "Active":
                            return (<span className="badge text-success bg-success-subtle"> {cellProps.status}</span>)
                        case "Disable":
                            return (<span className="badge badge-soft-danger"> {cellProps.status}</span>)
                        default:
                            return (<span className="badge text-success bg-success-subtle"> {cellProps.status}</span>)
                    }
                },
            },
            {
                Header: "Create Date",
                disableFilters: true,
                filterable: true,
                accessor: (cellProps: any) => {
                    return cellProps.createDate;
                },
            },
            {
                Header: "Expiry Date",
                disableFilters: true,
                filterable: true,
                accessor: (cellProps: any) => {
                    return cellProps.expirydate;
                },
            },
            {
                Header: "Action",
                disableFilters: true,
                accessor: (cellProps: any) => {
                    return (
                        <Dropdown>
                            <Dropdown.Toggle as="a" className="btn btn-soft-secondary btn-sm arrow-none">
                                <i className="ri-more-fill align-middle"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu as="ul" className="dropdown-menu-end" style={{ position: "absolute", inset: "0px 0px auto auto", margin: "0px", transform: "translate(-73px, 33px)" }}>
                                <li><Dropdown.Item className="edit-item-btn" href="#" onClick={() => handleRenameAPIKey(cellProps)}>Rename</Dropdown.Item></li>
                                <li><Dropdown.Item className="regenerate-api-btn" href="#" onClick={() => handleRegenerateAPIKey(cellProps)}>Regenerate Key</Dropdown.Item></li>
                                <li><Dropdown.Item className="disable-btn" href="#">{cellProps.status === "Active" ? "Disable" : "Enable"}</Dropdown.Item></li>
                                <li><Dropdown.Item className="remove-item-btn" href="#" onClick={() => onClickDelete(cellProps)}>Delete</Dropdown.Item></li>
                            </Dropdown.Menu>
                        </Dropdown>
                    )
                },
            },
        ],
        [handleRenameAPIKey, handleRegenerateAPIKey]
    );

    return (
        <React.Fragment>
            <Head>
                <title>API Key | Hybrix - Admin & Dashboard Template</title>
            </Head>
            <ToastContainer closeButton={false} />
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb breadcrumb="Apps" breadcrumbItem="API Key" />
                    <Row>
                        <Col xxl={3} md={6}>
                            <Card className="card-animate card-height-100">
                                <Card.Body>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <p className="fw-medium text-muted mb-0">Successful conversions</p>
                                            <h2 className="mt-4 fw-semibold">
                                                <CountUp start={0} end={50}/>
                                            </h2>
                                            <p className="mb-0 text-muted"><span className="badge bg-light text-success mb-0"><i className="ri-arrow-up-line align-middle"></i> 8.24 % </span> 7 last week</p>
                                        </div>
                                        <div>
                                            <div className="avatar-sm flex-shrink-0">
                                                <span className="avatar-title bg-success-subtle text-success rounded-circle fs-2">
                                                    <i className="ph-check-square-offset"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={3} md={6}>
                            <Card className="card-animate card-height-100">
                                <Card.Body>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <p className="fw-medium text-muted mb-0">Failed conversions</p>
                                            <h2 className="mt-4 fw-semibold">
                                                <CountUp start={0} end={8} duration={3}/>
                                            </h2>
                                            <p className="mb-0 text-muted"><span className="badge bg-light text-danger mb-0"><i className="ri-arrow-down-line align-middle"></i> 25.87 % </span> 7 last week</p>
                                        </div>
                                        <div>
                                            <div className="avatar-sm flex-shrink-0">
                                                <span className="avatar-title bg-danger-subtle text-danger rounded-circle fs-2">
                                                    <i className="ph-warning"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={3} md={6}>
                            <Card className="card-height-100">
                                <Card.Body >
                                    <h5 className="card-title mb-3">Developer Plan</h5>
                                    <div className="progress animated-progress custom-progress mb-1">
                                        <div className="progress-bar" role="progressbar" style={{ width: "38%" }} ></div>
                                    </div>
                                    <p className="text-muted mb-2">You used 215 of 2000 of your API</p>
                                    <div className="text-end">
                                        <Button variant='info' size='sm' type="button" className="create-btn" onClick={toggle}>Create API Key</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={3} md={6}>
                            <Card>
                                <Card.Body className="pb-0">
                                    <div className="align-items-center d-flex mb-3">
                                        <h4 className="card-title fs-14 mb-0 flex-grow-1">API Key Report</h4>
                                        <div className="fleRemovex-shrink-0">
                                            <Dropdown drop="start" className="card-header-dropdown">
                                                <Dropdown.Toggle as="a" className="text-reset dropdown-btn arrow-none">
                                                    <span className="fw-semibold text-uppercase fs-12">Sort by:{" "}</span>
                                                    <span className="text-muted">Today<i className="mdi mdi-chevron-down ms-1"></i></span>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="dropdown-menu-end">
                                                    <Dropdown.Item href="#">Today</Dropdown.Item>
                                                    <Dropdown.Item href="#">Yesterday</Dropdown.Item>
                                                    <Dropdown.Item href="#">Last 7 Days</Dropdown.Item>
                                                    <Dropdown.Item href="#">Last 30 Days</Dropdown.Item>
                                                    <Dropdown.Item href="#">This Month</Dropdown.Item>
                                                    <Dropdown.Item href="#">Last Month</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div id="hours_spent_chart" className="apex-chart">
                                        <APIKeyReportChart dataColors='["--tb-primary","--tb-primary","--tb-primary","--tb-primary","--tb-primary","--tb-primary","--tb-primary","--tb-primary","--tb-primary", "--tb-primary"]' />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card id="apiKeyList">
                                <Card.Header className="d-flex align-items-center">
                                    <h5 className="card-title flex-grow-1 mb-0">API Keys</h5>
                                    <div className="d-flex gap-1 flex-wrap">
                                        <Button variant='soft-danger' id="remove-actions"><i className="ri-delete-bin-2-line"></i></Button>
                                        <Button variant='success' type="button" className="create-btn" onClick={toggle}><i className="ri-add-line align-bottom me-1"></i>Add API Key</Button>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <TableContainer
                                        columns={(columns || [])}
                                        data={(apiKeyList || [])}
                                        isGlobalFilter={false}
                                        iscustomPageSize={false}
                                        customPageSize={8}
                                        className="custom-header-css"
                                        tableClass="table-centered align-middle table-nowrap mb-0"
                                        theadClass="table-light"
                                    />
                                    <div className="noresult" style={{ display: "none" }}>
                                        <div className="text-center">
                                            {/* <lord-icon src="https://cdn.lordicon.com/msoeawqm.json" trigger="loop" colors="primary:#121331,secondary:#08a88a" style="width:75px;height:75px"></lord-icon> */}
                                            <h5 className="mt-2">Sorry! No Result Found</h5>
                                            <p className="text-muted mb-0">We've searched more than 150+ API Keys We did not find any API for you search.</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Modal id="api-key-modal" className="fade" show={modalShow} onHide={toggle} contentClassName="border-0" centered>
                <Modal.Header className="p-4 pb-0" closeButton>
                    <Modal.Title id="exampleModalLabel" className="fs-5 fw-bold">
                        {!!isEdit ? isRegenerateAPI ? "Regenerate API" : "Rename API name" : "Add API Key"}
                    </Modal.Title>
                </Modal.Header>
                <Form onSubmit={(e) => { e.preventDefault(); validation.handleSubmit(); return false; }}>
                    <Modal.Body>
                        <div id="api-key-error-msg" className="alert alert-danger py-2 d-none">Please enter api key name</div>
                        <input type="hidden" id="apikeyId" />
                        <div className="mb-3">
                            <Form.Label htmlFor="api-key-name" className="form-label">API Key Name <span className="text-danger">*</span></Form.Label>
                            <Form.Control name="name" type="text" className="form-control" id="api-key-name" placeholder="Enter api key name" onChange={validation.handleChange}
                                onBlur={validation.handleBlur} value={validation.values.name || ""}
                                isInvalid={validation.touched.name && validation.errors.name ? true : false} />
                            {validation.touched.name && validation.errors.name ? (<Form.Control.Feedback type="invalid">{validation.errors.name}</Form.Control.Feedback>) : null}
                        </div>
                        {issubmitBtn && <div className="mb-3" id="apikey-element">
                            <Form.Label htmlFor="api-key" className="form-label">API Key</Form.Label>
                            <Form.Control name="apikey" type="text" className="form-control" id="api-key" defaultValue={validation.values.apiKey} disabled />
                        </div>}
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="hstack gap-2 justify-content-end">
                            <Button variant='secondary' type="button" onClick={toggle}>Close</Button>
                            {issubmitBtn ?
                                <Button variant='primary' type="submit" id="add-btn">{!!isEdit ? "Save Changes" : "Add"}</Button> :
                                <Button variant='primary' type="button" onClick={(e) => createApibutton(e)}>Create API</Button>
                            }
                        </div>
                    </Modal.Footer>
                </Form>
            </Modal>

            <Modal id="deleteApiKeyModal" className="fade zoomIn" show={deleteModal} onHide={toggleDelete} centered>
                <Modal.Header className="p-4 pb-0 m-2" closeButton />
                <Modal.Body>
                    <div className="mt-2 text-center">
                        <BsTrash3 className="icon text-danger" style={{ width: "80px", height: "80px" }} />
                        <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                            <h4>Are you sure ?</h4>
                            <p className="text-muted mx-4 mb-0">Are you sure you want to remove this API Key ?</p>
                        </div>
                    </div>
                    <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                        <Button variant='light' type="button" className="btn w-sm" onClick={toggleDelete}>Close</Button>
                        <Button variant='danger' type="button" className="btn w-sm" id="delete-record" onClick={handleDeleteAPIKey}>Yes, Delete It!</Button>
                    </div>
                </Modal.Body>
            </Modal>

        </React.Fragment>
    );
};

APIKey.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

export default APIKey;