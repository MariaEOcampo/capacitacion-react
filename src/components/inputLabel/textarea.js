import React from 'react';
import '../form/style-form.scss';

const TextArea = (props) =>{

  return(
    <React.Fragment>
      <label className="form__label">{props.label}</label>
        <textarea 
        className="form__textarea--input"
        type={props.type} 
        name={props.name} 
        onChange={props.change} 
        value={props.state}
        placeholder={props.placeholder}
        maxlength = {props.length}
        required 
        />
    </React.Fragment>
  )
  
}

export default TextArea;