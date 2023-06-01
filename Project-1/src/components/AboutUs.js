import React from "react";

import { Link, Route, Routes, Outlet } from "react-router-dom";
import Drivers from "./Drivers";
import Programmers from "./Programmers";

const AboutUs = () => {
    return (
        <div>
            <h1>About US</h1>
            <ul>
                <li>
                    <Link to="programmers">Programmers</Link>
                </li>
                <li>
                    <Link to="drivers">Drivers</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    );
};

export default AboutUs;
