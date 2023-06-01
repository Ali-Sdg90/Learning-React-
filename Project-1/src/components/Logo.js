import React, { Component } from "react";

import styles from "./Logo.module.css";

class LogoAction extends Component {
    constructor() {
        super();
        this.state = {
            shaking: false,
        };
    }
    clickOnLogo = (name) => {
        if (name === "Windows") {
            console.log("Yes!");
        } else {
            console.log("No!");

            this.setState({ shaking: true }, () => {
                setTimeout(() => {
                    this.setState({ shaking: false });
                }, 300);
            });
        }
    };

    handelLogoClick = () => {
        this.clickOnLogo(this.props.name);
    };

    render() {
        const { name, src, id } = this.props;
        return (
            <img
                src={src}
                name={name}
                alt={`${name}operating system`}
                id={id}
                onClick={this.handelLogoClick}
                className={`${styles.logo} ${
                    this.state.shaking ? styles.shake : ""
                }`}
            ></img>
        );
    }
}

export default LogoAction;
