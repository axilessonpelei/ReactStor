import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="text">
        <h1>rtk-shop</h1>
      </div>

      <div className="text">
        <button className="cc">Сортировать по возрастанию</button>
        <button className="cc">Сортировать по убыванию</button>
        <button className="cc">Сортировать в алфавитном порядке</button>
      </div>
      <Link to={"/cart"}>
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
