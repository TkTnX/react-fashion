import React, { useState } from "react";
import s from "./s.module.scss";
import { NavInfo } from "../NavInfo/NavInfo";

const navList = ["НОВИНКИ", "ОДЕЖДА", "ОБУВЬ", "АКСЕССУАРЫ", "ЛЮБИМЫЕ БРЕНДЫ"];

export const Navigation: React.FC = () => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [activeNav, setActiveNav] = useState<number>(0);
  const handleMouseOver = (index: number) => {
    setIsHover(true);
    setActiveNav(index);
  };

  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        {navList.map((item, index) => (
          <li
            onMouseOver={() => handleMouseOver(index)}
            key={index}
            className={s.item}
          >
            <a href="#!">{item}</a>
          </li>
        ))}
      </ul>
      {isHover && (
        <NavInfo setIsHover={setIsHover} title={navList[activeNav]} />
      )}
    </nav>
  );
};
