import React from 'react';
import '../../App';
import '../article/style-article.scss';
import foto from '../../../public/images/nutricion.JPG'


function Article() {
    return(
        <div className = 'article'>
            <h2>La nutrición en cuarentena</h2>
            <img src ={foto} className = 'article_photo' alt = 'mujer comiendo sentada en la base a la heladera'/>
            <figcaption className = 'article_figcaption'>Los expertos en nutrición desaconsejan el consumo de calorías que no aporten un valor nutricional de calidad al organismo(Shutterstock) </figcaption>
            <p className = 'article_text'>Con la cuarentena obligatoria en la Argentina, los hábitos y costumbres de la población sufrieron cambios abruptos, en especial con respecto a la alimentación. Lo cierto es que en muchas ocasiones esto puede significar una situación estresante para muchos en donde la comida puede ser una de las formas más fáciles e inmediatas para levantar el ánimo y sentirse mejor.

Sin embargo, debido al sedentarismo que supone este confinamiento, son muchos los expertos que coinciden en que comer emocionalmente muchos alimentos con poca nutrición puede debilitar el sistema inmune y empeorar el estado de ánimo en un momento en el que proteger el cuerpo y mantener una actitud positiva es particularmente importante.</p>
        </div>

    )
}

export default Article;