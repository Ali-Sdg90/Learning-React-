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

    return (
        <div>
            <input
                onChange={(event) => inputHandler(event)}
                type="text"
                value={inputText}
            ></input>
            <button onClick={() => submitHandler()}>Submit</button>
        </div>
    );
};

export default Input;
