import React, {Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom'
import ico_f from '../../images/face-ico-fondog.png';
import ico_t from '../../images/twitter-ico-fondog.png';
import ico_i from '../../images/insta-ico-fondog.png';
import ico_y from '../../images/yt-ico-fondog.png';
import ico_tr from '../../images/trip-ico-fondog.png';
import logo_gris from '../../images/logo-gris.png';
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

/*Hace que al clicar en cualquier sitio que no tenga la clase menu icon se ejecute el hide menu*/
$(document).on("click", function (e) {
    if ($(e.target).attr("class") != "Open-megamenu" && megamenu_abierto == true) {
        hide_megamenu();
    }
});
/* HAGO DESTRUCTURING: En vez de crear la const logo con props.logo le añado al parametro {} y le pongo de nomrbe el nombre de la prop que le paso
* así lo coge directamente*/
const Header = ({logo}) => (
    <header className="text-white">
        <div className="container-fluid">
            <div className="row p-3 pl-5">
                <div className="col-12 col-md-6 text-left">
                    <a href="http://167.99.208.80/"><img src={logo} className="img-fluid" alt=""/></a>
                </div>
                <div className="col-12 col-md-6 d-flex align-items-center justify-content-end pr-5 P-initial">
                    <div>
                        <button id="btn_megamenu" onClick={show_megamenu} className="Megamenu text-uppercase Open-megamenu">Vuela en globo</button>


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

    </header>
)

export default Header;

