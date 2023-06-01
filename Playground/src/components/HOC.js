import React, { Component } from "react";

// Heigher Order Component

const withCounter = (OldComponent) => {
    class HOC extends Component {
        constructor(props) {
            super(props);
            this.state = {
                number: 0,
            };
        }

        addToCount = () => {
            this.setState((prevState) => ({
                number: prevState.number + 1,
            }));
        };

        render() {
            return (
                <OldComponent
                    addToCount={this.addToCount}
                    number={this.state.number}
                />
            );
        }
    }
    return HOC;
};
export default withCounter;
