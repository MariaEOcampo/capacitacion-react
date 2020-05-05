import React from 'react';
import '../../App';
import './style-section.scss';

const dataSection =[
    {
        classNameDiv:"section_one",
        tittle:"Fitness en casa",
        classNameTittle:"section_tittle",
        src:"/images/fitness.jpg",
        classNameImg:"section_image",
        alt:"Mujer fitness",
        classNameP:"section_text",
        p:"Abdominales combinados con hombros: 45 segundos x 5 series. Se pueden combinar con mancuernas para agregar peso. Hay mancuernas de diferentes pesos y formas. Los pesajes comienzan en los 1kg y hay hasta 4 kilos para levantar cada una."
    },
    {
        classNameDiv:"section_two",
        tittle:"Recetas",
        classNameTittle:"section_tittle",
        src:"/images/recipe.jpg",
        classNameImg:"section_image",
        alt:"plato de comida",
        classNameP:"section_text",
        p:"Tener más tiempo en el hogar permite, entre otras cosas, poder dedicarle a la preparación de los platos una atención especial. Al disponer de un plan de alimentación semanal se puede ir al supermercado a hacer una compra consciente para poder tener a mano los ingredientes necesarios."
    },
    {
        classNameDiv:"section_three",
        tittle:"Belleza",
        classNameTittle:"section_tittle",
        src:"/images/belleza.jpg",
        classNameImg:"section_image",
        alt:"elementos naturales",
        classNameP:"section_text",
        p:"Tener más tiempo en el hogar permite, entre otras cosas, poder dedicarle a la preparación de los platos una atención especial. Al disponer de un plan de alimentación semanal se puede ir al supermercado a hacer una compra consciente para poder tener a mano los ingredientes necesarios."
    },


]

const content = dataSection.map((data) => (
    <React.Fragment>
        <div className={data.classNameDiv}>
            <h3 className={data.classNameTittle}>{data.tittle}</h3>
                <img src={process.env.PUBLIC_URL + data.src} className={data.classNameImg} alt={data.alt}/>
                <p className={data.classNameP}>{data.p}</p>
        </div>
    </React.Fragment>
))

const Sections = () =>{
    return(
        <section className="section">
            {content}                    
        </section>
    )
}

export default Sections;