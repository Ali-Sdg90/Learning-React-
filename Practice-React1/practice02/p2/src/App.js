import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import Input from "./Input";
import FilterTodo from "./FilterTodo";
import "./app.css"

const todos = [
    { todo: "hi1", id: 1, isDone: false },
    { todo: "hi2", id: 2, isDone: false },
    { todo: "hi3", id: 3, isDone: false },
    { todo: "hi4", id: 4, isDone: false },
];

const App = () => {
    const [todosList, setTodosList] = useState(todos);
    const [filteredTodosList, setFilteredTodosList] = useState(todos);
    const [filterMode, setFilterMode] = useState("all");

    useEffect(() => {
        console.log(todosList);
        setFilteredTodosList(todosList);

        switch (filterMode) {
            case "all":
                setFilteredTodosList([...todosList]);
                break;
            case "inProgress":
                setFilteredTodosList(() =>
                    todosList.filter((todo) => {
                        return !todo.isDone && todo;
                    })
                );
                break;
            case "done":
                setFilteredTodosList(() =>
                    todosList.filter((todo) => {
                        return todo.isDone && todo;
                    })
                );
                break;
        }
    }, [todosList]);

    return (
        <div>
            <h1>Simple Todo App</h1>
            <Input setTodosList={setTodosList} />
            <FilterTodo
                todosList={todosList}
                setFilteredTodosList={setFilteredTodosList}
                filterMode={filterMode}
                setFilterMode={setFilterMode}
            />
            <TodoList todos={filteredTodosList} setTodosList={setTodosList} />
        </div>
    );
};

export default App;
