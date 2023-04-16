import React, { Component } from "react";

import styles from "./Card.module.css";

class Card extends Component {
    render() {
        const { image, name, order } = this.props;
        return (
            <div className={styles.container}>
                <img src={image} alt="programing language" />
                <h3>{name}</h3>
                <p>Order : {order}</p>
            </div>
        );
    }
}

export default Card;
