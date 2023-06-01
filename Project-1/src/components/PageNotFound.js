import React from "react";

import Styles from "./PageNotFound.module.css";

import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className={Styles.page}>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <ul>
                <li>
                    <Link to="/">HomePage</Link>
                </li>
            </ul>
        </div>
    );
};

export default PageNotFound;
