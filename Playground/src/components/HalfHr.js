import React from "react";

import Styles from "./HalfHr.module.css";

const HalfHr = (props) => {
    const { topBr, btmBr } = props;
    return (
        <div>
            {/* {console.log(topBr)}
            {console.log(btmBr)} */}
            {topBr ? <br></br> : ""}

            <hr className={Styles.HalfHr} />

            {btmBr ? <br></br> : ""}
            <br></br>
        </div>
    );
};

export default HalfHr;
