import React from 'react';
import '../../App';
import logo from '../../images/logoH.png';
import '../header/style.scss';


function Header(){
    return (
        <div className="header-container">
        <figure>
            <img src ={logo} className = "header-logo" alt ="logo"/>
                </figure>
                <h1 className= "header-tittle">Healthy Page</h1>
        </div>
    )
}

export default Header;