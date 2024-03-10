import React from "react";
import { Link } from 'react-router-dom';
import logo from "../assets/Vans-Logo-1966.jpg";


export default function BurgerMenu ( { toggleMenu }) {
    return (
            <div className="burger-menu">
              <div>
              <Link to="/"><img src={logo} className="main-header-logo-mobile burger-logo" alt="Vans Logo" /></Link>
              <p onClick = {toggleMenu}>X</p>
              </div>
              <div>
                <ul className="burger-menu-list">
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
              
            </div>
    )
}