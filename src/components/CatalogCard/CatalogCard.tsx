import React from "react";
import s from "./s.module.scss";
import { CatalogCardType } from "../Popular/Popular";

import cartImg from "./cart.svg";
import heartImg from "./heart.svg";

export const CatalogCard: React.FC<CatalogCardType> = ({
  price,
  img,
  brand,
  desc,
  sizes,
}) => {
  return (
    <div className={s.card}>
      <div className={s.cardImg}>
        <button className={s.fav}>
          <img src={heartImg} alt="Add to fav" />
        </button>
        <img src={img} alt={desc} />
        <div className={s.new}>
          <p>New</p>
        </div>
      </div>
      <div className={s.cardBottom}>
        <div className={s.cardPrice}>
          <b>{price} ₽</b>
          <button>
            <img src={cartImg} alt="в корзину" />
          </button>
        </div>
        <div className={s.cardInfo}>
          <p className={s.brand}>{brand}</p>
          <p className={s.desc}>{desc}</p>
          {sizes !== undefined ? (
            <p className={s.sizes}>{sizes.map((size) => `${size} `)}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
};
