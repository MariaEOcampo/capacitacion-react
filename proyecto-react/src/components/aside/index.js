import React from 'react';
import '../../App';
import '../aside/style-aside.scss';

const Aside = () =>{
    return(
        <aside className="aside">
            <h3>La red dice</h3>
            <img src = {process.env.PUBLIC_URL + "/images/desayuno.JPG"} className="aside_image" alt="foto de un desayuno"/>
            <p className="aside_text">
            Ya sabemos que en realidad el desayuno no es la comida más importante del día, pero sí puede favorecer la pérdida de peso o ser una importante fuente de energía según las necesidades de cada persona. Es habitual levantarse con mucho apetito cuando estamos a dieta, por eso es crucial elegir un desayuno equilibrado y saludable para adelgazar que nos ayude a alcanzar nuestros objetivos.
            </p>
        </aside>
    )
}

export default Aside;