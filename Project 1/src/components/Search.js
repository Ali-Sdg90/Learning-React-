import React, { Component } from "react";

import styles from "./Search.module.css";

class Search extends Component {
    constructor() {
        super();
        this.state = {
            text: "",
        };
    }

    changeInput = (event) => {
        this.setState({
            text: event.target.value,
        });
    };

    render() {
        return (
            <div className={styles.container}>
                <p>Search what you want</p>
                <div>
                    <input
                        type="type"
                        onChange={this.changeInput}
                        placeholder="Search"
                    />
                    <br></br>
                    <br></br>
                    <span className={styles.inputCopy}>=&gt; {this.state.text}</span>
                </div>
            </div>
        );
    }
}

export default Search;
