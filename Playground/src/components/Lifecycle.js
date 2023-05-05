import React, { Component } from "react";

class Lifecycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            randNum: (Math.random() * 100).toFixed(0),
        };

        console.log("=> constructor");
    }

    changeRandNum = () => {
        this.setState({
            randNum: (Math.random() * 100).toFixed(0),
        });
    };

    componentDidMount() {
        console.log("=> componentDidMount");
    }

    componentDidUpdate() {
        console.log("=> componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("=> componentWillUnmount")
    }

    render() {
        console.log("=> render");

        return (
            <>
                <p>
                    Random Number: <span>{this.state.randNum}</span>
                </p>
                <button onClick={this.changeRandNum}>rand()</button>
            </>
        );
    }
}

export default Lifecycle;
