import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class RandAddress extends Component {
    constructor(props) {
        super(props);

        this.state = {
            randAdrs: "",
        };
    }

    makeRandAdrs = () => {
        let hi = String((Math.random() * 100).toFixed(0));
        this.setState(
            {
                randAdrs: "/" + hi,
            },
            () => {
                console.log(this.state.randAdrs);
            }
        );
    };

    componentDidMount = () => {
        // console.log("mount");
        this.makeRandAdrs();
    };

    render() {
        const { randAdrs } = this.state;

        if (randAdrs) {
            return <Redirect to={randAdrs} />;
        }

        return <div>Loading...</div>;
    }
}

export default RandAddress;
