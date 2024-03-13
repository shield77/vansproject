import React, { useState } from 'react';
import "../../css/DropdownMenu.css";
import arrowdown from "../../assets/arrows/arrow-down-short.svg"


function ProductDetailsDropdownMenu({ onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown product-details-dropdown">
        <div className="dropdown-toggle-btn" onClick={toggleMenu}>
            <button className="dropdown-toggle-details" >
              Description
            </button>
      <img src={arrowdown}></img>
        </div>
      
      {isOpen && (
        <div className="dropdown-menu   product-details-dropdown-menu">
          <h2>The Iconic Shoe that Brought our Sidestripe to Life: This is the Old Skool</h2>
          <p>The Old Skool was our first footwear design to showcase the famous Vans Sidestripe—although back then, it was just a random doodle drawn by founder Paul Van Doren. Since its debut in 1977, this low-top silhouette has established itself as an icon in the skate, music, and fashion scenes. From 90s street skaters and punks to current hip hop and fashion legends, the Old Skool has consistently been the go-to shoe for creatives who do things their own way.</p>
          <ul>
            <li>Iconic low-top, Sidestripe™ shoe</li>
            <li>Durable suede and canvas uppers</li>
            <li>Lace-up closure</li>
            <li>Reinforced toe caps</li>
            <li>Supportive padded collars</li>
            <li>Signature rubber waffle outsoles</li>
            <li>Classic Old Skool™</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProductDetailsDropdownMenu;
