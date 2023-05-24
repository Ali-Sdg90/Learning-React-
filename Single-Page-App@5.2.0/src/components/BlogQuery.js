import React, { Component } from "react";

import queryString from "query-string";

class BlogQuery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            caveManSearch: "",
            useQueryString: "",
        };
    }

    clickHandler = () => {
        this.setState(
            {
                caveManSearch: this.props.location.search,
                useQueryString: JSON.stringify(
                    queryString.parse(this.props.location.search)
                ),
            },
            () => {
                console.log(this.props.location.search);
                console.log(queryString.parse(this.props.location.search));
            }
        );
    };

    render() {
        return (
            <div>
                <h1>BlogQuery</h1>
                <button onClick={this.clickHandler}>Show Query</button>
                {this.state.caveManSearch ? (
                    <>
                        <p>this.props.location.search :</p>
                        <pre> {this.state.caveManSearch}</pre>
                        <hr></hr>
                        <p>queryString.parse(this.props.location.search) :</p>
                        <pre> {this.state.useQueryString}</pre>
                    </>
                ) : (
                    ""
                )}
            </div>
        );
    }
}

export default BlogQuery;
