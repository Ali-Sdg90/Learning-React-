import React, { Component } from "react";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Products from "./components/Products";
import Footer from "./components/Footer";

import { Switch, Route } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <>
                <Navbar />

                <Switch>
                    <Route
                        exact
                        path="/"
                        render={(props) => <Landing {...props} />}
                    ></Route>
                    <Route
                        path="/"
                        render={(props) => <Products {...props} />}
                    ></Route>
                </Switch>

                <Footer />
            </>
        );
    }
}

export default App;
