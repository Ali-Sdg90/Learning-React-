import React, { Component } from "react";

class Info extends Component {
    render() {
        return (
            <p>
                {this.props.name} is {this.props.age} and favColor is{" "}
                {this.props.favColor}. <span>{this.props.children}</span>
            </p>
        );
    }
}

export default Info;
