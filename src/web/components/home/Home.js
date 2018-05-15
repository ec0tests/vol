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

import Footer_patrocinadores from "../comunes/Footer_patrocinadores";


import './Home.css'
import Carousel_cards from "../comunes/Carousel_cards";
import Footer_estilohome from "../comunes/Footer_estilohome";
import Experiencia_completa from "../comunes/Experiencia_completa";
import Header from "../comunes/Header";
import Subetufoto from "../comunes/Subetufoto";
import Arrow_top from "../comunes/Arrow_top"

import $ from 'jquery';
import tingle from "tingle.js";
import toltip from "bootstrap"
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


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

/*$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})*/
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

                <Arrow_top/>
                {/* <img src={bkg1} className="Section1-bkg" alt=""/>*/}

                <main id="Section1" className="Section1 ">
                    <Header logo={logo_b} />

                    <div className="container pb-2 pb-md-5 mb-0 mb-md-5  Header-sec2">
                        <div className="row text-left ">
                            <div className="col-12 ">

                                <h1 className="  Home-h1 mb-0">VUELA EN GLOBO <br/>
                                </h1>
                                <h2 className="Home-h2">en el parque natural de La Garrotxa</h2>
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-12  ">
                                <Link to="/filtro">
                                    <button className="text-uppercase Btn-red-h mt-2">Reservar</button>
                                </Link>
                            </div>
                            <div className="col-12  ">
                                <button className="text-uppercase Btn-darkblue-h mt-2">Canjear cupón</button>
                            </div>
                            <div className="col-12 ">
                                <Link to="/filtro">
                                <button className="text-uppercase Btn-darkblue-h mt-2">regalar vuelo</button>
                                </Link>

                            </div>

                            {/*   <div className="col-12  d-flex justify-content-center align-items-center py-5 Arrow-down">
                                <a href="#Section2"><i class="fas fa-angle-down "></i></a>
                            </div>*/}
                        </div>
                    </div>
                    <div className="container pt-0 pt-md-5 Header-sec3">
                        <div className="row ">
                            <div className="Iconos-header col-12 col-md-6 p-0 px-4">
                                <h6 className="w-100 Text-left-m">Globo Compartido</h6>
                                <div className="col-4 col-sm-4 col-md-4" data-toggle="tooltip" data-placement="top"
                                     title="Para adultos">
                                    <a href="/filtro"><img className="img-fluid" src={globo_ico1} alt=""/></a>
                                    <p className="mt-3 text-uppercase Little-text3 text-white">Adultos</p>
                                </div>
                                <div className="col-4 col-sm-4 col-md-4">
                                    <a href="/filtro"><img className="img-fluid" src={globo_ico2} alt=""/></a>

                                    <p className="mt-3 text-uppercase Little-text3 text-white">con niños</p>
                                </div>
                                <div className="col-4 col-sm-4 col-md-4">
                                    <a href="/filtro"><img className="img-fluid" src={globo_ico3} alt=""/></a>

                                    <p className="mt-3 text-uppercase Little-text3 text-white">Silla de <br/> ruedas</p>
                                </div>
                            </div>
                            <div className="Iconos-header col-12 col-md-6 p-0 px-4">
                                <h6 className="w-100 Text-left-m">Globo Exclusivo</h6>
                                <div className="col-4 col-sm-4 col-md-4">
                                    <a href="/filtro"><img className="img-fluid Padding-ico-4" src={globo_ico4} alt=""/></a>
                                    <p className="mt-3 text-uppercase Little-text3 text-white">En <br/> pareja </p>
                                </div>
                                <div className="col-4 col-sm-4 col-md-4">
                                    <a href="/filtro"><img className="img-fluid Padding-ico-5" src={globo_ico5} alt=""/></a>

                                    <p className="mt-3 text-uppercase Little-text3 text-white">4 amigos</p>
                                </div>
                                <div className="col-4 col-sm-4 col-md-4 Bottom-5 mt-3 mt-md-0 ">
                                    <a href="/filtro"><img className="img-fluid Padding-ico-6" src={globo_ico6} alt=""/></a>

                                    <p className="mt-3 text-uppercase Little-text3 text-white">empresas </p>
                                </div>
                            </div>
                            <div className="col-12 mt-5 ">
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
                    <img src={bkg2} className="Seccion2-bkg img-fluid" alt=""/>

                    <div className="container">
                        <Carousel_cards/>

                        <div className="row justify-content-center row-iconos w-100">

                            <img className="" src={aloj_ico} alt=""/>
                            <img className="" src={gast_ico} alt=""/>
                            <img className="" src={act_ico} alt=""/>
                        </div>
                        <div className="row justify-content-center ">

                            <div className="col-12 pt-3">
                                <h2 className="Text-gray display-4 text-uppercase font-weight-bold Gray Personaliza-experiencia-text">Personaliza tu
                                    experiencia</h2>
                                <h3 className="Text-gray font-weight-normal Combina-vuelo-text ">Combina tu vuelo con alojamiento, comida o actividades
                                    turísticas.</h3>
                                <a href="/filtro"><button className="Btn-blue2 mt-4">Volar en globo</button></a>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="Bk-3-div">
                    <img src={bkg3_2} className="Section3-bkg img-fluid" alt=""/>

                </div>
                <div className="Bk-3-ico-div">
                    <img src={bkg3__ico} className="Section3-bkg-ico img-fluid" alt=""/>

                </div>

                <section id="Section3" className="Section3 ">

                    {/*DIV QUE HACE LA DIAGONAL SUPERIOR*/}
                    <div className="Diagonal1">
                    </div>
                    <div className="container">
                        <div className="row text-white">
                            <div className="col-md-6 ">
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
                <Footer_estilohome/>
                <Footer_patrocinadores/>
            </div>
            </footer>
            </div>
        );
    }
}


export default Home;