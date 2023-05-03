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
import MuduleCSS from "./MuduleCSS";
import ScssInReact from "./ScssInReact";
import FunctionEvent from "./FunctionEvent";
import ClassEvent from "./ClassEvent";
import Inputs from "./Inputs";
import Conditional from "./Conditional";

import "./App.css";
import styles from "./App.module.css";

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
                <p className={styles.moduleTest}>module CSS in App.js</p>
                <MuduleCSS />
                <ScssInReact />
                <br></br>
                <span>
                    <FunctionEvent /> <ClassEvent />
                </span>
                <br></br>
                <AddHr /> 
                <Inputs />
                <Conditional />
                <AddHr /> 
            </>
        );
    }
}

export default App;
