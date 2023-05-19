import React from "react";

import styles from "./Navbar.module.css";
import reactImg from "../images/React-logo.png";

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.listContainer}>
                <ul className={styles.list}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/aboutus">About Us</Link>
                    </li>
                    <li>
                        <Link>Services</Link>
                    </li>
                    <li>
                        <Link>FAQ</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.logo}>
                <img className={styles.logo} src={reactImg} alt="react-img" />
            </div>
        </header>
    );
};

export default Navbar;
