import React from "react";
import s from "./s.module.scss";

const navList = ["НОВИНКИ", "ОДЕЖДА", "ОБУВЬ", "АКСЕССУАРЫ", "ЛЮБИМЫЕ БРЕНДЫ"];

export const Navigation: React.FC = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        {navList.map((item, index) => (
          <li key={index} className={s.item}>
            <a href="#!">{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
