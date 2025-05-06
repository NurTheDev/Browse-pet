import React from 'react';
import Navbar from "./Common Component/Navbar.jsx";
import {Outlet} from "react-router";

function Index() {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
}

export default Index;