import React, {Component} from 'react';
import './Bloge.css';
import Header from "../comunes/Header";
import Certificado_peq from "../comunes/Certificado_peq";
import Subetufoto from "../comunes/Subetufoto"
import Footer_patrocinadores from "../comunes/Footer_patrocinadores";
import Footer_estilohome from "../comunes/Footer_estilohome";
import Experiencia_completa from "../comunes/Experiencia_completa";
import logo_b from '../../images/vdc-logo-b.png';


import logo_globo from '../../images/Globo-header-w.png';

import logo_g from '../../images/vdc-logo-g.png';
import ico_face from '../../images/Icon-RRSS-fb-b-55.png';
import ico_twitter from '../../images/Icon-RRSS-tw-b-55.png';
import ico_inst from '../../images/Icon-RRSS-in-b-55.png';
import ico_trip from '../../images/Icon-RRSS-tr-b-55.png';
import ico_youtube from '../../images/Icon-RRSS-yt-b-55.png';
import play_ico from '../../images/play-ico.png';
import imgprueba from '../../images/img-blog1.jpg';
import exp_ico1 from '../../images/exp-ico1.jpg';
import exp_ico2 from '../../images/exp-ico2.jpg';
import exp_ico3 from '../../images/exp-ico3.jpg';
import exp_ico4 from '../../images/exp-ico4.jpg';
import tarjeta_img1 from '../../images/tarjeta-vuelo-foto1.jpg';
import tarjeta_img2 from '../../images/tarjeta-vuelo-foto2.jpg';


import dibujo_globo from '../../images/dibujo-globo-g.png';
import Card_experiencias from "../comunes/Card_experiencias";
import Arrow_top from "../comunes/Arrow_top";


let array_cards_experiencias = [];
/*JSON DE PRUEBA*/
let cards_experiencias_json = {
    "cards_experiencias": [
        {
             "tamanyo": "grande",
            "pack": "romantico",
            "titulo": 'vuelo por la garrotxa',
            "precio": '200',
            "iconos": "Icon-Cat-Grupo-g-30",
            "titulo": 'vuelo por la garrotxa',
            "tipo_vuelo": 'Vuelo individual',
            "tipo_globo": 'Globo compartido',
            "titulo": 'vuelo por la garrotxa',
            "photo": "tarjeta-vuelo-foto1"
        },
        {
             "tamanyo": "peq",
            "pack": "aventura",
            "titulo": 'vuelo por la garrotxa',
            "precio": '200',
            "iconos": "Icon-Cat-Grupo-g-30",
            "titulo": 'vuelo por la garrotxa',
            "tipo_vuelo": 'Vuelo individual',
            "tipo_globo": 'Globo compartido',
            "titulo": 'vuelo por la garrotxa',
            "photo": "tarjeta-vuelo-foto1"
        },
        {
             "tamanyo": "grande",
            "pack": "gastronomico",
            "titulo": 'vuelo por la garrotxa',
            "precio": '200',
            "iconos": "Icon-Cat-Grupo-g-30",
            "titulo": 'vuelo por la garrotxa',
            "tipo_vuelo": 'Vuelo individual',
            "tipo_globo": 'Globo compartido',
            "titulo": 'vuelo por la garrotxa',
            "photo": "tarjeta-vuelo-foto1"
        },
        {
             "tamanyo": "peq",
            "pack": "relax",
            "titulo": 'vuelo por la garrotxa',
            "precio": '200',
            "iconos": "Icon-Cat-Grupo-g-30",
            "titulo": 'vuelo por la garrotxa',
            "tipo_vuelo": 'Vuelo individual',
            "tipo_globo": 'Globo compartido',
            "titulo": 'vuelo por la garrotxa',
            "photo": "tarjeta-vuelo-foto1"
        },
        {
             "tamanyo": "grande",
            "pack": "romantico",
            "titulo": 'vuelo por la garrotxa',
            "precio": '200',
            "iconos": "Icon-Cat-Grupo-g-30",
            "titulo": 'vuelo por la garrotxa',
            "tipo_vuelo": 'Vuelo individual',
            "tipo_globo": 'Globo compartido',
            "titulo": 'vuelo por la garrotxa',
            "photo": "tarjeta-vuelo-foto1"
        },
        {
            "tamanyo": "peq",
            "pack": "romantico",
            "titulo": 'vuelo por la garrotxa',
            "precio": '200',
            "iconos": "Icon-Cat-Grupo-g-30",
            "titulo": 'vuelo por la garrotxa',
            "photo": "tarjeta-vuelo-foto1"
        },
    ]
}
for (var i = 0; i < cards_experiencias_json.cards_experiencias.length; i++) {
    array_cards_experiencias.push(<Card_experiencias tamanyo={cards_experiencias_json.cards_experiencias[i].tamanyo}
                                                     pack={cards_experiencias_json.cards_experiencias[i].pack}
                                                     titulo={cards_experiencias_json.cards_experiencias[i].titulo}
                                                     tipo_vuelo={cards_experiencias_json.cards_experiencias[i].tipo_vuelo}
                                                     tipo_globo={cards_experiencias_json.cards_experiencias[i].tipo_globo}
                                                     precio={cards_experiencias_json.cards_experiencias[i].precio}
                                                     iconos={cards_experiencias_json.cards_experiencias[i].iconos}
                                                     photo={cards_experiencias_json.cards_experiencias[i].photo}/>);
}

const Bloge = () => (
    <div className="Bloge">
<Arrow_top/>
        <section className="Section1-bloge">
            <Header logo={logo_b}/>

            <div className="container-fluid">
                <div className="row text-left p-3 pl-0 pl-md-5">
                    <div className="col-12 ">
                        <h1 className="text-uppercase w-75 ">Feria medieval de Besalú y <br/> vuelo en globo en la
                            Garrotxa</h1>
                        <h5 className="text-white w-50">A la mañana siguiente, disfrutareis de un viaje en globo entre
                            volcanes. A primera hora de la mañana en nuestras instalaciones, os invitamos a tomar un
                            café mientras observáis la preparación.</h5>

                    </div>
                </div>
            </div>
        </section>
        <main className="Section2-bloge text-left px-1 px-md-5">
            <div className="container ">
                <div className="row">
                    <div className="col-12 col-md-8">
                        <div className="col-12 mb-5 py-3">
                            <h2 className="w-100">Subtitular de la notícia</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam beatae consequatur,
                                laudantium quis soluta temporibus voluptate voluptatibus! Aspernatur autem excepturi
                                molestiae mollitia nobis repellat . Distinctio perferendis porro quos? Cum, magni. <a
                                    href="">Más info</a></p>
                        </div>

                        <div className="col-12 mb-5 py-3">
                            <h2 className="w-100">Subtitular de la notícia</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam beatae consequatur,
                                laudantium quis soluta temporibus voluptate voluptatibus! Aspernatur autem excepturi
                                molestiae mollitia nobis repellat . Distinctio perferendis porro quos? Cum, magni.</p>
                            <img src={imgprueba} className="img-fluid w-100" alt=""/>
                        </div>

                        <div className="col-12 py-3">
                            <h2 className="w-100">Subtitular de la notícia</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam beatae consequatur,
                                laudantium quis soluta temporibus voluptate voluptatibus! Aspernatur autem excepturi
                                molestiae mollitia nobis repellat . Distinctio perferendis porro quos? Cum, magni.</p>
                        </div>

                        <div className="col-12 mt-4 text-left align-items-center d-none d-md-flex">
                            <div className="Div-ico">
                                <a href="https://es-es.facebook.com/voldecoloms/">

                                <i class="fab fa-facebook-square Face-ico-color"></i>
                                </a>
                            </div>
                            <div className="Div-ico">
                                <a href="https://twitter.com/voldecoloms">

                                <i class="fab fa-twitter-square Twit-ico-color"></i>
                                </a>
                            </div>
                            <div className="Div-ico">
                                <a href="https://www.youtube.com/user/Voldecoloms">

                                <i class="fab fa-youtube You-ico-color"></i>
                                </a>
                            </div>
                            <div className="Div-ico">
                                <a href="https://www.instagram.com/voldecoloms/">

                                <i class="fab fa-instagram Ins-ico-color"></i>
                                </a>
                            </div>
                            <div className="Div-ico">
                                <i class="fab fa-google-plus-square Goo-ico-color"></i>
                            </div>
                            <div className="Div-ico">
                                <a href="https://www.linkedin.com/company/vol-de-coloms">

                                <i class="fab fa-linkedin Link-ico-color"></i>
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className="col-12 col-md-4">
                        <div className="row justify-content-center">
                            <img src={logo_g} className="img-fluid Vol-coloms-g" alt=""/>
                            <span
                                className="text-center w-100  Elige-experiencia-titulo">Elige tu experiencia en globo</span>

                        </div>

                        <div className="row Row-exp d-none d-md-flex">
                            <a href="/pack_historico" className="col-6 mb-4 p-2 Exp-peq">
                                <h5>Histórico</h5>
                                <img src={exp_ico1} className="img-fluid" alt=""/>
                            </a>
                            <a href="/pack_historico" className="col-6 mb-4 p-2 Exp-peq">
                                <h5>Histórico</h5>
                                <img src={exp_ico2} className="img-fluid" alt=""/>
                            </a>
                            <a href="/pack_romantico"  className="col-6 mb-4 p-2 Exp-peq">
                                <h5>Romático</h5>
                                <img src={exp_ico3} className="img-fluid" alt=""/>
                            </a>
                            <a href="/pack_romantico" className="col-6 mb-4 p-2 Exp-peq">
                                <h5>Romático</h5>
                                <img src={exp_ico4} className="img-fluid" alt=""/>
                            </a>
                        </div>
                        <div className=" d-md-none">
                            <Experiencia_completa/>
                        </div>
                        <div className="row justify-conten-center d-none d-md-flex ">
                            <Certificado_peq/>
                        </div>


                    </div>
                </div>
            </div>


        </main>

        <section id="Section3" className="Section3-bloge Text-gray">

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 mb-5">
                        <img src={dibujo_globo} className="img-fluid" alt=""/>

                    </div>
                    <div className="col-md-12 mt-2">
                        <h2 className="text-center">Te proponemos experiencias</h2>
                        <h3 className="text-center ">Combina tu vuelo con alojamiento,comida o actividades
                            turisticas</h3>
                    </div>
                </div>

                <div className="row justify-content-center w-100 mt-5 m-0 ">
                    {array_cards_experiencias}
                </div>
                <div className="row mt-5">
                    <div className="col-12 text-center">
                        <button className="Btn-gris">Cargar más</button>
                    </div>
                </div>


            </div>
        </section>


        <section id="Section5" className="Section5 pt-5">
            <Subetufoto/>

        </section>
        <footer className="pt-5 d-none d-md-block">
            <div className="container-fluid px-1 px-md-5">
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
                          <span
                              className="text-white Copyrigth-text text-right">©VOLS DE COLOM - Todos los derechos reservados - <a
                              href="">Privacy Policy</a> - <a href="">Legal Advice</a> - <a href="">Cookies Privacy</a> - Diseñado por <a
                              href="">Waka</a><br/> Made with love by   <a
                              target="_blank" href="https://www.ecoders.io/">Ecoders</a> !</span>
                    </div>
                    <div className="col-5 d-flex justify-content-end align-items-center flex-wrap pr-5">
                        <div className="col-5">
                            <button className="Btn-red">Volar en globo</button>
                        </div>
                        <div className="Div-ico">
                            <a target="_blank" href="https://es-es.facebook.com/voldecoloms/">
                                <img src={ico_face} alt=""/>

                            </a>
                        </div>
                        <div className="Div-ico">
                            <a target="_blank" href="https://twitter.com/voldecoloms?lang=es">
                                <img src={ico_twitter} alt=""/>

                            </a>
                        </div>
                        <div className="Div-ico">
                            <a target="_blank" href="https://www.instagram.com/voldecoloms/">
                                <img src={ico_inst} alt=""/>

                            </a>
                        </div>
                        <div className="Div-ico">
                            <a target="_blank" href="https://www.youtube.com/user/Voldecoloms">
                                <img src={ico_youtube} alt=""/>

                            </a>
                        </div>
                        <div className="Div-ico">
                            <a target="_blank" href="">
                                <i class="fab fa-google-plus-square Goo-ico-white"></i>

                            </a>
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
export default Bloge;
