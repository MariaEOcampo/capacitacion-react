import React from 'react';
import '../../App';
import '../nav/style-nav.scss';

function Nav(){
    return (
        <nav className="nav">
            <img src ={process.env.PUBLIC_URL + "/images/logoH.png"} className = "nav_logo" alt ="logo"/> 
            <input type="checkbox" id="nav_checkMenu"/>
            <label for="checkMenu" class="nav--btn-show">
            <i class="fas fa-bars"></i>
            </label>
            <ul class="nav--menu">
                <li><label for="checkMenu" class="nav--btn-hide">
                <i class="fas fa-times"></i>
                </label></li>
                    <li class="nav--menu_item">Quienes somos</li>
                    <li class="nav--menu_item">Recetas</li>
                    <li class="nav--menu_item">Belleza</li>
                    <li class="nav--menu_item">Noticias</li>
                    <li class="nav--menu_item">Contactanos</li>
            </ul>       
        </nav>
    )
}

export default Nav;