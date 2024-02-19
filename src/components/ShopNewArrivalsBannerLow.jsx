import React from "react";
import bannerfirst from "../assets/main-page-banner-first.webp";
import bannersecond from "../assets/main-page-banner-second.webp";
import BannerItem from "./BannerItem"

export default function ShopNewArrivalsBannerLow() {
    const arrBanner = [
      {
        img: bannersecond,
        title: "Monochrome classics",
      },
      {
        img: bannerfirst,
        title: "Vans X Spitfire Collection"
      }
    ];
  
    return (
      <div className="shop-new-arrivals-banner-low">
        {arrBanner.map((item, index) => (
          <BannerItem key={index} img={item.img} title={item.title} />
        ))}
      </div>
    );
  }