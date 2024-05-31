import React, { useEffect } from "react";

const FilterTodo = ({
    setFilteredTodosList,
    todosList,
    filterMode,
    setFilterMode,
}) => {
    useEffect(() => {
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
    }, [filterMode]);

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
