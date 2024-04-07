import React from "react";
import s from "./s.module.scss";

import mastercardImg from "./mastercard.svg";
import visaImg from "./visa.svg";
import mirImg from "./mir.svg";

export const Footer: React.FC = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.footer__wrapper}>
          <nav className={s.nav}>
            <ul className={s.footer__list}>
              <li className={`${s.footer__item} ${s.title}`}>Помощь</li>
              <li className={s.footer__item}>
                <a href="#!">Мой аккаунт</a>
              </li>
              <li className={s.footer__item}>
                <a href="#!">Где мой магазин</a>
              </li>
              <li className={s.footer__item}>
                <a href="#!">Доставка и Оплата</a>
              </li>
              <li className={s.footer__item}>
                <a href="#!">правила возврата</a>
              </li>
              <li className={s.footer__item}>
                <a href="#!">найти магазин</a>
              </li>
              <li className={s.footer__item}>
                <a href="#!">подобрать размер</a>
              </li>
            </ul>
            <ul className={s.footer__list}>
              <li className={`${s.footer__item} ${s.title}`}>Каталог</li>
              <li className={s.footer__item}>
                <a href="#!">новинки</a>
              </li>
              <li className={s.footer__item}>
                <a href="#!">одежда</a>
              </li>
              <li className={s.footer__item}>
                <a href="#!">Обувь</a>
              </li>
              <li className={s.footer__item}>
                <a href="#!">аксессуары</a>
              </li>
              <li className={s.footer__item}>
                <a href="#!">Любимые бренды</a>
              </li>
              <li className={`${s.footer__item} ${s.sale}`}>
                <a href="#!">SALE%</a>
              </li>
            </ul>
            <ul className={s.footer__list}>
              <li className={`${s.footer__item} ${s.title}`}>
                <a href="#!">Компания</a>
              </li>
              <li className={s.footer__item}>
                <a href="#!">О нас</a>
              </li>
              <li className={s.footer__item}>
                <a href="#!">Философия бренда</a>
              </li>
              <li className={s.footer__item}>
                <a href="#!">Блог</a>
              </li>
              <li className={s.footer__item}>
                <a href="#!">контакты</a>
              </li>
              <li className={s.footer__item}>
                <a href="#!">Faq</a>
              </li>
            </ul>
          </nav>
          <div className={s.payment}>
            <img src={visaImg} alt="visa" />
            <img src={mastercardImg} alt="matercard" />
            <img src={mirImg} alt="mir" />
          </div>
          <div className={s.copyright}>
            <p>
              © Copyright 2024 very neat. All Rights reserved. Условия
              пользования сайтом
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
