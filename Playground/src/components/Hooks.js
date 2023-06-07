import React from "react";

import Styles from "./Hooks.module.css";

import UseState from "./UseState";
import UseEffect from "./UseEffects";
import UseReducer from "./UseReducer";
import UseReducerGet from "./UseReducerGet";
import UseRef from "./UseRef";
import CustomHookUseTitle from "./CustomHookUseTitle";
import CustomHookUseLocalStorge from "./CustomHookUseLocalStorge";
import UseContext1 from "./UseContext1";

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
                <li>
                    <UseRef />
                </li>
                <li>
                    <UseContext1 />
                </li>
                <li>
                    <h2>Custom Hooks</h2>
                    <ol>
                        <li>
                            <h2>UseTitle</h2>
                            <CustomHookUseTitle />
                        </li>
                        <li style={{ border: "none" }}>
                            <h2>UseLocalStorage</h2>
                            <CustomHookUseLocalStorge />
                        </li>
                    </ol>
                </li>
            </ul>
        </div>
    );
};

export default Hooks;
