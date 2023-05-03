import React from "react";

import DynamicContent from "./components/DynamicContent";
import Hi from "./components/Hi";
import Info from "./components/Info";
import AddHr from "./components/AddHr";
import InfoFunc from "./components/InfoFunc";
import State from "./components/State";
import SetState from "./components/SetState";
import SetState2 from "./components/SetState2";
import DestructuringC from "./components/DestructuringC";
import DestructuringF from "./components/DestructuringF";
import MuduleCSS from "./components/MuduleCSS";
import ScssInReact from "./components/ScssInReact";
import FunctionEvent from "./components/FunctionEvent";
import ClassEvent from "./components/ClassEvent";
import Inputs from "./components/Inputs";
import Conditional from "./components/Conditional";
import ShowInfoRecap from "./components/ShowInfoRecap";
import MapComponent from "./components/MapAndKey";

import styles from "./components/App.module.css";
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
                <Info name="Hanieh" age="21" favColor="Purple">
                    IlH
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
                <ShowInfoRecap />
                <AddHr />
                <MapComponent />
                <AddHr />
            </>
        );
    }
}

export default App;
