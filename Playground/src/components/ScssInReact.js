import React from "react";

import styles from "./ScssInReact.module.scss";

const ScssInReact = () => {
    return (
        <>
            <div className={styles.container}>
                <p className={styles.testElement}>SCSS in React!</p>
            </div>
        </>
    );
};

export default ScssInReact;
