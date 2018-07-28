import React, {Component} from 'react';

import './Blogp.css';
import Header from "../comunes/Header";
import Certificado from "../comunes/Certificado";
import Entrada_blog from "./Entrada_blog"
import Subetufoto from "../comunes/Subetufoto"
import Footer_estilohome from "../comunes/Footer_estilohome"
/*import logo_globo from '../../images/Globo-header-w.png';*/
import logo_globo from '../../images/vdc-logo-b.png';
import logo_b from '../../images/vdc-logo-b.png';

import ico_face from '../../images/Icon-RRSS-fb-b-55.png';
import ico_twitter from '../../images/Icon-RRSS-tw-b-55.png';
import ico_inst from '../../images/Icon-RRSS-in-b-55.png';
import ico_trip from '../../images/Icon-RRSS-tr-b-55.png';
import ico_youtube from '../../images/Icon-RRSS-yt-b-55.png';
import play_ico from '../../images/play-ico.png';
import Footer_patrocinadores from "../comunes/Footer_patrocinadores";


import bkg2 from '../../images/bkg-2.png';
import Carousel_cards from "../comunes/Carousel_cards";
import Arrow_top from "../comunes/Arrow_top";

/*Creo el array de blogp provisional*/

let array_entradas_blog = [];
/*JSON DE PRUEBA*/
let entradas_blog = {
    "entradas_blog": [
        {
            "title": "Feria medieval de Besalú y vuelo en globo en la Garrotxa",
            "photo": 'img-blog1'
        },
        {
            "title": "Feria medieval de Besalú y vuelo en globo en la Garrotxa",
            "photo": 'img-blog1'
        },
        {
            "title": "Feria medieval de Besalú y vuelo en globo en la Garrotxa",
            "photo": 'img-blog1'
        },
        {
            "title": "Feria medieval de Besalú y vuelo en globo en la Garrotxa",
            "photo": 'img-blog1'
        },
        {
            "title": "Feria medieval de Besalú y vuelo en globo en la Garrotxa",
            "photo": 'img-blog1'
        },
        {
            "title": "Feria medieval de Besalú y vuelo en globo en la Garrotxa",
            "photo": 'img-blog1'
        },
    ]
}
for (var i = 0; i < entradas_blog.entradas_blog.length; i++) {
    array_entradas_blog.push(<Entrada_blog title={entradas_blog.entradas_blog[i].title}
                                          photo={entradas_blog.entradas_blog[i].photo}/>);
}
const Blogp = () => (
    <div className="Blogp">
<Arrow_top/>
        <section className="Section1-blogp d-flex flex-column">
            <Header logo={logo_b}/>

            <div className="container mt-auto Padding-bottomb">
                <div className="row">
                    <div className="col-12 Div-experiencias">
                        <h1 className="H1-blogp">Experiencias con valor de 5 estrellas en <span>tripadvisor</span></h1>
                    </div>
                </div>
            </div>
        </section>

        <main className="Section2-blogp text-left px-0 px-md-5 ">
            <div className="container px-0 px-md-5 ">

                <div className="row pt-2 w-100 m-0 mx-md-3 p-2">
                     {array_entradas_blog}

                </div>
<div className="row mt-5 w-100">
    <div className="col-12 text-center">
        <button className="Btn-gris">Cargar más</button>
    </div>
</div>
            </div>


        </main>

        <section id="Section3" className="Section3-blogp Text-gray">
            <img src={bkg2} className="Seccion3-blogp-bkg" alt=""/>

            <div className="container">
                <Carousel_cards/>
            </div>
        </section>
        <section className="Section4-blogp d-none d-md-block">
            <div className="container">
                <Certificado/>

            </div>
        </section>


        <section id="Section5" className="Section5">
            <Subetufoto/>

        </section>
        <footer className="pt-5 d-none d-md-block">
            <div className="container-fluid px-5">
                <div className="row">
                    <div className="col-12 mb-3">
                        <h3 className="text-white text-left">Encuentra tu vuelo</h3>
                    </div>
                </div>
                <div className="row Links-footer mb-5 ">
                    <div className="col-3">
                        <a href="" className="text-white">Experiencia personalizada</a>
                    </div>
                    <div className="col-3">
                        <a href="" className="text-white">Experiencia personalizada</a>
                    </div>
                    <div className="col-3">
                        <a href="" className="text-white">Experiencia personalizada</a>
                    </div>
                    <div className="col-3">
                        <a href="" className="text-white">Experiencia personalizada</a>
                    </div>
                    <div className="col-3">
                        <a href="" className="text-white">Experiencia personalizada</a>
                    </div>
                    <div className="col-3">
                        <a href="" className="text-white">Experiencia personalizada</a>
                    </div>
                    <div className="col-3">
                        <a href="" className="text-white">Experiencia personalizada</a>
                    </div>
                    <div className="col-3">
                        <a href="" className="text-white">Experiencia personalizada</a>
                    </div>
                    <div className="col-3">
                        <a href="" className="text-white">Experiencia personalizada</a>
                    </div>
                    <div className="col-3">
                        <a href="" className="text-white">Experiencia personalizada</a>
                    </div>
                    <div className="col-3">
                        <a href="" className="text-white">Experiencia personalizada</a>
                    </div>
                    <div className="col-3">
                        <a href="" className="text-white">Experiencia personalizada</a>
                    </div>
                    <div className="col-3">
                        <a href="" className="text-white">Experiencia personalizada</a>
                    </div>
                    <div className="col-3">
                        <a href="" className="text-white">Experiencia personalizada</a>
                    </div>
                    <div className="col-3">
                        <a href="" className="text-white">Experiencia personalizada</a>
                    </div>
                    <div className="col-3">
                        <a href="" className="text-white">Experiencia personalizada</a>
                    </div>
                    <div className="col-3">
                        <a href="" className="text-white">Experiencia personalizada</a>
                    </div>
                    <div className="col-3">
                        <a href="" className="text-white">Experiencia personalizada</a>
                    </div>
                    <div className="col-3">
                        <a href="" className="text-white">Experiencia personalizada</a>
                    </div>
                    <div className="col-3">
                        <a href="" className="text-white">Experiencia personalizada</a>
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-6 text-left d-flex align-items-center">
                          <span className="text-white Copyrigth-text">©VOL DE COLOMS - Todos los derechos reservados - <a
                              href="">Privacy Policy</a> - <a href="">Legal Advice</a> - <a href="">Cookies Privacy</a> - Diseñado por <a
                              href="">Waka</a><br/> Made with love by   <a
                              target="_blank" href="https://www.ecoders.io/">Ecoders</a> !</span>
                    </div>
                    <div className="col-5 d-flex Justify-md-content-end align-items-center flex-wrap pr-5">
                        <div className="W-100-resposive">
                            <button className="Btn-red">Volar en globo</button>
                        </div>
                        <div className="Div-ico ">
                            <img src={ico_face} className="img-fluid" alt=""/>
                        </div>
                        <div className="Div-ico">
                            <img src={ico_twitter} className="img-fluid" alt=""/>
                        </div>
                        <div className="Div-ico">
                            <img src={ico_inst} className="img-fluid" alt=""/>
                        </div>
                        <div className="Div-ico">
                            <img src={ico_youtube} className="img-fluid" alt=""/>
                        </div>
                        <div className="Div-ico">
                            <img src={ico_face} className="img-fluid" alt=""/>
                        </div>
                        <div className="row w-100 text-right justify-content-end pr-3 pt-3">

                        </div>
                    </div>

                </div>
            </div>
            <Footer_patrocinadores/>

        </footer>

        <div className="Footer_estilohome">
            <div className="container">

                <Footer_estilohome/>
            </div>

        </div>

    </div>
)
export default Blogp;
