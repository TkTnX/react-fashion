import React, { ChangeEvent, useEffect, useState } from "react";
import { MdOutlineClear } from "react-icons/md";
import s from "./s.module.scss";
import axios from "axios";

export const AddNewProductForm: React.FC = () => {
  const [post, setPost] = useState({
    title: "",
    img: "",
    price: "",
    brand: "",
    color: "",
  });
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const url = "https://35264782283560cf.mokky.dev/catalogItems";

  function handleSubmit(event: any) {
    event.preventDefault();
    axios
      .post(url, post)
      .then(() => location.reload())
      .catch((err) => alert(`Произошла ошибка! ${err}`));
  }

  return (
    <>
      <div className="backdrop">
        <form onSubmit={handleSubmit} className={`${s.form} form`}>
          <button type="button" className="closeBtn">
            <MdOutlineClear />
          </button>
          <p className={`${s.title} title-2`}>Добавить новый товар</p>
          <label>
            Название товара
            <input
              onChange={handleInput}
              name="title"
              placeholder="Название"
              type="text"
            />
          </label>
          <label>
            Изображение
            <input
              onChange={handleInput}
              name="img"
              placeholder="url картинки"
              type="text"
              required
            />
          </label>
          <label>
            Цена товара
            <input
              onChange={handleInput}
              name="price"
              placeholder="Цена"
              type="number"
              required
            />
          </label>
          <label>
            Бренд
            <input
              onChange={handleInput}
              name="brand"
              placeholder="Бренд"
              type="text"
              required
            />
          </label>
          <label>
            Цвет
            <input
              onChange={handleInput}
              name="color"
              placeholder="Цвет"
              type="text"
              required
            />
          </label>
          <button type="submit" className={`${s.btn} form-btn`}>
            Добавить товар
          </button>
        </form>
      </div>
    </>
  );
};
