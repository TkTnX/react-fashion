import React, { useState } from "react";
import s from "./s.module.scss";

import { CatalogList } from "../CatalogList/CatalogList";

const filterList = ["Менее 3000 рублей", "Более 3000 рублей"];
import { useSearchParams } from "react-router-dom";

const sortList = [
  { title: "По цене ↑", value: "price" },
  { title: "По цене ↓", value: "-price" },
  { title: "По алфавиту ↑", value: "desc" },
  { title: "По алфавиту ↓", value: "-desc" },
  { title: "По бренду ↑", value: "brand" },
  { title: "По бренду ↓", value: "-brand" },
];

type CatalogType = {
  currentPage: number;
  setTotalPages: (num: number) => void;
};

export const Catalog: React.FC<CatalogType> = ({
  currentPage,
  setTotalPages,
}) => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortQueryValue, setSortQueryValue] = useState("brand");
  const filterQuery = searchParams.get("filter") || "";
  const sortQuery = searchParams.get("sort") || "";
  const handleOpenFilter = () => {
    setIsOpenFilter(!isOpenFilter);
    setIsOpenSort(false);
  };

  const handleOpenSort = () => {
    setIsOpenSort(!isOpenSort);
    setIsOpenFilter(false);
  };

  const handleChangeSort = (index: number) => {
    const filterQuery = filterList[index];
    const sortQuery = sortList[index];
    setSortQueryValue(sortQuery.value);
    setSearchParams({ sort: sortQuery.title, filter: filterQuery });

    setIsOpenSort(false);
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
                {filterQuery !== "" ? filterQuery : "Фильтры"}
              </button>

              {isOpenFilter && (
                <div className={s.popup}>
                  <ul>
                    {filterList.map((item, i) => (
                      <li onClick={() => handleChangeSort(i)} key={i}>
                        <button>{item}</button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className={s.sort}>
              <button onClick={handleOpenSort} className={s.sortBtn}>
                {sortQuery !== "" ? sortQuery : "Сортировка"}
              </button>

              {isOpenSort && (
                <div className={s.popup}>
                  <ul>
                    {sortList.map((item, index) => (
                      <li
                        onClick={() => handleChangeSort(index)}
                        key={item.value}
                      >
                        <button>{item.title}</button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <ul className={s.catalogList}>
          <CatalogList
            setTotalPages={setTotalPages}
            currentPage={currentPage}
            sortQueryValue={sortQueryValue}
            filterQuery={filterQuery}
          />
        </ul>
      </div>
    </section>
  );
};
