import React, { useEffect, useState } from "react";
import Router from "next/router";
const Navdata = () => {
    //state data
    const [isAccount, setIsAccount] = useState(false);
    const [isArticles, setIsArticles] = useState(false);
    const [isBlog, setIsBlog] = useState(false);

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
        if (isCurrentState !== 'Accounts') {
            setIsAccount(false);
        }
        if (isCurrentState !== 'Articles') {
            setIsArticles(false);
        }
        if (isCurrentState !== 'Blog') {
            setIsBlog(false);
        }
        if (isCurrentState === 'Dashboard') {
            Router.push("/dashboard");
            document.body.classList.add('twocolumn-panel');
        }
        if (isCurrentState === 'widgets') {
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
        isAccount,
        isArticles,
        isBlog
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
            id: "accounts",
            label: "Accounts",
            icon: "bi bi-person-circle",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsAccount(!isAccount);
                setIsCurrentState('Accounts');
                updateIconSidebar(e);
            },
            stateVariables: isAccount,
            subItems: [
                {
                    id: "account",
                    label: "Manage Accounts",
                    link: "/accounts",
                    isChildItem: false,
                    parentId: "accounts",
                },
                {
                    id: "categories",
                    label: "Manage Categories",
                    link: "/accounts/categories",
                    isChildItem: false,
                    parentId: "accounts",
                },
            ],
        },
        {
            id: "articles",
            label: "Articles",
            icon: "bx bx-news",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsArticles(!isArticles);
                setIsCurrentState('Articles');
                updateIconSidebar(e);
            },
            stateVariables: isArticles,
            subItems: [
                {
                    id: "manage_articles",
                    label: "Manage Articles",
                    link: "/articles",
                    parentId: "articles",
                },
                {
                    id: "article_categories",
                    label: "Manage Categories",
                    link: "/articles/categories",
                    isChildItem: false,
                    parentId: "articles",
                }
            ],
        },
        {
            id: "orders",
            label: "Orders",
            icon: "bi bi-hdd-stack",
            link: "/orders"
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
                    id: "manage_blogs",
                    label: "Manage Blog",
                    link: "/blogs",
                    parentId: "blogs",
                },
                {
                    id: "blog_categories",
                    label: "Manage Categories",
                    link: "/blogs/categories",
                    isChildItem: false,
                    parentId: "blogs",
                }
            ],
        },

    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;