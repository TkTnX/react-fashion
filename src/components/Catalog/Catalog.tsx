import React, { useState } from "react";
import s from "./s.module.scss";
import { CatalogList } from "../CatalogList/CatalogList";

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
                    <li>
                      <button>Только с размерами</button>
                    </li>
                    <li>
                      <button>Только без размеров</button>
                    </li>
                    <li>
                      <button>Stone Island</button>
                    </li>
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
                    <li>
                      <button>По цене</button>
                    </li>
                    <li>
                      <button>По бренду</button>
                    </li>
                    <li>
                      <button>По описанию</button>
                    </li>
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
