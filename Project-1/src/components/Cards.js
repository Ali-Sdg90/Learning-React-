import React, { Component } from "react";

import Card from "./Card";
import styles from "./Cards.module.css";
import cppIcon from "../images/cpp-icon.png";
import htmlIcon from "../images/html-icon.png";
import cssIcon from "../images/css-icon.png";
import jsIcon from "../images/js-icon.png";

class Cards extends Component {
    constructor() {
        super();
        this.state = {
            langInfo: [
                { id: 1, image: cppIcon, name: "CPP", salary: "5000 $" },
                { id: 2, image: htmlIcon, name: "HTML", salary: "8000 $" },
                { id: 3, image: cssIcon, name: "CSS", salary: "7000 $" },
                { id: 4, image: jsIcon, name: "JavaScript", salary: "10000 $" },
            ],
        };
    }

    render() {
        return (
            <div className={styles.container} key={this.state.id}>
                {/* <Card image={cppIcon} name="CPP" salary="5000 $" />
                <Card image={htmlIcon} name="HTML" salary="8000 $" />
                <Card image={cssIcon} name="CSS" salary="7000 $" />
                <Card image={jsIcon} name="JavaScript" salary="10000 $" /> */}

                {this.state.langInfo.map((lang) => {
                    return (
                        <Card
                            image={lang.image}
                            name={lang.name}
                            salary={lang.salary}
                            id={lang.id}
                            key={lang.id}
                        />
                    );
                })}
            </div>
        );
    }
}

export default Cards;
