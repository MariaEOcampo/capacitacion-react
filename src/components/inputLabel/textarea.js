import React from 'react';
import '../form/style-form.scss';

const TextArea = (props) =>{
const {requiredMsg = false} = props;
  return(
    <React.Fragment>
    <div className="text__container">
        <div>
            <label className="form__label--text">{props.label}</label>
                <textarea 
                className="form__textarea--input"
                type={props.type} 
                name={props.name} 
                onChange={props.change} 
                value={props.state}
                placeholder={props.placeholder}
                maxLength = {props.length}
                />
        </div>
        <div>
            {requiredMsg && <label className="form__required--text">Campo Obligatorio</label>}
        </div>
    </div>    
    </React.Fragment>
  )
  
}

export default TextArea;