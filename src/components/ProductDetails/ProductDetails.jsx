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
import Overlay from "./Overlay"; // Импортируем компонент Overlay
import { useDispatch } from "react-redux";
import { addToCart, updateTotalItems } from "../../Actions";

import "./Overlay.css"; // Импортируем стили для Overlay

export default function ProductDetails() {
  const [shoe, setShoe] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isCartVisible, setIsCartVisible] = useState(false); // Состояние для отображения корзины
  const [selectedSize, setSelectedSize] = useState(""); // Состояние для выбранного размера
  const productSizesRef = useRef(null); // Ссылка на элемент с размерами

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
      dispatch(addToCart({
        title: shoe.title,
        img: shoe.img,
        size: selectedSize,
        price: shoe.price
      }));
      dispatch(updateTotalItems()); // Обновляем общее количество товаров
      setIsCartVisible(true); // Показываем корзину при добавлении товара
      document.body.style.overflow = "hidden"; // Остановка скроллинга
      window.scrollTo({
        top: 0,
        behavior: "smooth" // Добавляем плавный эффект прокрутки
      });
    } else {
      alert("Please select a size before adding to cart."); // Сообщение об ошибке
    }
  };

  const handleCloseCart = () => {
    setIsCartVisible(false); // Скрываем корзину при нажатии на кнопку X
    document.body.style.overflow = ""; // Возобновление скроллинга
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
        <img src={shoe && shoe.img} alt={shoe && shoe.title} />

          <ShareYourStyleDetails />
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
      {/* Компонент Cart */}
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
