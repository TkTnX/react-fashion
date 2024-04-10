import React from "react";
import s from "./s.module.scss";

import mastercardImg from "./mastercard.svg";
import visaImg from "./visa.svg";
import mirImg from "./mir.svg";

const helpList = [
  "Мой аккаунт",
  "Где мой магазин",
  "Доставка и Оплата",
  "правила возврата",
  "найти магазин",
  "подобрать размер",
];

const catalogList = [
  "новинки",
  "одежда",
  "Обувь",
  "аксессуары",
  "Любимые бренды",
];

const companyList = ["О нас", "Философия бренда", "Блог", "контакты", "Faq"];

export const Footer: React.FC = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.footer__wrapper}>
          <nav className={s.nav}>
            <ul className={s.footer__list}>
              <li className={`${s.footer__item} ${s.title}`}>Помощь</li>
              {helpList.map((item, index) => (
                <li key={index} className={s.footer__item}>
                  <a href="#!">{item}</a>
                </li>
              ))}
            </ul>
            <ul className={s.footer__list}>
              <li className={`${s.footer__item} ${s.title}`}>Каталог</li>
              {catalogList.map((item, index) => (
                <li key={index} className={s.footer__item}>
                  <a href="#!">{item}</a>
                </li>
              ))}
              <li className={`${s.footer__item} ${s.sale}`}>
                <a href="#!">SALE%</a>
              </li>
            </ul>
            <ul className={s.footer__list}>
              <li className={`${s.footer__item} ${s.title}`}>Компания</li>
              {companyList.map((item, index) => (
                <li key={index} className={s.footer__item}>
                  <a href="#!">{item}</a>
                </li>
              ))}
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
