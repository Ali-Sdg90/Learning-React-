import React, { useEffect, useState } from "react";

import UseEffect1 from "./UseEffectUpdate";
import UseEffect2 from "./UseEffectUn-Mount";
import UseEffectGetAxios from "./UseEffectGetAxios";

const UseEffect = () => {
    // const [showUseEffect, setShowUseEffect] = useState(false);
    const [showUseEffect1, setShowUseEffect1] = useState(false);
    const [showUseEffect2, setShowUseEffect2] = useState(false);
    const [showUseEffect3, setShowUseEffect3] = useState(false);

    return (
        <div>
            <h2>UseEffect</h2>
            <br></br>
            <ol>
                <li>
                    <div>
                    <p>Mount & Update only number:</p>
                        <button
                            onClick={() =>
                                setShowUseEffect1((prevstate) => !prevstate)
                            }
                        >
                            Show useEffect1
                        </button>
                        {showUseEffect1 ? <UseEffect1 /> : ""}
                    </div>
                </li>
                <li>
                    <div>
                        <p>Mount & Unmount:</p>
                        <button
                            onClick={() =>
                                setShowUseEffect2((prevstate) => !prevstate)
                            }
                        >
                            Show useEffect2
                        </button>
                        {showUseEffect2 ? <UseEffect2 /> : ""}
                    </div>
                </li>
                <li>
                    <div>
                        <p>Get on Mount:</p>
                        <button
                            onClick={() =>
                                setShowUseEffect3((prevstate) => !prevstate)
                            }
                        >
                            Show useEffect3
                        </button>
                        {showUseEffect3 ? <UseEffectGetAxios /> : ""}
                    </div>
                </li>
            </ol>

            {/* <br></br>
            <br></br> */}
        </div>
    );
};

export default UseEffect;
