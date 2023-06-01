import React, { Component } from "react";

import Card from "./Card";
import styles from "./Products.module.css";

import axios from "axios";

class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
        };
    }

    componentDidMount = () => {
        axios.get("https://fakestoreapi.com/products").then((response) => {
            this.setState(
                {
                    products: response.data,
                },
                () => {
                    console.log(this.state.products);
                }
            );
        });
    };

    render() {
        return (
            <div>
                <h1 className={styles.header}>Products</h1>
                <div className={styles.container}>
                    {this.state.products.length ? (
                        this.state.products.map((product) => {
                            return (
                                <Card
                                    image={product.image}
                                    name={product.title}
                                    salary={`${product.price} $`}
                                    key={product.id}
                                />
                            );
                        })
                    ) : (
                        <h2>Loading ...</h2>
                    )}
                </div>
            </div>
        );
    }
}

export default Products;
