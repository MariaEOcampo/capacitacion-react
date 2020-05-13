import React from 'react';
import '../form/style-form.scss';

const InputLabel = (props) =>{
const {requiredMsg = false} = props;
  return(
    <React.Fragment>
    <div className="form__container">
      <div>
        <label className="form__label">{props.label}</label>
          <input 
          type={props.type}  
          name={props.name} 
          onChange={props.change}
          value={props.state}
          placeholder={props.placeholder}
          className="form__input"  
          />
      </div>
      <div>
        {requiredMsg && <label className="form__required">Campo Obligatorio</label>} 
      </div>
    </div>     
    </React.Fragment>
  )
  
}

export default InputLabel

