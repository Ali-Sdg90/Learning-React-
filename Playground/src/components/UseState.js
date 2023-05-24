import React, { useState } from "react";

const UseState = () => {
    const [number, setNumber] = useState(0);

    const addOne = () => {
        setNumber(number + 1);
    };

    return (
        <div>
            <h2>UseState</h2>
            <h3 style={{fontSize:"30px"}}>{number}</h3>
            <button onClick={addOne}>Add One</button>
            <button onClick={() => setNumber(number + 2)}>Add Two</button>
        </div>
    );
};

export default UseState;
