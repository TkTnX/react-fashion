import React from "react";
import s from "./s.module.scss";

const festivalList = [
  {
    title: "футболки",
    img: "01",
  },
  {
    title: "худи",
    img: "02",
  },
  {
    title: "свитшоты",
    img: "03",
  },
  {
    title: "лонгсливы",
    img: "04",
  },
  {
    title: "рубашки",
    img: "05",
  },
  {
    title: "свитера",
    img: "06",
  },
  {
    title: "джинсы",
    img: "07",
  },
  {
    title: "штаны",
    img: "08",
  },
  {
    title: "спотривные штаны",
    img: "09",
  },
];

export const Festival: React.FC = () => {
  return (
    <div className="container-right">
      <ul className={s.festival}>
        {festivalList.map((item) => (
          <li key={item.title} className={s.item}>
            <a className={s.link} href="#!">
              <img
                className={s.itemImg}
                src={`/images/festival/${item.img}.png`}
                alt={item.title}
              />
              <h6 className={s.itemTitle}>{item.title}</h6>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
