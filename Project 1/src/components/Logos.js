import React, { Component } from "react";

import styles from "./Logos.module.css";
import Logo from "./Logo";

import windowsIcon from "../images/windows-icon.png";
import macOsIcon from "../images/macOs-icon.png";
import linuxIcon from "../images/linux-icon.png";

class Logos extends Component {
    constructor() {
        super();
        this.state = {
            logos: [
                { name: "Windows", src: windowsIcon },
                { name: "MacOs", src: macOsIcon },
                { name: "Linux", src: linuxIcon },
            ],
        };
    }
    render() {
        return (
            <div className={styles.container}>
                <h3>Which one is better?</h3>
                <div>
                    {this.state.logos.map((logo) => {
                        return (
                            <Logo
                                name={logo.name}
                                src={logo.src}
                                id={logo.name}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Logos;
