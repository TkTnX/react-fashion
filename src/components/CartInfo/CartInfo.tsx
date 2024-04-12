import React from "react";
import s from "./s.module.scss"

import carImg from "./img/Car.svg";
import pinImg from "./img/MapPinLine.svg";
import packageImg from "./img/Package.svg";

export const CartInfo: React.FC = () => {
  return (
    <div className={s.info}>
      <h2 className={`${s.title} title-2`}>Информация о клиенте</h2>
      <form className={s.form}>
        <label className={s.label}>
          <p className={s.labelTitle}>
            ВАШЕ ИМЯ <span>*</span>
          </p>
          <p className={s.formSubtitle}>Имя получателя заказа</p>
          <input
            required
            className="formInput"
            type="text"
            placeholder="Ваше имя"
          />
        </label>
        <label className={s.label}>
          <p className={s.labelTitle}>
            E-mail <span>*</span>
          </p>
          <p className={s.formSubtitle}>
            Для отправки деталей заказа, статуса производства и доставки
          </p>
          <input
            required
            className="formInput"
            type="email"
            placeholder="Введите e-mail"
          />
        </label>
        <label className={s.label}>
          <p className={s.labelTitle}>
            Телефон <span>*</span>
          </p>
          <p className={s.formSubtitle}>
            Чтобы мы могли связаться для уточнения деталей доставки или
            заказанного товара.
          </p>
          <input
            required
            className="formInput"
            type="text"
            placeholder="Введите телефон"
          />
        </label>
      </form>
      <h2 className={`${s.deliveryTitle} title-2`}>Информация о доставке</h2>
      <p className={s.subtitle}>
        Бесплатная доставка при заказе от 3 000 руб. Вы можете выбрать
        подходящий для вас способ доставки товара:
      </p>
      <ul className={s.deliveryInfo}>
        <li>
          <img src={carImg} alt="car" />
          <p className={s.deliveryText}>
            Курьерская <br /> доставка. <br /> Срок – от 1 дня.
          </p>
        </li>
        <li>
          <img src={packageImg} alt="package" />
          <p className={s.deliveryText}>
            Пункты выдачи заказов и <br /> постаматы. <br /> Срок – от 1 дня.
          </p>
        </li>
        <li>
          <img src={pinImg} alt="pin" />
          <p className={s.deliveryText}>
            Самовывозом из магазина. <br /> Срок – от 1 дня.
          </p>
        </li>
      </ul>
    </div>
  );
};
