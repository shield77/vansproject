// Filters.js
import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import "../../css/Filters.css";

export default function Filters({ onChange }) {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleOptionChange = (selectedOptions) => {
        setSelectedOptions(selectedOptions);
        onChange(selectedOptions);
    };

    return (
        <div className="Filters">
            <DropdownMenu buttonText="Product Type" options={["Footwear", "Clothing", "Accesories"]} onChange={handleOptionChange} />
            {/* Другие DropdownMenu здесь */}
            <DropdownMenu buttonText="Clothing Category" options={["Hoodies & Sweatshirts", "Shorts", "T-Shirts", "Tops", "Jackets", "Pants", "Sweaters"]} onChange={handleOptionChange} />
            <DropdownMenu buttonText="Accessories Category" options={["Socks", "Backpacks", "Hats", "Bags", "Shoecare"]} onChange={handleOptionChange} />
            <DropdownMenu buttonText="Mens Shoe Size" options={["40", "41", "42", "43", "44"]} onChange={handleOptionChange} />
            <DropdownMenu buttonText="Womens Shoe Size" options={['36', "37", "38", "39", "40"]} onChange={handleOptionChange} />
        </div>
    );
}
