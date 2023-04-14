import React, { Component } from "react";

class SetState2 extends Component {
    constructor() {
        super();
        this.state = {
            car: "Ali",
            cookie: 4,
        };
    }

    add1Cookie = () => {
        this.setState(
            (prevState) => ({
                cookie: prevState.cookie + 1,
            }),
            () => {
                console.log("Add cookie");
            }
        );
    };

    add5Cookie = () => {
        for (let i = 0; i < 5; i++) {
            this.add1Cookie();
        }
    };

    render() {
        return (
            <div>
                <p>
                    {this.state.car} has {this.state.cookie} cookies!
                </p>
                <button onClick={this.add1Cookie}>Add 1 cookie</button>
                <span> </span>
                <button onClick={this.add5Cookie}>Add 5 cookies</button>
            </div>
        );
    }
}

export default SetState2;
