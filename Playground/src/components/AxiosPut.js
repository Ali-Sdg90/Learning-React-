import React, { Component } from "react";
import axios from "axios";

class AxiosPut extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
        };
    }

    handleTitleChange = (event) => {
        this.setState({ title: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const { title } = this.state;

        axios
            .put("https://jsonplaceholder.typicode.com/posts/1", {
                title,
            })
            .then((response) => console.log(response.data));
    };

    render() {
        return (
            <>
                <br />
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>PUT:</legend>
                        <br />
                        <label>
                            Title:
                            <input
                                type="text"
                                value={this.state.title}
                                onChange={this.handleTitleChange}
                            />
                            <br />
                            <br />
                        </label>
                        <input type="submit" value="PUT Req" />
                    </fieldset>
                </form>
            </>
        );
    }
}

export default AxiosPut;
