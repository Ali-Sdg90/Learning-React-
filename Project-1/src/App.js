import React, { Component } from "react";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Products from "./components/Products";
import DetailPage from "./components/DetailPage";
import Footer from "./components/Footer";

import { Routes, Route, Navigate } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import AboutUs from "./components/AboutUs";
import Programmers from "./components/Programmers";
import Drivers from "./components/Drivers";

class App extends Component {
    render() {
        return (
            <>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Landing />}></Route>
                    <Route path="/products" element={<Products />}></Route>
                    <Route
                        path="/products/:id"
                        element={<DetailPage />}
                    ></Route>
                    <Route path="/aboutus" element={<AboutUs />}>
                        <Route path="programmers" element={<Programmers />} />
                        <Route path="drivers" element={<Drivers />} />
                    </Route>
                    <Route
                        path="/*"
                        element={<Navigate to="/notfound" />}
                    ></Route>
                    <Route path="/notfound" element={<PageNotFound />}></Route>
                </Routes>

                <Footer />
            </>
        );
    }
}

export default App;
