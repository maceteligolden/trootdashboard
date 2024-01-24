import React, { useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import { useRouter } from "next/router";

//import actions
import {
    changeLayout,
    changeSidebarTheme,
    changeLayoutMode,
    changeLayoutWidth,
    changeLayoutPosition,
    changeTopbarTheme,
    changeLeftsidebarSizeType,
    changeLeftsidebarViewType,
    changeSidebarImageType
} from "../../slices/thunk";
import { useProfile } from "@common/UserHooks";

//redux
import { useSelector, useDispatch } from "react-redux";
import Footer from './Footer';
import RightSidebar from '@common/RightSidebar';
import { createSelector } from 'reselect';

const Layout = ({ children }: any) => {
    const { userProfile } = useProfile();
    const router = useRouter();

    const redirectLoginFunction = () => {
        if (typeof window !== 'undefined') { // Check if we're on the client-side
            if (!userProfile) {
                router.push('/auth/login');
            }
        }
    };

    useEffect(() => {
        redirectLoginFunction();
    }, [])

    const dispatch: any = useDispatch();

    const selectLayoutState = (state: any) => state.Layout;
    const selectLayoutProperties = createSelector(
        selectLayoutState,
        (layout) => ({
            layoutType: layout.layoutType,
            leftSidebarType: layout.leftSidebarType,
            layoutModeType: layout.layoutModeType,
            layoutWidthType: layout.layoutWidthType,
            layoutPositionType: layout.layoutPositionType,
            topbarThemeType: layout.topbarThemeType,
            leftsidbarSizeType: layout.leftsidbarSizeType,
            leftSidebarViewType: layout.leftSidebarViewType,
            leftSidebarImageType: layout.leftSidebarImageType,
        })
    );

    // Inside your component
    const {
        layoutType,
        leftSidebarType,
        layoutModeType,
        layoutWidthType,
        layoutPositionType,
        topbarThemeType,
        leftsidbarSizeType,
        leftSidebarViewType,
        leftSidebarImageType
    } = useSelector(selectLayoutProperties);
    

    /*
    layout settings
    */
    useEffect(() => {
        if (
            layoutType ||
            leftSidebarType ||
            layoutModeType ||
            layoutWidthType ||
            layoutPositionType ||
            topbarThemeType ||
            leftsidbarSizeType ||
            leftSidebarViewType ||
            leftSidebarImageType
        ) {
            dispatch(changeLeftsidebarViewType(leftSidebarViewType));
            dispatch(changeLeftsidebarSizeType(leftsidbarSizeType));
            dispatch(changeSidebarTheme(leftSidebarType));
            dispatch(changeLayoutMode(layoutModeType));
            dispatch(changeLayoutWidth(layoutWidthType));
            dispatch(changeLayoutPosition(layoutPositionType));
            dispatch(changeTopbarTheme(topbarThemeType));
            dispatch(changeLayout(layoutType));
            dispatch(changeSidebarImageType(leftSidebarImageType))
        }
    }, [layoutType,
        leftSidebarType,
        layoutModeType,
        layoutWidthType,
        layoutPositionType,
        topbarThemeType,
        leftsidbarSizeType,
        leftSidebarViewType,
        leftSidebarImageType,
        dispatch]);
    return (
        <React.Fragment>
            <>
                <div>
                    <TopBar />
                    <Header />
                    <Sidebar layoutType={layoutType} />
                    <div className="main-content">
                        {children}
                    </div>
                    <Footer />
                    <RightSidebar />
                </div>
            </>

        </React.Fragment>
    );
}

export default Layout;