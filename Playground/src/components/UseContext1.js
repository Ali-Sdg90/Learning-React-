import React, { useState } from "react";
import UseContext2 from "./UseContext2";

export const NameContext = React.createContext();

const UseContext1 = () => {
    const [name, setName] = useState("ali");

    return (
        <div>
            <h2>UseContext</h2>
            <br></br>
            <NameContext.Provider value={name}>
                <span>UseContext1 =&gt;</span>

                <UseContext2 />
            </NameContext.Provider>
        </div>
    );
};

export default UseContext1;
