import React from 'react';
import './Main.css'
import SideBar from '../SideBar/SideBar'


function Main() {
    return (
        <main>
        <form className="contant-main">
            <div className="container">
            <SideBar/>
                <section className="contant">
                    <div className="pic-img" id="pic-img"></div>
                </section>
            </div>
        </form>
        </main>
    );
}


export default Main;