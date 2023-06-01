import React, { useState } from "react";
import HalfHr from "./HalfHr";
import UseStateArray from "./UseStateArray";
import UseStateObj from "./UseStateObj";

const UseState = () => {
    const [number, setNumber] = useState(0);

    const [name, setName] = useState("Aloha");

    const addOne = () => {
        setNumber(number + 1);
    };

    const nameHandler = () => {
        // setName(name + "hi");
        setName((pervState) => pervState + "ha");
    };

    return (
        <div>
            <h2>UseState</h2>
            <h3 style={{ fontSize: "30px", marginTop: 0 }}>{number}</h3>
            <button onClick={addOne}>Add One</button>
            <button onClick={() => setNumber(number + 2)}>Add Two</button>
            <HalfHr topBr={true} btmBr={true} />
            <h3 style={{ fontSize: "30px", marginTop: 0 }}>{name}</h3>
            <button onClick={nameHandler}>Add ha</button>
            <HalfHr topBr={true} btmBr={true} />
            <UseStateObj />
            <HalfHr topBr={false} btmBr={true} />
            <UseStateArray />
        </div>
    );
};

export default UseState;
