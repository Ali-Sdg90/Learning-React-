import React, { Component } from "react";

import { Link } from "react-router-dom";

class Blog extends Component {
    render() {
        return (
            <div>
                <h1>Blog</h1>
                {this.props.match.params.author ? (
                    <p>Author is {this.props.match.params.author}.</p>
                ) : (
                    <p>No one knows who the author is!</p>
                )}
                <ul>
                    <li>
                        <Link to="/Blogs">Blogs</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Blog;
