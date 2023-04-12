import React, { Component } from "react";

class Aloha extends Component {
    myAge = 21;
    render() {
        return (
            <>
                <hr></hr>
                <h2>AlOhA!</h2>
                <p>myAge: {this.myAge}</p>
                <p>Random Number: {(Math.random() * 100).toFixed(0)}</p>
                <hr></hr>
            </>
        );
    }
}

export default Aloha;
