import React, { useState, useEffect } from "react";
import logo from "../assets/Vans-Logo-1966.jpg";
import camera from "../assets/icons/camera.svg";
import cart from "../assets/icons/cart3.svg";
import searchIcon from "../assets/icons/search.svg";
import burgerIcon from "../assets/icons/burger.svg";
import BurgerMenu from "./BurgerMenu";
import { Link } from 'react-router-dom';
import "../css/Header.css"


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <div className="header">
      {isMenuOpen ? (
        <BurgerMenu toggleMenu={toggleMenu} />
      ) : (
        <>
          <div className="upper-header">
            <p>30% OFF MTE SHOES & APPAREL</p>
            <a href="#">Shop Now</a>
          </div>
          <div className="mid-header">
            <ul className="mid-header-list">
              <li>
                <a href="#">Order Status</a>
              </li>
              <li>
                <a href="#">Live Chat</a>
              </li>
              <li>
                <a href="#">Find In Store</a>
              </li>
              <li>
                <a href="#">Gift Cards</a>
              </li>
              <li>
                <a href="#">Favorites (0)</a>
              </li>
              <li>
                <a href="#">Join Vans Family</a>
              </li>
              <li>
                <a href="#">Sign In</a>
              </li>
            </ul>
          </div>
          <div className="main-header">
            <div className="main-header-list">
              <Link to="/"><img src={logo} className="main-header-logo" alt="Vans Logo" /></Link>
              <ul className="quick-buttons">
                <li><a href="#">Shoes</a></li>
                <li><a href="#">Clothing</a></li>
                <li><a href="#">Accessories</a></li>
                <li><Link to='/sales'>SALE</Link></li>
                <li><a href="#">Customs</a></li>
                <li><a href="#">Skateboarding</a></li>
                <li><a href="#">All-Weather MTE</a></li>
                <li><a href="#">More</a></li>
              </ul>
            </div>
            <img src={searchIcon} alt="Search Icon" className="search-icon-mobile" />
            <Link to="/"><img src={logo} className="main-header-logo-mobile" alt="Vans Logo" /></Link>
            <div className="header-search">
              <div className="input-container">
                <img src={searchIcon} alt="Search Icon" className="search-icon" />
                <input type="text" />
                <img src={camera} alt="Camera Icon" className="camera-icon" />
              </div>
              <img src={cart} className="header-search-cart" alt="Cart Icon" />
            </div>
            <img src={burgerIcon} className="burger-icon" alt="Burger Icon" onClick={toggleMenu} />
            <Link to="/cartpage"><img src={cart} className="header-search-cart-mobile" alt="Cart Icon" /></Link>
          </div>
        </>
      )}
    </div>
  );
}
