import React, { useState } from 'react';
import '../../App';
import './style-calc.scss';
import './calc';

const Calc = () => {
    const [peso, setPeso] = useState();
    const handlerPeso = e => setPeso(e.target.value);
    const [altura, setAltura] = useState();
    const handlerAltura = e => setAltura(e.target.value);
    return (
        <section className="calc">
            <h3 className="calc_tittle">Calculadora de IMC:  Indice de Masa Corporal</h3>
                <p className="calc_text">Ingresa tu peso (kg): <input type="text" value={peso} onChange={handlerPeso} id="kg" className="calc_input"/></p>
                <p className="calc_text">Ingresa tu Altura (m): <input type="text" value={altura} onChange={handlerAltura} id="m" className="calc_input"/></p>
                    <button id="calc" className="calc_button">Calcular</button>
                <p className="calc_text">IMC: <span id="imc"></span></p>
                <p className="calc_text">Lectura: <span id="lectura"></span></p>
        </section>
    )
}

export default Calc;