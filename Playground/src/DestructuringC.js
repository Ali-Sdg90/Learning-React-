import React, { Component } from "react";

class DestructuringC extends Component {
    constructor() {
        super();
        this.state = {
            name: "Ali",
            age: 21,
        };
    }
    render() {
        const { name, age } = this.state;
        const { lastName, favColor } = this.props;
        return (
            <>
                <hr></hr>
                <p>Destructuring Class Component</p>
                <p>
                    {name} {lastName} is {age} yo and favColor is {favColor}.
                </p>
            </>
        );
    }
}

export default DestructuringC;
