import React, { useReducer, useEffect, useState } from "react";
import axios from "axios";

const initialState = {
    isLoading: true,
    data: {},
    errorMessage: "",
};

const reducer = (state, action) => {
    switch (action.type) {
        case "Success":
            return {
                isLoading: false,
                data: action.payload,
                errorMessage: "",
            };
        case "Failed":
            return {
                isLoading: false,
                data: "",
                errorMessage: "An Error Occurred",
            };
        case "Wait":
            return {
                isLoading: true,
                data: "",
                errorMessage: "An Error Occurred",
            };
        default:
            return state;
    }
};

const UseReducerGet = () => {
    const [url, setUrl] = useState("https://fakestoreapi.com/products/1");

    const [product, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: "Wait" });
        axios
            .get(url)
            .then((response) => {
                console.log("Success");
                dispatch({ type: "Success", payload: response.data });
            })
            .catch(() => {
                console.log("Failed");
                dispatch({ type: "Failed", payload: "" });
            });
    }, [url]);

    const navBtns = (action) => {
        const urlParts = url.split("/");
        const lastPart = urlParts[urlParts.length - 1];
        const number = parseInt(lastPart);
        let incrementedNumber = number;
        switch (action) {
            case "Up":
                incrementedNumber += 1;
                break;
            case "Down":
                incrementedNumber -= 1;
                break;
            default:
                break;
        }
        urlParts[urlParts.length - 1] = incrementedNumber.toString();
        return urlParts.join("/");
    };

    return (
        <div>
            <input
                value={url}
                onChange={(event) => setUrl(event.target.value)}
                style={{ width: "250px" }}
            ></input>
            <button onClick={() => setUrl(navBtns("Up"))}>Up</button>
            <button onClick={() => setUrl(navBtns("Down"))}>Down</button>
            <br></br>
            <br></br>
            {product.isLoading ? (
                <h3>Loading...</h3>
            ) : product.data.id ? (
                <>
                    <img
                        src={product.data.image}
                        style={{ width: "400px", height: "300px" }}
                    ></img>
                    <h3>
                        {product.data.id}. {product.data.title}
                    </h3>
                    <p>Price: {product.data.price} $</p>
                    <p>Rating: {product.data.rating.rate}/5</p>
                    <p>Description: {product.data.description}</p>
                </>
            ) : (
                <h3>Out of range</h3>
            )}

            {console.log("===>", product.data)}
        </div>
    );
};

export default UseReducerGet;
