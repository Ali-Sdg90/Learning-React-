import React, { useContext, useState } from "react";
import { AppContext } from "./App";

const Input = () => {
    const { setTodosList } = useContext(AppContext);
    const [inputText, setInputText] = useState("");

    const inputHandler = (event) => {
        setInputText(event.target.value);
    };

    const submitHandler = () => {
        if (!inputText) {
            return;
        }

        const newTodo = {
            todo: inputText,
            isDone: false,
            id: Date.now(),
        };

        setTodosList((prevTodoList) => [...prevTodoList, newTodo]);
        setInputText("");
    };

    const keyHandler = (event) => {
        if (event.key === "Enter") {
            submitHandler();
        }
    };

    return (
        <div>
            <input
                onChange={inputHandler}
                onKeyDown={keyHandler}
                type="text"
                value={inputText}
            />
            <button onClick={submitHandler} disabled={!inputText}>
                Submit
            </button>
        </div>
    );
};

export default Input;
