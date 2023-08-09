import React from 'react';

function Main() {
    return (
        <div>
        <form class="contant-main">
            <div class="container">
                <aside class="aside-main">

                </aside>
                <section class="contant">
                    <div class="selectQuantityPict">
                        <p>Количество изображений</p>
                        <p>
                            <select id="Quantity" onchange="selectQuantity(value)">
                                <option selected value="10">10</option>
                                <option value="30">30</option>
                                <option value="50">50</option>
                            </select>
                        </p>
                    </div>
                    <div class="pic-img" id="pic-img"></div>
                </section>
            </div>
        </form>
        </div>
    );
}

export default Main;