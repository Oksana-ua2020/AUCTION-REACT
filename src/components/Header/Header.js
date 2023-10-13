import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-logo-wrap">
        <img src="img/gavel.png" alt="Молоток"></img>
        <h1 className="logo">
          <i>Bidding.UA</i>
        </h1>
      </div>
      <div className="search-wrap">
        <input
          className="search"
          type="search"
          name="quest"
          placeholder="Найти..."
        ></input>
        <select className="seek1" name="fin">
          <option value="0" selected="selected">
            Активные
          </option>
          <option value="1">Закрытые</option>
        </select>
        <button className="seek2" type="submit" name="search" value="1">
          Поиск
        </button>
      </div>
      <div className="header-wrap">
        <div className="exchange-rates-wrap">
          <label className="exchange-rates__item__ua">
            <input className="exchange-rates__link" type="radio" name="currencies" value="UAH"></input>
            UAH
          </label>
          <label className="exchange-rates__item__us">
            <input className="exchange-rates__link" type="radio" name="currencies" value="USD"></input>
            USD
          </label>
          <label className="exchange-rates__item__eu">
            <input className="exchange-rates__link" type="radio" name="currencies" value="EUR"></input>
            EUR
          </label>
        </div>
      </div>
      <nav className="navigation">
        <div className = "navigation__item">
          <a href="#s">Поддержка</a>
        </div>
        <div className = "navigation__item">
          <a href="#s">Продать</a>
        </div>
        <div className = "navigation__item">
          <a href="#s">Вход</a>
        </div>
        <div className = "navigation__item">
          <a href="#s">Регистрация</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
