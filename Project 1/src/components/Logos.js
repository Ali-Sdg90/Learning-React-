import React from "react";

import styles from "./Logos.module.css";
import windowsIcon from "../images/windows-icon.png";
import macOsIcon from "../images/macOs-icon.png";
import linuxIcon from "../images/linux-icon.png";

const Logos = () => {
    return (
        <div className={styles.container}>
            <h3>Which one is better?</h3>
            <div>
                <img src={windowsIcon} alt="operating system image" />
                <img src={macOsIcon} alt="operating system image" />
                <img src={linuxIcon} alt="operating system image" />
            </div>
        </div>
    );
};

export default Logos;
