import React, {Component} from 'react';
import './Ficha.css';
import Header from "../comunes/Header";
import Experiencia_completa from "../comunes/Experiencia_completa";
import Experiencia_volarGlobo from "../comunes/Experiencia_volarGlobo";
import Footer_estilo1 from "../comunes/Footer_estilo1";
import Imagenes_ficha from "./Imagenes_ficha";
import Video_ficha from "./Video_ficha";
import Arrow_top from "../comunes/Arrow_top";
import Datepicker_ficha from "./Datepicker_ficha"

import logo_globo from '../../images/Globo-header-w.png';
import imagenes_instalaciones1 from '../../images/instalacion1.jpg';


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


const Ficha = () => (
    <div className="Ficha">
        <Arrow_top/>
        <section className="Section1-ficha">
            <Header logo={logo_globo}/>
            <div className="container-fluid">
                <div className="row text-left p-3 pl-5">
                    <div className="col-12 ">
                        <h1 className="text-uppercase w-75 ">vuelo en globo + <br/> cabaña en los arboles</h1>

                    </div>
                </div>
            </div>
        </section>
        <main className="Section2-ficha text-left px-5">
            <div className="container-fluid px-5">
                <div className="row my-5 py-2">
                    <div className="col-12 Div-experiencias">
                        <h1 className="H1-filtro">Experiencias con valor de 5 estrellas en <span>tripadvisor</span></h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-8">
                        <div className="col-12 mb-5 py-3">
                            <h2 className="w-100">Descripción</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores assumenda
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

                        <div className="col-12 mb-5 py-3 d-flex flex-wrap">
                            <h2 className="w-100">FECHAS Y DISPONIBILIDAD</h2>
                            <div className="col-12 col-md-6 py-4 px-0">
                                <div className="col-12  mb-3 px-0">
                                    <button className="Btn-gris Ficha-btn">Agosto</button>
                                </div>
                                <div className="col-12 px-0">
                                    <button className="Btn-blue Ficha-btn">Comprar sin fecha</button>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 py-4">
                                <Datepicker_ficha/>
                            </div>
                        </div>


                        <div className="col-12 mb-5 py-3 d-flex flex-wrap">
                            <h2 className="w-100 mb-3">IMAGÉNES E INSTALACIONES</h2>
                            {array_imagenesficha}
                            <Video_ficha/>
                        </div>
                        <div className="col-12 mb-5 py-3 d-flex flex-wrap">
                            <h2 className="w-100 mb-3">LA OPINIÓN DE NUESTROS CLIENTES</h2>
                        </div>


                        <div className="col-12 mt-4 d-flex text-left align-items-center">
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


                </div>
            </div>


        </main>

        <section id="Section3" className="Section3-ficha Text-gray">

            <Experiencia_completa/>
        </section>


        <section className="Section4-ficha">
            <Experiencia_volarGlobo/>
        </section>
        <footer className="Footer_estilo1">
            <Footer_estilo1/>
        </footer>

    </div>
)
export default Ficha;
