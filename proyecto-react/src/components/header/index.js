import React from 'react';
import '../../App';
import '../header/style.scss';

function Header(){
    return (
        <header className="header-container">
            <figure>
                <img src ={process.env.PUBLIC_URL + "/images/logoH.png"} className="header-logo" alt="logo"/>
            </figure>
            <h1 className="header-tittle">Healthy Page</h1>
        </header>
    )
}

export default Header;