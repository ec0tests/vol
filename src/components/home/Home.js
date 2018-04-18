import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import bkg3_2 from '../../images/bkg-3-2.png';
import bkg3__ico from '../../images/seccion3-bkg-ico.png';
import bkg2 from '../../images/bkg-2.png';
import bkg1 from '../../images/bkg-1.png';
import act_ico from '../../images/Icon-Activ-gris-65.png';
import gast_ico from '../../images/Icon-Gast-gris-65.png';
import aloj_ico from '../../images/Icon-Aloj-gris-65.png';
import globo_ico1 from '../../images/Icon-Cat-Indi-b-85.png';
import globo_ico2 from '../../images/Icon-Cat-Nino-b-85.png';
import globo_ico3 from '../../images/Icon-Cat-Silla-b-85.png';
import globo_ico4 from '../../images/Icon-Cat-Pareja-b-85.png';
import globo_ico5 from '../../images/Icon-Cat-4amigo-b-85.png';
import globo_ico6 from '../../images/Icon-Cat-Grupo-b-85.png';

import ico_face from '../../images/Icon-RRSS-fb-b-55.png';
import ico_twitter from '../../images/Icon-RRSS-tw-b-55.png';
import ico_inst from '../../images/Icon-RRSS-in-b-55.png';
import ico_trip from '../../images/Icon-RRSS-tr-b-55.png';
import ico_youtube from '../../images/Icon-RRSS-yt-b-55.png';
import logo_b from '../../images/vdc-logo-b.png';

import redes_ico from '../../images/redes_sociales.png';

import './Home.css'
import Carousel_cards from "../comunes/Carousel_cards";
import Experiencia_completa from "../comunes/Experiencia_completa";
import Header from "../comunes/Header";
import Footer_patrocinadores from "../comunes/Footer_patrocinadores";
import Subetufoto from "../comunes/Subetufoto";
import tingle from "tingle.js";


window.loading_screen = window.pleaseWait({
    logo: "http://clientes-optimoclick.es/sergio/img-vol/logo.png",
    backgroundColor: '#2863B1',
    loadingHtml: "<div class=\"spinner\">\n" +
    "  <div class=\"bounce1\"></div>\n" +
    "  <div class=\"bounce2\"></div>\n" +
    "  <div class=\"bounce3\"></div>\n" +
    "</div>"

});


// instanciate new modal
var modal_privacy = new tingle.modal({
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

var modal_cookies = new tingle.modal({
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

var modal_legal = new tingle.modal({
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
// set content
modal_privacy.setContent('' +
    '<h2>Privacy Policy</h2>' +
    '<hr>' +
    '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, deserunt dignissimos dolore doloribus dolorum eius, impedit inventore laboriosam magnam molestias mollitia provident ratione repudiandae soluta suscipit velit, veniam voluptas?</p>' +
    '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, deserunt dignissimos dolore doloribus dolorum eius, impedit inventore laboriosam magnam molestias mollitia provident ratione repudiandae soluta suscipit velit, veniam voluptas?</p>' +
    '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, deserunt dignissimos dolore doloribus dolorum eius, impedit inventore laboriosam magnam molestias mollitia provident ratione repudiandae soluta suscipit velit, veniam voluptas?</p>'
);

modal_legal.setContent('' +
    '<h2>Legal Advice</h2>' +
    '<hr>' +
    '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, deserunt dignissimos dolore doloribus dolorum eius, impedit inventore laboriosam magnam molestias mollitia provident ratione repudiandae soluta suscipit velit, veniam voluptas?</p>' +
    '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, deserunt dignissimos dolore doloribus dolorum eius, impedit inventore laboriosam magnam molestias mollitia provident ratione repudiandae soluta suscipit velit, veniam voluptas?</p>' +
    '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, deserunt dignissimos dolore doloribus dolorum eius, impedit inventore laboriosam magnam molestias mollitia provident ratione repudiandae soluta suscipit velit, veniam voluptas?</p>'
);

modal_privacy.setContent('' +
    '<h2>Cookies</h2>' +
    '<hr>' +
    '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, deserunt dignissimos dolore doloribus dolorum eius, impedit inventore laboriosam magnam molestias mollitia provident ratione repudiandae soluta suscipit velit, veniam voluptas?</p>' +
    '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, deserunt dignissimos dolore doloribus dolorum eius, impedit inventore laboriosam magnam molestias mollitia provident ratione repudiandae soluta suscipit velit, veniam voluptas?</p>' +
    '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, deserunt dignissimos dolore doloribus dolorum eius, impedit inventore laboriosam magnam molestias mollitia provident ratione repudiandae soluta suscipit velit, veniam voluptas?</p>'
);

function openPrivacy() {
    modal_privacy.open();
}

function openLegal() {
    modal_legal.open();
}

function openCookies() {
    modal_cookies.open();
}

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                {/* <img src={bkg1} className="Section1-bkg" alt=""/>*/}

                <main id="Section1" className="Section1 ">
                    <Header logo={logo_b}/>
                    {/*
                ---------
                SECCION 1
                ---------*/}
                    {/*   Principal*/}
                    <div className="container pb-5 mb-5">
                        <div className="row">
                            <div className="col-12 text-left">
                                <h1 className=" display-1 Home-h1">VUELA EN GLOBO <br/>
                                    <span>en el parque natural de La Garrotxa</span></h1>
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-12 text-left ">
                                <Link to="/filtro"><button className="text-uppercase Btn-red-h mt-2">Reservar</button></Link>
                            </div>
                            <div className="col-12 text-left ">
                                <button className="text-uppercase Btn-darkblue-h mt-2">Canjear cupón</button>
                            </div>
                            <div className="col-12 text-left">
                                <button className="text-uppercase Btn-darkblue-h mt-2">regalar vuelo</button>
                            </div>
                        </div>
                    </div>
                    <div className="container pt-5">
                        <div className="row ">
                            <div className="Iconos-header col-6 p-0 px-4">
                                <h6 className="w-100">Globo Compartido</h6>
                                <div className="col-4">
                                    <img className="img-fluid" src={globo_ico1} alt=""/>
                                    <p className="mt-3 text-uppercase Little-text3 text-white">Adlutos</p>
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid" src={globo_ico2} alt=""/>

                                    <p className="mt-3 text-uppercase Little-text3 text-white">con niños</p>
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid" src={globo_ico3} alt=""/>

                                    <p className="mt-3 text-uppercase Little-text3 text-white">Silla de <br/> ruedas</p>
                                </div>
                            </div>
                            <div className="Iconos-header col-6 p-0 px-4">
                                <h6 className="w-100">Globo Compartido</h6>
                                <div className="col-4">
                                    <img className="img-fluid" src={globo_ico4} alt=""/>
                                    <p className="mt-3 text-uppercase Little-text3 text-white">En <br/> pareja </p>
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid" src={globo_ico5} alt=""/>

                                    <p className="mt-3 text-uppercase Little-text3 text-white">4 amigos</p>
                                </div>
                                <div className="col-4 Bottom-5">
                                    <img className="img-fluid" src={globo_ico6} alt=""/>

                                    <p className="mt-3 text-uppercase Little-text3 text-white">empresas </p>
                                </div>
                            </div>
                            <div className="col-12 mt-5 text-left">
                                <p className="text-white Little-text"><strong> <span
                                    className=" Asterisco"> * </span> Vuelos adaptados & 100% accesibles
                                </strong><br/> Personas mayores , discapacidades, sillas
                                    de ruedas </p>
                            </div>
                        </div>

                    </div>

                </main>

                {/*
                ---------------
                SECCION 2
                -------------*/}
                <section id="Section2" className="Section2 Text-gray">
                    <img src={bkg2} className="Seccion2-bkg" alt=""/>

                    <div className="container">
                        <Carousel_cards/>

                        <div className="row justify-content-center row-iconos">
                            <div className="col-2">
                                <img className="img-fluid" src={aloj_ico} alt=""/>
                            </div>
                            <div className="col-2">
                                <img className="img-fluid" src={gast_ico} alt=""/>
                            </div>
                            <div className="col-2">
                                <img className="img-fluid" src={act_ico} alt=""/>
                            </div>
                        </div>
                        <div className="row justify-content-center ">

                            <div className="col-12 pt-3">
                                <h2 className="Text-gray display-4 text-uppercase Home-h2">Personaliza tu
                                    experiencia</h2>
                                <h3 className="Text-gray">Combina tu vuelo con alojamiento, comida o actividades
                                    turísticas.</h3>
                                <button className="Btn-blue2 mt-4">Volar en globo</button>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="Bk-3-div">
                    <img src={bkg3_2} className="Section3-bkg " alt=""/>

                </div>
                <div className="Bk-3-ico-div">
                    <img src={bkg3__ico} className="Section3-bkg-ico " alt=""/>

                </div>

                <section id="Section3" className="Section3 ">

                    {/*DIV QUE HACE LA DIAGONAL SUPERIOR*/}
                    <div className="Diagonal1">
                    </div>
                    <div className="container">
                        <div className="row text-white">
                            <div className="col-md-6 text-left">
                                <h4 className="font-weight-bold">25 AÑOS VOLANDO</h4>
                                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad
                                    adipisci amet
                                    dignissimos doloremque exercitationem fuga incidunt minus natus necessitatibus
                                    nostrum officia placeat praesentium quaerat recusandae, reprehenderit rerum ullam
                                    unde?</p>
                                <br/>
                                <h4 className="font-weight-bold">25 AÑOS VOLANDO</h4>
                                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad
                                    adipisci amet
                                    dignissimos doloremque exercitationem fuga incidunt minus natus necessitatibus
                                    nostrum officia placeat praesentium quaerat recusandae, reprehenderit rerum ullam
                                    unde?</p>
                                <br/>
                                <h4 className="font-weight-bold">25 AÑOS VOLANDO</h4>
                                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad
                                    adipisci amet
                                    dignissimos doloremque exercitationem fuga incidunt minus natus necessitatibus
                                    nostrum officia placeat praesentium quaerat recusandae, reprehenderit rerum ullam
                                    unde?</p>
                                <br/>
                                <h4 className="font-weight-bold">25 AÑOS VOLANDO</h4>
                                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad
                                    adipisci amet
                                    dignissimos doloremque exercitationem fuga incidunt minus natus necessitatibus
                                    nostrum officia placeat praesentium quaerat recusandae, reprehenderit rerum ullam
                                    unde?</p>
                                <button className="Btn-darkblue">Más info</button>
                            </div>
                        </div>


                    </div>
                    {/*DIV QUE HACE LA DIAGONAL INFERIOR*/}
                    <div className="Diagonal2">
                    </div>
                </section>

                <Experiencia_completa/>


                <section id="Section5" className="Section5">
                    <Subetufoto/>

                </section>

                <footer className="">
                    <div className="container-fluid">
                        <div className="row Row1 p-3">
                            <div className="col-lg-5 d-flex">
                                <div className="col-lg-6 p-0 d-flex align-items-center">
                                    <img className="img-fluid" src={logo_b} alt=""/>
                                </div>


                            </div>
                            <div className="col-lg-7  pb-2 d-flex flex-wrap pt-5">
                                <div className="col-lg-5 p-0 d-flex align-items-center justify-content-end">
                                    <a href="/filtro">
                                        <button className="Btn-red">todos los vuelos</button>
                                    </a>
                                </div>
                                <div className="col-6 d-flex justify-content-end align-items-center flex-wrap ">
                                    <div className="Div-ico">
                                        <a href="https://es-es.facebook.com/voldecoloms/">
                                            <img src={ico_face} alt=""/>

                                        </a>
                                    </div>
                                    <div className="Div-ico">
                                        <a href="https://twitter.com/voldecoloms">
                                            <img src={ico_twitter} alt=""/>

                                        </a>
                                    </div>
                                    <div className="Div-ico">
                                        <a href="https://www.instagram.com/voldecoloms/">
                                            <img src={ico_inst} alt=""/>

                                        </a>
                                    </div>
                                    <div className="Div-ico">
                                        <a href="https://www.youtube.com/user/Voldecoloms">
                                            <img src={ico_youtube} alt=""/>

                                        </a>
                                    </div>
                                    <div className="Div-ico">
                                        <a href="">
                                            <i class="fab fa-google-plus-square Goo-ico-white mt-1"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-11 text-left mt-4  d-flex justify-content-end">
                                       <span className="text-white Copyrigth-text">©VOLS DE COLOM - Todos los derechos reservados - <a
                                           onClick={openPrivacy} className="Underline Cursor-pointer"> Privacy Policy</a> - <a
                                           onClick={openLegal} className="Underline Cursor-pointer">Legal Advice</a> - <a onClick={openCookies} className="Underline Cursor-pointer">Cookies Privacy</a> - Diseñado por <a
                                           href="https://www.somoswaka.com/">Waka</a></span>
                                </div>

                            </div>

                        </div>
                        <Footer_patrocinadores/>
                    </div>
                </footer>
            </div>
        );
    }
}


export default Home;