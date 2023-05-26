import React from "react";
import ReactDom from "react-dom";

import App from "./App";

import axios from "axios";

axios.interceptors.request.use(
    (request) => {
        console.log(`A "${request.method}" request sent to ${request.url}`);
        return request;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
        console.log(`A response has been received from ${response.config.url}`);
        return response;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);


ReactDom.render(<App />, document.getElementById("root"));
