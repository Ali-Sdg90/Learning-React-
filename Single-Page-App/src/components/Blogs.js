import React, { Component } from "react";

import { Link } from "react-router-dom";

class Blogs extends Component {
    render() {
        return (
            <div>
                <h1>Blogs</h1>

                <ul>
                    <li>
                        <Link to="/blogs/blog">No author</Link>
                    </li>
                    <li>
                        <Link to="/blogs/blog/Ali">Ali</Link>
                    </li>
                    <li>
                        <Link to="/blogs/blog/Pari">Pari</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Blogs;
