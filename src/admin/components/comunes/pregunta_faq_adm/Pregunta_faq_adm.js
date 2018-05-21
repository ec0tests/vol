import React, {Component} from 'react';


import './Pregunta_faq_adm.css'




const Pregunta_faq_adm = ({pregunta,respuesta})=> (


    <li class="dd-item " data-id="1">
        <div class="dd-handle Pregunta-adm">
            <h6>{pregunta}  <i class="fas fa-times P-absolute Cross-adm-pilotos"></i></h6>
            <p>{respuesta}</p>

        </div>
    </li>
)


export default Pregunta_faq_adm;