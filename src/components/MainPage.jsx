import React from "react";
import banner from "../assets/banner.webp"
import Header from "./Header";
import "../css/MainPage.css"
import ShopNewArrivals from "./ShopNewArrivals";
import Trending from "./Trending";
import ShareYourStyle from "./ShareYourStyle";
import TheClassic from "./TheClassics";
import Footer from "./Footer";

export default function MainPage() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className="main-page">
            <Header />
            <div className="main-page-banner">
                <img src={banner} />
            </div>
            <div className="up">
                <button onClick={scrollToTop}> ^ </button>
            </div>
            <div className="main-page-info">
                <h1 className="main-page-info-h1">THE OLD SKOOL & THE KNU SKOOL</h1>
                <p className="main-page-info-p">Two icons joined at the sole by an Off The Wall mindset.</p>
                <button className="main-page-info-button">Shop Now</button>
            </div>
            
            
            <ShopNewArrivals />
            <Trending title="Trending" />
            <ShareYourStyle />
            <TheClassic title="The Classic" />
            <Footer />
        </div>
    );
}
