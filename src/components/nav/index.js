import React from 'react';
import '../../App';
import '../nav/style-nav.scss';
import { Link } from 'react-router-dom';

const Nav = () => {
     return (
        <nav>
            <input type="checkbox" id="nav_check-menu"/>
            <label for="nav_check-menu" className="nav__label">
                <i class="fas fa-bars"></i>
            </label>
                <div className="nav__menu">
                    <ul>
                        <li><Link to="/comments">Contactanos</Link></li>
                        <li><Link to="/article">Noticias</Link></li>
                        <li><a href="/fitness">Fitness</a></li>
                        <li><a href="www.google.com">Recetas</a></li>
                        <li><a href="www.google.com">Belleza</a></li>
                        <li><a href="www.google.com">Yoga y Meditación</a></li>
                        <li><a href="www.google.com">Calcular tu masa corporal</a></li>
                    </ul>
                </div>       
        </nav>
    )
}

export default Nav;