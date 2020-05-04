import React from 'react';
import '../../App';
import '../header/style.scss';

const Header = () => {
    return (
        <header className="header_container">
            <figure className="header_figures">
                <img src ={process.env.PUBLIC_URL + "/images/logoH.png"} className="header_logo" alt="logo"/>
            </figure>
            <figure className="header_figures">
                <img src ={process.env.PUBLIC_URL + "/images/logoH.svg"} className="header_logo-tittle" alt="logo"/>
            </figure>
        </header>
    )
}

export default Header;