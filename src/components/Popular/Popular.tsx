import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import s from "./s.module.scss";
import { CatalogCard } from "../CatalogCard/CatalogCard";
import { useFetchData } from "../../hooks/useFetchData";
export type CatalogCardType = {
  id: number;
  price: number;
  img: string;
  brand: string;
  desc: string;
  sizes?: string[];
  isLoading?: boolean;
};

export const Popular: React.FC = () => {
  const url = "https://35264782283560cf.mokky.dev/catalog";

  const { data, isLoading, error } = useFetchData(url);

  if (isLoading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>Ошибка!</p>;
  }

  return (
    <section className={s.popular}>
      <div className="container">
        <div className={s.top}>
          <h2 className="title-2">Популярное</h2>
          <a className={s.link} href="#!">
            В каталог
          </a>
        </div>
      </div>
      <div className="container-right">
        <Swiper
          className={s.swiper}
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1.2}
          pagination={{ clickable: true }}
          breakpoints={{
            1023: {
              slidesPerView: 4.2,
            },
            855: {
              slidesPerView: 3.2,
            },
            375: {
              slidesPerView: 2.2,
            },
          }}
        >
          {data.map((card: CatalogCardType) => (
            <SwiperSlide key={card.id}>
              <CatalogCard {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
