import React, { useState } from "react";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import "react-phone-number-input/style.css";

const PhonePrefix = () => {
    const [value, setValue] = useState<string | undefined>();
    return (
        <div>
            <h1>Hi</h1>
            <PhoneInput
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
                
            />
            
        </div>
    );
};

export default PhonePrefix;
