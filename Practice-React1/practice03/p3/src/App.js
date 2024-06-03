import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import "./App.css"

export const AppContext = React.createContext();

const App = () => {
    const [data, setData] = useState({
        data: [],
        isError: false,
        errorMsg: "",
        isLoading: true,
    });

    const [shoppingBag, setShoppingBag] = useState({
        itemName: [],
        itemPrice: [],
        itemID: [],
    });

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        console.log(shoppingBag);

        const calcTotalPrice = () => {
            let totalPriceValue = 0;

            shoppingBag.itemPrice.map((price) => (totalPriceValue += price));

            setTotalPrice(totalPriceValue.toFixed(2));
        };

        calcTotalPrice();
    }, [shoppingBag]);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetch("https://fakestoreapi.com/products");
                const items = await data.json();

                setData({
                    data: items,
                    isError: false,
                    errorMsg: "",
                    isLoading: false,
                });
            } catch (error) {
                setData({
                    data: [],
                    isError: true,
                    errorMsg: error,
                    isLoading: false,
                });
            }
        };

        getData();
    }, []);

    return (
        <div>
            <div className="header">
                <h1>Simple Shopping Site</h1>
                <div>Total Price: {totalPrice}$</div>
            </div>

            <AppContext.Provider value={{ data, shoppingBag, setShoppingBag }}>
                <Cards />
            </AppContext.Provider>
        </div>
    );
};

export default App;
