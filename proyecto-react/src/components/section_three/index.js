import React from 'react';
import '../../App';
import '../section_one/style-section.scss';
import belleza from '../../../public/images/belleza.jpg'

function SectionThree(){
    return(
        <div className = 'section'>
            <h3 className = 'section_tittle'>Fitness en casa</h3>
            <img src = {belleza} className = 'section_image' alt='mujer fitness'/>
            <p className = 'section_text'>No importa si tu piel es seca, normal, o grasosa. No tienes que invertir en muchas cremas, con un sólo producto que sea bueno puedes tener una piel de ensueño. 
            ‘A veces lo único que necesitas es una buena crema hidratante y un limpiador suave para quitarle años a tu cara’, afirma Rhoda Narins, MD profesora de la Universidad de Nueva York y presidente de la Sociedad Americana de Cirugía Dermatológica. ‘Cuando la piel está seca, cada arruga se acentúa, haciéndote parecer más vieja’.
            Si estás en tus 20 o 30 años, dicen los médicos, las cremas hidratantes te darán la protección que necesitas para prevenir el envejecimiento prematuro, afirma el cirujano plástico de Park Avenue, Darrick Antell, MD. 
            Pero entonces, ¿Qué es una ‘buena’ crema hidratante para ti? El Dermatólogo Carlos E. Crutchfield III, MD, dice: ‘Es un producto que añade humedad y sella la que ha logrado, permitiendo a la piel producir más humedad’. 
            Lo que necesitas es ver qué crema debes escoger según 
            las necesidades individuales de tu piel.</p>
        </div>
    )
}

export default SectionThree;