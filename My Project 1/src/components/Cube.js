import React from "react";

import styles from "./Cube.module.scss";

const cube = () => {
    return (
        <div className={styles.cube}>
            <div className={styles.graySide}></div>
            <div className={styles.greenSide}></div>
            <div className={styles.redSide}></div>
            <div className={styles.pinkSide}>Face</div>
            <div className={styles.blueSide}></div>
            <div className={styles.yellowSide}></div>
        </div>
    );
};

export default cube;
