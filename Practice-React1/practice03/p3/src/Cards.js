import React from "react";
import { useContext } from "react";
import { AppContext } from "./App";
import Card from "./Card";

const Cards = () => {
    const { data } = useContext(AppContext);

    return (
        <div>
            <div>
                {!data.data.length ? (
                    <h1>Loading...</h1>
                ) : (
                    data.data.map((cardData) => (
                        <Card key={cardData.id} cardData={cardData} />
                    ))
                )}
            </div>
        </div>
    );
};

export default Cards;
