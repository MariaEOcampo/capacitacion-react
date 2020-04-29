import React from 'react';
import '../../App';
import '../nav/style-nav.scss';
import logo from '../../../public/images/logoH.png';

function Nav(){
    return (
        <div className="nav">
            <img src ={logo} className = "nav_logo" alt ="logo"/> 
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
        </div>
    )
}

export default Nav;