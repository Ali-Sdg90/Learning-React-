import React, { useReducer, useState } from "react";

const UseReducerWObj = () => {
    const [initialState, setInitialState] = useState({
        num1: 0,
        num2: 0,
    });

    const [upFor1, setUpFor1] = useState(1);
    const [downFor1, setDownFor1] = useState(1);
    const [upFor2, setUpFor2] = useState(1);
    const [downFor2, setDownFor2] = useState(1);

    const reducer = (state, action) => {
        switch (action.type) {
            case "Up-B1":
                return {
                    ...state,
                    num1: Number(state.num1) + Number(action.value),
                };
            case "Down-B1":
                return { ...state, num1: state.num1 - action.value };
            case "Reset-B1":
                return { ...state, num1: action.value };
            case "Reset-B2":
                return { ...state, num2: action.value };
            case "Up-B2":
                return {
                    ...state,
                    num2: Number(state.num2) + Number(action.value),
                };
            case "Down-B2":
                return { ...state, num2: state.num2 - action.value };
        }
    };

    const [number, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>{number.num1}</h1>
            <form>
                <label>Up for </label>
                <input
                    type="number"
                    style={{ width: "73.5px" }}
                    max="99"
                    value={upFor1}
                    onChange={(event) => setUpFor1(event.target.value)}
                ></input>
                <br></br>

                <label>Down for </label>
                <input
                    type="number"
                    style={{ width: "52px" }}
                    max="99"
                    value={downFor1}
                    onChange={(event) => setDownFor1(event.target.value)}
                ></input>
                <br></br>

                <label>Initial state </label>
                <input
                    type="number"
                    style={{ width: "41px" }}
                    max="99"
                    value={initialState.num1}
                    onChange={(event) =>
                        setInitialState({
                            ...initialState,
                            num1: event.target.value,
                        })
                    }
                ></input>
            </form>
            <br></br>

            <button onClick={() => dispatch({ type: "Up-B1", value: upFor1 })}>
                Up for {upFor1}
            </button>

            <button
                onClick={() =>
                    dispatch({ type: "Reset-B1", value: initialState.num1 })
                }
            >
                Reset
            </button>

            <button
                onClick={() => dispatch({ type: "Down-B1", value: downFor1 })}
            >
                Down for {downFor1}
            </button>

            {/* ---------------------- */}

            <h1>{number.num2}</h1>
            <form>
                <label>Up for </label>
                <input
                    type="number"
                    style={{ width: "73.5px" }}
                    max="99"
                    value={upFor2}
                    onChange={(event) => setUpFor2(event.target.value)}
                ></input>
                <br></br>

                <label>Down for </label>
                <input
                    type="number"
                    style={{ width: "52px" }}
                    max="99"
                    value={downFor2}
                    onChange={(event) => setDownFor2(event.target.value)}
                ></input>
                <br></br>

                <label>Initial state </label>
                <input
                    type="number"
                    style={{ width: "41px" }}
                    max="99"
                    value={initialState.num1}
                    onChange={(event) =>
                        setInitialState({
                            ...initialState,
                            num1: event.target.value,
                        })
                    }
                ></input>
            </form>
            <br></br>

            <button onClick={() => dispatch({ type: "Up-B2", value: upFor2 })}>
                Up for {upFor2}
            </button>

            <button
                onClick={() =>
                    dispatch({ type: "Reset-B2", value: initialState.num2 })
                }
            >
                Reset
            </button>
            
            <button
                onClick={() => dispatch({ type: "Down-B2", value: downFor2 })}
            >
                Down for {downFor2}
            </button>
        </div>
    );
};

export default UseReducerWObj;
