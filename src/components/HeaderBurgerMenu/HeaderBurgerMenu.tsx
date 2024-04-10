import React from "react";
import s from "./s.module.scss";
import locationImg from "./../Header/images/location.svg";

export const HeaderBurgerMenu: React.FC = () => {
  return (
    <div className={s.burgerMenu}>
      <button className={s.location}>
        <img src={locationImg} alt="Location" />
        <p className={s.city}>МОСКВА</p>
      </button>

      <div className={s.center}>
        <nav className={s.nav}>
          <ul className={s.nav__list}>
            <li className={s.nav__item}>
              <a href="#!" className={s.nav__sale}>
                SALE
              </a>
            </li>
            <li className={`${s.nav__item} ${s.active}`}>
              <button className={s.nav__btn}>ЖЕНЩИНАМ</button>
            </li>
            <li className={s.nav__item}>
              <button className={s.nav__btn}>МУЖЧИНАМ</button>
            </li>
            <li className={s.nav__item}>
              <button className={s.nav__btn}>ДЕТЯМ</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
