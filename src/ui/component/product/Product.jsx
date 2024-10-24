import React, { useContext, useEffect, useState } from "react";
import "./Product.css";
import { Context } from "../../../core/context/context.jsx";

const ProductCard = () => {
  const { cart, products, setProducts, setCart } = useContext(Context);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // Продукт, выбранный для показа отзывов
  const [reviews, setReviews] = useState([]); // Хранение отзывов
  const [newReview, setNewReview] = useState(""); // Новый отзыв

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
  // Функция открытия модального окна и отображения отзывов
  const openModal = (product) => {
    setSelectedProduct(product);
    setReviews(product.reviews || []); // Берем отзывы из продукта (если они есть)
    setIsModalOpen(true);
  };

  // Функция закрытия модального окна
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Функция для добавления отзыва
  const handleAddReview = () => {
    if (newReview.trim() !== "") {
      const updatedReviews = [...reviews, newReview];
      setReviews(updatedReviews);

      // Обновляем продукт с новыми отзывами
      setProducts((prevProducts) =>
        prevProducts.map((item) =>
          item.id === selectedProduct.id
            ? { ...item, reviews: updatedReviews }
            : item,
        ),
      );

      setNewReview(""); // Очищаем поле ввода
    }
  };

  useEffect(() => {
    async () => {
      const products = await getData("https://fakestoreapi.com/products/");
      setProduct(products);
    };
  });

  return (
    <div className="product-container">
      {products.length !== 0 &&
        products.map((item, v) => (
          <div key={v} className="product-card">
            <h3 className="product-title">{item.title}</h3>
            <img className="product-image" src={item.image} alt={item.title} />
            <p className="product-price">Цена: {item.price}</p>
            <p className="product-description">{item.description}</p>
            <button className="cc" onClick={() => addToCart(item)}>
              Добавить в корзину
            </button>
            <button className="cc" onClick={() => removeCart(item.id)}>
              Удалить из корзины
            </button>
            <div className="rating">
              <span className="rating">{renderStars(item.rating.rate)} </span>
              <span className="products-rating.count">{item.rating.count}</span>
            </div>
            <button className="dp" onClick={() => openModal(item)}>
              Посмотреть отзывы
            </button>
          </div>
        ))}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Отзывы для {selectedProduct.title}</h3>
            <div className="reviews-list">
              {reviews.length > 0 ? (
                reviews.map((review, index) => <p key={index}>{review}</p>)
              ) : (
                <p>Отзывов пока нет</p>
              )}
            </div>
            <input
              type="text"
              placeholder="Оставить отзыв"
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
            />
            <button onClick={handleAddReview} className="dp">
              Добавить отзыв
            </button>
            <button onClick={closeModal} className="dp">
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
