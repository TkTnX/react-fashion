import React from "react";
import s from "./s.module.scss";
import { Link, useParams } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";

import leftImg from "./img/leftArrow.svg";
import rightImg from "./img/rightArrow.svg";
import { FullProductAccordeon } from "../FullProductAccordeon/FullProductAccordeon";
type ProductType = {
  img: string;
  desc: string;
  price: number;
  sizes?: string[];
};

export const FullProduct: React.FC = () => {
  const { id } = useParams();
  const url = `https://35264782283560cf.mokky.dev/catalogItems/${id}`;

  const { data, isLoading, error } = useFetchData(url);
  const productData = data as unknown as ProductType;
  const { img, desc, price, sizes } = productData;
  if (isLoading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>Ошибка!</p>;
  }
  return (
    <div className="container">
      <nav className={s.nav}>
        <span>
          <Link to="/">Главная</Link> / <Link to="/catalog">Каталог </Link>
        </span>
        / {desc}
      </nav>
      <div className={s.wrapper}>
        <img className={s.img} src={img} alt={desc} />

        <div className={s.info}>
          <h3 className={s.desc}>{desc}</h3>
          <p className={s.articul}>
            <span>АРТикул</span> {id}
          </p>
          <ul className={s.promos}>
            <li className={s.promoSale}>Sale - 20%</li>
            <li className={s.promoNew}>New</li>
          </ul>
          <div className={s.price}>
            <p>цена</p> <span>{price}</span>
          </div>
          {sizes && (
            <select defaultValue="none" className={s.sizes}>
              <option value="none" hidden disabled>
                Выбрать размер
              </option>
              {sizes.map((size: string, index: number) => (
                <option key={index} value={size}>
                  {size}
                </option>
              ))}
            </select>
          )}
          <div className={s.addToCart}>
            <button className={s.addToCartBtn}>В КОРЗИНУ</button>
            <div className={s.counter}>
              <button>
                <img src={leftImg} alt="Убрать элемент" />
              </button>
              <p>1</p>
              <button>
                <img src={rightImg} alt="Добавить элемент" />
              </button>
            </div>
          </div>
          <FullProductAccordeon />
        </div>
      </div>
    </div>
  );
};
