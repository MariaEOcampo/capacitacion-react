import React, { useState } from 'react';
import Layout from '../components/layout';
import CardComments from '../components/card';
import '../components/form/style-form.scss';
import InputLabel from '../components/inputLabel';
import TextArea from '../components/inputLabel/textarea';
import Button from '../components/inputLabel/button';

const Comments = () =>{
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [commentsNew, setCommentsNew] = useState('');
    const [comments, setComments] = useState([]);
    
    const [requiredfirstName, setRequiredFirstName] = useState(false);
    const [requiredlastName, setRequiredLastName] = useState(false);
    const [requiredEmail, setRequiredEmail] = useState(false);
    const [requiredCommentsNew, setRequiredCommentsNew] = useState(false);    

    const onSubmit = e => {
        e.preventDefault();
      /*   console.log("submit", firstName) */
        if(firstName === ''){
            setRequiredFirstName(true)
            return false
        }
        if(lastName === ''){
            setRequiredLastName(true)
            return false
        }
        if(email === ''){
            setRequiredEmail(true)
            return false
        }
        if(commentsNew === ''){
            setRequiredCommentsNew(true)
        }
        else{
         let info = { firstName, lastName, email,commentsNew}
            setComments(prevState => ([...prevState, info]))
            }
            
        }
    
    
    return(
        <Layout>
            <div>
            <h1 className="form__title">¡Dejanos tu Comentario!</h1>
            <form onSubmit ={onSubmit} className="form">
                <div className="form__label__container">
                    <InputLabel label="Nombre"
                    type = "text"
                    name ="firstName"
                    value = {setFirstName}
                    change = {e => setFirstName(e.target.value)}
                    placeholder="Ingresa tu nombre"
                    requiredMsg={requiredfirstName}
                    />                   
                </div>
                <div className="form__label__container">  
                    <InputLabel label="Apellido"
                    type = "text"
                    name ="lastName"
                    value = {setLastName}
                    change = {e => setLastName(e.target.value)}
                    placeholder="Ingresa tu apellido"
                    requiredMsg={requiredlastName}/>
                </div>        
                <div className="form__label__container">  
                    <InputLabel label="Email"
                    type = "email"
                    name ="email"
                    value = {setEmail}
                    change = {e => setEmail(e.target.value)}
                    placeholder="ejemplo@ejemplo.com"
                    requiredMsg={requiredEmail}/>
                </div>
                <div className="form__textarea">
                    <TextArea
                    label="Escribinos!"
                    type="text"
                    name="comments" 
                    change={e => setCommentsNew(e.target.value)}
                    value={setCommentsNew}
                    placeholder="Esperamos tu consulta o comentario!"
                    maxlength ="150"
                    requiredMsg={requiredCommentsNew}
                    />        
                    </div> 
                    <div className="form__button__container">
                        <Button type="submit" text="Enviar"/>    
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

