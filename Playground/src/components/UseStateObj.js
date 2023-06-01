import React, { useState } from "react";

const UseStateObj = () => {
    const [data, setData] = useState({ name: "", age: "" });
    return (
        <div>
            <input
                type="text"
                value={data.name}
                onChange={(event) =>
                    setData({ ...data, name: event.target.value })
                }
                placeholder="name"
            />
            <br></br>
            <input
                type="number"
                value={data.age}
                onChange={(event) =>
                    setData({ ...data, age: event.target.value })
                }
                placeholder="age"
            />
            <p>name: {data.name ? data.name : "- - -"}</p>
            <p>age: {data.age ? data.age : "- - -"}</p>
        </div>
    );
};

export default UseStateObj;
