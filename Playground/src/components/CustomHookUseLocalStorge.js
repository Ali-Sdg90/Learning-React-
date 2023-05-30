import React, { useState } from "react";
import useLocalStorge from "../hooks/useLocalStorage";

const CustomHookUseLocalStorge = () => {
    const [input, setInput] = useLocalStorge("text", "");
    const [date, setDate] = useLocalStorge("date", "");

    // const [output] = useSaveDate("date", date);

    return (
        <div>
            <ul>
                <li>
                    <input
                        type="text"
                        value={input}
                        onChange={(event) => {
                            setInput(event.target.value);
                            console.log(
                                "localStorage:",
                                JSON.parse(window.localStorage.getItem("text"))
                            );
                        }}
                    ></input>
                    <span> Key: text</span>
                </li>
                <li style={{ border: "none" }}>
                    <br></br>
                    <input
                        type="date"
                        value={date}
                        onChange={(event) => {
                            setDate(event.target.value);
                            console.log(
                                "localStorage:",
                                JSON.parse(window.localStorage.getItem("date"))
                            );
                        }}
                    ></input>
                    <span> Key: date </span>
                </li>
            </ul>
        </div>
    );
};

export default CustomHookUseLocalStorge;
