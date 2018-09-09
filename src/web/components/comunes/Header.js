import React, {Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom'
import logo from '../../images/Globo-header-w.png'
import Menu2 from './Menu2'
import $ from 'jquery';
import flecha_abajo from '../../images/flecha-abajo.png';
import flecha_arriba from '../../images/flecha-arriba.png';

/*Controlo si el menu está abierto o cerrado*/
var megamenu_abierto = false;

function show_megamenu() {

    $(".Megamenu").addClass('Megamenu-open');
    $(".Megamenu-div").fadeIn();
    $("#nav").addClass('Ocultar');
    $("#return-to-top").addClass('Ocultar_important');
    megamenu_abierto = true;

}

function hide_megamenu() {

    $(".Megamenu-div").fadeOut();
    $(".Megamenu").removeClass('Megamenu-open');

    $("#nav").removeClass('Ocultar');
    $("#return-to-top").removeClass('Ocultar_important');

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
    /*CAMBIA EL LOGO SEGÚN EL TAMAÑO DE PANTALLA*/
    if ($(window).width() <= 768) {
        $('#logo').attr('src', logo);

    }
    ;
    /*CODIGO PARA HACER EL HEADER FIXED AL HACER SCROLL*/
    $(window).scroll(function(){
        if ($(window).width() > 768) {

            if ($(this).scrollTop() > 100) {
            $('.Header-fix').addClass('Fixed-header');
            $('.D-none-menu-fixed').hide();

        } else {
            $('.Header-fix').removeClass('Fixed-header');
                $('.D-none-menu-fixed').show();


        }}
    });
})


/*ACORDEON PARA LOS MENUS MOVIL*/
document.addEventListener("DOMContentLoaded", function (event) {


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

/* HAGO DESTRUCTURING: En vez de crear la const logo con props.logo le añado al parametro {} y le pongo de nomrbe el nombre de la prop que le paso
* así lo coge directamente*/
const Header = ({logo}) => (
    <header className="text-white Header-fix">
        <div className="container-fluid">
            <div className="row pt-md-3 p-0 pt-2 pt-md-0 pl-0 pl-md-5 pb-0 justify-content-between">
                <div className="col-2 col-sm-5 col-md-5 text-left pb-0  pl-0 Mr-movil-logo">
                    <a href="http://167.99.208.80/"><img src={logo} id="logo" className="img-fluid Logo-top"
                                                         alt=""/></a>
                </div>
                <div className="col-6 col-md-6 d-flex align-items-center justify-content-end pr-1 pr-md-2 P-initial pr-md-4">
                    <div className="Pr-16">
                        <button id="btn_megamenu" onClick={show_megamenu}
                                className="Megamenu text-uppercase Open-megamenu Btn-megamenu">Vuelos en globo
                        </button>
                        {/*Boton movil*/}
                        <button id="btn_megamenu" onClick={show_megamenu_movil}
                                className="Megamenu text-uppercase Open-megamenu  Btn-megamenu-movil">Vuelos en globo
                        </button>


                    </div>
                    <Menu2/>
                </div>
            </div>
        </div>
        {/*MENU DESkTOP*/}
        <div className="col-12 Megamenu-div P-relative">
            <button className="menu-icon w-auto Megamenu-cruz"  onClick={hide_megamenu}><i
                className="fas fa-times text-white"></i></button>
            <nav className="row mb-1">
                <div className="col-md-3 Megamenu-text-little">
                    <ul>
                        <li className="mb-3"><span className="T-megamenu">vuelos compartidos</span></li>
                        <a href="/filtro"> <a href="/filtro">
                            <li><span>vuelos compartidos</span></li>
                        </a>
                        </a>
                        <a href="/filtro">
                            <li><span>vuelos compartidos</span></li>
                        </a>

                        <a href="/filtro">
                            <li><span>vuelos compartidos</span></li>
                        </a>

                        <a href="/filtro">
                            <li><span>vuelos compartidos</span></li>
                        </a>

                    </ul>
                </div>
                <div className="col-md-3 Megamenu-text-little">
                    <ul>
                        <li className="mb-3"><span className="T-megamenu">vuelos compartidos</span></li>
                        <a href="/filtro">
                            <li><span>vuelos compartidos</span></li>
                        </a>

                        <a href="/filtro">
                            <li><span>vuelos compartidos</span></li>
                        </a>

                        <a href="/filtro">
                            <li><span>vuelos compartidos</span></li>
                        </a>

                        <a href="/filtro">
                            <li><span>vuelos compartidos</span></li>
                        </a>

                    </ul>
                </div>
                <div className="col-md-3 Megamenu-text-little">
                    <ul>
                        <li className="mb-3"><span className="T-megamenu">vuelos compartidos</span></li>
                        <a href="/filtro">
                            <li><span>vuelos compartidos</span></li>
                        </a>

                        <a href="/filtro">
                            <li><span>vuelos compartidos</span></li>
                        </a>

                        <a href="/filtro">
                            <li><span>vuelos compartidos</span></li>
                        </a>

                        <a href="/filtro">
                            <li><span>vuelos compartidos</span></li>
                        </a>

                    </ul>
                </div>
                <div className="col-md-3 Megamenu-text-little">
                    <ul>
                        <li className="mb-3"><span className="T-megamenu">vuelos compartidos</span></li>
                        <a href="/filtro">
                            <li><span>vuelos compartidos</span></li>
                        </a>

                        <a href="/filtro">
                            <li><span>vuelos compartidos</span></li>
                        </a>

                        <a href="/filtro">
                            <li><span>vuelos compartidos</span></li>
                        </a>

                        <a href="/filtro">
                            <li><span>vuelos compartidos</span></li>
                        </a>

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


            {/*MENU MOVIL*/}
        <div className="col-12 Megamenu-div-movil">
            <div className="row">
                <span className="Cruz text-white" onClick={hide_megamenu_movil}>x</span>
            </div>
            <nav className="row mb-1 text-left mb-5 mt-5 pt-4">
                <div className="col-md-12 ">
                    <p className="accordion text-white text-uppercase">vuelos compartidos</p>
                    <div className="panel text-white Megamenu-movil-white">
                        <li><span>vuelos compartidos</span></li>
                        <li><span>vuelos compartidos</span></li>
                        <li><span>vuelos compartidos</span></li>
                        <li><span>vuelos compartidos</span></li>
                    </div>
                </div>
                <div className="col-md-12 ">
                    <p className="accordion text-white text-uppercase">vuelos compartidos</p>
                    <div className="panel text-white Megamenu-movil-white">
                        <li><span>vuelos compartidos</span></li>
                        <li><span>vuelos compartidos</span></li>
                        <li><span>vuelos compartidos</span></li>
                        <li><span>vuelos compartidos</span></li>
                    </div>
                </div>
                <div className="col-md-12 ">
                    <p className="accordion text-white text-uppercase">vuelos compartidos</p>
                    <div className="panel text-white Megamenu-movil-white">
                        <li><span>vuelos compartidos</span></li>
                        <li><span>vuelos compartidos</span></li>
                        <li><span>vuelos compartidos</span></li>
                        <li><span>vuelos compartidos</span></li>
                    </div>
                </div>
                <div className="col-md-12 ">
                    <p className="accordion text-white text-uppercase">vuelos compartidos</p>
                    <div className="panel text-white Megamenu-movil-white">
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
                        <button className="Btn-red W-12r">todos los vuelos</button>
                    </a>
                </div>
                <div className="col-12 text-center  mt-3">
                    <a href="/filtro">
                        <button className="Btn-skinnyblue W-12r">ver ofertas</button>
                    </a>
                </div>

            </div>
        </div>

    </header>
)

export default Header;

