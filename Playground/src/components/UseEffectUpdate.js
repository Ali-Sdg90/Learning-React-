import React, { useEffect, useState } from "react";

const UseEffectUpdate = () => {
    const [number, setNumber] = useState(0);
    const [string, setString] = useState("hi");

    useEffect(() => {
        console.log(`useEffect1: number = ${number}`);
    }, [number]);

    return (
        <div>
            <h3>{number}</h3>
            <button onClick={() => setNumber((prevState) => prevState + 1)}>
                Add one
            </button>
            <h3>{string}</h3>
            <button onClick={() => setString((prevState) => prevState + " hi")}>
                Add hi
            </button>
        </div>
    );
};

export default UseEffectUpdate;
