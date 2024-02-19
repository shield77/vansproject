// SalesShoes.js
import React from "react";
import "../../css/SalesShoes.css";

export default function SalesShoes({ filtersAreShown, shoes, sortBy, selectedTypes }) {
    const sortShoes = (shoes, sortBy) => {
        return [...shoes].sort((a, b) => {
            if (sortBy === "Price Low to High") {
                return a.price - b.price;
            } else if (sortBy === "Price High to Low") {
                return b.price - a.price;
            }
        });
    };

    const filterShoesByType = (shoes, selectedTypes) => {
        if (!selectedTypes || selectedTypes.length === 0) {
            return shoes;
        }
        return shoes.filter(shoe => selectedTypes.includes(shoe.type));
    };

    const sortedShoes = sortShoes(shoes, sortBy);
    const filteredShoes = filterShoesByType(sortedShoes, selectedTypes);

    return (
        <div className={`catalog-shoes ${filtersAreShown ? "" : "catalog-shoes-fullscreen"}`}>
            {filteredShoes.map((shoe, index) => (
                <div className={`catalog-shoe ${filtersAreShown ? "" : "catalog-shoe-fullscreen"}`} key={index}>
                    <img className={`shoes-img ${filtersAreShown ? "" : "shoes-img-fullscreen"}`} src={shoe.img} alt="Shoe" />
                    <h1>{shoe.title}</h1>
                    <a href="#">More Colors</a>
                    <p>${shoe.price}</p>
                </div>
            ))}
        </div>
    );
}
