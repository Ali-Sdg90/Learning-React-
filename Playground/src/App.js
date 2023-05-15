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
import LifecycleBtn from "./components/LifecycleBtn";
import Ref from "./components/Ref";
import RefExample from "./components/RefExample";
import ChildWithError from "./components/ChildWithError";
import ErrorBoundary from "./components/ErrorBoundary";
import Realtime from "./components/Realtime";
import LiftingStateUp from "./components/LiftingStateUp";
import HOCChild1 from "./components/HOCChild1";
import HOCChild2 from "./components/HOCChild2";
import GetPost from "./components/Fetch";
import AxiosGet from "./components/AxiosGet";
import AxiosPost from "./components/AxiosPost";
import AxiosDelete from "./components/AxiosDelete";
import AxiosPatch from "./components/AxiosPatch";
import AxiosPut from "./components/AxiosPut";
import AxiosAll from "./components/AxiosAll";

import styles from "./components/App.module.css";
import "./App.css";
import AxiosCatch from "./components/AxiosCatch";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.inputTextRef = React.createRef();
        this.inputRangeRef = React.createRef();

        this.state = {
            inputTextRefState: "",
            inputRangeRefState: 0,
        };
    }

    componentDidMount = () => {
        this.inputTextChange();
    };

    inputTextChange = () => {
        this.setState({
            inputTextRefState: this.inputTextRef.current.value
                ? this.inputTextRef.current.value
                : "empty",
        });
    };

    inputRangeChange = () => {
        this.setState({
            inputRangeRefState: this.inputRangeRef.current.value,
        });
    };

    render() {
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
                <LifecycleBtn />
                <Ref />
                <RefExample />
                <AddHr />
                <ErrorBoundary>
                    <ChildWithError />
                </ErrorBoundary>
                <AddHr />
                <Realtime
                    inputTextChange={this.inputTextChange}
                    inputTextRef={this.inputTextRef}
                    inputTextRefState={this.state.inputTextRefState}
                />
                <LiftingStateUp
                    inputRangeChange={this.inputRangeChange}
                    inputRangeRef={this.inputRangeRef}
                    inputRangeRefState={this.state.inputRangeRefState}
                />
                <AddHr />
                <p>
                    <strong>LiftingStateUp :</strong>
                </p>
                <p>input text: {this.state.inputTextRefState}</p>
                <p>input range: {this.state.inputRangeRefState}</p>
                <AddHr />
                <HOCChild1 />
                <HOCChild2 />
                <GetPost />
                <AxiosGet />
                <AxiosPost />
                <AxiosDelete />
                <AxiosCatch />
                <AxiosPatch />
                <AxiosPut />
                <AxiosAll />
            </>
        );
    }
}

export default App;
