import React, { useState } from "react";
import s from "./s.module.scss";
import { NavInfo } from "../NavInfo/NavInfo";

const navList = ["НОВИНКИ", "ОДЕЖДА", "ОБУВЬ", "АКСЕССУАРЫ", "ЛЮБИМЫЕ БРЕНДЫ"];

export const Navigation: React.FC = () => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [activeNav, setActiveNav] = useState<number>(0);
  const handleMouseEnter = (index: number) => {
    setIsHover(true);
    setActiveNav(index);
  };

  const handleMouseOut = () => {
    setIsHover(false);
  };

  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        {navList.map((item, index) => (
          <div
            key={index}
            onMouseOver={() => handleMouseEnter(index)}
            className={s.wrapper}
          >
            <li key={index} className={s.item}>
              <a href="#!">{item}</a>
            </li>
            <div onMouseOut={handleMouseOut}>
              {isHover && (
                <NavInfo setIsHover={setIsHover} title={navList[activeNav]} />
              )}
            </div>
          </div>
        ))}
      </ul>
    </nav>
  );
};
