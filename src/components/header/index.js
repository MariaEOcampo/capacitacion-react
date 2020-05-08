import React from 'react';
import '../../App';
import '../header/style.scss';

const Header = () => {
    return (
        <header className="header__container">
            <figure className="header__figures">
                <img src ={process.env.PUBLIC_URL + "/images/logoH.png"} className="header__logo" alt="logo"/>
            </figure>
            <figure className="header__figures">
                <img src ={process.env.PUBLIC_URL + "/images/logoH.svg"} className="header__logo-tittle" alt="logo"/>
            </figure>
        </header>
    )
}

export default Header;