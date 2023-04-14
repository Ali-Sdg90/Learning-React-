import React from "react";

const DestructuringF = ({ lastName, favColor, name, age }) => {
    return (
        <>
            <hr></hr>
            <p>Destructuring Function Component</p>
            <p>
                {name} {lastName} is {age} yo and favColor is {favColor}.
            </p>
        </>
    );
};

export default DestructuringF;
