import React, { Component } from "react";

import { Link } from "react-router-dom";

class Product extends Component {
    render() {
        return (
            <>
                <h1>Product #{this.props.match.params.id}</h1>
                <ul>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                </ul>
            </>
        );
    }
}

export default Product;
