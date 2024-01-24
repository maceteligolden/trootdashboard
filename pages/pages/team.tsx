import React, { useState, useEffect, useCallback, useMemo, ReactElement } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Button, Card, Col, Container, Dropdown, Form, Modal, Offcanvas, Row } from 'react-bootstrap';
import Breadcrumb from '@common/Breadcrumb';
import { BsTrash3 } from "react-icons/bs";

import { useSelector, useDispatch } from 'react-redux';
import * as Yup from "yup";
import { useFormik } from "formik";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getTeam as onGetTeam, addNewMember as onAddNewMember, updateMember as onUpdateMember, deleteMember as onDeleteMember } from 'Components/slices/thunk';

import { basicTeamExampleData } from '@common/data';
import dummyuser from "@assets/images/users/user-dummy-img.jpg";
import Link from 'next/link';
import Layout from '@common/Layout';
import { createSelector } from 'reselect';

const Team = () => {
    const dispatch: any = useDispatch();

    const selectDashboardData = createSelector(
        (state: any) => state.Team.team,
        (team) => team
    );
    // Inside your component
    const team = useSelector(selectDashboardData);

    const bookmark = (ele: any) => {
        let btn = ele.target.closest("button")
        if (btn.classList.contains("active")) {
            btn.classList.remove("active")
        } else {
            btn.classList.add("active")
        }
    }

    const [show, setShow] = useState<boolean>(false);
    const [info, setInfo] = useState<any>("");
    const [modalShow, setModalShow] = useState<boolean>(false)

    const [teamList, setTeamList] = useState<any>([]);
    const [teamData, setTeamData] = useState<any>(false);
    const [deleteModal, setDeleteModal] = useState<boolean>(false)
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [fieldValue, setFieldValue] = useState<any>();

    useEffect(() => {
        if (team && !team.length) {
            dispatch(onGetTeam());
        }
    }, [dispatch, team]);

    useEffect(() => {
        setTeamList(team)
    }, [team]);

    const toggle = useCallback(() => {
        if (modalShow) {
            setModalShow(false)
            setIsEdit(false);
            setTeamData(null)
            setFieldValue(null)
        } else {
            setModalShow(true)
        }
    }, [modalShow])

    const toggleDelete = () => {
        setDeleteModal(false);
        setTeamData(null)
    }

    // Delete Team
    const onClickDelete = (data: any) => {
        setTeamData(data);
        setDeleteModal(true);
    };

    const handleDeleteTeam = () => {
        if (teamData) {
            dispatch(onDeleteMember(teamData.id));
            setDeleteModal(false);
            setTeamData(null)

        }
    };

    // Update Team
    const handleUpdateTeam = useCallback((ele: any) => {
        const team = ele;
        setTeamData({
            id: team.id,
            name: team.name,
            position: team.position,
            img: team.img
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

    // validation
    const validation: any = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            img: (teamData && teamData.img) || dummyuser,
            name: (teamData && teamData.name) || '',
            position: (teamData && teamData.position) || '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Please enter a name."),
            position: Yup.string().required("Please select a position."),
        }),
        onSubmit: (values) => {
            if (isEdit) {
                const updateTeam = {
                    id: teamData ? teamData.id : 0,
                    img: fieldValue || teamData.img,
                    name: values.name,
                    position: values.position,
                };
                // update Member
                dispatch(onUpdateMember(updateTeam));
                validation.resetForm();
            } else {
                const newTeam = {
                    id: (Math.floor(Math.random() * (30 - 20)) + 20).toString(),
                    img: fieldValue || dummyuser,
                    name: values.name,
                    position: values.position,
                    userName: `@ ${values.name.toLocaleLowerCase().substring(0, values.name.indexOf(' '))}`,
                    progress: "0%",
                    projects: "0",
                    overdue: "0",
                    tasks: "0"
                };
                // save new Member
                dispatch(onAddNewMember(newTeam));
                validation.resetForm();
            }
            toggle();
        },
    });

    // Pagination
    const [pagination, setPagination] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<any>(1);
    const [currentpages, setCurrentpages] = useState<any>([]);
    const perPageData = 8;

    const handleClick = (e: any) => {
        setCurrentPage(Number(e.target.id));
    };

    const indexOfLast = currentPage * perPageData;
    const indexOfFirst = indexOfLast - perPageData;

    const currentdata = useMemo(() => teamList.slice(indexOfFirst, indexOfLast), [teamList, indexOfFirst, indexOfLast])

    useEffect(() => {
        setCurrentpages(currentdata)
    }, [currentPage, teamList, currentdata])

    const searchTeamMember = (ele: any) => {
        let search = ele.target.value;
        if (search) {
            search = search.toLowerCase()
            setCurrentpages(teamList.filter((data: any) => (data.name.toLowerCase().includes(search))));
            setPagination(false)
        } else {
            setCurrentpages(currentdata);
            setPagination(true)
        }
    };

    const pageNumbers: any = [];
    for (let i = 1; i <= Math.ceil(teamList.length / perPageData); i++) {
        pageNumbers.push(i);
    }

    const handleprevPage = () => {
        let prevPage = currentPage - 1;
        setCurrentPage(prevPage);
    };

    const handlenextPage = () => {
        let nextPage = currentPage + 1;
        setCurrentPage(nextPage);
    };

    useEffect(() => {
        if (pageNumbers.length && pageNumbers.length < currentPage) {
            setCurrentPage(pageNumbers.length)
        }
    }, [currentPage, pageNumbers.length])

    return (
        <React.Fragment>
            <Head>
                <title>Team | Hybrix - Admin & Dashboard Template</title>
            </Head>
            <ToastContainer closeButton={false} />
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb breadcrumb="Pages" breadcrumbItem="Team" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Body>
                                    <Row className="g-2">
                                        <Col sm={4}>
                                            <div className="search-box">
                                                <input type="text" className="form-control" id="searchMemberList" placeholder="Search for name or designation..." onChange={(e) => searchTeamMember(e)} />
                                                <i className="ri-search-line search-icon"></i>
                                            </div>
                                        </Col>

                                        <Col sm="auto" className="ms-auto">
                                            <div className="list-grid-nav hstack gap-1">
                                                <Button variant='info' className="addMembers-modal" onClick={toggle}><i className="ri-add-fill me-1 align-bottom"></i> Add Members</Button>
                                                <Button variant='soft-primary' type="button" className="btn-icon fs-14"><i className="ri-grid-fill"></i></Button>
                                                <Button variant='soft-primary' type="button" className="btn-icon fs-14"><i className="ri-list-unordered"></i></Button>

                                                <Dropdown className="col text-end">
                                                    <Dropdown.Toggle as="a" className="btn btn-soft-secondary btn-icon fs-14 arrow-none">
                                                        <i className="ri-more-2-fill" />
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                                        <li><Dropdown.Item href="#">All</Dropdown.Item></li>
                                                        <li><Dropdown.Item href="#">Last Week</Dropdown.Item></li>
                                                        <li><Dropdown.Item href="#">Last Month</Dropdown.Item></li>
                                                        <li><Dropdown.Item href="#">Last Year</Dropdown.Item></li>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row id="team-member-list">
                        {(currentpages || []).map((item: any, key: number) => (
                            <Col xxl={3} md={6} key={key} >
                                <Card className="team-box">
                                    <Card.Body className="p-4 m-2">
                                        <Row className="mb-4 pb-2">
                                            <Col>
                                                <div className="flex-shrink-0 me-2">
                                                    <Button variant='outline-warning' size='sm' type="button" className={item.bookmark ? "custom-toggle rounded-circle btn-icon active" : "custom-toggle rounded-circle btn-icon"} data-bs-toggle="button" onClick={(e) => bookmark(e)}>
                                                        <span className="icon-on"><i className="ri-star-line fs-14"></i></span>
                                                        <span className="icon-off"><i className="ri-star-fill fs-14"></i></span>
                                                    </Button>
                                                </div>
                                            </Col>

                                            <Dropdown className="text-end col" drop="start" role="button">
                                                <Dropdown.Toggle as="a" className="arrow-none">
                                                    <i className="ri-more-fill fs-17"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                                    <li><Dropdown.Item href="#" className="edit-list" onClick={() => handleUpdateTeam(item)}><i className="ri-pencil-line me-2 align-bottom text-muted"></i>Edit</Dropdown.Item></li>
                                                    <li><Dropdown.Item href="#" className="remove-list" onClick={() => onClickDelete(item)} ><i className="ri-delete-bin-5-line me-2 align-bottom text-muted"></i>Remove</Dropdown.Item></li>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Row>
                                        <div className="text-center mb-4">
                                            <div className="avatar-md mx-auto">
                                                <Image src={item.img} alt="" className="member-img img-fluid d-block rounded-3" />
                                            </div>
                                        </div>
                                        <div className="text-center mb-4 pb-3 mt-0">
                                            <Button variant="link" href="#member-overview" className="member-name" data-bs-toggle="offcanvas" onClick={() => { setShow(true), setInfo(item) }}>
                                                <h5 className="fs-17">{item.name}</h5>
                                            </Button>
                                            <p className="text-muted mb-4">{item.userName}</p>
                                            <div className="d-none member-contact">{item.contactNo}</div>
                                            <div className="d-none member-email">{item.email}</div>
                                            <span className="badge text-success bg-success-subtle member-designation">{item.designation}</span>
                                        </div>
                                        <div className="progress animated-progress progress-sm progress-label">
                                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: item.progress }}>
                                                <div className="label">{item.progress}</div>
                                            </div>
                                        </div>
                                        <Row className="text-muted text-center mt-4">
                                            <Col className="border-end border-end-dashed">
                                                <h5 className="mb-1 projects-num">{item.projects}</h5>
                                                <p className="text-muted mb-0">Projects</p>
                                            </Col>
                                            <Col className="border-end border-end-dashed">
                                                <h5 className="mb-1 projects-num">{item.overdue}</h5>
                                                <p className="text-muted mb-0">Overdue</p>
                                            </Col>
                                            <Col>
                                                <h5 className="mb-1 tasks-num">{item.tasks}</h5>
                                                <p className="text-muted mb-0">Tasks</p>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                    {pagination && <Row className="g-0 justify-content-end mb-4" id="pagination-element">
                        <Col sm={6}>
                            <div className="pagination-block pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
                                <div className={currentPage <= 1 ? "page-item disabled" : "page-item"}>
                                    <Button variant="link" href="#" className="page-link" id="page-prev" onClick={() => handleprevPage()}>Previous</Button>
                                </div>
                                <span id="page-num" className="pagination">
                                    {pageNumbers.map((item: any, key: any) => (
                                        <React.Fragment key={key}>
                                            <div className={currentPage === item ? "page-item active" : "page-item"}>
                                                <Link className="page-link clickPageNumber" href="#" key={key} id={item} onClick={(e) => handleClick(e)}>
                                                    {item}
                                                </Link>
                                            </div>
                                        </React.Fragment>
                                    ))}
                                </span>
                                <div className={currentPage >= pageNumbers.length ? "page-item disabled" : "page-item"}>
                                    <Button variant="link" href="#" className="page-link" id="page-next" onClick={() => handlenextPage()}>Next</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>}

                    <Row>
                        <Col lg={12}>
                            <h5 className="card-title mb-4">Basic Example</h5>
                        </Col>
                    </Row>

                    <Row className="row-cols-xxl-5 row-cols-lg-3 row-cols-md-2 row-cols-1">
                        {basicTeamExampleData.map((item: any, key: number) => (
                            <Col key={key}>
                                <Card>
                                    <Card.Body className="p-4 m-2">
                                        <Row className="mb-4 pb-2">
                                            <Col>
                                                <div className="flex-shrink-0 me-2">
                                                    <Button variant='outline-danger' size='sm' type="button" className="custom-toggle rounded-circle btn-icon" data-bs-toggle="button" onClick={(e) => bookmark(e)}>
                                                        <span className="icon-on"><i className="ri-heart-line fs-14"></i></span>
                                                        <span className="icon-off"><i className="ri-heart-fill fs-14"></i></span>
                                                    </Button>
                                                </div>
                                            </Col>

                                            <Dropdown className="col text-end" drop="start">
                                                <Dropdown.Toggle as="a" className="arrow-none">
                                                    <i className="ri-more-fill fs-17"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                                    <li><Dropdown.Item className="dropdown-item edit-list" href="#addmemberModal" data-bs-toggle="modal" data-edit-id="12" onClick={() => handleUpdateTeam(item)}><i className="ri-pencil-line me-2 align-bottom text-muted"></i>Edit</Dropdown.Item ></li>
                                                    <li><Dropdown.Item className="dropdown-item remove-list" href="#removeMemberModal" data-bs-toggle="modal" data-remove-id="12" onClick={() => onClickDelete(item)}><i className="ri-delete-bin-5-line me-2 align-bottom text-muted"></i>Remove</Dropdown.Item ></li>
                                                </Dropdown.Menu>
                                            </Dropdown>

                                        </Row>
                                        <div className="text-center mb-4">
                                            <Image src={item.img} alt="" className="avatar-md rounded-3" />
                                        </div>
                                        <div className="text-center">
                                            <Button variant="link" href="#member-overview" data-bs-toggle="offcanvas">
                                                <h5 className="fs-17">{item.name}</h5>
                                            </Button>
                                            <p className="text-muted mb-0">{item.email}</p>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>))}
                    </Row>
                </Container>
            </div>

            <Offcanvas show={show} onHide={() => setShow(false)} placement="end" className="offcanvas-end border-0">
                <Offcanvas.Body className="profile-offcanvas p-0">
                    <div className="p-3">
                        <div className="team-settings">
                            <Row>
                                <Col>
                                    <div className="bookmark-icon flex-shrink-0 me-2">
                                        <input type="checkbox" id="favourite13" className="bookmark-input bookmark-hide" />
                                        <label htmlFor="favourite13" className="btn-star">
                                            <svg width="20" height="20">
                                                {/* <use xlink:href="#icon-star" /> */}
                                            </svg>
                                        </label>
                                    </div>
                                </Col>

                                <Dropdown className="col text-end">
                                    <Dropdown.Toggle as="a" className="arrow-none">
                                        <i className="ri-more-fill fs-17"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                        <li><Dropdown.Item href="#"><i className="ri-eye-line me-2 align-middle"></i>View</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#"><i className="ri-star-line me-2 align-middle"></i>Favorites</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle"></i>Delete</Dropdown.Item></li>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Row>
                        </div>
                    </div>
                    <div className="p-3 text-center">
                        <Image src={info.img} alt="" className="avatar-lg img-thumbnail rounded-4 mx-auto profile-img" />
                        <div className="mt-3">
                            <h5 className="fs-15 profile-name">{info.name}</h5>
                            <p className="text-muted profile-designation">{info.position}</p>
                        </div>
                        <div className="hstack gap-2 justify-content-center mt-4">
                            <div className="avatar-xs">
                                <Button variant="link" href="#" className="avatar-title bg-secondary-subtle text-secondary rounded fs-16">
                                    <i className="ri-facebook-fill"></i>
                                </Button>
                            </div>
                            <div className="avatar-xs">
                                <Button variant="link" href="#" className="avatar-title bg-success-subtle text-success rounded fs-16">
                                    <i className="ri-slack-fill"></i>
                                </Button>
                            </div>
                            <div className="avatar-xs">
                                <Button variant="link" href="#" className="avatar-title bg-info-subtle text-info rounded fs-16">
                                    <i className="ri-linkedin-fill"></i>
                                </Button>
                            </div>
                            <div className="avatar-xs">
                                <Button variant="link" href="#" className="avatar-title bg-danger-subtle text-danger rounded fs-16">
                                    <i className="ri-dribbble-fill"></i>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <Row className="g-0 text-center bg-light">
                        <Col>
                            <div className="p-3 border border-dashed border-start-0">
                                <h5 className="mb-1 profile-project">{info.projects}</h5>
                                <p className="text-muted mb-0">Projects</p>
                            </div>
                        </Col>

                        <Col>
                            <div className="p-3 border border-dashed border-start-0">
                                <h5 className="mb-1 profile-task">{info.tasks}</h5>
                                <p className="text-muted mb-0">Tasks</p>
                            </div>
                        </Col>
                    </Row>

                    <div className="p-3">
                        <h5 className="fs-15 mb-3">Personal Details</h5>
                        <div className="mb-3">
                            <p className="text-muted text-uppercase fw-semibold fs-12 mb-2"><i className="ri-phone-fill align-middle fs-14 me-1"></i> Number</p>
                            <h6 className="profile-contact">{info.contactNo}</h6>
                        </div>
                        <div className="mb-3">
                            <p className="text-muted text-uppercase fw-semibold fs-12 mb-2"><i className="ri-mail-open-fill align-middle fs-14 me-1"></i> Email</p>
                            <h6 className="profile-email">{info.email}</h6>
                        </div>
                        <div>
                            <p className="text-muted text-uppercase fw-semibold fs-12 mb-2"><i className="ri-map-pin-fill align-middle fs-14 me-1"></i> Location</p>
                            <h6 className="mb-0">Carson City - USA</h6>
                        </div>
                    </div>
                    <div className="p-3 border-top">
                        <h5 className="fs-15 mb-4">File Manager</h5>
                        <div className="d-flex mb-3">
                            <div className="flex-shrink-0 avatar-xs">
                                <div className="avatar-title bg-danger-subtle text-danger rounded fs-16">
                                    <i className="ri-image-2-line"></i>
                                </div>
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h6 className="mb-1"><Button variant="link" href="#">Images</Button></h6>
                                <p className="text-muted mb-0">4469 Files</p>
                            </div>
                            <div className="text-muted">12 GB</div>
                        </div>
                        <div className="d-flex mb-3">
                            <div className="flex-shrink-0 avatar-xs">
                                <div className="avatar-title bg-secondary-subtle text-secondary rounded fs-16">
                                    <i className="ri-file-zip-line"></i>
                                </div>
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h6 className="mb-1"><Button variant="link" href="#">Documents</Button></h6>
                                <p className="text-muted mb-0">46 Files</p>
                            </div>
                            <div className="text-muted">
                                3.46 GB
                            </div>
                        </div>
                        <div className="d-flex mb-3">
                            <div className="flex-shrink-0 avatar-xs">
                                <div className="avatar-title bg-success-subtle text-success rounded fs-16">
                                    <i className="ri-live-line"></i>
                                </div>
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h6 className="mb-1"><Button variant="link" href="#">Media</Button></h6>
                                <p className="text-muted mb-0">124 Files</p>
                            </div>
                            <div className="text-muted">
                                4.3 GB
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="flex-shrink-0 avatar-xs">
                                <div className="avatar-title bg-primary-subtle text-primary rounded fs-16">
                                    <i className="ri-error-warning-line"></i>
                                </div>
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h6 className="mb-1"><Button variant="link" href="#">Others</Button></h6>
                                <p className="text-muted mb-0">18 Files</p>
                            </div>
                            <div className="text-muted">
                                846 MB
                            </div>
                        </div>
                    </div>
                </Offcanvas.Body>
                <div className="offcanvas-foorter border p-3 hstack gap-3 text-center position-relative">
                    <Button variant='light' className="w-100"><i className="ri-question-answer-fill align-bottom ms-1"></i> Send Message</Button>
                    <Button variant="link" href="/pages/profile/page" className="btn btn-primary w-100"><i className="ri-user-3-fill align-bottom ms-1"></i> View Profile</Button>
                </div>
            </Offcanvas>

            <Modal id="addmemberModal" className="fade" show={modalShow} onHide={() => toggle()} contentClassName="border-0" centered>
                <Modal.Header className="p-4 pb-0" closeButton>
                    <Modal.Title id="createMemberLabel" className="fs-5 fw-bold">{!!isEdit ? "Edit Member" : "Add New Members"}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-4">
                    <Form autoComplete="off" id="memberlist-form" className="needs-validation" noValidate
                        onSubmit={(e) => { e.preventDefault(); validation.handleSubmit(); return false; }}>
                        <Row>
                            <Col lg={12}>
                                <input type="hidden" id="memberid-input" className="form-control" value="7" />
                                <div className="text-center mb-4">
                                    <div className="position-relative d-inline-block">
                                        <div className="position-absolute top-100 start-100 translate-middle">
                                            <Form.Label htmlFor="member-image-input" className="mb-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Select Member Image" data-bs-original-title="Select Member Image">
                                                <div className="avatar-xs">
                                                    <div className="avatar-title bg-light border rounded-circle text-muted cursor-pointer">
                                                        <i className="ri-image-fill"></i>
                                                    </div>
                                                </div>
                                            </Form.Label>
                                            <Form.Control className="form-control d-none" value="" id="member-image-input" type="file" accept="image/png, image/gif, image/jpeg"
                                                isInvalid={
                                                    validation.touched.img && validation.errors.img ? true : false
                                                }
                                                onChange={(e) => { handleImageFile(e); }}
                                            />
                                        </div>
                                        <div className="avatar-lg">
                                            <div className="avatar-title bg-light rounded-3">
                                                <Image src={fieldValue || validation.values.img} id="member-img" alt="dummy user image" className="avatar-md rounded-3 h-auto" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3 mt-4">
                                    <Form.Label htmlFor="teammembersName" className="form-label">Name</Form.Label>
                                    <Form.Control type="text" className="form-control" id="teammembersName" placeholder="Enter name" required
                                        name="name"
                                        onChange={validation.handleChange}
                                        onBlur={validation.handleBlur}
                                        value={validation.values.name || ""}
                                        isInvalid={validation.touched.name && validation.errors.name ? true : false}
                                    />
                                    {validation.touched.name && validation.errors.name ? (
                                        <Form.Control.Feedback type="invalid">{validation.errors.name}</Form.Control.Feedback>
                                    ) : null}
                                </div>

                                <div className="mb-4">
                                    <Form.Label htmlFor="designation" className="form-label">Designation</Form.Label>
                                    <Form.Control type="text" className="form-control" id="designation" placeholder="Enter designation" required
                                        name="position"
                                        onChange={validation.handleChange}
                                        onBlur={validation.handleBlur}
                                        value={validation.values.position || ""}
                                        isInvalid={validation.touched.position && validation.errors.position ? true : false}
                                    />
                                    {validation.touched.position && validation.errors.position ? (
                                        <Form.Control.Feedback type="invalid">{validation.errors.position}</Form.Control.Feedback>
                                    ) : null}
                                </div>

                                <div className="hstack gap-2 justify-content-end">
                                    <Button variant='light' type="button" onClick={() => toggle()}>Close</Button>
                                    <Button variant='success' type="submit" id="addNewMember">{!!isEdit ? "save" : "Add Member"}</Button>
                                </div>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
            </Modal>

            <Modal id="removeMemberModal" className="fade zoomIn" show={deleteModal} onHide={toggleDelete} centered>
                <Modal.Header closeButton />
                <Modal.Body>
                    <div className="mt-2 text-center">
                        {/* <lord-icon src="https://cdn.lordicon.com/gsqxdxog.json" trigger="loop" colors="primary:#f7b84b,secondary:#f06548" style="width:100px;height:100px"></lord-icon> */}
                        <BsTrash3 className="icon text-danger" style={{ width: "80px", height: "80px" }} />
                        <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                            <h4>Are you sure ?</h4>
                            <p className="text-muted mx-4 mb-0">Are you sure you want to remove this member ?</p>
                        </div>
                    </div>
                    <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                        <Button variant='light' type="button" className="w-sm" onClick={toggleDelete}>Close</Button>
                        <Button variant='danger' type="button" className="w-sm" id="remove-item" onClick={handleDeleteTeam}>Yes, Delete It!</Button>
                    </div>
                </Modal.Body>
            </Modal>

        </React.Fragment >
    );
};

Team.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

export default Team;