import React, { Component } from "react";

import Lifecycle from "./Lifecycle";
import styles from "./LifecycleBtn.module.css"

class LifecycleBtn extends Component {
    constructor() {
        super();
        this.state = {
            showLifecycle: false,
        };
    }

    runLifecycle = () => {
        this.setState((pervstate) => ({
            showLifecycle: !pervstate.showLifecycle,
        }));
    };

    render() {
        let output;
        {
            this.state.showLifecycle
                ? (output = "Hide Lifecycle")
                : (output = "Show Lifecycle");
        }
        return (
            <>
                <p>
                    component
                    <span className={styles.whiteShadow}>DidMount</span> -
                    component
                    <span className={styles.whiteShadow}>DidUpdate</span> -
                    component
                    <span className={styles.whiteShadow}>WillUnmount</span>
                </p>
                <button onClick={this.runLifecycle}>{output}</button>
                {this.state.showLifecycle ? <Lifecycle /> : ""}
                <br></br>
                <br></br>
                <hr></hr>
            </>
        );
    }
}

export default LifecycleBtn;
