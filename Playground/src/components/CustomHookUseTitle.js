import React, { useState } from "react";
import useTitle from "../hooks/useTitle";

const CustomHookUseTitle = () => {
    const [customTitle, setCustomTitle] = useState("React App - Playground");
    const [inputText, setInputText] = useState("");

    useTitle(customTitle);

    return (
        <div>
            <input
                value={inputText}
                onChange={(event) => setInputText(event.target.value)}
                style={{ width: "175.5px" }}
            />
            <br></br>
            <br></br>
            <button
                onClick={() => {
                    setCustomTitle("Hello");
                    setInputText("Hello");
                }}
            >
                Hello
            </button>
            <button
                onClick={() => {
                    setCustomTitle("Aloha");
                    setInputText("Aloha");
                }}
            >
                Aloha
            </button>
            <button onClick={() => setCustomTitle(inputText)}>
                Custom Text
            </button>
        </div>
    );
};

export default CustomHookUseTitle;
