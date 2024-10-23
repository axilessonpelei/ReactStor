import React, { useContext, useEffect, useState } from "react";
import "./Product.css";
import { Context } from "../../../core/context/context.jsx";

const ProductCard = () => {
  const { cart, products, setProducts, setCart } = useContext(Context);
  let reviews = [];

  // Функция для отображения звезд вместо числового рейтинга
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "star filled" : "star"}>
          ★
        </span>,
      );
    }
    return stars;
  };

  // Функция добавления в корзину
  const addToCart = (product) => {
    setCart((cart) => [...cart, product]);
  };

  // Функция удаления из корзины
  const removeCart = (productId) => {
    setCart((cart) => cart.filter((item) => item.id !== productId));
  };

  //Функция для добавления отзыва
  const review = () => {};
  //функция открытия модального окна

  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((res) => {
      res.json().then((r) => setProducts(r));
    });
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
            <button
              className="cc"
              onClick={() => {
                addToCart(item);
              }}
            >
              {" "}
              Добавить в корзину
            </button>
            <span> </span>
            <button
              className="cc"
              onClick={() => {
                removeCart(item);
              }}
            >
              удалить из корзины{" "}
            </button>
            <div className="rating">
              <span className="rating">{renderStars(item.rating.rate)} </span>
              <span className="products-rating.count">
                {" "}
                {item.rating.count}
              </span>
            </div>
            <button className="dp" onClick={review}>
              {" "}
              добавить отзыв
            </button>
            <input placeholder="ставить отзыв" />
            <button className="dp">просмотр отзывов</button>
          </div>
        ))}
    </div>
  );
};
export default ProductCard;
