import React from 'react';
import '../../App';
import './style-section.scss';

const Sections = () =>{
    return(
        <section className="section">
            <div className="section_one">
                <h3 className="section_tittle">Fitness en casa</h3>
                    <img src = {process.env.PUBLIC_URL + "/images/fitness.jpg"} className="section_image" alt="mujer fitness"/>
                    <p className="section_text">
                        Abdominales combinados con hombros: 45 segundos x 5 series. Se pueden combinar con mancuernas para agregar peso. Hay mancuernas de diferentes pesos y formas. Los pesajes comienzan en los 1kg y hay hasta 4 kilos para levantar cada una.
                    </p>
            </div>
            <div className="section_two">
                <h3 className="section_tittle">Recetas</h3>
                    <img src = {process.env.PUBLIC_URL + "/images/recipe.jpg"} className="section_image" alt="plato de comida"/>
                    <p className="section_text">
                        Tener más tiempo en el hogar permite, entre otras cosas, poder dedicarle a la preparación de los platos una atención especial. Al disponer de un plan de alimentación semanal se puede ir al supermercado a hacer una compra consciente para poder tener a mano los ingredientes necesarios.
                    </p>
            </div>
            <div className="section_three">
                <h3 className="section_tittle">Belleza</h3>
                    <img src ={process.env.PUBLIC_URL + "/images/belleza.jpg"} className="section_image" alt="elementos naturales"/>
                    <p className="section_text">
                        No importa si tu piel es seca, normal, o grasosa. No tienes que invertir en muchas cremas, con un sólo producto que sea bueno puedes tener una piel de ensueño. 
                   </p>
            </div>
        </section>
    )
}

export default Sections;