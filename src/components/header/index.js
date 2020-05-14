import React, { useState, useEffect } from 'react';
import '../../App';
import '../header/style.scss';
import { Link } from 'react-router-dom';
import getDate from '../../services/date';

const Header = () => {

    const[date, setDate] = useState([])

    const getADate = async () => {
        const data = await getDate();
        setDate({
                hour: data.formatted
                })
            }

    useEffect(()=>{
        getADate()        
    },[])
   
    return (
        <header className="header__container">
            <figure className="header__figures">
                <img src ={process.env.PUBLIC_URL + "/images/logoH.png"} className="header__logo" alt="logo"/>
            </figure>
            <p className="header__hour--text">Es tiempo de ser saludable!</p><p className="header__hour--api">{date.hour}</p>
            <figure className="header__figures">
                <Link to="./"><img src ={process.env.PUBLIC_URL + "/images/logoH.svg"} className="header__logo-tittle" alt="logo"/></Link>
            </figure>
        </header>
    )
}

export default Header;