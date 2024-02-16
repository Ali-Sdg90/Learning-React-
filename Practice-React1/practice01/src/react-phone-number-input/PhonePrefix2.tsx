import React, { useState } from "react";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhonePrefix2: React.FC = () => {
    const [phone, setPhone] = useState<string>("");
    return (
        <div>
            <h1>Hi</h1>
            <PhoneInput
                country={"us"}
                value={phone}
                onChange={(phone) => setPhone(phone)}
                enableSearch
            />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    );
};

export default PhonePrefix2;
