import React from "react";

const Todo = ({ todo, isDone, id, setTodosList }) => {
    const checkboxHandler = () => {
        // console.log("ID", id);

        setTodosList((prevTodoList) => {
            // console.log("=>", prevTodoList);
            return prevTodoList.map((todo, index) => {
                // console.log("todo", todo);
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
            {/* {console.log(todo, isDone, id)} */}
            <span style={{ textDecoration: isDone ? "line-through" : "none" }}>
                {todo}
            </span>
            <input
                type="checkbox"
                checked={isDone}
                onChange={() => checkboxHandler()}
            />
            <button onClick={() => deleteHandler()}>Delete</button>
        </li>
    );
};

export default Todo;
