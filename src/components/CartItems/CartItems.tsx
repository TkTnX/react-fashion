import React from "react";
import s from "./s.module.scss";

import leftArrow from "./img/leftArrow.svg";
import rightArrow from "./img/rightArrow.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const CartItems: React.FC = () => {
  const cartItemsSelector = useSelector(
    (state: RootState) => state.cart.cartList
  );
  const totalPriceSelector = useSelector(
    (state: RootState) => state.cart.totalPrice
  );

  const totalPriceWithSale = totalPriceSelector * 0.02;
  return (
    <div className={s.items}>
      <table className={s.table}>
        <thead className={s.thead}>
          <tr className={s.theadTitles}>
            <th>Фото</th>
            <th>Цвет</th>
            <th>Размер</th>
            <th>Цена</th>
            <th>Количество</th>
            <th>Сумма</th>
          </tr>
        </thead>
        <tbody className={s.tbody}>
          {cartItemsSelector.map((item) => (
            <tr key={item.id} className={s.tbodyItem}>
              <th>
                <img className={s.tableImg} src={item.img} alt="img" />
              </th>
              <td className={s.tableColor}>Белый</td>
              <td className={s.tableSize}>44</td>
              <td className={s.tablePrice}>{item.price}</td>
              <td className={s.tableCounter}>
                <button>
                  <img src={leftArrow} alt="Убрать 1 товар" />
                </button>
                <p>{item.count}</p>
                <button>
                  <img src={rightArrow} alt="Добавить 1 товар" />
                </button>
              </td>
              <td className={s.tablePrice}>{item.price * item.count} ₽</td>
            </tr>
          ))}
        </tbody>
      </table>

      <ul className={s.orderInfo}>
        <li>
          <p>Количество</p>
          <div className={s.line}></div>
          <span>{cartItemsSelector.length}</span>
        </li>
        <li>
          <p>Стоимость</p>
          <div className={s.line}></div>
          <span>{totalPriceSelector}</span>
        </li>
        <li>
          <p>Скидка</p>
          <div className={s.line}></div>
          <span className={s.sale}>{totalPriceWithSale} ₽</span>
        </li>
        <li>
          <p>Доставка</p>
          <div className={s.line}></div>
          <span>500 ₽</span>
        </li>
        <li>
          <b>ИТОГО</b>
          <div className={s.line}></div>
          <b className={s.totalPrice}>
            {totalPriceSelector - totalPriceWithSale} ₽
          </b>
        </li>
      </ul>
    </div>
  );
};
