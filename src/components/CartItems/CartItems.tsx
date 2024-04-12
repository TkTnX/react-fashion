import React from "react";
import s from "./s.module.scss";

import leftArrow from "./img/leftArrow.svg";
import rightArrow from "./img/rightArrow.svg";

export const CartItems: React.FC = () => {
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
          <tr className={s.tbodyItem}>
            <th>
              <img
                className={s.tableImg}
                src="/images/catalog/01.jpg"
                alt="img"
              />
            </th>
            <td className={s.tableColor}>Белый</td>
            <td className={s.tableSize}>44</td>
            <td className={s.tablePrice}>3 999 ₽</td>
            <td className={s.tableCounter}>
              <button>
                <img src={leftArrow} alt="Убрать 1 товар" />
              </button>
              <p>1</p>
              <button>
                <img src={rightArrow} alt="Добавить 1 товар" />
              </button>
            </td>
            <td className={s.tablePrice}>3 999 ₽</td>
          </tr>
          <tr className={s.tbodyItem}>
            <th>
              <img
                className={s.tableImg}
                src="/images/catalog/01.jpg"
                alt="img"
              />
            </th>
            <td className={s.tableColor}>Белый</td>
            <td className={s.tableSize}>44</td>
            <td className={s.tablePrice}>3 999 ₽</td>
            <td className={s.tableCounter}>
              <button>
                <img src={leftArrow} alt="Убрать 1 товар" />
              </button>
              <p>1</p>
              <button>
                <img src={rightArrow} alt="Добавить 1 товар" />
              </button>
            </td>
            <td className={s.tablePrice}>3 999 ₽</td>
          </tr>
          <tr className={s.tbodyItem}>
            <th>
              <img
                className={s.tableImg}
                src="/images/catalog/01.jpg"
                alt="img"
              />
            </th>
            <td className={s.tableColor}>Белый</td>
            <td className={s.tableSize}>44</td>
            <td className={s.tablePrice}>3 999 ₽</td>
            <td className={s.tableCounter}>
              <button>
                <img src={leftArrow} alt="Убрать 1 товар" />
              </button>
              <p>1</p>
              <button>
                <img src={rightArrow} alt="Добавить 1 товар" />
              </button>
            </td>
            <td className={s.tablePrice}>3 999 ₽</td>
          </tr>
        </tbody>
      </table>

      <ul className={s.orderInfo}>
        <li>
          <p>Количество</p>
          <div className={s.line}></div>
          <span>7</span>
        </li>
        <li>
          <p>Стоимость</p>
          <div className={s.line}></div>
          <span>10 500 ₽</span>
        </li>
        <li>
          <p>Скидка</p>
          <div className={s.line}></div>
          <span className={s.sale}>200 ₽</span>
        </li>
        <li>
          <p>Доставка</p>
          <div className={s.line}></div>
          <span>500 ₽</span>
        </li>
        <li>
          <b>ИТОГО</b>
          <div className={s.line}></div>
          <b className={s.totalPrice}>27 500 ₽</b>
        </li>
      </ul>
    </div>
  );
};
