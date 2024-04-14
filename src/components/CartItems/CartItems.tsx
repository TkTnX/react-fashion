import React, { useState } from "react";
import s from "./s.module.scss";

import leftArrow from "./img/leftArrow.svg";
import rightArrow from "./img/rightArrow.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { addToCart, deleteItem, minusItem } from "../../redux/Slices/cartSlice";
import { CartOrderModal } from "../CartOrderModal/CartOrderModal";

export const CartItems: React.FC = () => {
  const [openOrder, setOpenOrder] = useState(false);
  const cartItemsSelector = useSelector(
    (state: RootState) => state.cart.cartList
  );
  const totalPriceSelector = useSelector(
    (state: RootState) => state.cart.totalPrice
  );

  const totalCount = cartItemsSelector.reduce(
    (sum, item) => sum + item.count,
    0
  );

  const dispatch = useDispatch();

  const handleDeleteItem = (id: number) => {
    const isConfirm = confirm("Вы уверены, что хотите удалить товар?");
    if (isConfirm) {
      dispatch(deleteItem(id));
    }
  };

  const handleOpenModal = () => setOpenOrder(!openOrder);

  const totalPriceWithSale = totalPriceSelector * 0.02;

  openOrder
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "visible");

  console.log(cartItemsSelector);
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
        {cartItemsSelector.length === 0 ? (
          <h2 className={s.cartEmpty}>
            Корзина пуста! 😫 <br /> Добавьте минимум 1 товар в корзину!
          </h2>
        ) : (
          <tbody className={s.tbody}>
            {cartItemsSelector.map((item) => (
              <tr key={item.id} className={s.tbodyItem}>
                <th>
                  <img className={s.tableImg} src={item.img} alt="img" />
                </th>
                <td className={s.tableColor}>{item.color}</td>
                <td
                  onClick={() => handleDeleteItem(item.id)}
                  className={s.deleteProduct}
                >
                  Удалить товар
                </td>
                <td className={s.tableSize}>44</td>
                <td className={s.tablePrice}>{item.price}</td>
                <td className={s.tableCounter}>
                  <button onClick={() => dispatch(minusItem(item.id))}>
                    <img src={leftArrow} alt="Убрать 1 товар" />
                  </button>
                  <p>{item.count}</p>
                  <button onClick={() => dispatch(addToCart(item))}>
                    <img src={rightArrow} alt="Добавить 1 товар" />
                  </button>
                </td>
                <td className={s.tablePrice}>{item.price * item.count} ₽</td>
              </tr>
            ))}
          </tbody>
        )}
      </table>

      <ul className={s.orderInfo}>
        <li>
          <p>Количество</p>
          <div className={s.line}></div>
          <span>{totalCount}</span>
        </li>
        <li>
          <p>Стоимость</p>
          <div className={s.line}></div>
          <span>
            {cartItemsSelector.length !== 0 ? totalPriceSelector : 0}₽
          </span>
        </li>
        <li>
          <p>Скидка</p>
          <div className={s.line}></div>
          <span className={s.sale}>
            {cartItemsSelector.length !== 0 ? totalPriceWithSale.toFixed(1) : 0}
            ₽
          </span>
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
            {cartItemsSelector.length !== 0
              ? totalPriceSelector - totalPriceWithSale + 500
              : 0}
            ₽
          </b>
        </li>
      </ul>
      {cartItemsSelector.length !== 0 && (
        <button onClick={handleOpenModal} className={s.order}>
          Оформить заказ
        </button>
      )}
      {openOrder && <CartOrderModal handleOpenModal={handleOpenModal} />}
    </div>
  );
};
