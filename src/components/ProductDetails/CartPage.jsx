// CartPage.js
import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useSelector, useDispatch } from "react-redux";
import { updateCart } from "../../Actions"; // Импортируем действие updateCart
import "./CartPage.css";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [subtotal, setSubtotal] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflow = "";
    calculateSubtotal();
    return () => {
      document.body.style.overflow = "hidden";
    };
  }, [cartItems]);

  const calculateSubtotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += parseFloat(item.price) * (item.quantity || 1); // Устанавливаем значение по умолчанию для item.quantity
    });
    setSubtotal(total);
  };
  
  const handleQuantityChange = (itemId, type) => {
    const itemIndex = cartItems.findIndex((item) => item.id === itemId);
    if (itemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      if (type === "increase") {
        updatedCartItems[itemIndex].quantity = (updatedCartItems[itemIndex].quantity || 0) + 1;
      } else if (type === "decrease" && updatedCartItems[itemIndex].quantity > 1) {
        updatedCartItems[itemIndex].quantity -= 1;
      }
      dispatch(updateCart(updatedCartItems));
      calculateSubtotal();
    }
  };
  
  const handleRemoveItem = (itemId) => {
    const itemIndex = cartItems.findIndex((item) => item.id === itemId);
    if (itemIndex !== -1) {
      const updatedCartItems = [...cartItems.slice(0, itemIndex), ...cartItems.slice(itemIndex + 1)];
      dispatch(updateCart(updatedCartItems));
      calculateSubtotal();
    }
  };
  

  if (cartItems.length === 0) {
    return (
      <div className="CartPage">
        <Header />
        <div className="upper-cart-page">
          <h1>Cart</h1>
          <p>Your cart is empty</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="CartPage">
      <Header />
      <div className="upper-cart-page">
        <h1>Cart</h1>
        <p>{cartItems.length} items</p>
      </div>
      <div className="all-shoes-cart">
        <div className="shoe-in-a-cart">{cartItems.map((item) => (
          <div key={item.id} className="shoe-cart">
            <p>{item.title}</p>
            <div className="shoe-flex">
              <div>
                <img src={item.img} alt={item.title} />
              </div>
              <div className="shoe-info">
                <div>
                  <p className="small-info">Size: {item.size}</p>
                  <p className="small-info">Quantity: {item.quantity || 1}</p>
                  <div className="add-item">
                    <button type="button" onClick={() => handleQuantityChange(item.id, "increase")}>+</button>
                    <button type="button" onClick={() => handleQuantityChange(item.id, "decrease")}>-</button>


                  </div>
                </div>
                <div className="shoe-cart-right">
                  <p className="small-info">Price: <span>${parseFloat(item.price).toFixed(2)}</span></p>
                  <button onClick={() => handleRemoveItem(item.id)}>Remove item</button>
                </div>
              </div>
            </div>
          </div>
        ))}</div>
        
        <div className="Payment">
          <div className="promocode">
            <h1>Got a Promo Code ?</h1>
          </div>
          <div className="order-summary">
            <h1>Order Summary</h1>
            <div className="shipping">
              <p>Estimated Shipping</p>
              <p>$5.00</p>
            </div>
            <div className="tax">
              <p>Estimated Tax</p>
              <p>$5.00</p>
            </div>
            <div className="tax">
              <p>Order Total</p>
              <p>${(subtotal + 10).toFixed(2)}</p>
            </div>
          </div>
          <div className="checkout-bottom">
            <button className="checkout">Checkout</button>
            <p>OR</p>
            <button className="paypal">
              <img src="https://www.freepnglogos.com/uploads/paypal-logo-png-14.png" alt="Paypal" />
            </button>
            <p>Free shipping for Vans Family or spend $80.</p>
            <button className="checkout join">Join Now or Sign In</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
