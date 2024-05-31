import React from "react";

const products = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
];

const Li = () => {
    return (
        <ul>
            {products.map((product) => {
                return (
                    <li
                        key={product.id}
                        style={{ color: product.isFruit && "green" }}
                    >
                        {product.title}
                    </li>
                );
            })}
        </ul>
    );
};

export default Li;
