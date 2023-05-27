import React from "react";

import Styles from "./Hooks.module.css";

import UseState from "./UseState";
import UseEffect from "./UseEffects";
import UseReducer from "./UseReducer";
import UseReducerGet from "./UseReducerGet";

const Hooks = () => {
    return (
        <div className={Styles.container}>
            <hr></hr>
            <h1>Hooks:</h1>
            <ul>
                <li>
                    <UseState />
                </li>
                <li>
                    <UseEffect />
                </li>
                <li>
                    <UseReducer />
                </li>
            </ul>
        </div>
    );
};

export default Hooks;
