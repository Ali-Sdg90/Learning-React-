import React, { Component } from "react";

class LiftingStateUp extends Component {
    render() {
        const { inputRangeChange, inputRangeRef, inputRangeRefState } =
            this.props;

        return (
            <div>
                <br></br>
                <input
                    type="range"
                    onChange={inputRangeChange}
                    ref={inputRangeRef}
                    value={inputRangeRefState}
                ></input>
                <span> =&gt; {inputRangeRefState}/100</span>
            </div>
        );
    }
}

export default LiftingStateUp;
