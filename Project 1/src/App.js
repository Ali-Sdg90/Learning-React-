import React, { Component } from "react";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Search from "./components/Search";
import Logos from "./components/Logos";
import Footer from "./components/Footer";

class App extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Banner />
                <Cards />
                <Search />
                <Logos />
                <Footer />
            </>
        );
    }
}

export default App;
