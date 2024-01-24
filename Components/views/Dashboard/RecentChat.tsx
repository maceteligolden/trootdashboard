import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Button, Card, Dropdown, Row } from 'react-bootstrap';
import moment from 'moment';
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

import { chatList, chatHistory, chatmsg } from '@common/data';

import avatar1 from "@assets/images/users/avatar-1.jpg"
import SimpleBar from 'simplebar-react';

const RecentChat = () => {
    const [info, setInfo] = useState<any>("")
    const [chatSlider, setChatSlider] = useState<boolean>(false)
    const [chatMsg, setchatMsg] = useState<any>([...chatmsg])
    const [chatBox, setChatBox] = useState<any>(null);
    const [chatSearchList, setChatSearchList] = useState<any>(chatList)

    const scrollToBottom = useCallback(() => {
        if (chatBox) {
            chatBox.scrollTop = chatBox.scrollHeight + 1000;
        }
    }, [chatBox]);

    useEffect(() => {
        if ((chatMsg || []).length > 1) {
            scrollToBottom();
        }
    }, [chatMsg, scrollToBottom]);

    const chatInfo = (ele: any) => {
        setInfo(ele)
        chatMsg.map((item: any) => {
            if (item.img) {
                item.img = ele.img
            }
        })
        setChatSlider(true)
    }

    const sendMessage = () => {
        let msg: any = document.getElementById("chat-input")
        let timeStamp = moment(new Date()).format("hh:mm a")
        if (msg.value !== "") {
            let senderMsg: any = { id: chatMsg.length + 1, subItem: [{ id: 1, msg: msg.value, timeStamp }], isSender: true }
            setchatMsg([...chatMsg, senderMsg])
            msg.value = ""
        } else {
            msg.nextSibling.classList.remove("d-none")
            msg.nextSibling.classList.add("d-block")
            setTimeout(() => {
                msg.nextSibling.classList.remove("d-block")
                msg.nextSibling.classList.add("d-none")
            }, 1000);
        }
    }

    const searchChat = (ele: any) => {
        let search = ele.target.value;
        if (search) {
            search = search.toUpperCase();
            setChatSearchList(chatList.filter((data: any) => (
                data.name.toUpperCase().includes(search) || data.msg.toUpperCase().includes(search)
            ))
            );
        } else {
            setChatSearchList(chatList);
        }
    };

    return (
        <React.Fragment>
            <div className="col-auto layout-rightside-col">
                <div className="overlay"></div>
                <div className={chatSlider ? "layout-rightside show" : "layout-rightside"}>
                    <Card className="h-100 rounded-0">
                        <SimpleBar className="widget-userlist h-100">
                            <Card.Body className="pb-0">
                                <p className="text-muted text-uppercase fw-medium fs-13">Recent Chat</p>
                                <ul className="hstack gap-2 chat-panel-list list-unstyled">
                                    {chatHistory.map((item: any, key: number) => (<li key={key} onClick={() => chatInfo(item)}>
                                        <Button variant='link' href="#" className="text-center avatar-sm h-auto d-block" bsPrefix="a">
                                            <div className={"chat-user-img " + item.status}>
                                                <Image src={item.img} className="avatar-sm rounded-circle chatlist-user-image" alt="" />
                                                <span className="user-status"></span>
                                            </div>
                                            <p className="text-muted mb-0 mt-2 text-truncate chatlist-user-name">{item.name}</p>
                                        </Button>
                                    </li>))}
                                </ul>
                            </Card.Body>
                            <Card.Body>
                                <div className="d-flex">
                                    <div className="search-box flex-grow-1">
                                        <input type="text" className="form-control" id="searchResultList" autoComplete="off" placeholder="Search for ..." onKeyUp={(e) => searchChat(e)} />
                                        <i className="ri-search-line search-icon"></i>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Body className="p-0">
                                <ul className="chat-panel-list list-group list-group-flush mb-0 border-dashed">
                                    {chatSearchList.map((item: any, key: number) => (
                                        <li className="list-group-item" key={key} onClick={() => chatInfo(item)}>
                                            <div className="d-flex align-items-center gap-1">
                                                <div className="flex-shrink-0 me-2">
                                                    <Image src={item.img} alt="" className="avatar-xs rounded-circle chatlist-user-image" />
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <Button variant='link' href="#" className="stretched-link" bsPrefix="a"><h6 className="mb-1 chatlist-user-name">{item.name}</h6></Button>
                                                    <p className={item.badge ? "chatlist-desc fs-13 text-info mb-0 text-truncate" : "chatlist-desc fs-13 mb-0 text-truncate"}>{item.msg}</p>
                                                </div>
                                                <div className="align-self-start text-end">
                                                    <p className="mb-1 text-muted fs-12">{item.timeStamp}</p>
                                                    {item.badge && <span className="badge text-info bg-info-subtle rounded-circle fs-10">{item.unreadMsg}</span>}
                                                </div>
                                            </div>
                                        </li>))}
                                </ul>
                            </Card.Body>
                        </SimpleBar>
                        <div className="widget-user-chatlist">
                            <div className="chat-topbar p-4 border-bottom border-bottom-dashed">
                                <div className="align-items-center d-flex">
                                    <div className="flex-grow-1">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0 me-2">
                                                <div className="flex-shrink-0 chat-user-img online align-self-center me-2 ms-0">
                                                    <div className="avatar-xs">
                                                        <Image src={info.img || avatar1} className="rounded-circle img-fluid userprofile" alt="" />
                                                        <span className="user-status"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h5 className="fs-14 mb-0 profile-username">{info.name || "Ashley Silva"}</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <div className="d-flex align-items-start gap-2">
                                            <Dropdown>
                                                <Dropdown.Toggle className="btn btn-ghost-secondary btn-sm fs-16 arrow-none">
                                                    <i className="ri-more-2-fill"></i>
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu className="dropdown-menu-end">
                                                    <Dropdown.Item href="#"><i className="bi bi-archive text-muted me-2"></i> Archive</Dropdown.Item>
                                                    <Dropdown.Item href="#"><i className="bi bi-mic-mute text-muted me-2"></i> Muted</Dropdown.Item>
                                                    <Dropdown.Item href="#"><i className="bi bi-trash3 text-muted me-2"></i> Delete</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <div>
                                                <button type="button" className="btn btn-soft-danger btn-sm fs-16" id="close-chatlist" onClick={() => setChatSlider(false)}><i className="ri-close-fill"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Card.Body className="p-0">
                                <div>
                                    <div id="users-chat">
                                        <PerfectScrollbar className="chat-conversation p-3" id="chat-conversation" containerRef={ref => setChatBox(ref)}>
                                            <ul className="list-unstyled chat-conversation-list chat-sm" id="users-conversation">
                                                {(chatMsg || []).map((item: any, key: number) => (
                                                    <li className={item.isSender ? "chat-list right" : "chat-list left"} key={key}>
                                                        <div className="conversation-list">
                                                            {item.img && <div className="chat-avatar">
                                                                <Image src={item.img} alt="" />
                                                            </div>}
                                                            <div className="user-chat-content">
                                                                {item.subItem.map((item: any, key: number) => (
                                                                    <React.Fragment key={key}>
                                                                        <div className="ctext-wrap">
                                                                            <div className="ctext-wrap-content">
                                                                                <p className="mb-0 ctext-content">{item.msg}</p>
                                                                            </div>

                                                                            <Dropdown className="align-self-start message-box-drop">
                                                                                <Dropdown.Toggle as="a">
                                                                                    <i className="bi bi-three-dots-vertical"></i>
                                                                                </Dropdown.Toggle>
                                                                                <Dropdown.Menu>
                                                                                    <Dropdown.Item href="#"><i className="bi bi-reply me-2 text-muted align-bottom"></i>Reply</Dropdown.Item>
                                                                                    <Dropdown.Item href="#"><i className="bi bi-share me-2 text-muted align-bottom"></i>Forward</Dropdown.Item>
                                                                                    <Dropdown.Item href="#"><i className="bi bi-files me-2 text-muted align-bottom"></i>Copy</Dropdown.Item>
                                                                                    <Dropdown.Item href="#"><i className="bi bi-bookmark me-2 text-muted align-bottom"></i>Bookmark</Dropdown.Item>
                                                                                    <Dropdown.Item href="#"><i className="bi bi-trash3 me-2 text-muted align-bottom"></i>Delete</Dropdown.Item>
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>

                                                                        </div>
                                                                        {item.timeStamp && <div className="conversation-name"><small className="text-muted time">{item.timeStamp}</small> <span className={item.isRead ? "text-success check-message-icon" : "text-muted check-message-icon"}><i className={item.isRead ? "ri-check-double-line align-bottom" : "ri-check-line align-bottom"}></i></span></div>}
                                                                    </React.Fragment>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </li>))}
                                            </ul>
                                        </PerfectScrollbar>
                                    </div>
                                </div>
                            </Card.Body>
                            <div className="position-relative p-4 border-top border-top-dashed">
                                <form className="chat-form" autoComplete="off">
                                    <Row className="g-2">
                                        <div className="col">
                                            <div className="position-relative">
                                                <input type="text" id="chat-input" className="form-control border-light bg-light" placeholder="Enter Message..." />
                                                <div className="chat-input-feedback">
                                                    Please enter a message
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <button type="button" className="btn btn-primary" onClick={() => sendMessage()}><i className="bi bi-send-fill"></i></button>
                                        </div>
                                    </Row>
                                </form>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </React.Fragment>
    );
}

export default RecentChat;