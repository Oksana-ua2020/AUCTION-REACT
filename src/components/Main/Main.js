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

let randomNumber = Math.floor(Math.random() * 100) + 1;
let object__product = {
    image: "https://picsum.photos/200/300",
    number:  1,
    price: 128,
}
function selectQuantity(select) {
    console.log(randomNumber);
    let Quantity = Number(select);
    let result = "";

    for (let i = 1; i < Quantity+1; i++) {
        let price = Math.floor(Math.random() * (100 - 1)) + 1;
        result += `
            <div className="pic">
                <div className="pic-position">
                    <img src = "${object__product.image}" alt="product">
                </div>
                <p>Price ${price} $</p>
            </div>`;
    }
    document.getElementById('pic-img').innerHTML = result;
}

selectQuantity(10);

export default Main;