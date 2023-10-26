import React from "react";
import Header from "./component/Header/Header";
import Footer from "./component/footer/footer";
import { Outlet } from "react-router-dom";
function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>

        </>
    )
}

export default Layout;