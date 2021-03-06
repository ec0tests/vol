import React, {Component} from 'react';
import './Filtro.css';
import logo_globo from '../../images/Globo-header-w.png';
import logo_b from '../../images/vdc-logo-b.png';

import ico_face from '../../images/Icon-RRSS-fb-b-55.png';
import ico_twitter from '../../images/Icon-RRSS-tw-b-55.png';
import ico_inst from '../../images/Icon-RRSS-in-b-55.png';
import ico_trip from '../../images/Icon-RRSS-tr-b-55.png';
import ico_youtube from '../../images/Icon-RRSS-yt-b-55.png';
import play_ico from '../../images/play-ico.png';
import bkg2 from '../../images/bkg-2.png';
import $ from 'jquery';


import Header from "../comunes/Header";
import Footer_estilo1 from "../comunes/Footer_estilo1";
import Carousel_cards from "../comunes/Carousel_cards";
import Buscador_filtro_movil from "../comunes/Buscador_filtro_movil";
import Card_experiencias from "../comunes/Card_experiencias";
import Experiencia_volarGlobo from "../comunes/Experiencia_volarGlobo";
import Footer_estilohome from "../comunes/Footer_estilohome";
import Arrow_top from "../comunes/Arrow_top";
import Buscador_filtro from "../comunes/Buscador_filtro";
import Footer_patrocinadores from "../comunes/Footer_patrocinadores";




/*Creo el array de filtro provisional*/

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

/*$( function() {
    $( "#datepicker" ).datepicker();
} );*/

class Filtro extends React.Component{




    render () {
        return (
            <div className="Filtro">
<Arrow_top/>
                <section className="Section1-filtro d-flex flex-column">
                    <Header logo={logo_b}/>

                    <div className="container-fluid pl-1 pl-md-5">
                        <div className="row text-left pl-3 pl-md-0">
                            <div className="col-12 Div-filtro pt-md-5 ">
                                <h1>Todos los vuelos</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <main className="Section2-filtro text-left px-3  px-md-5 ">
                    <div className="container-fluid px-3 px-md-0 ">
                        <Buscador_filtro pack={'Pack_general'} texto={'Packs'}/>
                        <Buscador_filtro_movil/>
                        <div className="container Container-card h-25 H-38 Margen-negativo d-md-none px-0 ">
                            <Carousel_cards/>
                        </div>
                        <div className="row pt-2 Mt-nmovil">

                            {/*TARJETA TABLET OFERTA FILTRO*/}
                           {/* <div className="col-6 Mostrar-tablet Oculto">
                                <div className="card w-100 h-100 p-0 p-md-4">
                                    <div className="card-body text-left">
                                        <div className="">
                                            <div className="col-md-12">

                                                <h5 className="Titulo-tarjeta card-title w-100 text-left text-uppercase Barlow">14/febrero
                                                    san valentin</h5>
                                                <p className=" Width-75 text-left Subtitulo-tarjeta">Vuelo en pareja & noche romántica en una cabaña en un árbol.</p>
                                            </div>

                                        </div>

                                        <div className="row w-100 pt-2 pt-lg-5 justify-content-between mb-4 mb-md-0">
                                            <div className="col-12 col-sm-5 col-md-5  text-left d-flex align-items-center mb-4  mb-lg-0">
                                                <button className=" Btn-blue W-8rem Mayor-responsive">VER OFERTA</button>
                                            </div>
                                            <div className="col-12 col-sm-7 col-md-7 mt-3 mt-md-0 text-left d-flex Tarjeta-footer flex-md-row">
                                                <div className="d-flex">
                                                    <img src="https://via.placeholder.com/55x55" className=""
                                                         alt=""/>
                                                    <span className=" d-flex align-items-center p-2 Info-card">Vuela en globo <br/> Globo no compartido</span>
                                                </div>
                                                <div className="d-flex">
                                                    <span className="d-flex align-items-center Price-card pl-3">250€</span>

                                                </div>
                                            </div>
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </div>
                            </div>*/}
                            {array_cards_experiencias}

                        </div>
                        <div className="row mt-5 d-none d-md-flex">
                            <div className="col-12 text-center">
                                {/*<button className="Btn-gris">Cargar más</button>*/}
                            </div>
                        </div>
                    </div>


                </main>


                <section className="Section3-filtro">
                    <div className="container Container-card h-50 Margen-negativo d-none d-md-block">
                        <Carousel_cards/>
                    </div>
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
                    <div className="container mw-100">

                    <Footer_estilohome/>
                    </div>

                </div>

            </div>
        )
    }
}
export default Filtro;
