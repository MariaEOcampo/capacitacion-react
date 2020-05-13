import React from 'react';
import '../form/style-form.scss';

const InputLabel = (props) =>{
const {requiredMsg = false,
  type,
  name,
  change,
  state,
  placeholder} = props;
  return(
    <React.Fragment>
    <div className="form__container">
      <div>
        <label className="form__label">{props.label}</label>
          <input 
          type={type}  
          name={name} 
          onChange={change}
          value={state}
          placeholder={placeholder}
          className="form__input"  
          />
      </div>
      <div>
        {requiredMsg ? <p className="form__required">Campo Obligatorio</p> :<div className="div__form"/>} 
      </div>
    </div>     
    </React.Fragment>
  )
  
}

export default InputLabel

