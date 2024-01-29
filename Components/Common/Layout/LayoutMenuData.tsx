import React, { useEffect, useState } from "react";
import Router from "next/router";
const Navdata = () => {
    //state data
    const [isAuth, setIsAuth] = useState(false);
    const [isPages, setIsPages] = useState(false);
    const [isMultiLevel, setIsMultiLevel] = useState(false);

    // Authentication
    const [isSignIn, setIsSignIn] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [isPasswordReset, setIsPasswordReset] = useState(false);
    const [isPasswordCreate, setIsPasswordCreate] = useState(false);
    const [isLockScreen, setIsLockScreen] = useState(false);
    const [isLogout, setIsLogout] = useState(false);
    const [isSuccessMessage, setIsSuccessMessage] = useState(false);
    const [isVerification, setIsVerification] = useState(false);
    const [isError, setIsError] = useState(false);

    // Pages
    const [isProfile, setIsProfile] = useState(false);

    // Multi Level
    const [isLevel1, setIsLevel1] = useState(false);
    const [isLevel2, setIsLevel2] = useState(false);

    const [isCurrentState, setIsCurrentState] = useState('');

    function updateIconSidebar(e: any) {
        if (e && e.target && e.target.getAttribute("sub-items")) {
            const ul: any = document.getElementById("two-column-menu");
            const iconItems: any = ul.querySelectorAll(".nav-icon.active");
            let activeIconItems = [...iconItems];
            activeIconItems.forEach((item) => {
                item.classList.remove("active");
                var id: any = item.getAttribute("sub-items");
                var menusId = document.getElementById(id);
                if (menusId){
                    (menusId.parentElement as HTMLElement).classList.remove("show");
                }
            });
            e.target.classList.add("active");
        }
    }

      useEffect(() => {
        document.body.classList.remove('twocolumn-panel');
        if (isCurrentState !== 'Auth') {
            setIsAuth(false);
        }
        if (isCurrentState !== 'Pages') {
            setIsPages(false);
        }
        if (isCurrentState !== 'MuliLevel') {
            setIsMultiLevel(false);
        }
        if (isCurrentState === 'Dashboard') {
            Router.push("/dashboard");
            document.body.classList.add('twocolumn-panel');
        }
        if (isCurrentState === 'Widgets') {
            Router.push("/widgets");
            document.body.classList.add('twocolumn-panel');
        }
        if (isCurrentState === 'Calendar') {
            Router.push("/calendar");
            document.body.classList.add('twocolumn-panel');
        }
        if (isCurrentState === 'API Key') {
            Router.push("/api-key");
            document.body.classList.add('twocolumn-panel');
        }
        if (isCurrentState === 'Contact') {
            Router.push("/contact");
            document.body.classList.add('twocolumn-panel');
        }
        if (isCurrentState === 'Leaderboard') {
            Router.push("/leaderboard");
            document.body.classList.add('twocolumn-panel');
        }
        if (isCurrentState === 'Components') {
            Router.push("https://hybrix-nextjs-components.vercel.app/");
            document.body.classList.add('twocolumn-panel');
        }
    }, [
        isCurrentState,
        isAuth,
        isPages,
        isMultiLevel
    ]);

    const menuItems: any = [
        {
            label: "Menu",
            isHeader: true,
        },
        {
            id: "dashboard",
            label: "Dashboard",
            icon: "bi bi-speedometer2",
            link: "/dashboard",
            click: function (e: any) {
                e.preventDefault();
                setIsCurrentState('Dashboard');
            }
        },
        {
            label: "Pages",
            isHeader: true,
        },
        {
            id: "authentication",
            label: "Authentication",
            icon: "bi bi-person-circle",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsAuth(!isAuth);
                setIsCurrentState('Auth');
                updateIconSidebar(e);
            },
            stateVariables: isAuth,
            subItems: [
                {
                    id: "signIn",
                    label: "Sign In",
                    link: "/#",
                    isChildItem: true,
                    click: function (e: any) {
                        e.preventDefault();
                        setIsSignIn(!isSignIn);
                    },
                    parentId: "authentication",
                    stateVariables: isSignIn,
                    childItems: [
                        { id: 1, label: "Basic", link: "#" },
                        { id: 2, label: "Basic 2", link: "#" },
                        { id: 3, label: "Cover", link: "#" },
                    ]
                },
                {
                    id: "signUp",
                    label: "Sign Up",
                    link: "/#",
                    isChildItem: true,
                    click: function (e: any) {
                        e.preventDefault();
                        setIsSignUp(!isSignUp);
                    },
                    parentId: "authentication",
                    stateVariables: isSignUp,
                    childItems: [
                        { id: 1, label: "Basic", link: "#" },
                        { id: 2, label: "Basic 2", link: "#" },
                        { id: 3, label: "Cover", link: "#" },
                    ]
                },
                {
                    id: "passwordReset",
                    label: "Password Reset",
                    link: "/#",
                    isChildItem: true,
                    click: function (e: any) {
                        e.preventDefault();
                        setIsPasswordReset(!isPasswordReset);
                    },
                    parentId: "authentication",
                    stateVariables: isPasswordReset,
                    childItems: [
                        { id: 1, label: "Basic", link: "#" },
                        { id: 2, label: "Basic 2", link: "#" },
                        { id: 3, label: "Cover", link: "#" },
                    ]
                },
                {
                    id: "passwordCreate",
                    label: "Password Create",
                    link: "/#",
                    isChildItem: true,
                    click: function (e: any) {
                        e.preventDefault();
                        setIsPasswordCreate(!isPasswordCreate);
                    },
                    parentId: "authentication",
                    stateVariables: isPasswordCreate,
                    childItems: [
                        { id: 1, label: "Basic", link: "#" },
                        { id: 2, label: "Basic 2", link: "#" },
                        { id: 3, label: "Cover", link: "#" },
                    ]
                },
                {
                    id: "lockScreen",
                    label: "Lock Screen",
                    link: "/#",
                    isChildItem: true,
                    click: function (e: any) {
                        e.preventDefault();
                        setIsLockScreen(!isLockScreen);
                    },
                    parentId: "authentication",
                    stateVariables: isLockScreen,
                    childItems: [
                        { id: 1, label: "Basic", link: "#" },
                        { id: 2, label: "Basic 2", link: "#" },
                        { id: 3, label: "Cover", link: "#" },
                    ]
                },
                {
                    id: "logout",
                    label: "Logout",
                    link: "/#",
                    isChildItem: true,
                    click: function (e: any) {
                        e.preventDefault();
                        setIsLogout(!isLogout);
                    },
                    parentId: "authentication",
                    stateVariables: isLogout,
                    childItems: [
                        { id: 1, label: "Basic", link: "#" },
                        { id: 2, label: "Basic 2", link: "#" },
                        { id: 3, label: "Cover", link: "#" },
                    ]
                },
                {
                    id: "successMessage",
                    label: "Success Message",
                    link: "/#",
                    isChildItem: true,
                    click: function (e: any) {
                        e.preventDefault();
                        setIsSuccessMessage(!isSuccessMessage);
                    },
                    parentId: "authentication",
                    stateVariables: isSuccessMessage,
                    childItems: [
                        { id: 1, label: "Basic", link: "#" },
                        { id: 2, label: "Basic 2", link: "#" },
                        { id: 3, label: "Cover", link: "#" },
                    ]
                },
                {
                    id: "twoStepVerification",
                    label: "Two Step Verification",
                    link: "/#",
                    isChildItem: true,
                    click: function (e: any) {
                        e.preventDefault();
                        setIsVerification(!isVerification);
                    },
                    parentId: "authentication",
                    stateVariables: isVerification,
                    childItems: [
                        { id: 1, label: "Basic", link: "#" },
                        { id: 2, label: "Basic 2", link: "#" },
                        { id: 3, label: "Cover", link: "#" },
                    ]
                },
                {
                    id: "errors",
                    label: "Errors",
                    link: "/#",
                    isChildItem: true,
                    click: function (e: any) {
                        e.preventDefault();
                        setIsError(!isError);
                    },
                    parentId: "authentication",
                    stateVariables: isError,
                    childItems: [
                        { id: 1, label: "404 Basic", link: "#" },
                        { id: 2, label: "404 Cover", link: "#" },
                        { id: 3, label: "404 Alt", link: "#" },
                        { id: 4, label: "500", link: "#" },
                        { id: 5, label: "Offline Page", link: "#" },
                    ]
                },
            ],
        },
        {
            id: "pages",
            label: "Pages",
            icon: "bi bi-journal-medical",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsPages(!isPages);
                setIsCurrentState('Pages');
                updateIconSidebar(e);
            },
            stateVariables: isPages,
            subItems: [
                {
                    id: "starter",
                    label: "Starter",
                    link: "#",
                    parentId: "pages",
                },
                {
                    id: "profile",
                    label: "Profile",
                    link: "/#",
                    isChildItem: true,
                    click: function (e: any) {
                        e.preventDefault();
                        setIsProfile(!isProfile);
                    },
                    parentId: "pages",
                    stateVariables: isProfile,
                    childItems: [
                        { id: 1, label: "Simple Page", link: "#", parentId: "pages" },
                        { id: 2, label: "Settings", link: "#", parentId: "pages" },
                    ]
                },
                { id: "team", label: "Team", link: "#", parentId: "pages" },
                { id: "timeline", label: "Timeline", link: "#", parentId: "pages" },
                { id: "faqs", label: "FAQs", link: "#", parentId: "pages" },
                { id: "pricing", label: "Pricing", link: "#", parentId: "pages" },
                { id: "maintenance", label: "Maintenance", link: "#", parentId: "pages" },
                { id: "comingSoon", label: "Coming Soon", link: "#", parentId: "pages" },
                { id: "sitemap", label: "Sitemap", link: "#", parentId: "pages" },
                { id: "searchResults", label: "Search Results", link: "#", parentId: "pages" },
            ],
        },
        {
            id: "widgets",
            label: "Widgets",
            icon: "bi bi-hdd-stack",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsCurrentState('Widgets');
            },
        },
        {
            id: "components",
            label: "Components",
            icon: "bi bi-layers",
            isBlankLink : true,
            link: "#",
            click: function (e: any) {
                e.preventDefault();
                setIsCurrentState('Components');
              },
        },
        {
            label: "Apps",
            isHeader: true,
        },
        {
            id: "calendar",
            label: "Calendar",
            icon: "bi bi-calendar3",
            link: "#",
            click: function (e: any) {
                e.preventDefault();
                setIsCurrentState('Calendar');
            }
        },
        {
            id: "api-key",
            label: "API Key",
            icon: "bi bi-key",
            link: "#",
            click: function (e: any) {
                e.preventDefault();
                setIsCurrentState('API Key');
            }
        },
        {
            id: "contact",
            label: "Contact",
            icon: "bi bi-person-square",
            link: "#",
            click: function (e: any) {
                e.preventDefault();
                setIsCurrentState('Contact');
            }
        },
        {
            id: "leaderboard",
            label: "Leaderboard",
            icon: "bi bi-gem",
            link: "#",
            click: function (e: any) {
                e.preventDefault();
                setIsCurrentState('Leaderboard');
            }
        },
        {
            label: "Layouts",
            isHeader: true,
        },
        {
            id: "multilevel",
            label: "Multi Level",
            icon: "bi bi-share",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsMultiLevel(!isMultiLevel);
                setIsCurrentState('MuliLevel');
                updateIconSidebar(e);
            },
            stateVariables: isMultiLevel,
            subItems: [
                { id: "level1.1", label: "Level 1.1", link: "/#", parentId: "multilevel" },
                {
                    id: "level1.2",
                    label: "Level 1.2",
                    link: "/#",
                    isChildItem: true,
                    click: function (e: any) {
                        e.preventDefault();
                        setIsLevel1(!isLevel1);
                    },
                    stateVariables: isLevel1,
                    childItems: [
                        { id: 1, label: "Level 2.1", link: "/#" },
                        {
                            id: "level2.2",
                            label: "Level 2.2",
                            link: "/#",
                            isChildItem: true,
                            click: function (e: any) {
                                e.preventDefault();
                                setIsLevel2(!isLevel2);
                            },
                            stateVariables: isLevel2,
                            childItems: [
                                { id: 1, label: "Level 3.1", link: "/#" },
                                { id: 2, label: "Level 3.2", link: "/#" },
                            ]
                        },
                    ]
                },
            ],
        },

    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;