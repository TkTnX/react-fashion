import React, { useState } from "react";
import s from "./s.module.scss";
import downImg from "./../FullProduct/img/downArrow.svg";

const accorderonList = [
  {
    q: "описание товара",
    a: "Крутая одежда!",
  },
  {
    q: "Таблица размеров",
    a: "45, 65, 66, 666",
  },
  {
    q: "Условия доставки",
    a: "Бесплатная доставка при заказе от 3 000 руб. Вы можете выбрать подходящий для вас способ доставки товара:",
  },
];

export const FullProductAccordeon: React.FC = () => {
  const [openId, setOpenId] = useState(null);

  const openHandler = (id: number) => {
    if (id === openId) setOpenId(null);
    // @ts-ignore
    else setOpenId(id);
  };

  return (
    <ul className={s.accordeon}>
      {accorderonList.map((item, index) => (
        <li key={index} className={s.accordeonItem}>
          <button
            onClick={() => openHandler(index)}
            className={s.accordeonHeader}
          >
            {item.q} <img src={downImg} alt="Open btn" />
          </button>
          <div
            className={`${s.accordeonCollapse} ${
              openId === index ? `${s.open}` : ""
            }`}
          >
            <div className={s.accordeonBody}>{item.a}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};
