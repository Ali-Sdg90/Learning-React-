import React, { Component } from "react";

class RealTime extends Component {
    // constructor(props) {
    //     super(props);
    //     this.inputRef = React.createRef();

    //     this.state = {
    //         inputRefValue: "",
    //     };
    // }

    // inputChange = (event) => {
    //     this.setState({
    //         inputRefValue: this.inputRef.current.value,
    //     });
    //     // console.log(this.inputRef.current.value);
    // };

    render() {
        const { inputTextChange, inputTextRef, inputTextRefState } = this.props;
        return (
            <>
                <p>ref =&gt; state =&gt; render</p>
                <input
                    type="text"
                    onChange={inputTextChange}
                    ref={inputTextRef}
                ></input>
                <span> =&gt; {inputTextRefState}</span>
            </>
        );
    }
}

export default RealTime;
