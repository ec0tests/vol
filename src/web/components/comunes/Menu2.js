import React, {Component} from 'react';
import {Link} from 'react-router-dom'



import ico_f from '../../images/facebook-3.png';
import ico_t from '../../images/twitter-3.png';
import ico_i from '../../images/instagram-3.png';
import ico_y from '../../images/youtube-3.png';
import ico_tr from '../../images/tripadvisor-3.png';
import logo_gris from '../../images/logo-gris.png';

import ico_fw from '../../images/Icon-RRSS-fb-b-55.png';
import ico_tw from '../../images/Icon-RRSS-tw-b-55.png';
import ico_iw from '../../images/Icon-RRSS-in-b-55.png';
import ico_trw from '../../images/Icon-RRSS-tr-b-55.png';
import ico_yw from '../../images/Icon-RRSS-yt-b-55.png';

import $ from 'jquery';
import tingle from "tingle.js";
/*Controlo si el menu está abierto o cerrado*/
var menu_abierto = false;
// instanciate new modal
var modal_meteorologico = new tingle.modal({
    footer: false,
    stickyFooter: true,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
    onOpen: function () {
        console.log('modal open');
    },
    onClose: function () {
        console.log('modal closed');
    },
    beforeClose: function () {
        // here's goes some logic
        // e.g. save content before closing the modal
        return true; // close the modal
        return false; // nothing happens
    }
});

modal_meteorologico.setContent('<div id="modal_meteo"></div>');

function openMeteo() {
    modal_meteorologico.open();
    /*ESTE MODAL al poner un iframe lo tengo que poner con el .html una vez se ha abierto el modal ya que al poner el contenido antes de abrirlo
    *  como con los otros modales del plugin da error*/
    $("#modal_meteo").html('<iframe class="Iframe-weather"  src="https://embed.windy.com/embed2.html?lat=42.151348&lon=2.526704&zoom=8&level=surface&overlay=wind&menu=&message=true&marker=&calendar=&pressure=&type=map&location=coordinates&detail=true&detailLat=42.151348&detailLon=2.526704&metricWind=default&metricTemp=default" frameborder="0"></iframe>');
}

function show_menu() {

    $(".slideout-sidebar").removeClass('animated slideOutRight');

    $(".slideout-sidebar").addClass('animated slideInRight');

    $(".slideout-sidebar").show();
    $(".Menu-boton").show();
    menu_abierto = true;

}

$( document ).ready(function() {
    $('.trigger').on('click', function() {
        $('.modal-wrapper').toggleClass('open');
        $('.page-wrapper').toggleClass('blur-it');
        return false;
    });
});
function hide_menu() {
    $(".slideout-sidebar").removeClass('animated slideInRight');

    $(".slideout-sidebar").addClass('animated slideOutRight');

    $(".Menu-boton").hide();
    menu_abierto = false;
}

/*Hace que al clicar en cualquier sitio que no tenga la clase menu icon se ejecute el hide menu*/
$(document).on("click", function (e) {
    if ($(e.target).attr("class") != "Open-menu" && menu_abierto == true) {
        hide_menu();
    }
});

/*CHANGE IMAGES MENU ONHOVER*/
$(function(){
    /*$("#menu_face").on({
        mouseenter: function(){
            $(this).attr('src',ico_fw);
        },
        mouseleave: function(){
            $(this).attr('src',ico_f);
        }
    });

    $("#menu_insta").on({
        mouseenter: function(){
            $(this).attr('src',ico_iw);
        },
        mouseleave: function(){
            $(this).attr('src',ico_i);
        }
    });

    $("#menu_youtube").on({
        mouseenter: function(){
            $(this).attr('src',ico_yw);
        },
        mouseleave: function(){
            $(this).attr('src',ico_y);
        }
    });

    $("#menu_trip").on({
        mouseenter: function(){
            $(this).attr('src',ico_trw);
        },
        mouseleave: function(){
            $(this).attr('src',ico_tr);
        }
    });

    $("#menu_twitter").on({
        mouseenter: function(){
            $(this).attr('src',ico_tw);
        },
        mouseleave: function(){
            $(this).attr('src',ico_t);
        }
    });*/

});


/* HAGO DESTRUCTURING: En vez de crear la const logo con props.logo le añado al parametro {} y le pongo de nomrbe el nombre de la prop que le paso
* así lo coge directamente*/
const Menu2 = ({logo}) => (
    <div className="d-flex align-items-center">
        <button className="ml-2 ml-md-4 mr-3 mr-lg-0 menu-icon Open-menu Btn-pad" id="desplegable_boton1" onClick={show_menu}><i
            className="fa fa-bars text-white F-icosi"></i></button>
        <span className="Cursor-pointer Open-menu d-none d-md-inline" onClick={show_menu}>MENÚ</span>

        <div className="slideout-sidebar Div-menu2">
            <div className="row  d-none d-md-flex">
                <div className="col-2 ml-3">
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
                <div className="col-2 pl-4 pr-0">

                    <button className="menu-icon w-auto Menu-boton" onClick={hide_menu}><i
                        className="fas fa-times text-white"></i></button>
                </div>

            </div>
            <div className=" d-md-none">
                <div className="Menu-trad ml-3">
                    <button className="Btn-idioma">ES</button>
                </div>
                <div className="Menu-trad">
                    <button className="Btn-idioma">CAT</button>
                </div>
                <div className="Menu-trad">
                    <button className="Btn-idioma">EN</button>
                </div>
                <div className="Menu-trad">
                    <button className="Btn-idioma">FR</button>
                </div>
                <div className="col-2 pl-4 pr-0 Menu-boton-movil">

                    <button className="menu-icon w-auto  Menu-boton " onClick={hide_menu}><i
                        className="fas fa-times text-white"></i></button>
                </div>

            </div>

            <ul className="mt-4 Menu-2">
                <a href="/filtro" className="text-white"><li className="Barlow">regalar vuelo</li></a>

              {/*  <a href="/" className="text-white"><li className"Barlow>home</li></a>*/}
                <a href="/instalaciones" className="text-white"><li className="Barlow">instalaciones</li></a>
                <a href="/faq" className="text-white"><li className="Barlow">FAQs</li></a>

                <a href="/pilotos" className="text-white"><li className="Barlow">pilotos</li></a>
                <li  onClick={openMeteo} className="Barlow">ubicación/meteorología</li>

                <a href="/blog" className="text-white"> <li className="Barlow">blog</li></a>

                <a href="/contact" className="text-white"><li className="Barlow">Contacto</li></a>
                {/*   <li>infromación útil</li>*/}


                {/* <li>ubicación/meteorología</li>*/}
                <br/>
                <li className="pb-0">
                    <div className="col-12 mt-4 p-0 d-flex text-left align-items-center">
                        <div className="Div-ico">
                            <a target="_blank" href="https://es-es.facebook.com/voldecoloms/" > <img id="menu_face" src={ico_f} alt=""/></a>
                        </div>
                        <div className="Div-ico">
                            <a target="_blank" href="https://twitter.com/voldecoloms" > <img id="menu_twitter" src={ico_t} alt=""/></a>
                        </div>
                        <div className="Div-ico">
                            <a target="_blank" href="https://www.instagram.com/voldecoloms/">  <img id="menu_insta"  src={ico_i} alt=""/></a>
                        </div>
                        <div className="Div-ico">
                            <a target="_blank" href="https://www.youtube.com/user/Voldecoloms" > <img id="menu_youtube" src={ico_y} alt=""/></a>
                        </div>
                        <div className="Div-ico">
                            <a  target="_blank" href="https://www.tripadvisor.es/Attraction_Review-g911486-d3247038-Reviews-Vol_de_Coloms-Olot_Province_of_Girona_Catalonia.html"> <img id="menu_trip" src={ico_tr} alt=""/></a>
                        </div>
                    </div>
                </li>
                <li className="pl-0 pb-0">
                    <img className="d-none d-md-block Fondo-logo-menu" src={logo_gris} alt=""/>
                </li>
            </ul>

        </div>
    </div>
)

export default Menu2;

