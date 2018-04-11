
import React, {Component} from 'react';
import './Header.css';
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
/* HAGO DESTRUCTURING: En vez de crear la const logo con props.logo le añado al parametro {} y le pongo de nomrbe el nombre de la prop que le paso
* así lo coge directamente*/
const Header = ({logo}) => (
       <header className="text-white">
        <div className="container-fluid">
            <div className="row p-3 pl-5">
                <div className="col-6 text-left">
                    <img src={logo} className="img-fluid" alt=""/>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-end pr-5">
                    <button className="Megamenu">Vuela en globo</button>
                    <span className="ml-4">MENÚ</span>
                    <button  className="menu-icon" id="desplegable_boton1" onClick={show_menu}><i className="fa fa-bars text-white"></i></button>

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

                            <button  className="menu-icon" id="desplegable_boton2" onClick={hide_menu}><i className="fas fa-times text-white"></i></button>
                            </div>

                        </div>
                        <ul className="mt-4">

                            <li><a href="/pilotos" className="text-white">pilotos</a> </li>
                            <li><a href="/instalaciones" className="text-white">instalaciones</a></li>
                            <li><a href="/blog" className="text-white">blog</a></li>
                            <li>regalar vuelo</li>
                            <li>infromación útil</li>
                            <li>faqs</li>
                            <li>ubicación/meteorología</li>
                            <li>contacto</li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
)

export default Header;

