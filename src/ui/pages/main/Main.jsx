import Header from "../../component/header/Header.jsx";
import Footer from "../../component/footer/Footer.jsx";
import React, { useEffect, useState } from "react";
import Product from "../../component/product/Product.jsx";

export const Main = () => {
  return (
    <div className="App">
      <Header />
      <Product />
      <Footer />
    </div>
  );
};
