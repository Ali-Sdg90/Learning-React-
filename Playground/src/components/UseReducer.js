import React, { useReducer } from "react";
import HalfHr from "./HalfHr";
import UseReducerGet from "./UseReducerGet";
import UseReducerWObj from "./UseReducerWObj";

const initialState = 0;

const reducer = (state, action) => {
    switch (action) {
        case "Up":
            return state + 1;
        case "Down":
            return state - 1;
        case "Reset":
            return initialState;
        default:
            return state;
    }
};

const UseReducer = () => {
    const [number, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>UseReducer</h2>
            <ol>
                <li>
                    <div>
                        <h1>{number}</h1>
                        <button onClick={() => dispatch("Up")}>Up</button>
                        <button onClick={() => dispatch("Reset")}>Reset</button>
                        <button onClick={() => dispatch("Down")}>Down</button>
                    </div>
                </li>
                <li>
                    <UseReducerWObj />
                </li>
                <li>
                    <UseReducerGet />
                </li>
            </ol>
        </div>
    );
};

export default UseReducer;
