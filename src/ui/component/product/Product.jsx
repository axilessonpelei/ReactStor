import React, { useContext, useEffect, useState } from "react";
import "./Product.css";
import { Context } from "../../../core/context/context.jsx";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const { cart, setCart } = useContext(Context);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="product-container">
      {products.length !== 0 &&
        products.map((item, v) => (
          <div key={v} className="product-card">
            <h3 className="product-title">{item.title}</h3>
            <img className="product-image" src={item.image} alt={item.title} />
            <p className="product-price">Цена: {item.price}</p>
            <p className="product-description">{item.description}</p>
            <button className="favorite-button">
              {cart ? "Удалить из корзины" : "Добавить в корзину"}
            </button>
            <div className="rat">
              <span className="products-rating.rate">{item.rating.rate} </span>

              <span className="products-rating.count">
                {" "}
                {item.rating.count}
              </span>
            </div>
            <button> добавить отзыв</button>
            <input />
          </div>
        ))}
    </div>
  );
};
export default ProductCard;
