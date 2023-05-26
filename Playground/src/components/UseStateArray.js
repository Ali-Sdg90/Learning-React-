import React, { useState } from "react";

const UseStateArray = () => {
    const [array, setArray] = useState(["Alo"]);
    return (
        <div>
            <p>{JSON.stringify(array).replace(/"/g, " ")}</p>
            {array.length < 15 ? (
                <button onClick={() => setArray([...array, "ha"])}>
                    Add ha
                </button>
            ) : (
                <div>No more Ha Ha!</div>
            )}
        </div>
    );
};

export default UseStateArray;
