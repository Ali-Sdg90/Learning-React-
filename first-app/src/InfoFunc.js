import React from "react";

const InfoFunc = (props) => {
    return (
        <p>
            {props.name} is {props.age} and favColor is {props.favColor}.{" "}
            <span>{props.children}</span>
        </p>
    );
};

export default InfoFunc;
