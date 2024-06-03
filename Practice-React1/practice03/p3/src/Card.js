import React, { useContext, useState } from "react";
import Style from "./Card.module.css";
import { AppContext } from "./App";

const Card = ({ cardData }) => {
    const { shoppingBag, setShoppingBag } = useContext(AppContext);
    const [cardAmount, setCardAmount] = useState(
        shoppingBag.itemID.filter((item) => item === cardData.id).length
    );

    const addToCard = () => {
        setShoppingBag((prevState) => ({
            itemName: [...prevState.itemName, cardData.title],
            itemPrice: [...prevState.itemPrice, cardData.price],
            itemID: [...prevState.itemID, cardData.id],
        }));

        setCardAmount((prevState) => prevState + 1);
    };

    // const removeFromCard = () => {
    //     setShoppingBag((prevState) => ({
    //         itemName: prevState.itemName.filter(
    //             (item) => item !== cardData.title
    //         ),
    //         itemPrice: prevState.itemPrice.filter(
    //             (item) => item !== cardData.price
    //         ),
    //         itemID: prevState.itemID.filter((item) => item !== cardData.id),
    //     }));

    //     setCardAmount((prevState) => prevState - 1);
    // };

    const removeFromCard = () => {
        setShoppingBag((prevState) => {
            const index = prevState.itemID.indexOf(cardData.id);

            if (index === -1) {
                return prevState;
            }

            const currentItemName = [...prevState.itemName];
            const currentItemPrice = [...prevState.itemPrice];
            const currentItemID = [...prevState.itemID];

            currentItemName.splice(index, 1);
            currentItemPrice.splice(index, 1);
            currentItemID.splice(index, 1);

            return {
                itemName: currentItemName,
                itemPrice: currentItemPrice,
                itemID: currentItemID,
            };
        });

        setCardAmount((prevState) => prevState - 1);
    };

    return (
        <div className={Style.cardContainer}>
            <div className={Style.leftSide}>
                <div>{cardData.id}. </div>
                <img src={cardData.image} width="40" height="40"></img>
                <span>
                    <span>{cardData.title}</span>
                    <span> - {cardData.price}$</span>
                </span>
            </div>

            <div className={Style.rightSide}>
                <input disabled value={cardAmount}></input>
                <button onClick={addToCard}>+</button>
                <button onClick={removeFromCard} disabled={cardAmount <= 0}>
                    -
                </button>
            </div>
        </div>
    );
};

export default Card;
