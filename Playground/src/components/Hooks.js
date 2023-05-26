import React from "react";
import UseState from "./UseState";

import Styles from "./Hooks.module.css";

const Hooks = () => {
    return (
        <div className={Styles.container}>
            <hr></hr>
            <h1>Hooks:</h1>
            <ul>
                <li>
                    <UseState />
                </li>
                
            </ul>
        </div>
    );
};

export default Hooks;
