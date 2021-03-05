import React from 'react';
import '../form/style-form.scss';

const TextArea = (props) =>{
const {requiredMsg = false,
type,
name,
change,
state,
placeholder,
length} = props;
  return(
    <React.Fragment>
    <div className="text__container">
        <div>
            <label className="form__label--text">{props.label}</label>
                <textarea 
                className="form__textarea--input"
                type={type} 
                name={name} 
                onChange={change} 
                value={state}
                placeholder={placeholder}
                maxLength = {length}
                />
        </div>
        <div>
        {requiredMsg ? <p className="form__required--text">Campo Obligatorio</p> :<div className="div__form"/>} 
        </div>
    </div>    
    </React.Fragment>
  )
  
}

export default TextArea;