import React from 'react';
import '../../App';
import '../aside/style-aside.scss';

const dataAside =[
    {
        className:"aside__first",
        tittle:"Noticias",
        src:"/images/desayuno.JPG",
        classNameImage:"aside__first__image",
        alt:"foto de un desayuno",
        classNameP:"aside__first__text",
        p: "Ya sabemos que en realidad el desayuno no es la comida más importante del día, pero sí puede favorecer la pérdida de peso o ser una importante fuente de energía según las necesidades de cada persona. Es habitual levantarse con mucho apetito cuando estamos a dieta, por eso es crucial elegir un desayuno equilibrado y saludable para adelgazar que nos ayude a alcanzar nuestros objetivos."
    },
    {
        className:"aside__second",
        tittle:"Noticias",
        src:"/images/desayuno.JPG",
        classNameImage:"aside__second__image",
        alt:"foto de un desayuno",
        classNameP:"aside__second__text",
        p: "Ya sabemos que en realidad el desayuno no es la comida más importante del día, pero sí puede favorecer la pérdida de peso o ser una importante fuente de energía según las necesidades de cada persona. Es habitual levantarse con mucho apetito cuando estamos a dieta, por eso es crucial elegir un desayuno equilibrado y saludable para adelgazar que nos ayude a alcanzar nuestros objetivos."
    },
    {
        className:"aside__third",
        src:"/images/viandas.png",
        classNameImage:"aside__third__image",
        alt:"Publicidad de viandas",
        
    }
]

const content = dataAside.map((data) => (
    <React.Fragment>
        <div className={data.className}>
            <h3>{data.tittle}</h3>
            <img src = {process.env.PUBLIC_URL + data.src } className={data.classNameImage} alt={data.alt}/>
            <p className={data.classNameP}>{data.p}</p>
        </div>
    </React.Fragment>
))

const Aside = () =>{
    return(
        <aside className="aside">
            {content}
        </aside>
    )
}

export default Aside;