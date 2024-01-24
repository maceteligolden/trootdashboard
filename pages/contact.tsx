import React, { useState, useMemo, useEffect, useCallback, ReactElement } from 'react';
import Image from 'next/image';
import TableContainer from '@common/TableContainer';
import { Button, Card, Col, Container, Form, Modal, Offcanvas, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from "yup";
import { useFormik } from "formik";
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getContacts as onGetContacts, addNewContact as onAddNewContact, updateContact as onUpdateContact, deleteContact as onDeleteContact } from 'Components/slices/thunk';
// Import Image
import dummyuser from "@assets/images/users/user-dummy-img.jpg"
import Link from 'next/link';
import Layout from '@common/Layout';
import { createSelector } from 'reselect';

const Contacts = () => {
    const dispatch: any = useDispatch();


    const selectDashboardData = createSelector(
        (state: any) => state.Contacts.contacts,
        (contacts) => contacts
    );
    // Inside your component
    const contacts = useSelector(selectDashboardData);

    const [modalShow, setModalShow] = useState<boolean>(false);
    const [isOffcanvas, setIsOffcanvas] = useState<boolean>(false);
    const [info, setInfo] = useState<any>("");
    const [deleteModal, setDeleteModal] = useState<boolean>(false)

    const [contactList, setContactList] = useState<any>([])
    const [activeList, setActiveList] = useState<any>("all")

    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [contact, setContact] = useState<any>([]);

    const [fieldValue, setFieldValue] = useState<any>();

    useEffect(() => {
        if (contacts && !contacts.length) {
            dispatch(onGetContacts());
        }
    }, [dispatch, contacts]);


    useEffect(() => {
        setContactList(contacts)
    }, [contacts]);

    const toggle = useCallback(() => {
        if (modalShow) {
            setModalShow(false)
            setIsEdit(false);
            setContact(null)
            setFieldValue(null)
        } else {
            setModalShow(true)
        }
    }, [modalShow])

    const toggleDelete = () => {
        setDeleteModal(false);
        setContact(null)
    }

    // Delete Contact
    const onClickDelete = (contact: any) => {
        setContact(contact);
        setDeleteModal(true);
    };

    const handleDeleteContact = () => {
        if (contact) {
            dispatch(onDeleteContact(contact.id));
            setDeleteModal(false);
            setContact(null)
        }
    };

    // Update Contact
    const handleUpdateContact = useCallback((ele: any) => {
        const contact = ele;
        setContact({
            id: contact.id,
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
            country: contact.country,
            label: contact.label,
            img: contact.img
        });
        setIsEdit(true);
        toggle();
    }, [toggle]);

    // Upload Image
    const handleImageFile = (event: any) => {
        const ImgObject = {
            src: URL.createObjectURL(event.currentTarget.files[0]), width: 500, height: 500
        }
        setFieldValue(ImgObject);
    };


    const labelFilter = (ele: string) => {
        let filterData
        if (ele === "all") {
            filterData = contacts.filter((item: any) => item)
        } else {
            filterData = contacts.filter((item: any) => item.tab === ele || item.label === ele)
        }
        setActiveList(ele)
        setContactList(filterData)
    }

    const searchContact = (ele: any) => {
        let search = ele.target.value;
        if (search) {
            search = search.toLowerCase()
            setContactList(contacts.filter((data: any) => (data.name.toLowerCase().includes(search))));
        } else {
            setContactList(contacts);
        }
    };

    // validation
    const validation: any = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            img: (contact && contact.img) || dummyuser,
            name: (contact && contact.name) || '',
            email: (contact && contact.email) || '',
            phone: (contact && contact.phone) || '',
            country: (contact && contact.country) || '',
            label: (contact && contact.label) || '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Please enter a name."),
            email: Yup.string().matches(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, "Enter a valid email address").required("Please enter an email."),
            phone: Yup.string().required('Phone number is not valid'),
            country: Yup.string().required("Please select a country."),
            label: Yup.string().required("Please select a label.")
        }),
        onSubmit: (values) => {
            if (isEdit) {
                const updateContact = {
                    id: contact ? contact.id : 0,
                    img: fieldValue || contact.img,
                    name: values.name,
                    email: values.email,
                    phone: values.phone,
                    country: values.country,
                    label: values.label
                };
                // update contact
                dispatch(onUpdateContact(updateContact));
                validation.resetForm();
            } else {
                const newContact = {
                    id: (Math.floor(Math.random() * (30 - 20)) + 20).toString(),
                    img: fieldValue || dummyuser,
                    name: values.name,
                    email: values.email,
                    phone: values.phone,
                    country: values.country,
                    label: values.label
                };
                // save new contact
                dispatch(onAddNewContact(newContact));
                validation.resetForm();
            }
            toggle();
        },
    });


    const columns = useMemo(
        () => [
            {
                Header: "Name",
                disableFilters: true,
                filterable: true,
                accessor: (cellProps: any) => {
                    return (<span>
                        <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 me-2">
                                <div className="avatar-xs rounded-circle">
                                    <Image src={cellProps.img} alt="" className="img-fluid rounded-circle d-block user-img" />
                                </div>
                            </div>
                            <div className="flex-grow-1">
                                <h6 className="fw-medium mb-1 user-name">{cellProps.name}</h6>
                            </div>
                        </div>
                    </span>)
                },
            },
            {
                Header: "Email",
                disableFilters: true,
                filterable: true,
                accessor: (cellProps: any) => {
                    return cellProps.email;
                },
            },
            {
                Header: "Phone",
                disableFilters: true,
                filterable: true,
                accessor: (cellProps: any) => {
                    return cellProps.phone;
                },
            },
            {
                Header: "Country",
                disableFilters: true,
                filterable: true,
                accessor: (cellProps: any) => {
                    return cellProps.country;
                },
            },
            {
                Header: "Label",
                disableFilters: true,
                filterable: true,
                accessor: (cellProps: any) => {
                    switch (cellProps.label) {
                        case "Business":
                            return (<span className="badge text-info bg-info-subtle"> {cellProps.label}</span>)
                        case "Family":
                            return (<span className="badge text-success bg-success-subtle"> {cellProps.label}</span>)
                        case "Friends":
                            return (<span className="badge badge-soft-secondary"> {cellProps.label}</span>)
                        case "Imported":
                            return (<span className="badge badge-soft-danger"> {cellProps.label}</span>)
                        default:
                            return (<span className="badge text-info bg-info-subtle"> {cellProps.label}</span>)
                    }
                },
            },
            {
                Header: "Action",
                disableFilters: true,
                accessor: (cellProps: any) => {
                    return (<span>
                        <div className="d-flex align-items-center gap-2 justify-content-center">
                            <div>
                                <Link href="#viewContactoffcanvas" data-bs-toggle="offcanvas"
                                    onClick={() => { setInfo(cellProps); setIsOffcanvas(true) }}
                                    className="text-muted px-1 d-block viewlist-btn">
                                    <i className="bi bi-eye-fill"></i>
                                </Link>
                            </div>
                            <div>
                                <Link href="#addContactModal"
                                    onClick={() => handleUpdateContact(cellProps)}
                                    className="text-muted px-1 d-block">
                                    <i className="bi bi-pencil-fill"></i>
                                </Link>
                            </div>
                            <div>
                                <Link href="#removeContactModal" data-bs-toggle="modal" className="text-muted px-1 d-block"
                                    onClick={() => onClickDelete(cellProps)}
                                >
                                    <i className="bi bi-trash-fill"></i>
                                </Link>
                            </div>
                        </div>
                    </span>)
                },
            },
        ],
        [handleUpdateContact]
    );

    return (
        <React.Fragment>
            <Head>
                <title>Contact | Hybrix - Admin & Dashboard Template</title>
            </Head>
            <ToastContainer closeButton={false} />
            <div className="page-content">
                <Container fluid={true}>
                    <Row>
                        <Col lg={12}>
                            <Card className="mt-n4 mx-n4 border-0 rounded-0 bg-primary-subtle">
                                <Card.Body className="pb-0 px-4">
                                    <Row className="justify-content-between align-items-center g-3 mb-5 pb-1 pt-3">
                                        <Col lg={4}>
                                            <h4 className="mb-0">Contacts</h4>
                                        </Col>
                                        <Col lg={4}>
                                            <div className="search-box">
                                                <input type="text" className="form-control border-0" id="searchResultList" placeholder="Search for name or number..." autoComplete="off" onKeyUp={(e) => searchContact(e)} />
                                                <i className="ri-search-line search-icon"></i>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="mt-n5">
                        <Col lg={3}>
                            <Card style={{ minHeight: "calc(100vh - 70px - 60px - 142px)" }}>
                                <Card.Body>
                                    <Button variant='primary' type="button" className="w-100 addContact-modal" onClick={() => toggle()}><i className="bi bi-plus align-middle"></i> Add Contact</Button>
                                    <div className="mt-3 mx-n4 px-4 contact-sidebar-menu" data-simplebar>
                                        <ul className="list-unstyled contact-menu-list">
                                            <li>
                                                <Link href="#!" className={activeList === "all" ? "active" : ""} onClick={() => labelFilter("all")}><i className="ri-folder-2-line align-bottom me-2"></i> <span className="menu-list-link" data-tab="all">All Contacts</span></Link>
                                            </li>
                                            <li>
                                                <Link href="#!" className={activeList === "frequently" ? "active" : ""} onClick={() => labelFilter("frequently")}><i className="ri-history-line align-bottom me-2"></i> <span className="menu-list-link">Frequently Contacted</span></Link>
                                            </li>
                                            <li>
                                                <Link href="#!" className={activeList === "important" ? "active" : ""} onClick={() => labelFilter("important")}><i className="ri-star-line align-bottom me-2"></i> <span className="menu-list-link">Important</span></Link>
                                            </li>
                                            <li>
                                                <Link href="#!" className={activeList === "groups" ? "active" : ""} onClick={() => labelFilter("groups")}><i className="ri-group-line align-bottom me-2"></i> <span className="menu-list-link">Groups</span></Link>
                                            </li>
                                            <li>
                                                <Link href="#!" className={activeList === "trash" ? "active" : ""} onClick={() => labelFilter("trash")}><i className="ri-delete-bin-line align-bottom me-2"></i> <span className="menu-list-link">Deleted</span></Link>
                                            </li>
                                        </ul>

                                        <p className="text-muted mb-2">Labels</p>
                                        <ul className="list-unstyled contact-menu-list">
                                            <li>
                                                <Link href="#!" className={activeList === "Friends" ? "active text-body" : "text-body"} onClick={() => labelFilter("Friends")}><i className="bi bi-tag-fill align-middle me-2 text-secondary"></i> <span className="menu-list-link" data-label="Friends">Friends</span></Link>
                                            </li>
                                            <li>
                                                <Link href="#!" className={activeList === "Family" ? "active text-body" : "text-body"} onClick={() => labelFilter("Family")}><i className="bi bi-tag-fill align-middle me-2 text-success"></i> <span className="menu-list-link" data-label="Family">Family</span></Link>
                                            </li>
                                            <li>
                                                <Link href="#!" className={activeList === "Business" ? "active text-body" : "text-body"} onClick={() => labelFilter("Business")}><i className="bi bi-tag-fill align-middle me-2 text-info"></i> <span className="menu-list-link" data-label="Business">Business</span></Link>
                                            </li>
                                            <li>
                                                <Link href="#!" className={activeList === "Imported" ? "active text-body" : "text-body"} onClick={() => labelFilter("Imported")}><i className="bi bi-tag-fill align-middle me-2 text-danger"></i> <span className="menu-list-link" data-label="Imported">Imported</span></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={9}>
                            <Card>
                                <Card.Body >
                                    <div id="recomended-jobs" className="table-card">
                                        {contactList && contactList.length ? <TableContainer
                                            columns={(columns || [])}
                                            data={(contactList || [])}
                                            isGlobalFilter={false}
                                            iscustomPageSize={false}
                                            customPageSize={10}
                                            className="custom-header-css"
                                            tableClass="table-centered align-middle table-nowrap mb-0"
                                            theadClass="table-light"
                                            isBordered={true}
                                        /> :
                                            <div className="text-center p-5">No matching records found</div>}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>


            <Offcanvas show={isOffcanvas} onHide={() => setIsOffcanvas(false)} placement="end" id="viewContactoffcanvas" className="offcanvas-end">
                <Offcanvas.Header>
                    <ul className="list-unstyled hstack gap-2 mb-0 justify-content-end w-100 me-2">
                        <li>
                            <Link href="#!" className="btn btn-sm btn-icon btn-ghost-info"><i className="ri-pushpin-line fs-15"></i></Link>
                        </li>
                        <li>
                            <Link href="#!" className="btn btn-sm btn-icon btn-ghost-success"><i className="ri-edit-line fs-15"></i></Link>
                        </li>
                        <li>
                            <Link href="#!" className="btn btn-sm btn-icon btn-ghost-secondary"><i className="ri-more-2-fill fs-15"></i></Link>
                        </li>
                    </ul>
                    <button type="button" className="btn-close" onClick={() => setIsOffcanvas(false)}></button>
                </Offcanvas.Header>

                <Offcanvas.Body>
                    <div className="text-center">
                        <div className="mb-3">
                            <Image src={info.img} alt="" className="avatar-lg d-block mx-auto rounded-circle overview-userimg" />
                        </div>
                        <h5 className="offcanvas-title mb-2 overview-name" id="viewContactoffcanvasLabel">{info.name}</h5>
                        <p className="text-muted mb-4 overview-location">{info.country}</p>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-borderless">
                            <tbody>
                                <tr>
                                    <th scope="row">Name</th>
                                    <td className="overview-name">{info.name}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Phone Number</th>
                                    <td className="overview-phone">{info.phone}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Email</th>
                                    <td className="overview-email">{info.email}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Birthday</th>
                                    <td>19 Nov, 1999</td>
                                </tr>
                                <tr>
                                    <th scope="row">Gender</th>
                                    <td>Male</td>
                                </tr>
                                <tr>
                                    <th scope="row">Location</th>
                                    <td className="overview-location">{info.country}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Label</th>
                                    <td className="overview-tags">{info.label}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Age</th>
                                    <td>25</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="hstack gap-2">
                        <Button variant='secondary' type="button" className="w-100">Audio Call</Button>
                        <Button variant='info' type="button" className="w-100">Video Call</Button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>


            <Modal id="addContactModal" show={modalShow} onHide={() => toggle()}>
                <Modal.Header className="p-4 pb-0 m-2" closeButton>
                    <Modal.Title id="addContactModalLabel" className="fs-5 fw-bold">
                        {!!isEdit ? "Edit Contact" : "Add Contact"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="pt-0 p-4">
                    <Form id="contactlist-form" autoComplete="off" className="needs-validation p-2" noValidate
                        onSubmit={(e) => { e.preventDefault(); validation.handleSubmit(); return false; }}
                    >
                        <input type="hidden" id="contactid-input" className="form-control" defaultValue="14" />
                        <div className="text-center mb-3">
                            <div className="position-relative d-inline-block">
                                <div className="position-absolute bottom-0 end-0">
                                    <Form.Label htmlFor="contact-image-input" className="mb-0">
                                        <div className="avatar-xs">
                                            <div className="avatar-title bg-light border rounded-circle text-muted cursor-pointer">
                                                <i className="ri-image-fill"></i>
                                            </div>
                                        </div>
                                    </Form.Label>
                                    <Form.Control className="form-control d-none" id="contact-image-input" type="file"
                                        accept="image/png, image/gif, image/jpeg"
                                        isInvalid={
                                            validation.touched.img && validation.errors.img ? true : false
                                        }
                                        onChange={(e) => { handleImageFile(e); }}

                                    />
                                </div>
                                <div className="avatar-lg">
                                    <div className="avatar-title bg-light rounded-circle">
                                        <Image src={fieldValue || validation.values.img} alt="dummyuser" id="contact-img" className="avatar-md rounded-circle" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-column gap-3">

                            <div>
                                <Form.Label htmlFor="name" className="form-label"> Name </Form.Label>
                                <Form.Control
                                    name="name"
                                    id="name"
                                    className="form-control"
                                    placeholder="Enter your name"
                                    type="text"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.name || ""}
                                    isInvalid={validation.touched.name && validation.errors.name ? true : false}
                                    required
                                />
                                {validation.touched.name && validation.errors.name ? (
                                    <Form.Control.Feedback type="invalid">{validation.errors.name}</Form.Control.Feedback>
                                ) : null}
                            </div>


                            <div>
                                <Form.Label htmlFor="email" className="form-label" > Email </Form.Label>
                                <Form.Control
                                    name="email"
                                    id="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    type="email"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.email || ""}
                                    isInvalid={validation.touched.email && validation.errors.email ? true : false}
                                    required
                                />
                                {validation.touched.email && validation.errors.email ? (
                                    <Form.Control.Feedback type="invalid">{validation.errors.email}</Form.Control.Feedback>
                                ) : null}
                            </div>

                            <div>
                                <Form.Label htmlFor="phoneNumber" className="form-label" > Phone </Form.Label>
                                <Form.Control
                                    name="phone"
                                    id="phoneNumber"
                                    className="form-control"
                                    placeholder="Enter your number"
                                    type="phone"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.phone || ""}
                                    isInvalid={validation.touched.phone && validation.errors.phone ? true : false}
                                    required
                                />
                                {validation.touched.phone && validation.errors.phone ? (
                                    <Form.Control.Feedback type="invalid">{validation.errors.phone}</Form.Control.Feedback>
                                ) : null}
                            </div>

                            <div>
                                <Form.Label htmlFor="country" className="form-label">Country</Form.Label>
                                <Form.Control as="select"
                                    className="form-select" name="country" id="country" type="select" onChange={validation.handleChange} onBlur={validation.handleBlur} value={validation.values.country || ""}>
                                    <option value="Angola">Angola</option>
                                    <option value="Germany">Germany</option>
                                    <option value="Belgium">Belgium</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="Jersey">Jersey</option>
                                    <option value="Namibia">Namibia</option>
                                    <option value="Spain">Spain</option>
                                    <option value="USA">USA</option>
                                    <option value="Ukraine">Ukraine</option>
                                </Form.Control>
                                {validation.touched.country && validation.errors.country ? (<Form.Control.Feedback type="invalid">{validation.errors.country}</Form.Control.Feedback>) : null}
                            </div>

                            <div>
                                <Form.Label htmlFor="label" className="form-label">Label</Form.Label>
                                <Form.Control as="select"
                                    className="form-select" name="label" id="label" type="select" onChange={validation.handleChange} onBlur={validation.handleBlur} value={validation.values.label || ""}>
                                    <option value="Family">Family</option>
                                    <option value="Friends">Friends</option>
                                    <option value="Business">Business</option>
                                    <option value="Imported">Imported</option>
                                </Form.Control>
                                {validation.touched.label && validation.errors.label ? (<Form.Control.Feedback type="invalid">{validation.errors.label}</Form.Control.Feedback>) : null}
                            </div>
                            <div className="text-end">
                                <Button variant='secondary' type="submit" id="addNewContact">{!!isEdit ? "Save" : "Add Contact"}</Button>
                            </div>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>

            <Modal id="removeContactModal" className="fade zoomIn" show={deleteModal} onHide={toggleDelete} centered>
                <Modal.Header className="p-4 pb-0 m-2" closeButton />
                <Modal.Body className="p-md-5">
                    <div className="text-center">
                        <div className="text-danger">
                            <i className="bi bi-trash display-4"></i>
                        </div>
                        <div className="mt-4 fs-15">
                            <h4 className="mb-1">Remove Contact ?</h4>
                            <p className="text-muted mx-4 mb-0">Are you sure you want to remove this contact ?</p>
                        </div>
                    </div>
                    <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                        <Button variant='light' type="button" className="btn w-sm" onClick={toggleDelete}>Close</Button>
                        <Button variant='danger' type="button" className="btn w-sm" id="remove-contact" onClick={handleDeleteContact}>Yes, Delete It!</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment >
    );
}

Contacts.getLayout = (page: ReactElement) => {
    return (
      <Layout>
        {page}
      </Layout>
    )
};

export default Contacts;