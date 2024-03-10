import React from "react";
import { Link } from "react-router-dom";
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

  const sortedShoes = sortShoes(shoes, sortBy);

  return (
    <div className={`catalog-shoes ${filtersAreShown ? "" : "catalog-shoes-fullscreen"}`}>
      {sortedShoes.map((shoe) => (
        <div className={`catalog-shoe ${filtersAreShown ? "" : "catalog-shoe-fullscreen"}`} key={shoe.id}>
          <Link to={`/productdetails/${shoe.id}`}>
            <img className={`shoes-img ${filtersAreShown ? "" : "shoes-img-fullscreen"}`} src={shoe.img} alt="Shoe" />
          </Link>
          <button className="catalog-shoe-sale-btn">SALE</button>
          <h1>{shoe.title}</h1>
          <a href="#">More Colors</a>
          <p>${shoe.price}</p>
        </div>
      ))}
    </div>
  );
}
