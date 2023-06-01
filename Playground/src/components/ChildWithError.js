import React, { Component } from "react";

class ChildWithError extends Component {
    constructor(props) {
        super(props);
    }

    errorBtn = () => {
        const randNum = Math.random();
        if (randNum < 0.5) {
            console.log("=> ERROR");
            throw new Error("=> Some random ERROR happen'");
        } else {
            console.log("=> Not Error");
        }
    };

    render() {
        return (
            <div>
                <p>
                    In production mode, the error page will not be displayed to
                    the user*
                </p>
                <button onClick={this.errorBtn}>50% error</button>
            </div>
        );
    }
}

export default ChildWithError;
