import React, { useContext } from "react";
import Todo from "./Todo";
import { AppContext } from "./App";

const TodoList = () => {
    const { filteredTodosList, setTodosList } = useContext(AppContext);

    return (
        <ol>
            {/* {console.log(filteredTodosList)} */}
            {filteredTodosList.map((todo) => {
                return (
                    <Todo
                        key={todo.id}
                        todo={todo.todo}
                        id={todo.id}
                        isDone={todo.isDone}
                        todos={filteredTodosList}
                        setTodosList={setTodosList}
                    ></Todo>
                );
            })}
        </ol>
    );
};

export default TodoList;
