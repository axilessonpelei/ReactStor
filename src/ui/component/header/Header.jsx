import React, { useContext, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Context } from "../../../core/context/context.jsx";
const Header = () => {
  const { cart, setCart, products, setProducts } = useContext(Context);
  const sortByPriceAscending = () => {
    const sorted = [...products].sort((a, b) => a.price - b.price);
    setProducts(sorted);
  };

  const sortByPriceDescending = () => {
    const sorted = [...products].sort((a, b) => b.price - a.price);
    setProducts(sorted);
  };

  const sortByAlphabetical = () => {
    const sorted = [...products].sort((a, b) => a.title.localeCompare(b.title));
    setProducts(sorted);
  };
  return (
    <header className="header">
      <div className="text">
        <h1>rtk-shop</h1>
      </div>

      <div className="text">
        <button className="cc" onClick={sortByPriceAscending}>
          Сортировать по возрастанию
        </button>
        <span> </span>
        <button className="cc" onClick={sortByAlphabetical}>
          Сортировать в алфавитном порядке
        </button>
        <span> </span>
        <button className="cc" onClick={sortByPriceDescending}>
          Сортировать по убыванию
        </button>
      </div>
      <Link to="/cart">
        {" "}
        <img
          src="https://i.pinimg.com/736x/c0/87/ab/c087ab6557b73a1a36eea2cc96700101.jpg"
          width="65px"
          height="65px"
        />{" "}
      </Link>
    </header>
  );
};

export default Header;
