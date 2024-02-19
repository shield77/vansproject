import React from "react";



function BannerItem({ img, title }) {
    return (
      <div className="">
        <img src={img} alt={title} className="shop-new-arrivals-banner-img" />
        <p className="shop-new-arrivals-banner-p">{title}</p>
        <button>Shop Now</button>
      </div>
    );
  }

  export default BannerItem