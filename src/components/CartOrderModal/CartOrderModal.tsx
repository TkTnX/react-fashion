import React from "react";
import s from "./s.module.scss";

import appleImg from "./img/apple.svg";
import googleImg from "./img/google.svg";
import mastercardImg from "./img/mastercard.svg";
import mirImg from "./img/mir.svg";
import visaImg from "./img/visa.svg";
import { IoClose } from "react-icons/io5";

type CartOpenModalProps = {
    handleOpenModal: () => void
}

export const CartOrderModal: React.FC<CartOpenModalProps> = ({ handleOpenModal }) => {
  return (
    <div className="backdrop">
      <div className={s.modal}>
        <button onClick={handleOpenModal} className={s.closeBtn}>
          <IoClose />
        </button>
        <h2 className={`title-2 ${s.title}`}>Оформить заказ</h2>
        <p className={s.desc}>
          Мы обязательно свяжемся с Вами для <br /> уточнения деталей заказа.
        </p>
        <button className={s.btn}>Оформить заказ</button>

        <div className={s.checkbox}>
          <input type="checkbox" />
          <p>
            Согласен с условиями Правил <br /> пользования и Правилами <br />
            возврата
          </p>
        </div>
        <ul className={s.payments}>
          <li className={s.payment}>
            <img src={appleImg} alt="appleImg" />
          </li>
          <li className={s.payment}>
            <img src={googleImg} alt="googleImg" />
          </li>
          <li className={s.payment}>
            <img src={mastercardImg} alt="mastercardImg" />
          </li>
          <li className={s.payment}>
            <img src={mirImg} alt="mirImg" />
          </li>
          <li className={s.payment}>
            <img src={visaImg} alt="visaImg" />
          </li>
        </ul>
      </div>
    </div>
  );
};
