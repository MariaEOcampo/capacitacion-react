import React from 'react';
import './styles/styles.css';



function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <figure>
        <img src='https://upload.wikimedia.org/wikipedia/commons/2/22/Infobae_logo.svg' className="App-logo" alt="logo" />
        </figure>
        <p className = 'Fecha'> {/* despues usar moment para colocar la fecha */}
          Lunes 27 de abril de 2020 
        </p>
      </header>
      <nav>
        <ul className ='Navbar-menu'>
          <li className ='Navbar-menu-item'>América</li>
          <li className ='Navbar-menu-item'>Teleshow</li>
          <li className ='Navbar-menu-item'>Deportes</li>
          <li className ='Navbar-menu-item'>Tendencias</li>
        </ul>
      </nav>
      <section className = "Temario">
      <ul className ='Sugeridas'>
          <li className ='Sugeridas-menu-item'>Ultimas Noticias</li>
          <li className ='Sugeridas-menu-item'>Coronavirus</li>
          <li className ='Sugeridas-menu-item'>Estadísticas de la pandemia</li>
          <li className ='Sugeridas-menu-item'>Podcast</li>
        </ul>
      </section>
      <section className='Principales'>
        <h3>El Gobierno, la UIA y la CGT acordaron que las suspensiones de trabajadores tendrán una rebaja salarial del 25%</h3>
        <p className = 'Principales-textos'>La UIA y la CGT llegaron a un acuerdo con el Gobierno para definir el tope del descuento salarial de los trabajadores suspendidos por falta de tareas: será del 25% del sueldo neto y se plasmará en un decreto o resolución que servirá como orientación para las negociaciones que mantienen empresarios y sindicalistas durante abril y mayo.

        El entendimiento, que se cerró luego de intensas tratativas que terminaron esta tarde, permitirá que quienes no tengan tareas como producto de la cuarentena podrán ser suspendidos y cobrarán una suma que no podrá ser menor al 75% del salario, alternativa que ya acordaron en distintas actividades, pero ahora se evitará la actual dispersión de porcentajes de baja de sueldos y este esquema se complementará con el pago del 50% del salario por parte del Estado que fijó el decreto 376.

        El sindicalismo presionaba para que las suspensiones pagas, que se multiplicaron por la parálisis económica que provoca la cuarentena, se pudieran firmar dentro de un acuerdo general que estableciera un tope de rebaja salarial del 20%, pero para el empresariado esa cifra era “inviable”.

        Lo que precipitó esta discusión desde hace una semana fue el dictado del decreto 376, mediante el cual el Gobierno se comprometió a pagar la mitad del sueldo de los trabajadores de las empresas en crisis (hasta un máximo de $33.750 por empleado) y el descuento de las contribuciones patronales.

        De esta forma, la CGT planteó el martes pasado que que si el Estado pagará el 50% del sueldo de quienes están hoy sin tareas, el otro 50% podrían abonarlo las empresas para que los trabajadores puedan percibir sus salarios completos. La UIA rechazó esa propuesta porque considera que no sería justo que un empleado que no está trabajando cobre lo mismo que alguien que está cumpliendo sus tareas. Para intentar una solución, el ministro de Trabajo, Claudio Moroni, propuso entonces que ambas partes y el Gobierno definieran un piso de porcentaje salarial para las suspensiones que se ubique entre el 50% que proponen los empresarios y el 100% que pretenden los gremios.

        Las negociaciones se intensificaron luego de que este fin de semana los dirigentes sindicales le comunicaron a la Casa Rosada que bajaban su pretensión del 100% al 80%, pero los negociadores de la UIA desestimaron esa propuesta y volvieron a discutir los términos del acuerdo.</p>
        <figure>
          <image src = 'https://www.infobae.com/new-resizer/g54aU6RSFOjdy_ZAVzVJW4wdJoU=/750x0/filters:quality(100)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/S4R53XJ3J5ATJKVE6SDQT4MAZE.jpg' className ='Imagen-noticias'/>
        </figure>
        <h3>Tasa cero para monotributistas y autónomos: el Gobierno definió los últimos requisitos para acceder a los nuevos créditos</h3>
        <p className = 'Principales-textos'>La semana pasada, el Gobierno anunció que otorgaría créditos a tasa cero para monotributistas y trabajadores autónomos, con un tope de $150.000 en tres cuotas y a través del saldo en la tarjeta de crédito y fue detallando los requisitos que deben cumplir estos contribuyentes, que no están en relación de dependencia. Ahora, a través de la Decisión Administrativa 663/2020 publicada el fin de semana en el Boletín Oficial, terminó de reglamentar las condiciones que se tienen que cumplir en cada caso y la forma de acceder al crédito.

Monotributistas

- Se pueden encontrar alcanzados por el beneficio del Ingreso Familiar de Emergencia.

- No prestar servicios al sector público nacional, provincial o municipal. Esa situación es cuando por lo menos el 70% de su facturación entre el 12 de marzo y el 12 de abril de 2020 fue emitida a favor de jurisdicciones o entidades del Estado.

- No percibir ingresos por un trabajo en relación de dependencia o una jubilación.

- Que el monto de la facturación electrónica del período comprendido entre el 12 de marzo y el 12 de abril de 2020 haya caído por debajo del promedio mensual del ingreso bruto mínimo de su categoría.

- No serán elegibles monotributistas con situación crediticia 3, 4, 5 o 6. En caso de varias situaciones crediticias informadas, se considerará la correspondiente al monto de deuda más alto.

- Los beneficiarios no deberían acceder al mercado único y libre de cambios para la compra de dólares ni adquirir títulos valores en pesos para su venta en moneda extranjera (la modalidad de “contado con liquidación”) o transferencia en custodia al exterior hasta la cancelación total del crédito.</p>
        <figure>
          <image src=''/>
        </figure>
        <h3>Noticia 3</h3>
        <h3>Noticia 4</h3>
        <h3>Noticia 4</h3>
        <h3>Noticia 4</h3>
        <h3>Noticia 4</h3>
        <h3>Noticia 4</h3>
      </section>
      <section className='Galeria'>

      </section>
      <aside>
        <p>PUBLICIDAD</p>
        <p>ESPECTACULOS</p>
      </aside>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
