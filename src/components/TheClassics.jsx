import React, { useState, useEffect, useRef } from "react";
import "../css/Trending.css";
import rightArrow from "../assets/arrows/arrow-right-short.svg";
import leftArrow from "../assets/arrows/arrow-left-short.svg";
import TrendingCarousel from "./TrendingCarousel";
import TrendingBanner from "./TrendingBanner";
import { useMediaQuery } from '@material-ui/core';

export default function TheClassic({ title }) {
  const [data, setData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const carouselRef = useRef(null);
  const isMobile = useMediaQuery('(max-width: 767px)');
  const numSlides = isMobile ? 2 : 5; // Определение количества слайдов в зависимости от размера экрана

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://1a00c9f9cfdb301b.mokky.dev/carouselsneakers2");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!touchStartX) return;
    const touchEndX = e.touches[0].clientX;
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToPrevSlide();
      } else {
        goToNextSlide();
      }
      setTouchStartX(0);
    }
  };

  const goToNextSlide = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, data.length - numSlides));
  };

  const goToPrevSlide = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="Trending">
      <h1>{title}</h1>
      <div 
        className="trending-carousel"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        ref={carouselRef}
      >
        {data.slice(startIndex, startIndex + numSlides).map((item, index) => (
          <TrendingCarousel
            key={index}
            img={item.img}
            title={item.title}
            name={item.name}
            price={item.price}
          />
        ))}
        {(startIndex > 0 || startIndex + numSlides < data.length) && (
          <div className="carousel-controls">
            {startIndex > 0 && <button className="prev" onClick={goToPrevSlide}><img src={leftArrow} alt="Left Arrow" /></button>}
            {startIndex + numSlides < data.length && <button className="next" onClick={goToNextSlide}><img src={rightArrow} alt="Right Arrow" /></button>}
          </div>
        )}
      </div>
    </div>
  );
}
