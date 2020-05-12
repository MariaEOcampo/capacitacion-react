import React, { useState } from 'react';
import Layout from '../components/layout';
import CardComments from '../components/card';
import '../components/form/style-form.scss';
import InputLabel from '../components/inputLabel';

const Comments = () =>{
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [commentsNew, setCommentsNew] = useState('');
    const [comments, setComments] = useState([]);

    const onSubmit = e => {
        e.preventDefault()
        let info = { firstName, lastName, email,commentsNew}
        setComments(prevState => ([...prevState, info]))
    }
    /* const onChange = (event) => setComments({...comments, [event.target.name]:event.target.name}) */

    return(
        <Layout>
            <div>
            <h1 className="form__title">¡Dejanos tu Comentario!</h1>
            <form onSubmit ={onSubmit} className="form">
                <div className="form__label__container">
                    <InputLabel label="Nombre"
                    name ="firstName"
                    value = {setFirstName}
                    change = {e => setFirstName(e.target.value)}
                    placeholder="Ingresa tu nombre"/>                   
                </div>
                <div className="form__label__container">   
                    <label className="form__label">Apellido</label>
                        <input 
                        type="text" 
                        name="lastName" 
                        onChange={e => setLastName(e.target.value)} 
                        value={lastName}
                        placeholder="Ingresa tu apellido"
                        className="form__input"  
                        required />
                </div>        
                <div className="form__label__container">  
                    <label className="form__label">Email</label>
                        <input 
                        type="email" 
                        name="email" 
                        onChange={e => setEmail(e.target.value)} 
                        value={email}
                        placeholder="ejemplo@ejemplo.com"
                        className="form__input-mail"  
                        required />
                </div>
                <div className="form__textarea">        
                    <label className="form__label">Dejanos tu consulta:</label>
                        <textarea 
                        className="form__textarea--input"
                        type="text" 
                        name="comments" 
                        onChange={e => setCommentsNew(e.target.value)}  
                        value={commentsNew}
                        placeholder="Esperamos tu consulta o comentario!"
                        maxlength = "100"
                        required 
                        />
                    </div> 
                    <div className="form__button__container">    
                        <button type="submit" className="form__button">Enviar</button>
                    </div>    
            </form>
            {
                    comments.map(comment => <CardComments {...comment} />)
                }
            </div>
        </Layout>
    )

}

export default Comments

/* 

<label className="form__label">Nombre</label>
                        <input 
                        type="text" 
                        name="firstName" 
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName}
                        placeholder="Ingresa tu nombre"
                        className="form__input"  
                        required /> */