import React, { useContext, useEffect } from "react";
import { AppContext } from "./App";

const FilterTodo = () => {
    const { setFilteredTodosList, todosList, filterMode, setFilterMode } =
        useContext(AppContext);

    useEffect(() => {
        switch (filterMode) {
            case "all":
                setFilteredTodosList([...todosList]);
                break;
            case "inProgress":
                setFilteredTodosList(
                    todosList.filter((todo) => !todo.isDone && todo)
                );
                break;
            case "done":
                setFilteredTodosList(
                    todosList.filter((todo) => todo.isDone && todo)
                );
                break;
        }
    }, [filterMode, todosList]);

    return (
        <div>
            <br></br>
            <span
                style={{
                    padding: "0 10px",
                    border: "1px solid",
                    background:
                        filterMode === "all"
                            ? "rgb(153, 153, 153)"
                            : "transparent",
                }}
                onClick={() => setFilterMode("all")}
            >
                All
            </span>
            <span
                style={{
                    padding: "0 10px",
                    border: "1px solid",
                    background:
                        filterMode === "inProgress"
                            ? "rgb(153, 153, 153)"
                            : "transparent",
                }}
                onClick={() => setFilterMode("inProgress")}
            >
                In Progress
            </span>
            <span
                style={{
                    padding: "0 10px",
                    border: "1px solid",
                    background:
                        filterMode === "done"
                            ? "rgb(153, 153, 153)"
                            : "transparent",
                }}
                onClick={() => setFilterMode("done")}
            >
                Done
            </span>
        </div>
    );
};

export default FilterTodo;
