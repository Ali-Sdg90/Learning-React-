import React from "react";
import { useParams } from "react-router-dom";

const Route1 = () => {
    const params = useParams();

    return (
        <>
            <div className="bg-success display-4 px-5">You are in Route 1</div>
            <p>params.id: {params.value}</p>
            {console.log(params)}
        </>
    );
};

export default Route1;
