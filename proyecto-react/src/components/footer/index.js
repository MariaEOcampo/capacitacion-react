import React from 'react';
import '../../App';
import './style-footer.scss';

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer_div-text">
                <h4 className="footer_tittle">Seguinos en nuestras redes</h4>
            </div>
                <div class="footer_div">
                    <a href="https://www.instagram.com"><span className="footer_icon"><i class="fab fa-instagram"></i></span></a>
                    <a href="https://twitter.com"><span className="footer_icon"><i class="fab fa-twitter"></i></span></a>
                    <a href="https://www.facebook.com"><span className="footer_icon"><i class="fab fa-facebook"></i></span></a>
                </div>
        </footer>
    )
}

export default Footer;