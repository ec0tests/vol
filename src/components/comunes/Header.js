import React, {Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom'
import logo from '../../images/Globo-header-w.png'
import Menu2 from './Menu2'
import $ from 'jquery';




/*Controlo si el menu está abierto o cerrado*/
var megamenu_abierto = false;

function show_megamenu() {

    $(".Megamenu").addClass('Megamenu-open');
    $(".Megamenu-div").fadeIn();
    megamenu_abierto = true;

}

function hide_megamenu() {

    $(".Megamenu-div").fadeOut();
    $(".Megamenu").removeClass('Megamenu-open');


    megamenu_abierto = false;
}

function show_megamenu_movil() {

    $(".Megamenu-movil").addClass('Megamenu-open');
    $(".Megamenu-div-movil").fadeIn();
    megamenu_abierto = true;

}

function hide_megamenu_movil() {

    $(".Megamenu-div-movil").fadeOut();
    $(".Megamenu-movil").removeClass('Megamenu-open');


    megamenu_abierto = false;
}

/*Hace que al clicar en cualquier sitio que no tenga la clase menu icon se ejecute el hide menu*/
$(document).on("click", function (e) {
    if ($(e.target).attr("class") != "Open-megamenu" && megamenu_abierto == true) {
        hide_megamenu();
    }
});
$(document).ready(function () {
    if($(window).width() <= 600) {
        $('#logo').attr('src',logo);

    };
})

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

/* HAGO DESTRUCTURING: En vez de crear la const logo con props.logo le añado al parametro {} y le pongo de nomrbe el nombre de la prop que le paso
* así lo coge directamente*/
const Header = ({logo}) => (
    <header className="text-white">
        <div className="container-fluid">
            <div className="row p-md-3 p-0 pt-2 pt-md-0 pl-0 pl-md-5">
                <div className="col-6 col-md-6 text-left pb-0 pb-md-4 pb-md-0 pl-0 ">
                    <a href="http://167.99.208.80/"><img src={logo} id="logo" className="img-fluid Logo-top" alt=""/></a>
                </div>
                <div className="col-6 col-md-6 d-flex align-items-center justify-content-end pr-1 pr-md-5 P-initial">
                    <div>
                        <button id="btn_megamenu" onClick={show_megamenu} className="Megamenu text-uppercase Open-megamenu d-none d-md-block">Vuelos en globo</button>
                        {/*Boton movil*/}
                        <button id="btn_megamenu" onClick={show_megamenu_movil} className="Megamenu text-uppercase Open-megamenu d-md-none">Vuelos en globo</button>


                    </div>
                   <Menu2/>
                </div>
                </div>
            </div>
        <div className="col-12 Megamenu-div ">
            <nav className="row mb-1">
                <div className="col-md-3">
                    <ul>
                        <li className="mb-3"> <span className="T-megamenu">vuelos compartidos</span> </li>
                        <li> <span>vuelos compartidos</span> </li>
                        <li> <span>vuelos compartidos</span> </li>
                        <li> <span>vuelos compartidos</span> </li>
                        <li> <span>vuelos compartidos</span> </li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul>
                        <li className="mb-3"> <span className="T-megamenu">vuelos compartidos</span> </li>
                        <li> <span>vuelos compartidos</span> </li>
                        <li> <span>vuelos compartidos</span> </li>
                        <li> <span>vuelos compartidos</span> </li>
                        <li> <span>vuelos compartidos</span> </li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul>
                        <li className="mb-3"> <span className="T-megamenu">vuelos compartidos</span> </li>
                        <li> <span>vuelos compartidos</span> </li>
                        <li> <span>vuelos compartidos</span> </li>
                        <li> <span>vuelos compartidos</span> </li>
                        <li> <span>vuelos compartidos</span> </li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul>
                        <li className="mb-3"> <span className="T-megamenu">vuelos compartidos</span> </li>
                        <li> <span>vuelos compartidos</span> </li>
                        <li> <span>vuelos compartidos</span> </li>
                        <li> <span>vuelos compartidos</span> </li>
                        <li> <span>vuelos compartidos</span> </li>
                    </ul>
                </div>
            </nav>
            <div className="row mt-5">
                <div className="col-md-6 text-right">
                    <a href="/filtro">
                        <button className="Btn-skinnyblue">ver ofertas</button>
                    </a>
                </div>
                <div className="col-md-6 text-left">
                    <a href="/filtro">
                        <button className="Btn-red">todos los vuelos</button>
                    </a>
                </div>
            </div>
        </div>

   <div className="col-12 Megamenu-div-movil">
       <div className="row">
           <span className="Cruz" onClick={hide_megamenu_movil}>x</span>
       </div>
            <nav className="row mb-1 text-left">
                <div className="col-md-3 ">
                    <p className="accordion text-white text-uppercase">vuelos compartidos</p>
                    <div className="panel text-white">
                        <li><span>vuelos compartidos</span></li>
                        <li><span>vuelos compartidos</span></li>
                        <li><span>vuelos compartidos</span></li>
                        <li><span>vuelos compartidos</span></li>
                    </div>
                </div>
                <div className="col-md-3 ">
                    <p className="accordion text-white text-uppercase">vuelos compartidos</p>
                    <div className="panel text-white">
                        <li><span>vuelos compartidos</span></li>
                        <li><span>vuelos compartidos</span></li>
                        <li><span>vuelos compartidos</span></li>
                        <li><span>vuelos compartidos</span></li>
                    </div>
                </div>
                <div className="col-md-3 ">
                    <p className="accordion text-white text-uppercase">vuelos compartidos</p>
                    <div className="panel text-white">
                        <li><span>vuelos compartidos</span></li>
                        <li><span>vuelos compartidos</span></li>
                        <li><span>vuelos compartidos</span></li>
                        <li><span>vuelos compartidos</span></li>
                    </div>
                </div>
                <div className="col-md-3 ">
                    <p className="accordion text-white text-uppercase">vuelos compartidos</p>
                    <div className="panel text-white">
                        <li><span>vuelos compartidos</span></li>
                        <li><span>vuelos compartidos</span></li>
                        <li><span>vuelos compartidos</span></li>
                        <li><span>vuelos compartidos</span></li>
                    </div>
                </div>
            </nav>
            <div className="row pt-3">
                <div className="col-12 text-center">
                    <a href="/filtro">
                        <button className="Btn-skinnyblue">ver ofertas</button>
                    </a>
                </div>
                <div className="col-12 text-center mt-3">
                    <a href="/filtro">
                        <button className="Btn-red">todos los vuelos</button>
                    </a>
                </div>
            </div>
        </div>

    </header>
)

export default Header;

