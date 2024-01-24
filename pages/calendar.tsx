import React, { ReactElement, useEffect, useState } from "react";
import SimpleBar from "simplebar-react";
import Link from "next/link";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import BootstrapTheme from "@fullcalendar/bootstrap";
import listPlugin from '@fullcalendar/list';
import * as Yup from "yup";
import { useFormik } from "formik";
import Head from "next/head";

import Flatpickr from "react-flatpickr";
import FeatherIcon from "feather-icons-react";
import { Card, Container, Form, Modal, Row, Col, Button } from "react-bootstrap";

import Breadcrumb from "@common/Breadcrumb";
import UpcommingEvents from '@component/Calendar/UpcommingEvents';

//redux
import { useSelector, useDispatch } from "react-redux";

import {
    getEvents as onGetEvents,
    getCategories as onGetCategories,
    addNewEvent as onAddNewEvent,
    deleteEvent as onDeleteEvent,
    updateEvent as onUpdateEvent,
    getUpCommingEvent as onGetUpCommingEvent,
    resetCalendar,
} from "../Components/slices/thunk";
import Layout from "@common/Layout";
import { createSelector } from "reselect";

const Calender = () => {
    const dispatch: any = useDispatch();
    const [event, setEvent] = useState<any>({});
    const [modal, setModal] = useState<boolean>(false);
    const [selectedDay, setSelectedDay] = useState<any>(0);
    const [selectedNewDay, setSelectedNewDay] = useState<any>(0);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [isEditButton, setIsEditButton] = useState<boolean>(true);
    const [upcommingevents, setUpcommingevents] = useState<any>([]);
    const [deleteEvent, setDeleteEvent] = useState<string>('');
    const [eventName, setEventName] = useState<string>("")

    const selectLayoutState = (state: any) => state.Calendar;
    const selectLayoutProperties = createSelector(
        selectLayoutState,
        (Calendar) => ({
            events: Calendar.events,
            categories: Calendar.categories,
            isEventUpdated: Calendar.isEventUpdated,
        })
    );
    // Inside your component
    const {
        events,
        categories,
        isEventUpdated
    } = useSelector(selectLayoutProperties);

    useEffect(() => {
        dispatch(onGetEvents());
        dispatch(onGetCategories());

        dispatch(onGetUpCommingEvent());
        new Draggable((document.getElementById("external-events") as HTMLElement), {
            itemSelector: ".external-event",
        });
    }, [dispatch]);

    useEffect(() => {

        setUpcommingevents(events);

        // upcommingevents.slice().sort(function (o1: any, o2: any) {
        //     return Math.abs(new Date(o1.start).getTime() - new Date(o2.start).getTime());
        // });

    }, [events, upcommingevents]);

    useEffect(() => {
        if (isEventUpdated) {
            setIsEdit(false);
            setEvent({});
            setTimeout(() => {
                dispatch(resetCalendar(false));
            }, 500);
        }
    }, [dispatch, isEventUpdated]);

    /**
     * Handling the modal state
     */
    const toggle = () => {
        if (modal) {
            setModal(false);
            setEvent(null);
            setIsEdit(false);
            setIsEditButton(true);
        } else {
            setModal(true);
        }
    };
    /**
     * Handling date click on calendar
     */

    const handleDateClick = (arg: any) => {
        const date = arg["date"];
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();

        const currectDate = new Date();
        const currentHour = currectDate.getHours();
        const currentMin = currectDate.getMinutes();
        const currentSec = currectDate.getSeconds();
        const modifiedDate = new Date(
            year,
            month,
            day,
            currentHour,
            currentMin,
            currentSec
        );

        const modifiedData = { ...arg, date: modifiedDate };

        setSelectedNewDay(date);
        setSelectedDay(modifiedData);
        toggle();
    };

    const str_dt = function formatDate(date: any) {
        var monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        var d = new Date(date),
            month = "" + monthNames[d.getMonth()],
            day = "" + d.getDate(),
            year = d.getFullYear();
        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;
        return [day + " " + month, year].join(",");
    };

    const date_r = function formatDate(date: any) {
        var d = new Date(date),
            month = "" + (d.getMonth() + 1),
            day = "" + d.getDate(),
            year = d.getFullYear();
        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;
        return [year, month, day].join("-");
    };

    /**
     * Handling click on event on calendar
     */
    const handleEventClick = (arg: any) => {
        const event = arg.event;

        const st_date = event.start;
        const ed_date = event.end;
        const r_date =
            ed_date == null
                ? str_dt(st_date)
                : str_dt(st_date) + " to " + str_dt(ed_date);
        const er_date = ed_date === null ? [st_date] : [st_date, ed_date];
        // const er_date =
        //     ed_date == null
        //         ? date_r(st_date)
        //         : date_r(st_date) + " to " + date_r(ed_date);

        setEvent({
            id: event.id,
            title: event.title,
            start: event.start,
            end: event.end,
            className: event.classNames,
            category: event.classNames[0],
            location: event._def.extendedProps.location,
            description: event._def.extendedProps.description,
            defaultDate: er_date,
            datetag: r_date,
        });
        setEventName(event.title)
        setDeleteEvent(event.id);
        setIsEdit(true);
        setIsEditButton(false);
        toggle();
    };
    /**
     * On delete event
     */

    const handleDeleteEvent = () => {
        dispatch(onDeleteEvent(event.id));
        toggle();
    };

    // events validation
    const validation: any = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            title: (event && event.title) || "",
            category: (event && event.category) || "",
            location: (event && event.location) || "",
            description: (event && event.description) || "",
            defaultDate: (event && event.defaultDate) || "",
            datetag: (event && event.datetag) || "",
        },

        validationSchema: Yup.object({
            title: Yup.string().required("Please Enter Your Event Name"),
            category: Yup.string().required("Please Select Your Category"),
            location: Yup.string().required("Please Enter Location"),
            description: Yup.string().required("Please Enter Description"),
        }),
        onSubmit: (values) => {
            var updatedDay: any = "";
            if (selectedNewDay) {
                updatedDay = new Date(selectedNewDay[1]);
                updatedDay.setDate(updatedDay.getDate() + 1);
            }

            if (isEdit) {
                const updateEvent = {
                    id: event.id,
                    title: values.title,
                    className: values.category,
                    start: selectedNewDay ? selectedNewDay[0] : event.start,
                    end: selectedNewDay ? updatedDay : event.end,
                    location: values.location,
                    description: values.description,
                };
                // update event
                dispatch(onUpdateEvent(updateEvent));
                validation.resetForm();
            } else {
                const newEvent = {
                    id: Math.floor(Math.random() * 100),
                    title: values["title"],
                    start: selectedNewDay[0],
                    end: updatedDay,
                    className: values.category,
                    location: values["location"],
                    description: values["description"],
                };
                // save new event
                dispatch(onAddNewEvent(newEvent));
                validation.resetForm();
            }
            // setSelectedDay(null);
            setSelectedNewDay(null);
            toggle();
        },
    });

    const submitOtherEvent = () => {

        document.getElementById("form-event")?.classList.remove("view-event");

        document.getElementById("event-title")?.classList.replace("d-none", "d-block");
        document.getElementById("event-category")?.classList.replace("d-none", "d-block");
        (document.getElementById("event-start-date")?.parentNode as HTMLElement).classList.remove("d-none");
        document.getElementById("event-start-date")?.classList.replace("d-none", "d-block");
        document.getElementById("event-location")?.classList.replace("d-none", "d-block");
        document.getElementById("event-description")?.classList.replace("d-none", "d-block");
        document.getElementById("event-start-date-tag")?.classList.replace("d-block", "d-none");
        document.getElementById("event-location-tag")?.classList.replace("d-block", "d-none");
        document.getElementById("event-description-tag")?.classList.replace("d-block", "d-none");

        setIsEditButton(true);
    };

    /**
     * On category darg event
     */
    const onDrag = (event: any) => {
        event.preventDefault();
    };

    /**
     * On calendar drop event
     */
    const onDrop = (event: any) => {
        const date = event["date"];
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();

        const currectDate = new Date();
        const currentHour = currectDate.getHours();
        const currentMin = currectDate.getMinutes();
        const currentSec = currectDate.getSeconds();
        const modifiedDate = new Date(
            year,
            month,
            day,
            currentHour,
            currentMin,
            currentSec
        );

        const draggedEl = event.draggedEl;
        const draggedElclass = draggedEl.className;
        if (
            draggedEl.classList.contains("external-event") &&
            draggedElclass.indexOf("fc-event-draggable") === -1
        ) {
            const modifiedData = {
                id: Math.floor(Math.random() * 1000),
                title: draggedEl.innerText,
                start: modifiedDate,
                className: draggedEl.className,
            };
            dispatch(onAddNewEvent(modifiedData));
        }
    };

    return (
        <React.Fragment>
            <Head>
                <title>Calendar | Hybrix - Admin & Dashboard Template</title>
            </Head>
            <div className="page-content">
                <Container fluid>
                    <Breadcrumb breadcrumbItem="Calendar" breadcrumb="Apps" />
                    <Row>
                        <Col xs={12}>
                            <Row>
                                <Col xl={3}>
                                    <Card className="card-h-100">
                                        <Card.Body>
                                            <Button
                                                variant="primary"
                                                className="w-100"
                                                id="btn-new-event"
                                                onClick={toggle}
                                            >
                                                <i className="mdi mdi-plus"></i> Create New Event
                                            </Button>

                                            <div id="external-events">
                                                <br />
                                                <p className="text-muted">
                                                    Drag and drop your event or click in the calendar
                                                </p>
                                                {categories &&
                                                    categories.map((category: any) => (
                                                        <div
                                                            className={`bg-${category.type}-subtle external-event fc-event text-${category.type}`}
                                                            key={"cat-" + category.id}
                                                            draggable
                                                            onDrag={(event) => {
                                                                onDrag(event);
                                                            }}
                                                        >
                                                            <i className="mdi mdi-checkbox-blank-circle font-size-11 me-2" />
                                                            {category.title}
                                                        </div>
                                                    ))}
                                            </div>
                                        </Card.Body>
                                    </Card>
                                    <div>
                                        <h5 className="mb-1">Upcoming Events</h5>
                                        <p className="text-muted">Don't miss scheduled events</p>
                                        <SimpleBar
                                            className="pe-2 me-n1 mb-3"
                                            style={{ height: "400px" }}
                                        >
                                            <div id="upcoming-event-list">
                                                {upcommingevents &&
                                                    upcommingevents.map((event: any, key: number) => (
                                                        <React.Fragment key={key}>
                                                            <UpcommingEvents event={event} />
                                                        </React.Fragment>
                                                    ))}
                                            </div>
                                        </SimpleBar>
                                    </div>

                                    <Card>
                                        <Card.Body className="bg-info-subtle">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0">
                                                    <FeatherIcon
                                                        icon="calendar"
                                                        className="text-info icon-dual-info"
                                                    />
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h6 className="fs-15">Welcome to your Calendar!</h6>
                                                    <p className="text-muted mb-0">
                                                        Event that applications book will appear here. Click
                                                        on an event to see the details and manage applicants
                                                        event.
                                                    </p>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col xl={9}>
                                    <Card className="card-h-100">
                                        <Card.Body>
                                            <FullCalendar
                                                plugins={[
                                                    BootstrapTheme,
                                                    dayGridPlugin,
                                                    interactionPlugin,
                                                    listPlugin
                                                ]}
                                                initialView="dayGridMonth"
                                                slotDuration={"00:15:00"}
                                                handleWindowResize={true}
                                                themeSystem="bootstrap"
                                                headerToolbar={{
                                                    left: "prev,next today",
                                                    center: "title",
                                                    right: "dayGridMonth,dayGridWeek,dayGridDay,listWeek",
                                                }}
                                                events={events}
                                                editable={true}
                                                droppable={true}
                                                selectable={true}
                                                dateClick={handleDateClick}
                                                eventClick={handleEventClick}
                                                drop={onDrop}
                                            />
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>

                            <div style={{ clear: "both" }}></div>

                            <Modal show={modal} id="event-modal" onHide={toggle} centered>
                                <Modal.Header className="p-3 bg-info-subtle" closeButton>
                                    <Modal.Title>
                                        {!!isEdit ? "Edit Event" : "Add Event"}
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form className={!!isEdit ? "needs-validation view-event" : "needs-validation"} name="event-form" id="form-event"
                                        onSubmit={(e) => { e.preventDefault(); validation.handleSubmit(); return false; }}>
                                        {!!isEdit ? (<div className="text-end"> <Link href="#" className="btn btn-sm btn-soft-primary" id="edit-event-btn" onClick={(e) => { e.preventDefault(); submitOtherEvent(); return false; }} > Edit </Link></div>) : null}

                                        <div className="event-details">
                                            <div className="d-flex mb-2">
                                                <div className="flex-grow-1 d-flex align-items-center">
                                                    <div className="flex-shrink-0 me-3">
                                                        <i className="ri-calendar-event-line text-muted fs-16"></i>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="d-block fw-semibold mb-0" id="event-start-date-tag">
                                                            {event ? event.datetag : ""}
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center mb-2">
                                                <div className="flex-shrink-0 me-3">
                                                    <i className="ri-map-pin-line text-muted fs-16"></i>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="d-block fw-semibold mb-0">
                                                        {" "}
                                                        <span id="event-location-tag">
                                                            {event && event.location !== undefined ? event.location : "No Location"}
                                                        </span>
                                                    </h6>
                                                </div>
                                            </div>
                                            <div className="d-flex mb-3">
                                                <div className="flex-shrink-0 me-3">
                                                    <i className="ri-discuss-line text-muted fs-16"></i>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <p
                                                        className="d-block text-muted mb-0"
                                                        id="event-description-tag"
                                                    >
                                                        {event && event.description !== undefined ? event.description : "No Description"}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <Row className="event-form">
                                            <Col xs={12}>
                                                <div className="mb-3">
                                                    <Form.Label className="form-label">Type</Form.Label>
                                                    <Form.Control as="select"
                                                        className={!!isEdit ? "form-select d-none" : "form-select d-block"} name="category" id="event-category" type="select" onChange={validation.handleChange} onBlur={validation.handleBlur} value={validation.values.category || ""}>
                                                        <option value="bg-danger-subtle">Danger</option>
                                                        <option value="bg-success-subtle">Success</option>
                                                        <option value="bg-primary-subtle">Primary</option>
                                                        <option value="bg-info-subtle">Info</option>
                                                        <option value="bg-dark-subtle">Dark</option>
                                                        <option value="bg-warning-subtle">Warning</option>
                                                    </Form.Control>
                                                    {validation.touched.category && validation.errors.category ? (<Form.Control.Feedback type="invalid">{validation.errors.category}</Form.Control.Feedback>) : null}
                                                </div>
                                            </Col>
                                            <Col xs={12}>
                                                <div className="mb-3">
                                                    <Form.Label className="form-label">Event Name</Form.Label>
                                                    <Form.Control className={!!isEdit ? "form-control d-none" : "form-control d-block"} placeholder="Enter event name" type="text" name="title" id="event-title" onChange={validation.handleChange} onBlur={validation.handleBlur} value={validation.values.title || ""}
                                                        isInvalid={validation.touched.title && validation.errors.title ? true : false}
                                                    />
                                                    {validation.touched.title && validation.errors.title ? (<Form.Control.Feedback type="invalid">{validation.errors.title}</Form.Control.Feedback>) : null}
                                                </div>
                                            </Col>
                                            <Col xs={12}>
                                                <div className="mb-3">
                                                    <Form.Label>Event Date</Form.Label>
                                                    <div className={!!isEdit ? "input-group d-none" : "input-group"}>
                                                        <Flatpickr
                                                            className="form-control"
                                                            data-enable-time
                                                            id="event-start-date"
                                                            name="defaultDate"
                                                            placeholder="Select Date"
                                                            value={validation.values.defaultDate || ""}
                                                            options={{
                                                                mode: "range",
                                                                dateFormat: "Y-m-d",
                                                            }}
                                                            // onChange={(date: any) => {
                                                            //     setSelectedNewDay(date);
                                                            // }}
                                                            onChange={(date: any) => { setSelectedNewDay(date); validation.setFieldValue("defaultDate", date) }}
                                                        />
                                                        <span className="input-group-text"> <i className="ri-calendar-event-line"></i> </span>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xs={12}>
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="event-location">Location</Form.Label>
                                                    <div>
                                                        <Form.Control
                                                            type="text"
                                                            className={!!isEdit ? "d-none" : "d-block"}
                                                            name="location"
                                                            id="event-location"
                                                            placeholder="Event location"
                                                            onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            value={validation.values.location} />
                                                        {validation.touched.location && validation.errors.location ? (
                                                            <Form.Control.Feedback type="invalid" className="d-block">{validation.errors.location}</Form.Control.Feedback>
                                                        ) : null}
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xs={12}>
                                                <div className="mb-3">
                                                    <Form.Label className="form-label">Description</Form.Label>
                                                    <Form.Control as="textarea"
                                                        className={!!isEdit ? "form-control d-none" : "form-control d-block"}
                                                        id="event-description"
                                                        name="description"
                                                        placeholder="Enter a description"
                                                        rows={3}
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.description || "No Description"}
                                                        isInvalid={validation.touched.description && validation.errors.description ? true : false}
                                                    ></Form.Control>
                                                    {validation.touched.description && validation.errors.description ? (<Form.Control.Feedback type="invalid">{validation.errors.description}</Form.Control.Feedback>) : null}
                                                </div>
                                            </Col>
                                        </Row>
                                        <div className="hstack gap-2 justify-content-end">
                                            {!!isEdit && (<Button variant="soft-danger" type="button" id="btn-delete-event" onClick={() => handleDeleteEvent()}> <i className="ri-close-line align-bottom"></i> Delete </Button>)}
                                            {isEditButton && <Button variant="success" type="submit" id="btn-save-event" > {!!isEdit ? "Update Event" : "Add Event"} </Button>}
                                        </div>
                                    </Form>
                                </Modal.Body>
                            </Modal>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment >
    );
};

Calender.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

export default Calender;