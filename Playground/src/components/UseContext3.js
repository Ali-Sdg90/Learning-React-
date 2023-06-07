import React, { useContext } from "react";

import { NameContext } from "./UseContext1";

const UseContext3 = () => {
    const name = useContext(NameContext);
    return (
        <span>
            <span> UseContext3 =&gt;</span>
            <h1 style={{display: "inline"}}> {name}</h1>
        </span>
    );
};

export default UseContext3;
