import React, { useState, useEffect } from "react";
import "../css/Trending.css";
import rightArrow from "../assets/arrows/arrow-right-short.svg";
import leftArrow from "../assets/arrows/arrow-left-short.svg";
import TrendingCarousel from "./TrendingCarousel";
import TrendingBanner from "./TrendingBanner";

export default function Trending() {
  const [data, setData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://1a00c9f9cfdb301b.mokky.dev/carouselsneakers");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const goToNextSlide = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, data.length - 5));
  };

  const goToPrevSlide = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="Trending">
      <h1>Trending</h1>
      <div className="trending-carousel">
        {data.slice(startIndex, startIndex + 5).map((item, index) => (
          <TrendingCarousel
            key={index}
            img={item.img}
            title={item.title}
            name={item.name}
            price={item.price}
          />
        ))}
        <button className="prev" onClick={goToPrevSlide}><img src={leftArrow} alt="Left Arrow" /></button>
        <button className="next" onClick={goToNextSlide}><img src={rightArrow} alt="Right Arrow" /></button>
      </div>
      <TrendingBanner />
    </div>
  );
}
