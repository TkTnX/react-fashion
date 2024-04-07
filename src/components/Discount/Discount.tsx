import React from "react";
import s from "./s.module.scss";

import vk from "./vk.svg";
import insta from "./insta.svg";
import yt from "./yt.svg";

export const Discount: React.FC = () => {
  return (
    <div className={s.discount}>
      <div className="container">
        <div className={s.wrapper}>
          <h4 className={s.title}>Скидка 10% на подписку</h4>

          <form className={s.form}>
            <input className={s.input} type="email" placeholder="Ваш E-mail" />
            <button className={s.btn}>Подписаться</button>
          </form>

          <ul className={s.socials}>
            <li className={s.social}>
              <a href="#!">
                <img src={vk} alt="vk" />
              </a>
            </li>
            <li className={s.social}>
              <a href="#!">
                <img src={insta} alt="insta" />
              </a>
            </li>
            <li className={s.social}>
              <a href="#!">
                <img src={yt} alt="yt" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
