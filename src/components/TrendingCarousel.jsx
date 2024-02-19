import React from "react";

export default function TrendingCarousel({ img, title, name, price }) {
  return (
    <div className="trending-banner">
      <img src={img} alt={title} className="trending-img" />
      <p className="trending-p-name">{name}</p>
      <p className="trending-p-price">{price}</p>
    </div>
  );
}
