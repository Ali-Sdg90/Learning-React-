import React, { Component } from "react";

class State extends Component {
    constructor() {
        super();
        this.state = {
            name: "Ali",
            age: 21,
        };
    }

    changeHandler = () => {
        this.setState({
            name: "Ahmad",
        });
    };

    render() {
        return (
            <>
                <p>
                    {this.state.name}'s age is {this.state.age}
                </p>
                <button onClick={this.changeHandler}>Change</button>
            </>
        );
    }
}

export default State;
