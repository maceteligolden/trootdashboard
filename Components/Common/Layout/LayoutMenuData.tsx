import React, { useEffect, useState } from "react";
import Router from "next/router";
const Navdata = () => {
    //state data
    const [isArticle, setIsArticle] = useState(false);
    const [isBlog, setIsBlog] = useState(false);
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
        if (isCurrentState !== 'Article') {
            setIsArticle(false);
        }
        if (isCurrentState !== 'Blog') {
            setIsBlog(false);
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
        isArticle,
        isBlog,
        isMultiLevel
    ]);

    const menuItems: any = [
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
            id: "blogs",
            label: "Blogs",
            icon: "bi bi-journal-medical",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsBlog(!isBlog);
                setIsCurrentState('Blog');
                updateIconSidebar(e);
            },
            stateVariables: isBlog,
            subItems: [
                {
                    id: "manage blog",
                    label: "Manage Blogs",
                    link: "/blogs",
                    parentId: "blogs",
                },
                {
                    id: "categories",
                    label: "Categories",
                    link: "/blogs/categories",
                    parentId: "blogs"
                }
            ],
        },
        {
            id: "articles",
            label: "Articles",
            icon: "bi bi-journal-medical",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsArticle(!isArticle);
                setIsCurrentState('Article');
                updateIconSidebar(e);
            },
            stateVariables: isArticle,
            subItems: [
                {
                    id: "manage article",
                    label: "Manage Articles",
                    link: "/articles",
                    parentId: "articles",
                },
                {
                    id: "categories",
                    label: "Categories",
                    link: "/articles/categories",
                    parentId: "articles"
                }
            ],
        },
    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;