import React, { useState } from "react";

const Input = ({ setTodosList }) => {
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
