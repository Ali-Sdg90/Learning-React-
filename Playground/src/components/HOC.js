import React, { Component } from "react";

const withCounter = (OldComponent) => {
    class HOC extends Component {
        constructor(props) {
            super(props);

            // this.setState = {
            //     apple :
            // }
        }

        render() {
            return <OldComponent />;
        }
    }
    return HOC;
};
export default withCounter;
