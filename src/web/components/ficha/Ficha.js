import React, {Component} from 'react';

import $ from 'jquery';
import './Ficha.css';
import logo_b from '../../images/vdc-logo-b.png';

import Header from "../comunes/Header";
import Experiencia_completa from "../comunes/Experiencia_completa";
import Experiencia_volarGlobo from "../comunes/Experiencia_volarGlobo";
import Footer_estilo1 from "../comunes/Footer_estilo1";
import Footer_estilohome from "../comunes/Footer_estilohome";
import Imagenes_ficha from "./Imagenes_ficha";
import Video_ficha from "./Video_ficha";
import Arrow_top from "../comunes/Arrow_top";
import Datepicker from "../comunes/Datepicker"
import Modal_compra from "../comunes/Modal_compra"
import Card_roja from "../comunes/Card_roja"
import flecha_abajo from '../../images/flecha-abajo.png';
import flecha_arriba from '../../images/flecha-arriba.png';
import logo_globo from '../../images/Globo-header-w.png';
import imagenes_instalaciones1 from '../../images/instalacion1.jpg';
import globo_ico4 from '../../images/icoficha.png';
import ico_face_a from '../../images/facebook-inv.png';
import ico_twitter_a from '../../images/twitter-inv.png';
import ico_inst_a from '../../images/instagram-inv.png';
import ico_youtube_a from '../../images/youtube-inv.png';
import ico_google2_a from '../../images/googleplus-inv.png';
import Footer_patrocinadores from "../comunes/Footer_patrocinadores";

let array_imagenesficha = [];
/*JSON DE PRUEBA*/
let imagenesficha_json = {
    "imagenesficha": [
        {
            "photo": 'instalacion1'
        },
        {
            "photo": 'instalacion1'
        },
        {
            "photo": 'instalacion1'
        },
        {
            "photo": 'instalacion1'
        },
        {
            "photo": 'instalacion1'
        },
        {
            "photo": 'instalacion1'
        },
    ]
}
for (var i = 0; i < imagenesficha_json.imagenesficha.length; i++) {
    array_imagenesficha.push(<Imagenes_ficha
        photo={imagenesficha_json.imagenesficha[i].photo}/>);
}

/* $(window).scroll(function(){
   if ($(this).scrollTop() > 135) {
       $('.Col-tarjeta').addClass('P-fixed');
   } else {
       $('.Col-tarjeta').removeClass('P-fixed');
   }
})*/
document.addEventListener("DOMContentLoaded", function (event) {
    var abierto = false;
    $(".Click").click(function () {
        if (!abierto) {
            $(this).children(".Flecha-abajo").addClass("Ocultar");
            $(this).children(".Flecha-arriba").removeClass("Ocultar");

            abierto = true;
        } else {

            $(this).children(".Flecha-abajo").removeClass("Ocultar");
            $(this).children(".Flecha-arriba").addClass("Ocultar");
            abierto = false;

        }
    })

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

class Ficha extends React.Component {

    componentDidMount() {
        /*CODIGO PARA HACER LA TARJETA FIXED SI ES LA PANTALLA NO ES MOVIL*/
        if ($(window).width() > 768) {
            var pos_tarjeta;
            var altura_tarjeta = $('#nav').height();
            var posicion = $('#parar').offset().top;
            var posicion_parar = posicion - altura_tarjeta;

            var parado = false;
            $(document).scroll(function () {
                pos_tarjeta = $('#nav').offset().top;


                if ((pos_tarjeta >= posicion_parar) && parado == false) {
                    $('#nav').removeClass('P-fixed');

                    $('#nav').addClass('P-absolute');
                    $('#nav').css('top', (posicion_parar) + 'px');
                    $('header').addClass('Z-index-parar-tarjeta');
                    parado = true;
                }
                /*EL -144 son los 9 rem que le doy de top a la card , para que al volverse a hacerse fixed se pare justo en el punto
                * donde cambia*/
                else if (($(document).scrollTop() + window.innerHeight - altura_tarjeta - 144 < posicion_parar) && parado == true) {

                    $('#nav').removeClass('P-absolute');
                    $('#nav').addClass('P-fixed');
                    $('#nav').css('top', '9rem');
                    $('header').removeClass('Z-index-parar-tarjeta');

                    parado = false;
                }

            })
        }
    }

    render() {
        return (

            <div className="Ficha">
                <Arrow_top/>
                <section className="Section1-ficha">
                    <Header logo={logo_b}/>

                    <div className="container-fluid d-flex justify-content-center P-0-movil p-md-auto Ficha-zindex">
                        <div className="row w-100 text-left p-0 p-md-3 pr-lg-0 pl-0 pl-lg-5">
                            <div className="col-12 col-md-6 my-5 my-md-0 my-lg-5">
                                <h1 className="text-uppercase  D-none-menu-fixed">vuelo en globo + <br/> cabaña en los arboles</h1>

                            </div>
                            <div id="nav" className="col-12 col-md-5 col-lg-4 Col-tarjeta p-0 P-fixed Col-fixed">
                                <div className="card w-100 h-100 p-3">
                                    <div className="card-body text-left p-1 P-absolute Card-body-fixed">
                                        <div className="row w-100 justify-content-between flex-nowrap">
                                            <div className="d-flex align-items-center">
                                                <img src={globo_ico4} className="img-fluid Ico-ficha"
                                                     alt=""/>

                                                <span
                                                    className=" d-flex align-items-center p-2 pt-3 Info-card Ficha-info">Vuelo en pareja <br/> Globo no compartido</span>
                                            </div>
                                            <span
                                                className="d-flex align-items-center Price-card pl-3  Ficha-precio">250€</span>

                                        </div>
                                        <form className="col-12 my-2 mt-2 mt-md-0 mt-lg-4 Form-reservaa">
                                            <div className="pt-0 pt-md-0 pt-lg-3 row">
                                                <label for="inputPassword"
                                                       className="col-sm-5 col-md-5 col-xl-5 col-form-label Label-form">Personas</label>
                                                <div className="col-sm-7  col-md-7 col-xl-7">
                                                    <input  data-toggle="modal"
                                                            data-target="#modal_compras_pasajeros" type="number" className="form-control" id="inputPassword"
                                                           placeholder="Personas"/>
                                                </div>
                                            </div>
                                            <div className="pt-3 row">
                                                <label for="inputPassword"
                                                       className="col-sm-5 col-md-5 col-xl-5 col-form-label Label-form">Fecha</label>
                                                <div className="col-sm-7 col-md-7 col-xl-7">
                                                    <input data-toggle="modal"
                                                           data-target="#modal_compras_fechas" type="text" value="22/05/1996" className="form-control"
                                                           id="inputPassword" placeholder="Fecha"/>
                                                </div>
                                            </div>
                                            <div
                                                className="row w-100 pt-2 justify-content-end pr-0 m-0 mt-1 Fecha-abierta-row">

                                                <div className="form-group">
                                                    <div className="form-check">

                                                        <input className="form-check-input" type="checkbox"
                                                               id="comprar_regalar"/>

                                                        <label className="form-check-label Letrasch pt-0" for="comprar_regalar">
                                                           Comprar para regalar
                                                        </label>

                                                    </div>
                                                </div>
                                            </div>
                                        </form>

                                        <div className="row w-100 pt-2 pt-md-4">
                                            <div className="col-md-12 text-left d-flex align-items-center">
                                                <button className=" Btn-red  w-100" data-toggle="modal"
                                                        data-target="#modal_compra">RESERVAR
                                                </button>
                                            </div>
                                            <Modal_compra/>

                                        </div>


                                        <div className="row w-100 pt-2 justify-content-end pr-3">
                                            <span className="Span-precio">Total experiencia: <b> 250€</b></span>

                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <main className="Section2-ficha text-left px-1 px-md-5">
                    <div className="container-fluid px-1 px-lg-5">
                        <div className="row w-100 my-5 py-2">
                            <div className="col-12 Div-experiencias">
                                <h1 className="H1-filtro">Experiencias con valor de 5 estrellas
                                    en <span>tripadvisor</span></h1>
                            </div>
                        </div>
                        <div className="row w-100 m-0">
                            <div className="col-12 col-lg-8">
                                <div className="col-12 mb-5 py-3">
                                    <h2 className="w-100">Descripción</h2>
                                    <p className="P-generico">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Architecto asperiores assumenda
                                        blanditiis explicabo fugit ipsa itaque neque quae, reiciendis rerum ullam ut.
                                        Accusamus
                                        aut ducimus perspiciatis praesentium quae similique voluptas.
                                        <br/><br/>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat neque optio
                                        perspiciatis voluptatibus. Aspernatur enim in modi pariatur. Aliquam delectus
                                        doloribus
                                        inventore laborum nesciunt tempore ullam? Aspernatur consequuntur incidunt
                                        soluta?
                                        <br/><br/>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat neque optio
                                        perspiciatis voluptatibus. Aspernatur enim in modi pariatur. Aliquam delectus
                                        doloribus
                                        inventore laborum nesciunt tempore ullam? Aspernatur consequuntur incidunt
                                        soluta? <a
                                            href="">Más info</a></p>
                                </div>

                                <div className="row mb-0 py-3 d-none d-lg-flex Padding-30">
                                    <h2 className="w-100">FECHAS Y DISPONIBILIDAD</h2>
                                    <div className="col-12 col-md-12 col-lg-12 col-xl-6  py-4 px-0">

                                        <div className="col-12 px-0">
                                            <button className="Btn-blue Ficha-btn">Comprar sin fecha</button>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 py-4 pl-0 pl-xl-3">
                                        <Datepicker tipo={'inline'}/>
                                    </div>
                                </div>

                                {/*MOBILE*/}
                                <div className="row mb-3 P-relative Padd-5   d-lg-none Click">
                                    {/* <img src={flecha_abajo} className="d-lg-none Flechas-faq Flecha-abajo Click Z-index-bajo" alt=""/>
                            <img src={flecha_arriba} className="d-lg-none Flechas-faq Ocultar Flecha-arriba Click Z-index-bajo" alt=""/>*/}
                                    <p className="accordion  ">FECHAS Y DISPONIBILIDAD</p>
                                    <div className="panel  Ml-auto ">
                                        <div className="col-12 col-md-12 col-lg-12 col-xl-6 py-4 px-0">
                                            <div className="col-12  mb-3 px-0">
                                                <button className="Btn-gris Ficha-btn d-none">Agosto</button>
                                            </div>
                                            <div className="col-12 px-0 text-center">
                                                <button className="Btn-blue Ficha-btn">Comprar sin fecha</button>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 py-4 ">
                                            <Datepicker tipo={'inline'}/>
                                        </div>
                                    </div>

                                </div>


                                <div className="col-12 mb-5 py-3  flex-wrap d-none d-lg-flex">
                                    <h2 className="w-100 mb-3">IMAGÉNES E INSTALACIONES</h2>
                                    {array_imagenesficha}
                                    <Video_ficha/>
                                </div>

                                <div className="row mb-3 P-relative d-lg-none Padd-5">
                                    {/* <img src={flecha_abajo} className="d-lg-none Flechas-faq Flecha-abajo Click Z-index-bajo" alt=""/>
                            <img src={flecha_arriba} className="d-lg-none Flechas-faq Ocultar Flecha-arriba Click Z-index-bajo" alt=""/>*/}
                                    <p className="accordion  ">IMAGÉNES E INSTALACIONES</p>
                                    <div className="panel row">
                                        {array_imagenesficha}
                                        <Video_ficha/>
                                    </div>

                                </div>

                                <div className="col-12 mb-5 py-3 flex-wrap d-none d-lg-flex Click">
                                    <h2 className="w-100 mb-3">LA OPINIÓN DE NUESTROS CLIENTES</h2>
                                    <div className="row">
                                        <div className="col-12 d-flex Review-titulo">
                                            <div className="col-12 d-flex align-items-center">
                                                <span className="Review-punt mr-3">4.9</span>

                                                <i className="fas fa-star Estrella-grande"></i><i
                                                className="fas fa-star Estrella-grande"></i><i
                                                className="fas fa-star Estrella-grande"></i><i
                                                className="fas fa-star Estrella-grande"></i><i
                                                className="fas fa-star Estrella-grande"></i>
                                                <span className="pl-2 Review-grispeq pt-2">5 reviews</span>

                                            </div>

                                        </div>
                                        <div className="col-12 d-flex Review-opinion">
                                            <div className="col-2 col-md-2 col-lg-1 pr-2 p-0 Text-center-tablet"><img
                                                src="http://via.placeholder.com/50x50" className="img-fluid" alt=""/>
                                            </div>
                                            <div className=" p-0 col-12 col-md-10">
                                                <span>lorem</span>
                                                <br/>
                                                <i className="fas fa-star Estrella-peq"></i><i
                                                className="fas fa-star Estrella-peq"></i><i
                                                className="fas fa-star Estrella-peq"></i><i
                                                className="fas fa-star Estrella-peq"></i><i
                                                className="fas fa-star Estrella-peq"></i>
                                                <span className="Review-grispeq pl-1 pt-3">in the last week</span>
                                                <br/>
                                                <p className="P-generico">Lorem ipsum dolor sit amet, consectetur
                                                    adipisicing elit. Adipisci deleniti, dolorem eos, exercitationem
                                                    facilis impedit maiores nihil nisi obcaecati praesentium ratione
                                                    reiciendis repellat. Cumque error facilis impedit odit suscipit
                                                    velit.</p>

                                            </div>
                                        </div>
                                        <div className="col-12 d-flex Review-opinion">
                                            <div className="col-2 col-md-2 col-lg-1 pr-2 p-0 Text-center-tablet"><img
                                                src="http://via.placeholder.com/50x50" className="img-fluid" alt=""/>
                                            </div>
                                            <div className=" p-0 col-12 col-md-10">
                                                <span>lorem</span>
                                                <br/>
                                                <i className="fas fa-star Estrella-peq"></i><i
                                                className="fas fa-star Estrella-peq"></i><i
                                                className="fas fa-star Estrella-peq"></i><i
                                                className="fas fa-star Estrella-peq"></i><i
                                                className="fas fa-star Estrella-peq"></i>
                                                <span className="Review-grispeq pl-1 pt-3">in the last week</span>
                                                <br/>
                                                <p className="P-generico">Lorem ipsum dolor sit amet, consectetur
                                                    adipisicing elit. Adipisci deleniti, dolorem eos, exercitationem
                                                    facilis impedit maiores nihil nisi obcaecati praesentium ratione
                                                    reiciendis repellat. Cumque error facilis impedit odit suscipit
                                                    velit.</p>

                                            </div>
                                        </div>
                                        <div className="col-12 d-flex Review-opinion ">
                                            <div className="col-2 col-md-2 col-lg-1 pr-2 p-0 Text-center-tablet"><img
                                                src="http://via.placeholder.com/50x50" className="img-fluid" alt=""/>
                                            </div>
                                            <div className=" p-0 col-12 col-md-10">
                                                <span>lorem</span>
                                                <br/>
                                                <i className="fas fa-star Estrella-peq"></i><i
                                                className="fas fa-star Estrella-peq"></i><i
                                                className="fas fa-star Estrella-peq"></i><i
                                                className="fas fa-star Estrella-peq"></i><i
                                                className="fas fa-star Estrella-peq"></i>
                                                <span className="Review-grispeq pl-1 pt-3">in the last week</span>
                                                <br/>
                                                <p className="P-generico">Lorem ipsum dolor sit amet, consectetur
                                                    adipisicing elit. Adipisci deleniti, dolorem eos, exercitationem
                                                    facilis impedit maiores nihil nisi obcaecati praesentium ratione
                                                    reiciendis repellat. Cumque error facilis impedit odit suscipit
                                                    velit.</p>

                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div className="row mb-3 P-relative py-0 Padding-30 py-md-3 Padding-l-movil Click ">
                                    {/* <img src={flecha_abajo} className="d-lg-none Flechas-faq Flecha-abajo Click Z-index-bajo" alt=""/>
                            <img src={flecha_arriba} className="d-lg-none Flechas-faq Ocultar Flecha-arriba Click Z-index-bajo" alt=""/>*/}
                                    <p className="accordion  ">Cómo regalar el viaje</p>
                                    <div className="panel P-generico">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam animi
                                        aut
                                        corporis cumque, cupiditate dolor dolorum eveniet facilis in inventore magnam,
                                        necessitatibus neque nihil nobis officiis quia repellat suscipit!
                                    </div>
                                </div>

                                <div className="row mb-3 P-relative py-0 Padding-30 py-md-3 Padding-l-movil Click">
                                    {/* <img src={flecha_abajo} className="d-lg-none Flechas-faq Flecha-abajo Click Z-index-bajo" alt=""/>
                            <img src={flecha_arriba} className="d-lg-none Flechas-faq Ocultar Flecha-arriba Click Z-index-bajo" alt=""/>*/}
                                    <p className="accordion  ">Sensaciones</p>
                                    <div className="panel P-generico">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam animi
                                        aut
                                        corporis cumque, cupiditate dolor dolorum eveniet facilis in inventore magnam,
                                        necessitatibus neque nihil nobis officiis quia repellat suscipit!
                                    </div>
                                </div>
                                <div className="row mb-3 P-relative py-0 Padding-30 py-md-3 Padding-l-movil ">
                                    <a href="/faq" className="w-100"><p className="accordion  ">preguntas frequentes</p>
                                    </a>

                                </div>
                                {/*    <div className="col-12 mt-4  text-left align-items-center d-none d-lg-flex">
                            <div className="Div-ico Ico-ficha">
                                <a href="https://es-es.facebook.com/voldecoloms/">

                                    <i className="fab fa-facebook-square Face-ico-color"></i>
                                </a>
                            </div>
                            <div className="Div-ico Ico-ficha">
                                <a href="https://twitter.com/voldecoloms">

                                    <i className="fab fa-twitter-square Twit-ico-color"></i>
                                </a>
                            </div>
                            <div className="Div-ico Ico-ficha">
                                <a href="https://www.youtube.com/user/Voldecoloms">

                                    <i className="fab fa-youtube You-ico-color"></i>
                                </a>
                            </div>
                            <div className="Div-ico Ico-ficha">
                                <a href="https://www.instagram.com/voldecoloms/">

                                    <i className="fab fa-instagram Ins-ico-color"></i>
                                </a>
                            </div>
                            <div className="Div-ico Ico-ficha">
                                <i className="fab fa-google-plus-square Goo-ico-color"></i>
                            </div>
                            <div className="Div-ico Ico-ficha">
                                <a href="https://www.linkedin.com/company/vol-de-coloms">

                                    <i className="fab fa-linkedin Link-ico-color"></i>
                                </a>
                            </div>
                        </div>
*/}
                                <div className="col-12 mt-4 text-left align-items-center d-none d-lg-flex">
                                    <div className="Div-ico">
                                        <a href="https://es-es.facebook.com/voldecoloms/">

                                            <img src={ico_face_a} alt=""/>
                                        </a>
                                    </div>
                                    <div className="Div-ico">
                                        <a href="https://twitter.com/voldecoloms">

                                            <img src={ico_twitter_a} alt=""/>

                                        </a>
                                    </div>
                                    <div className="Div-ico">
                                        <a href="https://www.youtube.com/user/Voldecoloms">

                                            <img src={ico_youtube_a} alt=""/>

                                        </a>
                                    </div>
                                    <div className="Div-ico">
                                        <a href="https://www.instagram.com/voldecoloms/">

                                            <img src={ico_inst_a} alt=""/>

                                        </a>
                                    </div>
                                    <div className="Div-ico">
                                        <img src={ico_google2_a} alt=""/>

                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>


                </main>
<div id="parar" className="Parar"></div>
                <section id="Section3" className="Section3-ficha Text-gray">

                    <Experiencia_completa/>
                </section>


                <section className="Section4-ficha">
                    <Experiencia_volarGlobo/>
                </section>
                <footer className="Footer_estilo1 Desktop">
                    <Footer_estilo1/>
                </footer>
                <footer className="Footer_estilohome  Tablet">
                    <Footer_estilohome/>
                    <Footer_patrocinadores/>

                </footer>

                <div className="Footer_estilohome Movil">
                    <div className="container">

                        <Footer_estilohome/>
                    </div>

                </div>


            </div>
        )
    }
}

export default Ficha;
