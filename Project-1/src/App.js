import React, { Component } from "react";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Products from "./components/Products";
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Landing />}></Route>
                    <Route path="/products" element={<Products />}></Route>
                </Routes>

                <Footer />
            </>
        );
    }
}

export default App;
