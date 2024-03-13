import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "../../css/ProductDetails.css";
import Header from "../Header";
import Footer from "../Footer";
import shipping from "../../assets/product-details/truck.svg";
import suitcase from "../../assets/product-details/suitcase-lg.svg";
import ProductDetailsDropdownMenu from "./ProductDetailsDropdown";
import ShareYourStyleDetails from "./ShareYourStyleDetails";
import TheClassics from "../TheClassics";
import Trending from "../Trending";
import fullstar from "../../assets/stars/star-fill (1).svg";
import halfstar from "../../assets/stars/star-half (1).svg";
import Comments from "./Comments";
import Cart from "./Cart";
import Overlay from "./Overlay"; 
import { useDispatch, useSelector } from "react-redux"; 
import { addToCart, updateTotalItems, updateCart } from "../../Actions"; 
import { useMediaQuery } from 'react-responsive';

import "./Overlay.css";

export default function ProductDetails() {
  const [shoe, setShoe] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const productSizesRef = useRef(null);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const cartItems = useSelector(state => state.cart.cartItems);

  useEffect(() => {
    if (id) {
      fetch(`https://1a00c9f9cfdb301b.mokky.dev/sale/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setShoe(data);
        })
        .catch((error) => console.error("Error fetching data: ", error));
    }
  }, [id]);

  useEffect(() => {
    if (isCartVisible && selectedSize === "") {
      productSizesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isCartVisible, selectedSize]);

  const buttons = [];
  for (let i = 0; i < 19; i++) {
    const value = (i * 0.5 + 3.5).toFixed(1);
    buttons.push(
      <button
        key={i}
        onClick={() => {
          setSelectedSize(`B${value} / W${value}`);
        }}
        className={selectedSize === `B${value} / W${value}` ? "selected-size" : ""}
      >
        B{value} / W{value}
      </button>
    );
  }

  const handleAddToCart = () => {
  if (selectedSize !== "") {
    const existingItemIndex = cartItems.findIndex(item => item.id === shoe.id && item.size === selectedSize);

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex] = {
        ...updatedCartItems[existingItemIndex],
        quantity: updatedCartItems[existingItemIndex].quantity + 1
      };
      dispatch(updateCart(updatedCartItems));
    } else {
      dispatch(addToCart({
        id: shoe.id,
        title: shoe.title,
        img: shoe.img,
        size: selectedSize,
        price: shoe.price,
        quantity: 1
      }));
    }
    dispatch(updateTotalItems());
    setIsCartVisible(true);
    document.body.style.overflow = "hidden";
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto"
    });
  } else {
    alert("Please select a size before adding to cart.");
  }
};


  const handleCloseCart = () => {
    setIsCartVisible(false);
    document.body.style.overflow = "";
  };

  return (
    <div className="ProductDetails">
      {isCartVisible && <Overlay onClose={() => setIsCartVisible(false)} darkBackground={true} />} {/* Добавляем Overlay */}
      <Header />
      <p className="small-p product-details-small-p">
        Shop All / Shoes / Old Skool Shoe
      </p>
      <div className="product-details-container">
        <div className="product-details-img">
        <img src={shoe && shoe.img} alt={shoe && shoe.title} className="product-details-pcImage"/>

        {!isMobile && <ShareYourStyleDetails />}
        </div>
        <div className="product-details-info">
          <button className="product-details-sale-button">SALE</button>
          <h1 className="product-title">{shoe ? shoe.title : "Loading..."}</h1>
          <div className="stars">
            <img src={fullstar} alt="full star" />
            <img src={fullstar} alt="full star" />
            <img src={fullstar} alt="full star" />
            <img src={fullstar} alt="full star" />
            <img src={halfstar} alt="half star" />
          </div>
          <div className="prices">
            <span className="old-price">$70.00</span>
            <p className="product-price">${shoe ? shoe.price : "Loading..."}</p>

          </div>
          <img src={shoe && shoe.img} alt={shoe && shoe.title} className="product-details-mobileImg" />
          <div className="size-guide">
            <p className="size-text">Size</p>
            <a href="#" onClick={(e) => { e.preventDefault(); productSizesRef.current.scrollIntoView({ behavior: "smooth" }); }}>Size Guide</a>
          </div>
          <div className="product-sizes" ref={productSizesRef}>{buttons}</div>
          <div className="extras">
            <h1>Extras</h1>
            <div className="extras-flex">
              <img
                src="https://images.vans.com/is/image/Vans/VN0A3HI2_WHT_HERO?$PLP-IMAGE$&hei=489&wid=390&qlt=85"
                alt="Extra"
              />
              <div>
                <p>
                  Would you like to add Water & Stain Shield for only $10.00 ?{" "}
                  <a href="">Details</a>
                </p>
                <form>
                  <input type="checkbox" />
                  <p>Add to Cart</p>
                </form>
              </div>
            </div>
          </div>
          <p className="extras-bottom-p">
            Pay in 4 interest-free payments of $13.74 with Klarna.{" "}
            <a href="#">Details</a>
          </p>
          <div className="bottom-add-to-cart">
            <div className="bottom-add-to-cart-right">
              <button onClick={handleAddToCart}>Add to Cart</button>
              <p>
                <img src={shipping} alt="Shipping icon" />
                Free shipping & returns
              </p>
              <p>
                <img src={suitcase} alt="Suitcase icon" />
                Need it fast?
              </p>
              <p>
                <a href="">Check stores for availability and store pickup
                options</a>
              </p>
            </div>
            <ProductDetailsDropdownMenu />
          </div>
        </div>
      </div>
      <div className="recommended-products">
        <TheClassics title="RECOMMENDED PRODUCTS" />
      </div>
      <Trending title="TRENDING NOW" />
      <Comments />
      <Footer />
      {shoe && isCartVisible && (
        <Cart
          shoe={{
            title: shoe.title,
            img: shoe.img,
            size: selectedSize,
            price: shoe.price,
          }}
          onClose={handleCloseCart}
          isCartVisible={isCartVisible} // Передаем функцию для закрытия корзины
        />
      )}
    </div>
  );
}
