import React, { Component } from "react";

class Ref extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.rageRef = React.createRef();

        this.state = {
            inputRefState: "",
            rageRefState: "",
        };
    }

    showInput = () => {
        this.setState({
            inputRefState: this.inputRef.current.value,
            rageRefState: this.rageRef.current.value,
        });
        console.log(this.inputRef.current.value);
        // console.log(this.rageRef.current.value);
    };

    render() {
        return (
            <>
                <input ref={this.inputRef} type="text"></input>
                <input type="range" ref={this.rageRef}></input>
                <button onClick={this.showInput}>
                    get input value with <strong>ref</strong>
                </button>
                <span>
                    {" "}
                    {this.state.inputRefState} - {this.state.rageRefState}
                </span>
                <hr></hr>
            </>
        );
    }
}

export default Ref;
