// Cart.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../../Actions";
import "./Cart.css"
import { Link } from "react-router-dom";

export default function Cart({ onClose }) {
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalItems = useSelector(state => state.cart.totalItems);
  const dispatch = useDispatch();

  return (
    <div className="Cart">



<div><div className="cart-top">
        <div>
          <button onClick={onClose}>X</button>
          <h1>Cart</h1>
        </div>
        <div>
          <p className="total-items">{totalItems} items | <span>total price</span></p>

        </div> 
      </div>
      <p className="cart-mid firstmid">Congratulations, you qualify for free shipping!</p>
      {cartItems.map((item) => (
        <div key={item.id} className="shoe-in-cart">
          <p className="cart-mid">{item.title}</p>
          <div>
            <div>
              <img src={item.img} alt={item.title} />
            </div>
            <div>
              <div>
                <p className="small-info">Size : {item.size}</p>
                <p className="small-info">Price : <span className="old-price">$70.00 </span> <span className="small-info-price"> ${item.price}</span> </p>
                <p className="small-info">Qty : {item.quantity}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
</div>
      


      <div className="cart-bottom">
        <div>
          <button>Checkout</button>
          <button><Link to="/cartpage">View Cart</Link></button>
        </div>
        <p className="cart-mid total-items">In Store Pickup Available in Cart</p>
      </div>



    </div>


  );
}
