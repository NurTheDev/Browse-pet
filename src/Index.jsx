import React from 'react';
import Navbar from "./Common Component/Navbar.jsx";
import {Outlet} from "react-router";
import Footer from "./Common Component/Footer.jsx";

function Index() {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default Index;