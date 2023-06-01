import React, { Component } from "react";

class Inputs extends Component {
    constructor() {
        super();
        this.state = {
            text: "hi",
            options: "option2",
        };
    }

    changeText = (event) => {
        this.setState({
            text: event.target.value,
        });
        // console.log(event.target.value);
    };

    changeOption = (event) => {
        this.setState({
            options: event.target.value,
        });
        // console.log(event.target.value);
    };

    showInputs = (event) => {
        event.preventDefault();
        console.log(this.state.text);
        console.log(this.state.options);
    };

    render() {
        return (
            <form>
                <input
                    type="text"
                    value={this.state.text}
                    onChange={this.changeText}
                />
                <select value={this.state.options} onChange={this.changeOption}>
                    <option value="option1">option1</option>
                    <option value="option2">option2</option>
                    <option value="option3">option3</option>
                    <option value="option4">option4</option>
                    <option value="option5">option5</option>
                </select>
                <input type="submit" onClick={this.showInputs} />
            </form>
        );
    }
}

export default Inputs;
