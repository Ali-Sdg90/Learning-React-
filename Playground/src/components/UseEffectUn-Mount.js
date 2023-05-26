import React, { useEffect, useState } from "react";

const UseEffect2 = () => {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log("useEffect2: component did mount");

        return () => {
            console.log("useEffect2: component did unmount");
        };
    }, []);

    return (
        <div>
            <h3>{number}</h3>
            <button onClick={() => setNumber((prevState) => prevState + 1)}>
                Add one
            </button>
        </div>
    );
};

export default UseEffect2;
