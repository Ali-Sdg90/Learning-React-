import React from "react";

const Todo = ({ todo, isDone, id, setTodosList }) => {
    const checkboxHandler = () => {
        setTodosList((prevTodoList) => {
            return prevTodoList.map((todo, index) => {
                if (todo.id === id) {
                    return { ...todo, isDone: !todo.isDone };
                }
                return todo;
            });
        });
    };

    const deleteHandler = () => {
        setTodosList((prevTodoList) => {
            return prevTodoList.filter((todo) => todo.id !== id);
        });
    };

    return (
        <li>
            <span style={{ textDecoration: isDone ? "line-through" : "none" }}>
                {todo}
            </span>
            <input
                type="checkbox"
                checked={isDone}
                onChange={checkboxHandler}
            />
            <button onClick={deleteHandler}>Delete</button>
        </li>
    );
};

export default Todo;
