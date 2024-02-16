import React, { useState } from "react";
import PhoneInput, { CountryData } from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneInputComponent = () => {
    const [phone, setPhone] = useState<string>("");
    const [country, setCountry] = useState<CountryData | null>(null);

    const handleOnChange = (value: string, data: CountryData) => {
        setPhone(value);
        setCountry(data);
    };

    return (
        <div>
            <PhoneInput
                country={"us"}
                value={phone}
                onChange={handleOnChange}
                inputProps={{
                    name: "phone",
                    required: true,
                    autoFocus: true,
                }}
            />
            {country && (
                <div>
                    <p>Country Name: {country.name}</p>
                    <p>Dial Code: {country.dialCode}</p>
                </div>
            )}
        </div>
    );
};

export default PhoneInputComponent;
