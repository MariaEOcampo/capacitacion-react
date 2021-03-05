import React from 'react';

const Button = (props) =>{

    return(
        <button type={props.type} className="form__button">{props.text}</button>
    )
}

export default Button;