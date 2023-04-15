import React from "react";

import styles from "./Navbar.module.css";
import reactImg from "../images/React-logo.png";

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.listContainer}>
                <ul className={styles.list}>
                    <li>Home</li>
                    <li>Products</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className={styles.logo}>
                <img className={styles.logo} src={reactImg} alt="react-img" />
            </div>
        </header>
    );
};

export default Navbar;
