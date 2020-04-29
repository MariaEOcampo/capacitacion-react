import React from 'react';
import '../../App';
import '../section_one/style-section.scss';
import fotofitness from '../../../public/images/fitness.jpg';

function SectionOne(){
    return(
        <div className = 'section'>
            <h3 className = 'section_tittle'>Fitness en casa</h3>
            <img src = {fotofitness} className = 'section_image' alt='mujer fitness'/>
            <p className = 'section_text'>Abdominales combinados con hombros: 45 segundos x 5 series. Se pueden combinar con mancuernas para agregar peso. Hay mancuernas de diferentes pesos y formas. Los pesajes comienzan en los 1kg y hay hasta 4 kilos para levantar cada una.
             Abdominales en fitball: 45 segundos x 5 series. Los beneficios de la fitball son varios ya que es muy utilizada en los gimnasios como método de tonificación y fortalecimiento muscular en los abdominales y la zona lumbar.
            Ejercicio de coordinación y abdominales. Utilizando pelotas con peso y con las piernas levantadas tipo V y pasándolas por debajo haciendo “bicicleta”.</p>
        </div>
    )
}

export default SectionOne;