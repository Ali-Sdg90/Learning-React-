import React, { Component } from "react";

import styles from "./Conditional.module.css";

class Conditional extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false,
        };
    }

    changeLoginState = () => {
        this.setState({ isLoggedIn: true });
    };

    render() {
        let output;

        if (this.state.isLoggedIn) {
            output = <span>Welcome!</span>;
        } else {
            output = <button>Login</button>;
        }

        return (
            <>
                <br></br>
                <span>login btn or welcome text :</span>
                <span className={styles.output} onClick={this.changeLoginState}>
                    {output}
                </span>
                <br></br>
            </>
        );
    }
}

export default Conditional;
