import React from 'react';
import useForm from '../../services/form';
import '../form/style-form.scss';

const FormContact = () => {

    const[values,handleChange] = useForm();

    const handleSubmit = e =>{
        e.preventDefault()
        console.log({values})

    }

    return(
    <React.Fragment>
        <h1 className="form__title">¡Dejanos tu Comentario!</h1>
            <form onSubmit ={handleSubmit} className="form">
                <div className="form__label__container">
                    <label className="form__label">Nombre</label>
                        <input 
                        type="text" 
                        name="firstName" 
                        onChange={handleChange} 
                        value={values.firstName||""}
                        placeholder="Ingresa tu nombre"
                        className="form__input"  
                        required />
                </div>
                <div className="form__label__container">   
                    <label className="form__label">Apellido</label>
                        <input 
                        type="text" 
                        name="lastName" 
                        onChange={handleChange} 
                        value={values.lastName||""}
                        placeholder="Ingresa tu apellido"
                        className="form__input"  
                        required />
                </div>        
                <div className="form__label__container">  
                    <label className="form__label">Email</label>
                        <input 
                        type="email" 
                        name="email" 
                        onChange={handleChange} 
                        value={values.email || ""}
                        placeholder="ejemplo@ejemplo.com"
                        className="form__input-mail"  
                        required />
                </div>
                <div className="form__textarea">        
                    <label className="form__label">Dejanos tu consulta:</label>
                        <textarea 
                        className="form__textarea--input"
                        type="text" 
                        name="comment" 
                        onChange={handleChange} 
                        value={values.comment || ""}
                        placeholder="Esperamos tu consulta o comentario!"
                        required 
                        />
                    </div>
                    <div className="form__button__container">    
                        <button type="submit" className="form__button">Enviar</button>
                    </div>    
            </form>
            
    </React.Fragment>
    )
}

export default FormContact