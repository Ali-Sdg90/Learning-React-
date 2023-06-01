import React, { Component } from "react";

class SetState extends Component {
    constructor() {
        super();
        this.state = {
            name: "Ali",
            number: 0,
        };
    }

    addOne = () => {
        // this.setState({
        //     number: this.state.number + 1,
        // });

        this.setState(
            (prevState) => ({
                number: prevState.number + 1,
            }),
            () => {
                console.log(`number:${this.state.number}`);
            }
        );
    };

    addThree = () => {
        this.addOne();
        this.addOne();
        this.addOne();
    };

    render() {
        return (
            <>
                <hr></hr>
                <p>
                    {this.state.name}'s number is {this.state.number}
                </p>
                <button onClick={this.addOne}>Add 1</button>
                <span> </span>
                <button onClick={this.addThree}>Add 3</button>
                <hr></hr>
            </>
        );
    }
}

export default SetState;
