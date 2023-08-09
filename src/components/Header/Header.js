import React from 'react';

function Header() {
    return ( <div>
        <div class="header-logo-wrap">
            <img src="img/gavel.png" alt="Молоток"></img>
            <h1 class="logo"><i>Bidding.UA</i></h1>
        </div>
        <div class="search-wrap">
            <input class="search" type="search" name="quest" placeholder="Найти..."></input>
            <select class="seek1" name="fin">
                <option value="0" selected="selected">Активные</option>
                <option value="1">Закрытые</option>
            </select>
            <button class="seek2" type="submit" name="search" value="1">Поиск</button>
        </div>
        <div class="header-wrap">
        <div class="exchange-rates-wrap">
            <div class="exchange-rates">
                <div class="exchange-rates__item__ua">
                    <a class="exchange-rates__link" href="#s">UAH</a>
                </div>
                <div class="exchange-rates__item__us">
                    <a class="exchange-rates__link" href="#s">USD</a>
                </div>
                <div class="exchange-rates__item__eu">
                    <a class="exchange-rates__link" href="#s">EUR</a>
                </div>
            </div>
        </div>
        <nav class="navigation">
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
 </div>
    );
 }

 export default Header;