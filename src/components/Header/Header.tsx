import React, { useState } from "react";
import s from "./s.module.scss";
import locationImg from "./images/location.svg";
import searchImg from "./images/search.svg";
import userImg from "./images/user.svg";
import favImg from "./images/fav.svg";
import cartImg from "./images/cart.svg";
import { Navigation } from "../Navigation/Navigation";
import { HeaderBurgerMenu } from "../HeaderBurgerMenu/HeaderBurgerMenu";
import { Link } from "react-router-dom";
import { RegistrationForm } from "../RegistrationForm/RegistrationForm";
import { LoginForm } from "../LoginForm/LoginForm";
import { ChangePasswordForm } from "../ChangePasswordForm/ChangePasswordForm";
export const Header: React.FC = () => {
  const [openBurger, setOpenBurger] = useState<boolean>(false);
  const [openRegisterForm, setOpenRegisterForm] = useState(false);
  const [openLoginForm, setOpenLoginForm] = useState(false);
  const [openChangePasswordForm, setOpenChangePasswordForm] = useState(false);
  const handleBurger = () => setOpenBurger(!openBurger);

  const handleRegisterForm = () => setOpenRegisterForm(!openRegisterForm);

  {
    openRegisterForm
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }

  return (
    <>
      <header className={s.header}>
        {openBurger && <HeaderBurgerMenu />}
        <div className="container">
          <div className={s.wrapper}>
            <button
              className={`${s.burgerBtn} ${
                openBurger ? s.burgerBtnActive : ""
              }`}
              onClick={handleBurger}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className={s.left}>
              <Link to="/">
                <h4 className={s.logo}>Logo</h4>
              </Link>
              <button className={s.location}>
                <img src={locationImg} alt="Location" />
                <p className={s.city}>МОСКВА</p>
              </button>
            </div>
            <div className={s.center}>
              <nav className={s.nav}>
                <ul className={s.nav__list}>
                  <li className={s.nav__item}>
                    <a href="#!" className={s.nav__sale}>
                      SALE
                    </a>
                  </li>
                  <li className={`${s.nav__item} ${s.active}`}>
                    <button className={s.nav__btn}>ЖЕНЩИНАМ</button>
                  </li>
                  <li className={s.nav__item}>
                    <button className={s.nav__btn}>МУЖЧИНАМ</button>
                  </li>
                  <li className={s.nav__item}>
                    <button className={s.nav__btn}>ДЕТЯМ</button>
                  </li>
                </ul>
              </nav>
            </div>
            <div className={s.right}>
              <ul className={s.user__list}>
                <li className={s.user__item}>
                  <button>
                    <img src={searchImg} alt="Поиск..." />
                  </button>
                </li>
                <li className={s.user__item}>
                  <button onClick={handleRegisterForm}>
                    <img src={userImg} alt="Профиль" />
                  </button>
                </li>
                <li className={s.user__item}>
                  <button>
                    <img src={favImg} alt="Любимое" />
                  </button>
                </li>
                <li className={s.user__item}>
                  <button>
                    <img src={cartImg} alt="Корзина" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      {openRegisterForm && (
        <RegistrationForm setOpenRegisterForm={setOpenRegisterForm} />
      )}

      {openLoginForm && <LoginForm setOpenLoginForm={setOpenLoginForm} />}
      {openChangePasswordForm && (
        <ChangePasswordForm
          setOpenChangePasswordForm={setOpenChangePasswordForm}
        />
      )}
      <Navigation />
    </>
  );
};
