import React from 'react';
import './Header.css'

function Header() {
    return ( <header className='header'>
        <div className="header-logo-wrap">
            <img src="img/gavel.png" alt="Молоток"></img>
            <h1 className="logo"><i>Bidding.UA</i></h1>
        </div>
        <div className="search-wrap">
            <input className="search" type="search" name="quest" placeholder="Найти..."></input>
            <select className="seek1" name="fin">
                <option value="0" selected="selected">Активные</option>
                <option value="1">Закрытые</option>
            </select>
            <button className="seek2" type="submit" name="search" value="1">Поиск</button>
        </div>
        <div className="header-wrap">
        <div className="exchange-rates-wrap">
            <div className="exchange-rates">
                <div className="exchange-rates__item__ua">
                    <a className="exchange-rates__link" href="#s">UAH</a>
                </div>
                <div className="exchange-rates__item__us">
                    <a className="exchange-rates__link" href="#s">USD</a>
                </div>
                <div className="exchange-rates__item__eu">
                    <a className="exchange-rates__link" href="#s">EUR</a>
                </div>
            </div>
        </div>
        <nav className="navigation">
            <div>
                <a href="#s">Поддержка</a>
            </div>
            <div>
                <a href="#s">Продать</a>
            </div>
            <div>
                <a href="#s">Вход</a>
            </div>
            <div>
                <a href="#s">Регистрация</a>
            </div>
        </nav>
        </div>
 </header>
    );
 }

 export default Header;