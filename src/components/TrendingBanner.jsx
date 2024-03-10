import React from "react";
import bannerfirst from "../assets/trendingbanner1.webp"
import bannersecond from "../assets/trendingbanner2.webp"
import BannerItem from "./BannerItem";

export default function TrendingBanner () {
    const trendingBanner = [
        {
            img: bannerfirst,
            title: "The Sport Low",
          },
          {
            img: bannersecond,
            title: "The UltraRange™ Exo is Designed To Go Everywhere"
          }
    ]


    return (
        <div className="shop-new-arrivals-banner-low mobile-low-banner">
        {trendingBanner.map((item, index) => (
          <BannerItem key={index} img={item.img} title={item.title} />
        ))}
      </div>
    )
}