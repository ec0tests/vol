import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import ico_f from '../../images/face-ico-fondog.png';
import ico_t from '../../images/twitter-ico-fondog.png';
import ico_i from '../../images/insta-ico-fondog.png';
import ico_y from '../../images/yt-ico-fondog.png';
import ico_tr from '../../images/trip-ico-fondog.png';
import logo_gris from '../../images/logo-gris.png';

import $ from 'jquery';

/*Controlo si el menu está abierto o cerrado*/
var menu_abierto = false;

function show_menu() {

    $(".slideout-sidebar").removeClass('animated slideOutRight');

    $(".slideout-sidebar").addClass('animated slideInRight');

    $(".slideout-sidebar").show();
    $("#desplegable_boton2").show();
    menu_abierto = true;

}

function hide_menu() {
    $(".slideout-sidebar").removeClass('animated slideInRight');

    $(".slideout-sidebar").addClass('animated slideOutRight');

    $("#desplegable_boton2").hide();
    menu_abierto = false;
}

/*Hace que al clicar en cualquier sitio que no tenga la clase menu icon se ejecute el hide menu*/
$(document).on("click", function (e) {
    if ($(e.target).attr("class") != "Open-menu" && menu_abierto == true) {
        hide_menu();
    }
});

/* HAGO DESTRUCTURING: En vez de crear la const logo con props.logo le añado al parametro {} y le pongo de nomrbe el nombre de la prop que le paso
* así lo coge directamente*/
const Menu2 = ({logo}) => (
    <div>
        <button className="ml-4 menu-icon Open-menu" id="desplegable_boton1" onClick={show_menu}><i
            className="fa fa-bars text-white"></i></button>
        <span className="Cursor-pointer Open-menu" onClick={show_menu}>MENÚ</span>

        <div className="slideout-sidebar ">
            <div className="row">
                <div className="col-2 ml-4">
                    <button className="Btn-idioma">ES</button>
                </div>
                <div className="col-2">
                    <button className="Btn-idioma">CAT</button>
                </div>
                <div className="col-2">
                    <button className="Btn-idioma">EN</button>
                </div>
                <div className="col-2">
                    <button className="Btn-idioma">FR</button>
                </div>
                <div className="col-2 pl-5">

                    <button className="menu-icon" id="desplegable_boton2" onClick={hide_menu}><i
                        className="fas fa-times text-white"></i></button>
                </div>

            </div>
            <ul className="mt-4">

                <li><Link to="/pilotos" className="text-white">pilotos</Link></li>
                <li><Link to="/instalaciones" className="text-white">instalaciones</Link></li>
                <li><Link to="/blog" className="text-white">blog</Link></li>
                <li><Link to="/faq" className="text-white">FAQs</Link></li>
                <li>regalar vuelo</li>
                <li>infromación útil</li>
                <li>ubicación/meteorología</li>
                <li>contacto</li>
                <br/>
                <li className="pb-0">
                    <div className="col-12 mt-4 p-0 d-flex text-left align-items-center">
                        <div className="Div-ico">
                            <img src={ico_f} alt=""/>
                        </div>
                        <div className="Div-ico">
                            <img src={ico_t} alt=""/>


                        </div>
                        <div className="Div-ico">
                            <img src={ico_i} alt=""/>


                        </div>
                        <div className="Div-ico">
                            <img src={ico_y} alt=""/>

                        </div>
                        <div className="Div-ico">
                            <img src={ico_tr} alt=""/>
                        </div>
                    </div>
                </li>
                <li className="pl-0 pb-0">
                    <img className="Fondo-logo-menu" src={logo_gris} alt=""/>
                </li>
            </ul>

        </div>
    </div>
)

export default Menu2;

