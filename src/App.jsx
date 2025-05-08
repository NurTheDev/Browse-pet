import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Index from "./Index.jsx";
import Home from "./Page/Home.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Index/>}>
                    <Route path='/' element={<Home/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;