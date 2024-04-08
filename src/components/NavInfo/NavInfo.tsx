import React from "react";
import s from "./s.module.scss";

import hudiImg from "./hudi.jpg";
import vetrovkiImg from "./vetrovki.jpg";
import { MdOutlineClear } from "react-icons/md";

type PropsType = {
  title: string;
  setIsHover: (isHover: boolean) => void;
};

export const NavInfo: React.FC<PropsType> = (props) => {
  return (
    <div className={s.navinfo}>
      <div className="container">
        <div className={s.wrapper}>
          <button onClick={() => props.setIsHover(false)} className={s.close}>
            <MdOutlineClear />
          </button>
          <ul className={s.list}>
            <li className={`${s.item} ${s.itemTitle}`}>{props.title}</li>
            <li className={s.item}>
              <a href="#!" className={s.link}>
                Просмотреть все
              </a>
            </li>
            <li className={s.item}>
              <a href="#!" className={s.link}>
                Бестселлеры
              </a>
            </li>
            <li className={s.item}>
              <a href="#!" className={s.link}>
                Новое в разделе “Одежда”
              </a>
            </li>
            <li className={s.item}>
              <a href="#!" className={s.link}>
                Пуховики и куртки
              </a>
            </li>
            <li className={s.item}>
              <a href="#!" className={s.link}>
                Худи и Свитшоты
              </a>
            </li>
            <li className={s.item}>
              <a href="#!" className={s.link}>
                Джинсы
              </a>
            </li>
            <li className={s.item}>
              <a href="#!" className={s.link}>
                Футболки
              </a>
            </li>
            <li className={s.item}>
              <a href="#!" className={s.link}>
                Свитера
              </a>
            </li>
            <li className={s.item}>
              <a href="#!" className={s.link}>
                Джоггеры
              </a>
            </li>
          </ul>
          <ul className={s.list}>
            <li className={`${s.item} ${s.itemTitle}`}>Новинки брендов</li>
            <li className={s.item}>
              <a href="#!" className={s.link}>
                Adidas
              </a>
            </li>
            <li className={s.item}>
              <a href="#!" className={s.link}>
                New Balance
              </a>
            </li>
            <li className={s.item}>
              <a href="#!" className={s.link}>
                Bape
              </a>
            </li>
            <li className={s.item}>
              <a href="#!" className={s.link}>
                Nike
              </a>
            </li>
            <li className={s.item}>
              <a href="#!" className={s.link}>
                Carhartt
              </a>
            </li>
            <li className={s.item}>
              <a href="#!" className={s.link}>
                Vlone
              </a>
            </li>
            <li className={s.item}>
              <a href="#!" className={s.link}>
                The North Face
              </a>
            </li>
            <li className={s.item}>
              <a href="#!" className={s.link}>
                Gap
              </a>
            </li>
            <li className={s.item}>
              <a href="#!" className={s.link}>
                Vanse
              </a>
            </li>
          </ul>
          <div className={s.topFav}>
            <div className={s.itemTitle}>ТОП ИЗБРАННЫХ</div>
            <ul className={s.top}>
              <li className={s.topItem}>
                <a href="#!">
                  <img src="/images/festival/01.png" alt="img" />
                  Футболки
                </a>
              </li>
              <li className={s.topItem}>
                <a href="#!">
                  <img src="/images/festival/02.png" alt="img" />
                  Худи
                </a>
              </li>
              <li className={s.topItem}>
                <a href="#!">
                  <img src="/images/festival/03.png" alt="img" />
                  Свитшоты
                </a>
              </li>
              <li className={s.topItem}>
                <a href="#!">
                  <img src="/images/festival/04.png" alt="img" />
                  Лонгсливы
                </a>
              </li>
            </ul>
          </div>
          <div className={s.promo}>
            <a href="#!">
              <img src={hudiImg} alt="Худи и толстовки" />
            </a>
            <a href="#!">
              <img src={vetrovkiImg} alt="Ветровки" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
