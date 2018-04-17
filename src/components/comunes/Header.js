import React, {Component} from 'react';
import './Header.css';

import ico_f from '../../images/face-ico-fondog.png';
import ico_t from '../../images/twitter-ico-fondog.png';
import ico_i from '../../images/insta-ico-fondog.png';
import ico_y from '../../images/yt-ico-fondog.png';
import ico_tr from '../../images/trip-ico-fondog.png';
import logo_gris from '../../images/logo-gris.png';

import $ from 'jquery';

function show_menu() {

    $(".slideout-sidebar").show();

    $("#desplegable_boton1").hide();
    $("#desplegable_boton2").show();
}

function hide_menu() {


    $(".slideout-sidebar").hide();
    $("#desplegable_boton2").hide();
    $("#desplegable_boton1").show();
}

$(document).on("click", function(e){
    if($(e.target).attr("class") != "menu-icon"){
        hide_menu();
    }
});

/* HAGO DESTRUCTURING: En vez de crear la const logo con props.logo le añado al parametro {} y le pongo de nomrbe el nombre de la prop que le paso
* así lo coge directamente*/
const Header = ({logo}) => (
    <header className="text-white">
        <div className="container-fluid">
            <div className="row p-3 pl-5">
                <div className="col-6 text-left">
                    <a href="http://167.99.208.80/"><img src={logo} className="img-fluid" alt=""/></a>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-end pr-5">
                    <button className="Megamenu text-uppercase">Vuela en globo</button>
                    <button className="ml-4 menu-icon" id="desplegable_boton1" onClick={show_menu}><i
                        className="fa fa-bars text-white"></i></button>
                    <span className="Cursor-pointer" onClick={show_menu}>MENÚ</span>

                        <div className="slideout-sidebar">
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

                                <li><a href="/pilotos" className="text-white">pilotos</a></li>
                                <li><a href="/instalaciones" className="text-white">instalaciones</a></li>
                                <li><a href="/blog" className="text-white">blog</a></li>
                                <li><a href="/faq" className="text-white">FAQs</a></li>
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
            </div>
        </div>
    </header>
)

export default Header;

