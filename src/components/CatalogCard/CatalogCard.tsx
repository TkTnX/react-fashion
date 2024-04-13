import React from "react";
import s from "./s.module.scss";
import { CatalogCardType } from "../Popular/Popular";

import cartImg from "./cart.svg";
import heartImg from "./heart.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/Slices/cartSlice";
import { useAuth } from "../../hooks/useAuth";
export const CatalogCard: React.FC<CatalogCardType> = ({
  price,
  img,
  brand,
  desc,
  sizes,
  id,
}) => {
  const product = { price, img, brand, desc, sizes, id };
  const dispatch = useDispatch();
  const { isAuth } = useAuth();
  const handleAddToCart = () => {
    if (isAuth) {
      dispatch(addToCart(product));
    } else {
      alert("Сначала, ввойдите в аккаунт!");
    }
  };

  return (
    <div className={s.card}>
      <Link to={`/catalog/${id}`}>
        <div className={s.cardImg}>
          <button className={s.fav}>
            <img src={heartImg} alt="Add to fav" />
          </button>
          <img src={img} alt={desc} />
          <div className={s.new}>
            <p>New</p>
          </div>
        </div>
      </Link>
      <div className={s.cardBottom}>
        <div className={s.cardPrice}>
          <b>{price} ₽</b>
          <button onClick={handleAddToCart}>
            <img src={cartImg} alt="в корзину" />
          </button>
        </div>
        <div className={s.cardInfo}>
          <p className={s.brand}>{brand}</p>
          <p className={s.desc}>{desc}</p>
          {sizes !== undefined && (
            <p className={s.sizes}>{sizes.map((size) => `${size} `)}</p>
          )}
        </div>
      </div>
    </div>
  );
};
