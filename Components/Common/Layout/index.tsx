import React, { useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
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

//redux
import { useSelector, useDispatch } from "react-redux";
import Footer from './Footer';
import { useSession } from 'next-auth/react';

const Layout = ({ children }: any) => {


    const dispatch: any = useDispatch();
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
    } = useSelector((state: any) => ({
        layoutType: state.Layout.layoutType,
        leftSidebarType: state.Layout.leftSidebarType,
        layoutModeType: state.Layout.layoutModeType,
        layoutWidthType: state.Layout.layoutWidthType,
        layoutPositionType: state.Layout.layoutPositionType,
        topbarThemeType: state.Layout.topbarThemeType,
        leftsidbarSizeType: state.Layout.leftsidbarSizeType,
        leftSidebarViewType: state.Layout.leftSidebarViewType,
        leftSidebarImageType: state.Layout.leftSidebarImageType,
    }));

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

    
        // const router = useRouter();
        // const { data: session, status } = useSession()
    
        // if (status === "loading") {
        //   return <p>Loading...</p>
        // }
      
        // if (status === "unauthenticated") {
        //   router.push('/auth/login');
        // }
        
    return (
        <React.Fragment>
            <>
                <div>
                    {/* <TopBar /> */}
                    <Header />
                    <Sidebar layoutType={layoutType} />
                    <div className="main-content p-5">
                        <div className="mt-5">
                            {children}
                        </div>
                    </div>
                    <Footer />
                </div>
            </>

        </React.Fragment>
    );
}

export default Layout;