import React, {Component} from 'react';

import $ from 'jquery';
import './Ficha.css';import logo_b from '../../images/vdc-logo-b.png';

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

import logo_globo from '../../images/Globo-header-w.png';
import imagenes_instalaciones1 from '../../images/instalacion1.jpg';
import globo_ico4 from '../../images/icoficha.png';
import ico_face_a from '../../images/facebook-inv.png';
import ico_twitter_a from '../../images/twitter-inv.png';
import ico_inst_a from '../../images/instagram-inv.png';
import ico_youtube_a from '../../images/youtube-inv.png';
import ico_google2_a from '../../images/googleplus-inv.png';

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

const Ficha = () => (
    <div className="Ficha">
        <Arrow_top/>
        <section className="Section1-ficha">
            <Header logo={logo_b}/>

            <div className="container-fluid d-flex justify-content-center">
                <div className="row w-100 text-left p-0 p-md-3  pl-0 pl-md-5">
                    <div className="col-12 col-md-6 ">
                        <h1 className="text-uppercase  ">vuelo en globo + <br/> cabaña en los arboles</h1>

                    </div>
                    <div className="col-12 col-md-4 Col-tarjeta p-0 P-fixed Col-fixed">
                        <div className="card w-100 h-100 p-3">
                            <div className="card-body text-left p-1 P-absolute Card-body-fixed">
                                <div className="row w-100 justify-content-between flex-nowrap">
                                    <div className="d-flex align-items-center">
                                        <img src={globo_ico4} className="img-fluid Ico-ficha"
                                             alt=""/>

                                        <span className=" d-flex align-items-center p-2 pt-3 Info-card Ficha-info">Vuelo en pareja <br/> Globo no compartido</span>
                                    </div>
                                    <span className="d-flex align-items-center Price-card pl-3  Ficha-precio">250€</span>

                                </div>
                                <form className="col-12 my-2 mt-4 mt-md-0 mt-lg-4 Form-reservaa">
                                    <div className="pt-3 pt-md-0 pt-lg-3 row">
                                        <label for="inputPassword"
                                               className="col-sm-5 col-md-5 col-xl-5 col-form-label Label-form">Personas</label>
                                        <div className="col-sm-7  col-md-7 col-xl-7">
                                            <input type="number" className="form-control" id="inputPassword"
                                                   placeholder="Personas"/>
                                        </div>
                                    </div>
                                    <div className="pt-3 row">
                                        <label for="inputPassword"
                                               className="col-sm-5 col-md-5 col-xl-5 col-form-label Label-form">Fecha</label>
                                        <div className="col-sm-7 col-md-7 col-xl-7">
                                            <input type="date" value="22/05/1996" className="form-control"
                                                   id="inputPassword" placeholder="Fecha"/>
                                        </div>
                                    </div>
                                    <div className="row w-100 pt-2 justify-content-end pr-3 mt-1 Fecha-abierta-row">

                                        <div className="form-group">
                                            <div className="form-check">

                                                <input className="form-check-input" type="checkbox" id="gridCheck"/>

                                                <label className="form-check-label Letrasch" for="gridCheck">
                                                    Reservar con fecha abierta
                                                </label>

                                            </div>
                                        </div>
                                    </div>
                                </form>

                                <div className="row w-100 pt-5 pt-md-4">
                                    <div className="col-md-12 text-left d-flex align-items-center">
                                        <button className=" Btn-red  w-100" data-toggle="modal" data-target="#modal_compra">RESERVAR</button>
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
            <div className="container-fluid px-1 px-md-5">
                <div className="row w-100 my-5 py-2">
                    <div className="col-12 Div-experiencias">
                        <h1 className="H1-filtro">Experiencias con valor de 5 estrellas en <span>tripadvisor</span></h1>
                    </div>
                </div>
                <div className="row w-100 m-0">
                    <div className="col-12 col-md-8">
                        <div className="col-12 mb-5 py-3">
                            <h2 className="w-100">Descripción</h2>
                            <p className="P-generico">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores assumenda
                                blanditiis explicabo fugit ipsa itaque neque quae, reiciendis rerum ullam ut. Accusamus
                                aut ducimus perspiciatis praesentium quae similique voluptas.
                                <br/><br/>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat neque optio
                                perspiciatis voluptatibus. Aspernatur enim in modi pariatur. Aliquam delectus doloribus
                                inventore laborum nesciunt tempore ullam? Aspernatur consequuntur incidunt soluta?
                                <br/><br/>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat neque optio
                                perspiciatis voluptatibus. Aspernatur enim in modi pariatur. Aliquam delectus doloribus
                                inventore laborum nesciunt tempore ullam? Aspernatur consequuntur incidunt soluta? <a
                                    href="">Más info</a></p>
                        </div>

                        <div className="row mb-0 py-3 d-none d-md-flex Padding-30">
                            <h2 className="w-100">FECHAS Y DISPONIBILIDAD</h2>
                            <div className="col-12 col-md-12 col-lg-12 col-xl-6  py-4 px-0">

                                <div className="col-12 px-0">
                                    <button className="Btn-blue Ficha-btn">Comprar sin fecha</button>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 py-4 pl-0 pl-xl-3" >
                                <Datepicker tipo={'inline'}/>
                            </div>
                        </div>

                        {/*MOBILE*/}
                        <div className="row mb-3  d-md-none">
                            <p className="accordion  ">FECHAS Y DISPONIBILIDAD</p>
                            <div className="panel ">
                                <div className="col-12 col-md-12 col-lg-12 col-xl-6 py-4 px-0">
                                    <div className="col-12  mb-3 px-0">
                                        <button className="Btn-gris Ficha-btn">Agosto</button>
                                    </div>
                                    <div className="col-12 px-0">
                                        <button className="Btn-blue Ficha-btn">Comprar sin fecha</button>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 py-4 ">
                                    <Datepicker tipo={'inline'}/>
                                </div>
                            </div>

                        </div>


                        <div className="col-12 mb-5 py-3  flex-wrap d-none d-md-flex">
                            <h2 className="w-100 mb-3">IMAGÉNES E INSTALACIONES</h2>
                            {array_imagenesficha}
                            <Video_ficha/>
                        </div>

                        <div className="row mb-3 d-md-none">
                            <p className="accordion  ">IMAGÉNES E INSTALACIONES</p>
                            <div className="panel row">
                                {array_imagenesficha}
                                <Video_ficha/>
                            </div>

                        </div>

                        <div className="col-12 mb-5 py-3 flex-wrap d-none d-md-flex">
                            <h2 className="w-100 mb-3">LA OPINIÓN DE NUESTROS CLIENTES</h2>
                            <div className="row">
                                <div className="col-12 d-flex Review-titulo">
                                    <div className="col-12 d-flex align-items-center">
                                        <span className="Review-punt mr-3">4.9</span>

                                        <i className="fas fa-star Estrella-grande"></i><i className="fas fa-star Estrella-grande"></i><i
                                        className="fas fa-star Estrella-grande"></i><i className="fas fa-star Estrella-grande"></i><i className="fas fa-star Estrella-grande"></i>
                                        <span className="pl-2 Review-grispeq pt-2">5 reviews</span>

                                    </div>

                                </div>
                                <div className="col-12 d-flex Review-opinion">
                                    <div className="col-2 col-md-2 col-lg-1 pr-2 p-0"><img  src="http://via.placeholder.com/50x50" className="img-fluid" alt=""/></div>
                                    <div className=" p-0 col-12 col-md-10">
                                        <span>lorem</span>
                                        <br/>
                                        <i className="fas fa-star Estrella-peq"></i><i className="fas fa-star Estrella-peq"></i><i
                                        className="fas fa-star Estrella-peq"></i><i className="fas fa-star Estrella-peq"></i><i className="fas fa-star Estrella-peq"></i>
                                        <span className="Review-grispeq pl-1 pt-3">in the last week</span>
                                        <br/>
                                        <p  className="P-generico">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci deleniti, dolorem eos, exercitationem facilis impedit maiores nihil nisi obcaecati praesentium ratione reiciendis repellat. Cumque error facilis impedit odit suscipit velit.</p>

                                    </div>
                                </div>
                                <div className="col-12 d-flex Review-opinion">
                                    <div className="col-2 col-md-2 col-lg-1 pr-2 p-0"><img  src="http://via.placeholder.com/50x50" className="img-fluid" alt=""/></div>
                                    <div className=" p-0 col-12 col-md-10">
                                        <span>lorem</span>
                                        <br/>
                                        <i className="fas fa-star Estrella-peq"></i><i className="fas fa-star Estrella-peq"></i><i
                                        className="fas fa-star Estrella-peq"></i><i className="fas fa-star Estrella-peq"></i><i className="fas fa-star Estrella-peq"></i>
                                        <span className="Review-grispeq pl-1 pt-3">in the last week</span>
                                        <br/>
                                        <p className="P-generico">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci deleniti, dolorem eos, exercitationem facilis impedit maiores nihil nisi obcaecati praesentium ratione reiciendis repellat. Cumque error facilis impedit odit suscipit velit.</p>

                                    </div>
                                </div>
                                <div className="col-12 d-flex Review-opinion">
                                    <div className="col-2 col-md-2 col-lg-1 pr-2 p-0"><img  src="http://via.placeholder.com/50x50" className="img-fluid" alt=""/></div>
                                    <div className=" p-0 col-12 col-md-10">
                                        <span>lorem</span>
                                        <br/>
                                        <i className="fas fa-star Estrella-peq"></i><i className="fas fa-star Estrella-peq"></i><i
                                        className="fas fa-star Estrella-peq"></i><i className="fas fa-star Estrella-peq"></i><i className="fas fa-star Estrella-peq"></i>
                                        <span className="Review-grispeq pl-1 pt-3">in the last week</span>
                                        <br/>
                                        <p className="P-generico">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci deleniti, dolorem eos, exercitationem facilis impedit maiores nihil nisi obcaecati praesentium ratione reiciendis repellat. Cumque error facilis impedit odit suscipit velit.</p>

                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="row mb-3 py-0 Padding-30 py-md-3">
                            <p className="accordion  ">Cómo regalar el viaje</p>
                            <div className="panel P-generico">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam animi aut
                                corporis cumque, cupiditate dolor dolorum eveniet facilis in inventore magnam,
                                necessitatibus neque nihil nobis officiis quia repellat suscipit!
                            </div>
                        </div>

                        <div className="row mb-3 py-0 Padding-30 py-md-3">
                            <p className="accordion  ">Sensaciones</p>
                            <div className="panel P-generico">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam animi aut
                                corporis cumque, cupiditate dolor dolorum eveniet facilis in inventore magnam,
                                necessitatibus neque nihil nobis officiis quia repellat suscipit!
                            </div>
                        </div>
                        <div className="row mb-3 py-0 Padding-30 py-md-3">
                            <a href="/faq" className="w-100"><p className="accordion  ">preguntas frequentes</p></a>

                        </div>
                    {/*    <div className="col-12 mt-4  text-left align-items-center d-none d-md-flex">
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
                        <div className="col-12 mt-4 text-left align-items-center d-none d-md-flex">
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

        <section id="Section3" className="Section3-ficha Text-gray">

            <Experiencia_completa/>
        </section>


        <section className="Section4-ficha">
            <Experiencia_volarGlobo/>
        </section>
        <footer className="Footer_estilo1 d-none d-md-block">
            <Footer_estilo1/>
        </footer>

        <div className="Footer_estilohome d-block d-md-none">
            <div className="container-fluid">

                <Footer_estilohome/>
            </div>

        </div>


    </div>
)
export default Ficha;
