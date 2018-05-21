import React, {Component} from 'react';


import './Usuario.css'




const Usuario = ({nombre_usu})=> (


    <li class="dd-item " data-id="1">
        <div class="dd-handle Pregunta-adm">
            <h6 className="mb-0">{nombre_usu}  <i class="fas fa-times P-absolute Edit-adm-usu"></i>  <i class="fas fa-pencil-alt P-absolute Cross-adm-usu"></i></h6>


        </div>
    </li>
)


export default Usuario;