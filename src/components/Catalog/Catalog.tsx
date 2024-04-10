import React, { useState } from "react";
import s from "./s.module.scss";

import { CatalogList } from "../CatalogList/CatalogList";

const filterList = [
  "Только с размерами",
  "Только без размеров",
  "Stone Island",
];

const sortList = ["По цене", "По бренду", "По описанию"];

export const Catalog: React.FC = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);

  const handleOpenFilter = () => {
    setIsOpenFilter(!isOpenFilter);
    setIsOpenSort(false);
  };

  const handleOpenSort = () => {
    setIsOpenSort(!isOpenSort);
    setIsOpenFilter(false);
  };

  return (
    <section className={s.catalog}>
      <div className="container">
        <div className={s.top}>
          <h2 className={`title-2 ${s.title}`}>
            Каталог товаров
            <span>20 шт. товара</span>
          </h2>

          <div className={s.filters}>
            <div className={s.filter}>
              <button onClick={handleOpenFilter} className={s.filterBtn}>
                ФИЛЬТРЫ
              </button>

              {isOpenFilter && (
                <div className={s.popup}>
                  <ul>
                    {filterList.map((item, i) => (
                      <li key={i}>
                        <button>{item}</button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className={s.sort}>
              <button onClick={handleOpenSort} className={s.sortBtn}>
                СОРТИРОВКА
              </button>

              {isOpenSort && (
                <div className={s.popup}>
                  <ul>
                    {sortList.map((item) => (
                      <li key={item}>
                        <button>{item}</button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <ul className={s.catalogList}>
          <CatalogList />
        </ul>
      </div>
    </section>
  );
};
