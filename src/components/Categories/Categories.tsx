import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import s from "./s.module.scss";
import axios from "axios";
import "./_style.scss";
import { useFetchData } from "../../hooks/useFetchData";

type CategoryType = {
  title: string;
  img: string;
  id: number;
};

export const Categories: React.FC = () => {
  const url = "https://35264782283560cf.mokky.dev/categories";
  const { data, isLoading, error } = useFetchData(url);

  if (isLoading) {
    return <p>Загрузка....</p>;
  }

  if (error) {
    return <p>Error!</p>;
  }

  return (
    <section className={s.categories}>
      <div className="container-right">
        <div className={s.wrapper}>
          <div className={s.mobileText}>
            <h2 className={`title-2 ${s.title}`}>Категории товаров</h2>
            <p className={s.desc}>Лучшие категории товаров в нашем магазине</p>
          </div>
          <div className={s.leftImg}>
            <img src="/images/categories/title.png" alt="Категории товаров" />
          </div>
          <div className={s.right}>
            <div className={s.text}>
              <h2 className={`title-2 ${s.title}`}>Категории товаров</h2>
              <p className={s.desc}>
                Лучшие категории товаров в нашем магазине
              </p>
            </div>

            <Swiper
              className={s.swiper}
              modules={[Pagination]}
              spaceBetween={20}
              slidesPerView={2}
              pagination={{ clickable: true }}
              breakpoints={{
                500: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                856: {
                  slidesPerView: 4.2,
                  spaceBetween: 20,
                },
              }}
            >
              {data.map((category: CategoryType) => (
                <SwiperSlide key={category.id} className={s.slide}>
                  <img src={category.img} alt={category.title} />
                  <h6 className={s.itemTitle}>{category.title}</h6>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
