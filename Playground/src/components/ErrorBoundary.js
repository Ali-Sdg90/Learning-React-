import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            errorMassage: "",
        };
    }

    componentDidCatch(error, info) {
        console.log(`=> ${error} --- ${info}`);
        this.setState({
            error: true,
            errorMassage: "hi",
        });
    }

    render() {
        if (this.state.error) {
            return (
                <>
                    <p>ERROR!!!!</p>
                    <p>{this.state.errorMassage}</p>
                </>
            );
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;
