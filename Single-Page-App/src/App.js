import React from "react";

import "./App.css";

import HomePage from "./components/HomePage";
import Products from "./components/Products";
import Product from "./components/Product";
import Blogs from "./components/Blogs";
import Blog from "./components/Blog";
import BlogQuery from "./components/BlogQuery";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";

import { Route, Switch } from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <>
                <Navbar />
                <div>
                    <Switch>
                        <Route
                            path="/products/:id"
                            render={(props) => <Product {...props} />}
                        />
                        <Route
                            path="/products"
                            render={(props) => <Products {...props} />}
                        />
                        <Route
                            path="/blogs/blog/:author?"
                            render={(props) => <Blog {...props} />}
                        />
                        <Route
                            path="/blogQuery"
                            render={(props) => <BlogQuery {...props} />}
                        />
                        <Route
                            path="/blogs"
                            render={(props) => <Blogs name="Ali" {...props} />}
                        />
                        <Route
                            path="/aboutus"
                            render={(props) => <AboutUs {...props} />}
                        />
                        <Route
                            path="/"
                            render={(props) => <HomePage {...props} />}
                        />
                    </Switch>
                </div>
            </>
        );
    }
}

export default App;
