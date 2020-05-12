import React from 'react';
import '../form/style-form.scss';

const InputLabel = (props) =>{

  return(
    <React.Fragment>
      <label className="form__label">{props.label}</label>
        <input 
        type="text" 
        name={props.name} 
        onChange={props.change}
        value={props.state}
        placeholder={props.placeholder}
        className="form__input"  
        required />
    </React.Fragment>
  )
  
}

export default InputLabel

