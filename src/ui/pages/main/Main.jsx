import Header from "../../component/header/Header.jsx";
import ProductCard from "../../component/product/Product.jsx";
import Footer from "../../component/footer/Footer.jsx";
import React, { useEffect, useState } from "react";
import Product from "../../component/product/Product.jsx";
import ProductList from "../../component/ProductList/ProductList.jsx";

export const Main = () => {
  return (
    <div className="App">
      <Header />
      <Product />
      <ProductList />
      <Footer />
    </div>
  );
};
