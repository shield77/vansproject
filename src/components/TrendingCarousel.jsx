import React from "react";

export default function TrendingCarousel({ img, title, name, price, bannerClass }) {
  return (
    <div className={`trending-banner ${bannerClass}`}>
      <img src={img} alt={title} className="trending-img" />
      <p className="trending-p-name">{name}</p>
      <p className="trending-p-price">{price}</p>
    </div>
  );
}
