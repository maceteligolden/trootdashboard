import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Col, Dropdown, Row } from 'react-bootstrap';
import { get } from "lodash";

import flagus from "@assets/images/flags/us.svg";

//i18n
import i18n from "@common/i18n";
import languages from "@common/data/languages";

const TopBar = () => {
    const currentTime: any = useRef(null);
    useEffect(() => {
        const interval = setInterval(() => {
            // date
            var d = new Date();
            var dateOptions: object = { weekday: 'short', month: 'short', day: 'numeric' };
            var date = d.toLocaleDateString(undefined, dateOptions);
            // time
            var hours = d.getHours();
            var ampm = hours >= 12 ? ' PM' : ' AM';
            var hours = hours % 12;
            var time = ("0" + hours).slice(-2) + ':' + ("0" + d.getMinutes()).slice(-2) + ampm;
            currentTime.current.innerHTML = date + " | " + time;
        }, 1000);
        return () => clearInterval(interval);
    }, [currentTime]);

    const [selectedLang, setSelectedLang] = useState<any>("");

    useEffect(() => {
        const currentLanguage = localStorage.getItem("I18N_LANGUAGE");
        setSelectedLang(currentLanguage);
    }, []);

    const changeLanguageAction = (lang: any) => {
        //set language as i18n
        i18n.changeLanguage(lang);
        localStorage.setItem("I18N_LANGUAGE", lang);
        setSelectedLang(lang);
    };

    return (
        <React.Fragment>
            <div className="top-tagbar">
                <div className="w-100">
                    <Row className="justify-content-between align-items-center">
                        <Col className="col-md-auto" xs={9}>
                            <div className="text-white-50 fs-13">
                                <i className="bi bi-clock align-middle me-2"></i> <span ref={currentTime} id="current-time"></span>
                            </div>
                        </Col>
                        <Col xs={6} className="d-none d-lg-block col-md-auto d-none d-lg-block">
                            <div className="d-flex align-items-center justify-content-center gap-3 fs-13 text-white-50">
                                <div>
                                    <i className="bi bi-envelope align-middle me-2"></i> support@themesbrand.com
                                </div>
                                <div>
                                    <i className="bi bi-globe align-middle me-2"></i> www.themesbrand.com
                                </div>
                            </div>
                        </Col>
                        <Col xs={3} className="col-md-auto">
                            <Dropdown className="topbar-head-dropdown topbar-tag-dropdown justify-content-end">


                                <Dropdown.Toggle id="language-dropdown" className="btn btn-icon btn-topbar rounded-circle text-white-50 fs-13 bg-transparent border-0 arrow-none dropdown-toggle btn btn-primary arrow-none">
                                    <Image
                                        src={get(languages, `${selectedLang}.flag`) || flagus}
                                        id="header-lang-img"
                                        alt="Header Language"
                                        height="16"
                                        className="rounded-circle me-2"
                                    /> <span id="lang-name">{get(languages, `${selectedLang}.label`)}</span>

                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu-end">
                                    {Object.keys(languages).map(key => (
                                        <Dropdown.Item
                                            key={key}
                                            onClick={() => changeLanguageAction(key)}
                                            className={`notify-item language py-2 ${selectedLang === key ? "active" : "none"
                                                }`}
                                        >
                                            <Image
                                                src={get(languages, `${key}.flag`) || flagus}
                                                alt="hybrix"
                                                className="me-2 rounded"
                                                height="16"
                                            />
                                            <span className="align-middle">
                                                {get(languages, `${key}.label`)}
                                            </span>
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                </div>
            </div>
        </React.Fragment>
    );
}

export default TopBar;