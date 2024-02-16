import React, { useState, createContext } from "react";
import NumberCounter from "./NumberCounter";
import Context1 from "./Context-Folder/Context1";
import ReactRouterDom from "./ReactRouterDom";
import PhonePrefix from "./react-phone-number-input/PhonePrefix";
import PhonePrefix2 from "./react-phone-number-input/PhonePrefix2";
import PhonePrefix3 from "./react-phone-number-input/PhonePrefix3";

export const ThemeContext = createContext({
    theme: "info",
    setTheme: (theme: string) => {},
});

const App = () => {
    const [theme, setTheme] = useState("info");

    return (
        <div>
            <NumberCounter />
            <NumberCounter />

            <ThemeContext.Provider value={{ theme, setTheme }}>
                <Context1 />
            </ThemeContext.Provider>

            <ReactRouterDom></ReactRouterDom>

            <PhonePrefix />
            <br />
            <PhonePrefix2 />
            <br />
            <PhonePrefix3 />
        </div>
    );
};

export default App;
