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
    
     const initialValues = {
        firstName:"", 
        /* lastName:"",
        email:"", */
        /* commentsNew:"", */
         firstNameError:"",
       /*  lastNameError:"",
        emailError:"",
        commentsNewError:"", */

     } 

    /*  const validate = () =>{
    let firstNameError="";
    if(!initialValues.firstName){
        firstNameError ="Nombre no puede estar vacío"
      }
      if(firstNameError){
          setEmail({firstNameError})
          return false 
      }
      return true
    }  */


    const onSubmit = e => {
        e.preventDefault()
        /* const isValid = validate()
        if (isValid){ */
         let info = { firstName, lastName, email,commentsNew}
            setComments(prevState => ([...prevState, info]))
            }
    /*  } */ 
    
    
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
                    required/>                   
                </div>
               {/* <div>{initialValues.firstNameError}</div>  */}
                <div className="form__label__container">  
                    <InputLabel label="Apellido"
                    type = "text"
                    name ="lastName"
                    value = {setLastName}
                    change = {e => setLastName(e.target.value)}
                    placeholder="Ingresa tu apellido"
                    required/>
                </div>        
                <div className="form__label__container">  
                    <InputLabel label="Email"
                    type = "email"
                    name ="email"
                    value = {setEmail}
                    change = {e => setEmail(e.target.value)}
                    placeholder="ejemplo@ejemplo.com"
                    required/>
                </div>
                <div className="form__textarea">
                    <TextArea
                    type="text"
                    name="comments" 
                    change={e => setCommentsNew(e.target.value)}
                    value={setCommentsNew}
                    placeholder="Esperamos tu consulta o comentario!"
                    maxlength ="150"
                    required 
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

