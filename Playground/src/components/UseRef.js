import React, { useRef } from "react";

const UseRef = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <h2>UseRef</h2>
            <br></br>
            <input ref={inputRef} type="text" />
            <button onClick={handleClick} style={{ marginLeft: "5px" }}>
                Focus Input
            </button>
        </div>
    );
};

export default UseRef;
