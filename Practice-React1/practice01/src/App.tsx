import React, { useState, createContext } from "react";
import NumberCounter from "./NumberCounter";
import Context1 from "./Context-Folder/Context1";

import { Link, Route, HashRouter as Router, Routes } from "react-router-dom";
import Route1 from "./Routes/Route1";
import Route2 from "./Routes/Route2";

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

            <ul>
                <li>
                    <Link to="route1">Go to route1</Link>
                </li>
                <li>
                    <Link to="route2">Go to route2</Link>
                </li>
            </ul>

            <Routes>
                <Route path="/route1/:value" element={<Route1 />} />
                <Route path="/route2/:value" element={<Route2 />} />
            </Routes>
        </div>
    );
};

export default App;
