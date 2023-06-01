import React, { Component } from "react";

import HOC from "./HOC";

class HOCChild1 extends Component {
    render() {
        const { number, addToCount } = this.props;

        return (
            <div>
                <p>Number of {number === 1 ? "orange" : "oranges"} : {number}</p>
                <button onClick={addToCount}>Add Orange</button>
                <br></br>
                <br></br>
                <hr></hr>
            </div>
        );
    }
}

export default HOC(HOCChild1);
