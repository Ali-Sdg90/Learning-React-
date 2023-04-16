import React, { Component } from "react";

import Card from "./Card";
import styles from "./Cards.module.css";
import cppIcon from "../images/cpp-icon.png";
import htmlIcon from "../images/html-icon.png";
import cssIcon from "../images/css-icon.png";
import jsIcon from "../images/js-icon.png";

class Cards extends Component {
    render() {
        let orderCounter = 0;
        return (
            <div className={styles.container}>
                <Card image={cppIcon} name="CPP" order={++orderCounter} />
                <Card image={htmlIcon} name="HTML" order={++orderCounter} />
                <Card image={cssIcon} name="CSS" order={++orderCounter} />
                <Card image={jsIcon} name="JavaScript" order={++orderCounter} />
            </div>
        );
    }
}

export default Cards;
