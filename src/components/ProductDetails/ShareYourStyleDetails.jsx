import React, { useState, useEffect } from "react";
import rightArrow from "../../assets/arrows/arrow-right-short.svg"
import leftArrow from "../../assets/arrows/arrow-left-short.svg";
import TrendingCarousel from "../TrendingCarousel";
import "../../css/ProductDetailsStyle.css"


export default function ShareYourStyleDetails() {
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
    <div className="StyleDetails">
      <h1>Share Your Style</h1>
      <button className="details-prev" onClick={goToPrevSlide}><img src={leftArrow} alt="Left Arrow" /></button>
      <div className="details-carousel">
        {data.slice(startIndex, startIndex + 5).map((item, index) => (
          <TrendingCarousel
            key={index}
            img={item.img}
            bannerClass={"style-banner"}
          />
        ))}
        
        <button className="details-next" onClick={goToNextSlide}><img src={rightArrow} alt="Right Arrow" /></button>
      </div>
    </div>
  );
}
