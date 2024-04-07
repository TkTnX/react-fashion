import React from "react";
import s from "./s.module.scss";

const newsList = [
  {
    img: "/images/news/01.jpg",
    title: "Совершайте покупки,",
    desc: "Которые сделают мир лучше.",
  },
  {
    img: "/images/news/02.jpg",
    title: "Совершайте покупки,",
    desc: "Которые сделают мир лучше.",
  },
  {
    img: "/images/news/03.jpg",
    title: "Совершайте покупки,",
    desc: "Которые сделают мир лучше.",
  },
];

export const News: React.FC = () => {
  return (
    <section className={s.news}>
      <div className="container">
        <h2 className={`title-2 ${s.title}`}>Модные новости</h2>
        <ul className={s.newsList}>
          {newsList.map((item, index) => (
            <li key={index} className={s.newsItem}>
              <a href="#!">
                <img className={s.newsImg} src={item.img} alt="News" />
                <h4 className={s.newsTitle}>{item.title}</h4>
                <p className={s.newsDesc}>{item.desc}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
