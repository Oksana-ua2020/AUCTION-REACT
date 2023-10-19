import React from 'react';
import './Main.css'

function Main() {
    return (
        <main>
        <form className="contant-main">
            <div className="container">
                <aside className="aside-main">
                <div>
                    gjhgjhg
                </div>
                </aside>
                <section className="contant">
                    <div className="selectQuantityPict">
                        <p>Количество изображений</p>
                        <p>
                            <select id="Quantity" onchange="selectQuantity(value)">
                                <option selected value="10">10</option>
                                <option value="30">30</option>
                                <option value="50">50</option>
                            </select>
                        </p>
                    </div>
                    <div className="pic-img" id="pic-img"></div>
                </section>
            </div>
        </form>
        </main>
    );
}


export default Main;