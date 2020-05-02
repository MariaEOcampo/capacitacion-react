import React from 'react';
import '../../App';
import '../nav/style-nav.scss';

const Nav = () => {
     return (
        <nav>
            <input type="checkbox" id="nav_check-menu"/>
            <label for="nav_check-menu" className="nav_label">
                <i class="fas fa-bars"></i>
            </label>
                <div className="nav_menu">
                    <ul>
                        <li><a href="www.google.com">Quienes somos</a></li>
                        <li><a href="www.google.com">Recetas</a></li>
                        <li><a href="www.google.com">Belleza</a></li>
                        <li><a href="www.google.com">Noticias</a></li>
                        <li><a href="www.google.com">Contactanos</a></li>
                    </ul>
                </div>       
            </nav>
    )
}

export default Nav;