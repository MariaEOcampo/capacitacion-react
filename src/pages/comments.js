import React, { useState } from 'react';
import Layout from '../components/layout';
import useForm from '../services/form';
import CardComments from '../components/comments'


const Comments = () =>{
    // const[values,handleChange] = useForm();
    
    const[comments, setComments] = useState([])
    // // const [suma, setSuma] = useState(0)

    const handleSubmit = e =>{
        e.preventDefault()
        let auxArray = comments
        // comments.map(comment => auxArray.push(comment, {firstName}))
        auxArray.push({firstName})
        console.log(auxArray)
        setComments(auxArray)
        // console.log(values)
        // setComments( prevState => ({comments: [values, ...prevState.comments]}))
        // console.log(comments)
        // setSuma(prevState => ({suma: prevState.suma + 1}))
    }
    const [firstName, setFirstName] = useState('')

    const handleInput = ({ target }) => setFirstName(target.value) 
    console.log(comments)
    return(
        <Layout>
            <div>
            <h1 className="form__title">¡Dejanos tu Comentario!</h1>
            <form onSubmit ={handleSubmit} className="form">
                <div className="form__label__container">
                    <label className="form__label">Nombre</label>
                        <input 
                        type="text" 
                        name="firstName" 
                        // onChange={handleChange} 
                        onChange={handleInput}
                        value={firstName}
                        placeholder="Ingresa tu nombre"
                        className="form__input"  
                        required />
                </div>
                {/* <div className="form__label__container">   
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
                </div> */}
                {/* <div className="form__textarea">        
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
                    </div> */}
                    <div className="form__button__container">    
                        <button type="submit" className="form__button">Enviar</button>
                    </div>    
            </form>
                 <CardComments values={comments} />
            </div>
        </Layout>
    )

}

export default Comments