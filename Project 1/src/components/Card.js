import React, { Component } from "react";

import upArrow from "../images/up-arrow.svg";
import downArrow from "../images/down-arrow.svg";
import styles from "./Card.module.css";

class Card extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
        };
    }

    upCounter = () => {
        this.setState((pervstate) => ({
            counter: pervstate.counter + 1,
        }));
    };

    downCounter = () => {
        if (this.state.counter >= 1) {
            this.setState((pervstate) => ({
                counter: pervstate.counter - 1,
            }));
        }
    };

    render() {
        const { image, name, order } = this.props;
        const { counter } = this.state;
        return (
            <div className={styles.container}>
                <img src={image} alt="programing language" />
                <h3>{name}</h3>
                <p>Order : {order}</p>

                <div className={styles.counter}>
                    <img
                        src={upArrow}
                        alt="up-arrow"
                        onClick={this.upCounter}
                    ></img>

                    <span>{counter}</span>

                    <img
                        src={downArrow}
                        alt="down-arrow"
                        onClick={this.downCounter}
                        className={this.state.counter ? "" : styles.deactive}
                    ></img>
                </div>
            </div>
        );
    }
}

export default Card;
