import React from "react";
import { Cart } from "../components/Cart/Cart";
import { Link } from "react-router-dom";
export const CartPage: React.FC = () => {
  return (
    <>
      <div className="container">
        <nav className="navMenuLinks">
          <Link to="/">Главная</Link> / <Link to="/catalog">Каталог</Link>
          <span> / Корзина</span>
        </nav>
        <Cart />
      </div>
    </>
  );
};
