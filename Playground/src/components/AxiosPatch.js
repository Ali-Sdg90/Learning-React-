import React, { Component } from "react";

import axios from "axios";

class AxiosPatch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: "",
        };
    }

    handleTitleChange = (event) => {
        this.setState({ title: event.target.value });
    };

    handleBodyChange = (event) => {
        this.setState({ body: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const { title, body } = this.state;

        axios
            .patch("https://jsonplaceholder.typicode.com/posts/1", {
                title,
                body,
            })
            .then((response) => console.log(response.data));
    };

    render() {
        return (
            <>
                <br></br>
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Patch :</legend>
                        <br></br>
                        <label>Title : </label>
                        <input
                            type="text"
                            value={this.state.title}
                            onChange={this.handleTitleChange}
                        />
                        <br></br>
                        <br></br>

                        <label>Body : </label>
                        <input
                            type="text"
                            value={this.state.body}
                            onChange={this.handleBodyChange}
                        />

                        <br></br>
                        <br></br>
                        <input type="submit" value="Patch Req"></input>
                    </fieldset>
                </form>
            </>
        );
    }
}

export default AxiosPatch;
