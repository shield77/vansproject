import React from "react";
import "../css/Footer.css";
import facebook from "../assets/social-medias/facebook.svg";
import insta from "../assets/social-medias/instagram.svg";
import twitter from "../assets/social-medias/twitter.svg";
import pinterest from "../assets/social-medias/pinterest.svg";
import { useState } from "react";
import { useMediaQuery } from "@material-ui/core";

export default function Footer() {
    const isMobile = useMediaQuery("(max-width: 767px)");
    const [dropdownStates, setDropdownStates] = useState({
        shop: false,
        sports: false,
        support: false,
        company: false,
        contact: false,
    });

    const toggleDropdown = (dropdownName) => {
        setDropdownStates({
            ...dropdownStates,
            [dropdownName]: !dropdownStates[dropdownName],
        });
    };

    return (
        <div className="Footer">
            {isMobile ? (
                <div className="dropdowns">
                    <div className="footer-dropdown">
                        <h2
                            className="footer-category"
                            onClick={() => toggleDropdown("shop")}
                        >
                            Shop
                        </h2>
                        {dropdownStates.shop && (
                            <ul>
                                <li>Mens</li>
                                <li>Womens</li>
                                <li>Kids</li>
                                <li>Classics</li>
                                <li>Promotions</li>
                                <li>Gifts</li>
                            </ul>
                        )}
                    </div>
                    <div className="footer-dropdown">
                        <h2
                            className="footer-category"
                            onClick={() => toggleDropdown("sports")}
                        >
                            Sports
                        </h2>
                        {dropdownStates.sports && (
                            <ul>
                                <li>BMX</li>
                                <li>Skateboarding</li>
                                <li>Snow</li>
                                <li>Surf</li>
                            </ul>
                        )}
                    </div>
                    <div className="footer-dropdown">
                        <h2
                            className="footer-category"
                            onClick={() => toggleDropdown("support")}
                        >
                            Support
                        </h2>
                        {dropdownStates.support && (
                            <ul>
                                <li>FAQ</li>
                                <li>Order And Return Status</li>
                                <li>Returns</li>
                                <li>Ways To Shop Vans</li>
                                <li>Store Locator</li>
                                <li>Missing Points?</li>
                                <li>Your Privacy Choices</li>
                                <li>Accessibility</li>
                            </ul>
                        )}
                    </div>
                    <div className="footer-dropdown">
                        <h2
                            className="footer-category"
                            onClick={() => toggleDropdown("company")}
                        >
                            Company
                        </h2>
                        {dropdownStates.company && (
                            <ul>
                                <li>Terms Of Use</li>
                                <li>Privacy</li>
                                <li>Careers</li>
                                <li>About</li>
                                <li>CA Supply Chains Act</li>
                                <li>Sustainability Hub</li>
                                <li>Checkerboard Fund</li>
                                <li>Affiliate Program</li>
                                <li>Unsolicited Materials</li>
                            </ul>
                        )}
                    </div>
                    <div className="footer-dropdown">
                        <h2
                            className="footer-category"
                            onClick={() => toggleDropdown("contact")}
                        >
                            Contact
                        </h2>
                        {dropdownStates.contact && (
                            <ul>
                                <li className="li-important">Email</li>
                                <li>Contact Us</li>
                                <li className="li-important">Address:</li>
                                <li>1588 South Coast Drive Costa Mesa, CA 92626</li>
                                <li className="li-important">Hours</li>
                                <li>Monday - Friday: 8:30am - 5:00pm PT</li>
                            </ul>
                        )}
                    </div>
                </div>
            ) : (
                <div className="upper-footer">
                    <ul className="footer-column">
                        <li className="footer-category">Shop</li>
                        <li>Mens</li>
                        <li>Womens</li>
                        <li>Kids</li>
                        <li>Classics</li>
                        <li>Promotions</li>
                        <li>Gifts</li>
                    </ul>
                    <ul className="footer-column">
                        <li className="footer-category">Sports</li>
                        <li>BMX</li>
                        <li>Skateboarding</li>
                        <li>Snow</li>
                        <li>Surf</li>
                    </ul>
                    <ul className="footer-column">
                        <li className="footer-category">Support</li>
                        <li>FAQ</li>
                        <li>Order And Return Status</li>
                        <li>Returns</li>
                        <li>Ways To Shop Vans</li>
                        <li>Store Locator</li>
                        <li>Missing Points?</li>
                        <li>Your Privacy Choices</li>
                        <li>Accessibility</li>
                    </ul>
                    <ul className="footer-column">
                        <li className="footer-category">Company</li>
                        <li>Terms Of Use</li>
                        <li>Privacy</li>
                        <li>Careers</li>
                        <li>About</li>
                        <li>CA Supply Chains Act</li>
                        <li>Sustainability Hub</li>
                        <li>Checkerboard Fund</li>
                        <li>Affiliate Program</li>
                        <li>Unsolicited Materials</li>
                    </ul>
                    <ul className="footer-column">
                        <li className="footer-category">Contact</li>
                        <li className="li-important">Email</li>
                        <li>Contact Us</li>
                        <li className="li-important">Address:</li>
                        <li>1588 South Coast Drive Costa Mesa, CA 92626</li>
                        <li className="li-important">Hours</li>
                        <li>Monday - Friday: 8:30am - 5:00pm PT</li>
                    </ul>
                </div>
            )}
            <div className="lower-footer-main">

                <div className="lower-footer">

                    <div className="subscribe-to-news">
                        <h1>Subscribe</h1>
                        <p className="product">
                            Receive product news and updates in your inbox.
                        </p>
                        <input placeholder="Email Adress" required></input>
                        <form>
                            <input type="checkbox"></input>
                            <p className="terms">
                                I agree to the <a href="#">Privacy Policy</a> and{" "}
                                <a href="#">Terms of Conditions.</a>
                            </p>
                        </form>
                        <button className="send">Send</button>
                    </div>


                    <div className="store-locator">
                        <h1 className="store-locator-h1">Store Locator</h1>
                        <p>Find a Vans store near you.</p>
                        <button className="store-locator-button">Find a Store</button>
                    </div>


                    <div className="follow-vans">
                        <h1>Follow Vans</h1>
                        <div className="social">
                            <img src={pinterest} alt="Pinterest"></img>
                            <img src={facebook} alt="Facebook"></img>
                            <img src={twitter} alt="Twitter"></img>
                            <img src={insta} alt="Instagram"></img>
                        </div>
                    </div>

                </div>

                <div className="last-footer">
                    <p className="story">
                        © Vans, <a href="#">A VF CompanyModern Slavery Statement</a>{" "}
                    </p>
                    <select>
                        <option>USA</option>
                        <option>UK</option>
                        <option>OCEANIA</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
