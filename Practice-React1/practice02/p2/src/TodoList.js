import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodosList }) => {
    return (
        <ol>
            {/* {console.log(todos)} */}
            {todos.map((todo) => {
                return (
                    <Todo
                        key={todo.id}
                        todo={todo.todo}
                        id={todo.id}
                        isDone={todo.isDone}
                        todos={todos}
                        setTodosList={setTodosList}
                    ></Todo>
                );
            })}
        </ol>
    );
};

export default TodoList;
