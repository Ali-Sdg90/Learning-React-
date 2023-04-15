
import React, { Component } from "react";

class DynamicContent extends Component {
    myAge = 21;
    render() {
        return (
            <>
                <hr></hr>
                <h2>Dynamic Content!</h2>
                <p>myAge: {this.myAge}</p>
                <p>Random Number: {(Math.random() * 100).toFixed(0)}</p>
                <hr></hr>
            </>
        );
    }
}

export default DynamicContent;
