import React, { useState, useEffect } from "react";
import "../css/Trending.css";
import rightArrow from "../assets/arrows/arrow-right-short.svg";
import leftArrow from "../assets/arrows/arrow-left-short.svg";
import TrendingCarousel from "./TrendingCarousel";
import TrendingBanner from "./TrendingBanner";
import "../css/ShareYourStyle.css"

export default function ShareYourStyle() {
  const [data, setData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://1a00c9f9cfdb301b.mokky.dev/shareyourstyle");
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
    <div className="Trending ShareStyle">
      <h1>Share Your Style</h1>
      <button className="prev style-prev" onClick={goToPrevSlide}><img src={leftArrow} alt="Left Arrow" /></button>
      <div className="trending-carousel style-carousel">
        {data.slice(startIndex, startIndex + 4).map((item, index) => (
          <TrendingCarousel
            key={index}
            img={item.img}
          />
        ))}
        
        <button className="next style-next" onClick={goToNextSlide}><img src={rightArrow} alt="Right Arrow" /></button>
      </div>
    </div>
  );
}
