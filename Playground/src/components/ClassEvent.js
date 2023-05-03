import React, { Component } from "react";

class ClassEvent extends Component {
    constructor() {
        super();
        this.state = {
            statee: true,
        };
    }
    consoleClick = () => {
        console.log("Class Event clicked!");
        this.setState({ statee: !this.state.statee });
        console.log(this.state.statee);
    };

    render() {
        return (
            <>
                <button onClick={this.consoleClick}>Class Event</button>
                <p>click btn to change my state!</p>
                <p>My state : {this.state.statee.toString()}.</p>
            </>
        );
    }
}

export default ClassEvent;
