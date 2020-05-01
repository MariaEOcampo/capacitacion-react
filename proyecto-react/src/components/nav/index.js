import React from 'react';
import '../../App';
import '../nav/style-nav.scss';

const Nav = () => {
     return (
        <nav className="nav_container">
            <input type="checkbox" className="nav_check-menu"/>
            <label for="nav_check-menu" class="nav_btn-show">
                <i class="fas fa-bars"></i>
            </label>
                <div className="nav_menu">
                    <ul>
                        <li class="nav--menu_item">Quienes somos</li>
                        <li class="nav--menu_item">Recetas</li>
                        <li class="nav--menu_item">Belleza</li>
                        <li class="nav--menu_item">Noticias</li>
                        <li class="nav--menu_item">Contactanos</li>
                    </ul>
                </div>       
            </nav>
    )
}

export default Nav;