import React, { useContext, useState } from "react";
import ProductCard from "../product/Product.jsx";
import "./ProductList.css";
import { Context } from "../../../core/context/context.jsx";

const ProductList = () => {
  //Поменять useState на context.
  const { sortedProducts, setSortedProducts } = useContext(Context);

  const sortByPriceAscending = () => {
    const sorted = [...sortedProducts].sort((a, b) => a.price - b.price);
    setSortedProducts(sorted);
  };

  const sortByPriceDescending = () => {
    const sorted = [...sortedProducts].sort((a, b) => b.price - a.price);
    setSortedProducts(sorted);
  };

  const sortByAlphabetical = () => {
    const sorted = [...sortedProducts].sort((a, b) =>
      a.title.localeCompare(b.title),
    );
    setSortedProducts(sorted);
  };

  return (
    <div className="product-list">
      <div className="sorting-buttons">
        <button onClick={sortByPriceAscending}>По возрастанию цены</button>
        <button onClick={sortByPriceDescending}>По убыванию цены</button>
        <button onClick={sortByAlphabetical}>По алфавиту</button>
      </div>

      <div className="products-container">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
