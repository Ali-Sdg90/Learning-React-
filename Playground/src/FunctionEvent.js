import React from "react";

const FunctionEvent = () => {
    const consoleClick = () => console.log("Function Event clicked!");

    return <button onClick={consoleClick}>Function Event</button>;
};

export default FunctionEvent;
