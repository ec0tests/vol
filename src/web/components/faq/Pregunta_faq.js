import React, {Component} from 'react';
import $ from 'jquery';

import bkg from '../../images/instalacion1.jpg';
import flecha_abajo from '../../images/flecha-abajo.png';
import flecha_arriba from '../../images/flecha-arriba.png';
import './Pregunta_faq.css'


document.addEventListener("DOMContentLoaded", function (event) {
    var abierto = false;


    var acc = document.getElementsByClassName("accordion");
    var panel = document.getElementsByClassName('panel');

    for (var i = 0; i < acc.length; i++) {
        acc[i].onclick = function () {
            var setClasses = !this.classList.contains('active');
            setClass(acc, 'active', 'remove');
            setClass(panel, 'show', 'remove')


            if (setClasses) {
                this.classList.toggle("active");
                this.nextElementSibling.classList.toggle("show");
            }
        }
    }

    function setClass(els, className, fnName) {
        for (var i = 0; i < els.length; i++) {
            els[i].classList[fnName](className);
        }
    }


});

const Pregunta_faq = ({pregunta, respuesta}) => (

    <div className=" w-100 Pregunta-div mb-4 Instalacionp Click ">
      {/*  <img src={flecha_abajo} className="d-md-none Flechas-faq Flecha-abajo Click Z-index-bajo" alt=""/>
        <img src={flecha_arriba} className="d-md-none Flechas-faq Ocultar Flecha-arriba Click Z-index-bajo" alt=""/>*/}
        <p className="accordion">{pregunta}</p>
        <div className="panel"><p>{respuesta}</p></div>


    </div>

)


export default Pregunta_faq;