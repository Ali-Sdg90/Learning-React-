import React, { Component } from "react";

import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <ul>
                <li>
                    <Link to="/">HomePage</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                    <Link to="/aboutus">About us</Link>
                </li>
                <li>
                    <Link to="/randaddress">Random Address</Link>
                </li>
            </ul>
        );
    }
}

export default Navbar;
