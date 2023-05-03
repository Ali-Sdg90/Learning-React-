import React, { Component } from "react";

import Card from "./Card";
import styles from "./Cards.module.css";
import cppIcon from "../images/cpp-icon.png";
import htmlIcon from "../images/html-icon.png";
import cssIcon from "../images/css-icon.png";
import jsIcon from "../images/js-icon.png";

class Cards extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Card image={cppIcon} name="CPP" salary="5000 $" />
                <Card image={htmlIcon} name="HTML" salary="8000 $" />
                <Card image={cssIcon} name="CSS" salary="7000 $" />
                <Card image={jsIcon} name="JavaScript" salary="10000 $" />
            </div>
        );
    }
}

export default Cards;
