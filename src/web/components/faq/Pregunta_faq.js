import React, {Component} from 'react';


import bkg from '../../images/instalacion1.jpg';
import './Pregunta_faq.css'


document.addEventListener("DOMContentLoaded", function(event) {


    var acc = document.getElementsByClassName("accordion");
    var panel = document.getElementsByClassName('panel');

    for (var i = 0; i < acc.length; i++) {
        acc[i].onclick = function() {
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

const Pregunta_faq = ({pregunta,respuesta})=> (

            <div className=" w-100 Pregunta-div mb-4 Instalacionp">

                <p className="accordion">{pregunta}</p>
                <div className="panel"> <p>{respuesta}</p> </div>


            </div>

)


export default Pregunta_faq;