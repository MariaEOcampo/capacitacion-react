import React from 'react';
import '../../App';
import '../section_one/style-section.scss';

function SectionTwo(){
    return(
        <section className = "section">
            <h3 className = "section_tittle">Recetas</h3>
            <img src = {process.env.PUBLIC_URL + "/images/recipe.jpg"} className = "section_image" alt="mujer fitness"/>
            <p className = "section_text">Tener más tiempo en el hogar permite, entre otras cosas, poder dedicarle a la preparación de los platos una atención especial. Al disponer de un plan de alimentación semanal se puede ir al supermercado a hacer una compra consciente para poder tener a mano los ingredientes necesarios.
            “Se puede comer saludable, rico y a un precio accesible estando en cuarentena, para ello es fundamental tener la alacena, la heladera y el freezer bien equipados”, afirma la nutricionista Valentina Martínez, en charla con Infobae.
            “Hay ingredientes fáciles y que nos puede salvar de más de un apuro, como harina preferentemente integral, polvo de hornear o harina leudante, endulzante o azúcar preferente integral, legumbres ya sean secas o en latas como de lentejas, arvejas, porotos, garbanzos, etc y por último es fundamental contar con un par de condimentos como orégano, pimienta, provenzal, pimentón, ají molido”, afirma la profesional, que a través de su cuenta de Instagram @cocinandoando_ presenta tips y preparaciones.
            </p>
        </section>
    )
}

export default SectionTwo;