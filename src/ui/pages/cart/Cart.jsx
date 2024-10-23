import React, { useContext } from "react";
import "./Cart.css";
import { Context } from "../../../core/context/context.jsx";
import Header from "../../component/header/Header.jsx";
import Footer from "../../component/footer/Footer.jsx";

export const Cart = () => {
  const { cart, setCart } = useContext(Context);

  return (
    <div className="product-container">
      {cart.length !== 0 &&
        cart.map((item, v) => (
          <div key={v} className="product-card">
            <h3 className="product-title">{item.title}</h3>
            <img className="product-image" src={item.image} alt={item.title} />
            <p className="product-price">Цена: {item.price}</p>
            <p className="product-description">{item.description}</p>
          </div>
        ))}
    </div>
  );
};
