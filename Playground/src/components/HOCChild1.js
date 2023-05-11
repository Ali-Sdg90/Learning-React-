import React, { Component } from "react";

import HOC from "./HOC";

class HOCChild1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apple: 0,
        };
    }

    addToCount = () => {
        this.setState((prevState) => ({
            apple: prevState.apple + 1,
        }));
    };

    render() {
        return (
            <div>
                <p>number of apples : {this.state.apple}</p>
                <button onClick={this.addToCount}>Add Apple</button>
            </div>
        );
    }
}

export default HOC(HOCChild1);
