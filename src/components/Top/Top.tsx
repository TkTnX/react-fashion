import React from "react";
import s from "./s.module.scss";

import img01 from "./images/01.jpg";
import img02 from "./images/02.jpg";
import img03 from "./images/03.jpg";

export const Top: React.FC = () => {
  return (
    <section className={s.top}>
      <div className="container">
        <div className={s.images}>
          <img src={img01} alt="img1" />
          <img src={img02} alt="img2" />
          <img src={img03} alt="img3" />
        </div>
        <div className={s.collection}>
          <h1 className={s.title}>Spring mood</h1>
          <p className={s.desc}>-20% на новую коллекцию.</p>
          <a href="#!" className={s.link}>
            В каталог
          </a>
        </div>
      </div>
    </section>
  );
};
