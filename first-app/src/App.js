import React from "react";

import DynamicContent from "./DynamicContent";
import Hi from "./Hi";
import Info from "./Info";
import AddHr from "./AddHr";
import InfoFunc from "./InfoFunc";
import State from "./State";
import SetState from "./SetState";
import SetState2 from "./SetState2";
import DestructuringC from "./DestructuringC";
import DestructuringF from "./DestructuringF";

import "./App.css";

class App extends React.Component {
    render() {
        // return <h1>Aloha React!</h1>;

        // return(
        //     <div>
        //         <h1>Aloha</h1>
        //         <p>React!</p>
        //     </div>
        // )

        return (
            <>
                <h1 className="HSAS">Aloha</h1>
                <p
                    style={{
                        color: "red",
                        letterSpacing: "1px",
                        fontSize: "20px",
                    }}
                >
                    React!
                </p>
                <Hi />
                <Hi />
                <DynamicContent />
                <Info name="Ali" age="21" favColor="Blue" />
                <Info name="Navid" age="82" favColor="Red" />
                <Info name="Hanieh" age="21" favColor="Blue">
                    I Love Her :&#41;
                </Info>
                <InfoFunc name="Function" age="Cooler" favColor="undefined" />
                <AddHr />
                <State />
                <SetState />
                <SetState2 />
                <DestructuringC lastName="Sadeghi" favColor="Blue" />
                <DestructuringF
                    name="Ali"
                    age="21"
                    lastName="Sadeghi"
                    favColor="Blue"
                />
            </>
        );
    }
}

export default App;
