import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffectGetAxios = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((response) => setData(response.data));
    }, []);

    return (
        <div>
            {console.log(data)}
            {data.length ? (
                data.map((item) => (
                    <h4 key={item.id}>
                        <span>{item.id}. </span>
                        {item.title}
                    </h4>
                ))
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    );
};

export default UseEffectGetAxios;
