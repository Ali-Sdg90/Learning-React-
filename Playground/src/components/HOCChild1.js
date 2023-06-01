import React, { Component } from "react";

import HOC from "./HOC";

class HOCChild1 extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         apple: 0,
    //     };
    // }

    // addToCount = () => {
    //     this.setState((prevState) => ({
    //         apple: prevState.apple + 1,
    //     }));
    // };

    render() {
        const { number, addToCount } = this.props;

        return (
            <div>
                <p>
                    <strong>Heigher Order Component :</strong>
                </p>
                <p>
                    Number of {number === 1 ? "apple" : "apples"} : {number}
                </p>
                <button onClick={addToCount}>Add Apple</button>
            </div>
        );
    }
}

export default HOC(HOCChild1);
