import React, { useState } from "react";

const App = () => {
    const [name, setName] = useState("Ali");

    return (
        <div>
            <h1>Hi</h1>
            <h1>{name}</h1>
            <button
                onClick={() => setName(Math.trunc(Math.random() * 90) + 10)}
            >
                Random Number
            </button>
        </div>
    );
};

export default App;
