import React, { Component } from "react";

import axios from "axios";

class AxiosCatch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isError: false,
            errorMessage: "",
        };
    }

    errorReq = (errorText) => {
        axios("https://jsonplaceholder.typicode..com/posts")
            .then((response) => console.log(response.data))
            .catch((error) =>
                this.setState(
                    {
                        isError: true,
                        errorMessage: errorText + error.message,
                    },
                    () => {
                        console.log(error);
                    }
                )
            );
    };

    render() {
        const { isError, errorMessage } = this.state;
        return (
            <div>
                <span>Catch : </span>
                <button onClick={() => this.errorReq("=> Error: ")}>
                    Axios Catch
                </button>
                {isError ? <p>{errorMessage}</p> : ""}
            </div>
        );
    }
}

export default AxiosCatch;
