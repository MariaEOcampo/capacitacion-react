import React from 'react';
import '../../App';
import '../aside/style-aside.scss';
import foto from '../../images/desayuno.JPG'

function Aside(){
    return(
        <div className = 'aside'>
            <h3>La red dice</h3>
            <img src = {foto} className = 'aside_image' alt='foto de un desayuno'/>
        </div>
    )
}

export default Aside;