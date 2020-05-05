import React from 'react';
import '../../App';
import '../article/style-article.scss';

const dataArticle = [
    {
        tittle:"La nutrición en cuarentena",
        src:"/images/nutricion.JPG",
        alt:"mujer comiendo sentada en la base a la heladera",
        figText:"Los expertos en nutrición desaconsejan el consumo de calorías que no aporten un valor nutricional de calidad al organismo(Shutterstock)",
        text:"Con la cuarentena obligatoria en la Argentina, los hábitos y costumbres de la población sufrieron cambios abruptos, en especial con respecto a la alimentación. Lo cierto es que en muchas ocasiones esto puede significar una situación estresante para muchos en donde la comida puede ser una de las formas más fáciles e inmediatas para levantar el ánimo y sentirse mejor.Sin embargo, debido al sedentarismo que supone este confinamiento, son muchos los expertos que coinciden en que comer emocionalmente muchos alimentos con poca nutrición puede debilitar el sistema inmune y empeorar el estado de ánimo en un momento en el que proteger el cuerpo y mantener una actitud positiva es particularmente importante.",
    }
]

const content = dataArticle.map((data) => (
    <React.Fragment>
      <h1>{data.tittle}</h1>
      <img src={process.env.PUBLIC_URL + data.src} className="article__photo" alt={data.alt} />
      <figcaption className="article__figcaption">{data.figText}</figcaption>
      <p className="article__text">{data.text}</p>
    </React.Fragment>
  ));

const Article = () => {
    return(
        <article className="article">
            {content}
            <a title="pagina de Adidas" href="adidas.com.ar/yoga"><img src ={process.env.PUBLIC_URL + "/images/adidas-banner.jpg"} className="article__banner" alt="modelo de Adidas"/></a>
        </article>
    )
}

export default Article;