import React, {Component} from 'react';
import './Filtro.css';
import logo_b from '../../images/vdc-logo-b.png';
import ico_face from '../../images/Icon-RRSS-fb-b-55.png';
import ico_twitter from '../../images/Icon-RRSS-tw-b-55.png';
import ico_inst from '../../images/Icon-RRSS-in-b-55.png';
import ico_trip from '../../images/Icon-RRSS-tr-b-55.png';
import ico_youtube from '../../images/Icon-RRSS-yt-b-55.png';
import play_ico from '../../images/play-ico.png';
import bkg2 from '../../images/bkg-2.png';
import menos from '../../images/menos.png'
import mas from '../../images/mas.png'
import $ from 'jquery';

import Header from "../comunes/Header";
import Footer_estilo1 from "../comunes/Footer_estilo1";
import Carousel_cards from "../comunes/Carousel_cards";
import Card_experiencias from "../comunes/Card_experiencias";
import Experiencia_volarGlobo from "../comunes/Experiencia_volarGlobo";
import Arrow_top from "../comunes/Arrow_top";




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

    constructor(){
        super();
        this.state = {
            ocultar_filtro_tipo: true,
            ocultar_filtro_personas: true,
            ocultar_filtro_fechas: true,
            contador_adultos:0,
            contador_ninyos:0,
        };
    }
    toggle_filtro_tipo() {
        this.setState({
            ocultar_filtro_tipo: !this.state.ocultar_filtro_tipo,
            ocultar_filtro_personas: true,
            ocultar_filtro_fechas: true

        });
    }
    toggle_filtro_personas() {
        this.setState({
            ocultar_filtro_personas: !this.state.ocultar_filtro_personas,
            ocultar_filtro_tipo: true,
            ocultar_filtro_fechas: true
        });
    }

    toggle_filtro_fechas() {
        this.setState({
            ocultar_filtro_fechas: !this.state.ocultar_filtro_personas,
            ocultar_filtro_tipo: true,
            ocultar_filtro_personas: true
        });
    }

    sum_adultos(){
        this.setState({
            contador_adultos: this.state.contador_adultos+1
        })
    }

    rest_adultos(){
        if(this.state.contador_adultos>0) {
            this.setState({
                contador_adultos: this.state.contador_adultos - 1
            })
        }
    }

    sum_ninyos(){
        this.setState({
            contador_ninyos: this.state.contador_ninyos+1
        })
    }

    rest_ninyos(){
        if(this.state.contador_ninyos>0){
            this.setState({
                contador_ninyos: this.state.contador_ninyos-1
            })
        }

    }

    restablecer(){
        this.setState({
            contador_adultos: 0,
            contador_ninyos: 0
        })
    }





    render () {
        var ocultar_filtro_tipo = {
            display: this.state.ocultar_filtro_tipo ? "block" : "none"
        };

        var ocultar_filtro_personas = {
            display: this.state.ocultar_filtro_personas ? "block" : "none"
        };
        var ocultar_filtro_fechas = {
            display: this.state.ocultar_filtro_fechas ? "block" : "none"
        };

        var hidden_filtro_tipo = {
            display: this.state.ocultar_filtro_tipo ? "none" : "block"
        }

        var hidden_filtro_personas = {
            display: this.state.ocultar_filtro_personas ? "none" : "block"
        }

        var hidden_filtro_fechas = {
            display: this.state.ocultar_filtro_fechas ? "none" : "block"
        }

        return (
            <div className="Filtro">
<Arrow_top/>
                <section className="Section1-filtro d-flex flex-column">
                    <Header logo={logo_b}/>
                    <div className="container-fluid pl-5">
                        <div className="row text-left pl-3">
                            <div className="col-12 Div-filtro">
                                <h1>Todos los vuelos</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <main className="Section2-filtro text-left px-5">
                    <div className="container-fluid px-5">
                        <div className="row p-3 Botones-filtro">
                            <div className="col-6 d-flex pl-0">
                                <div className="col-3 p-0">
                                    <button className="Btn-gris-sinfondo">
                                        Fechas
                                    </button>
                                    <div id="card_fechas" className={`card Filtro-card Filtro-fechas Z-index-alto `} style={ hidden_filtro_fechas }>

                                    <input type="text" id="datepicker"/>
                                    </div>
                                </div>
                                <div className="col-3 p-0">
                                    <button onClick={this.toggle_filtro_personas.bind(this)} className="Btn-gris-sinfondo">
                                        Personas
                                    </button>
                                    <div id="card_personas" className={`card Filtro-card Filtro-personas Z-index-alto `} style={ hidden_filtro_personas }>
                                        <div className="d-flex flex-column p-4 justify-content-start pt-4">
                                            <div className="col-12 d-flex pl-0 pr-0">
                                                <div className="col-6 pl-0 d-flex align-items-center">
                                                    <span>Adultos</span>

                                                </div>
                                                <div className="col-6 pr-0 d-flex align-items-center justify-content-around">
                                                    <div onClick={this.rest_adultos.bind(this)} className="Filtro-boton-menos"> <img src={menos} className="img-fluid" alt=""/></div>
                                                    <span>{this.state.contador_adultos}+</span>
                                                    <div onClick={this.sum_adultos.bind(this)} className="Filtro-boton-mas">
                                                        <img src={mas} className="img-fluid" alt=""/></div>
                                                </div>

                                            </div>
                                            <div className="col-12 d-flex pl-0 pr-0 pt-3">
                                                <div className="col-6 pl-0 d-flex align-items-center">
                                                    <span>Niños <br/> <span className="Filtro-gray">hasta 12 años</span></span>

                                                </div>
                                                <div className="col-6 pr-0 d-flex align-items-center justify-content-around">
                                                    <div onClick={this.rest_ninyos.bind(this)} className="Filtro-boton-menos"><img src={menos} className="img-fluid" alt=""/></div>
                                                    <span>{this.state.contador_ninyos}+</span>
                                                    <div onClick={this.sum_ninyos.bind(this)} className="Filtro-boton-mas"><img src={mas} className="img-fluid" alt=""/></div>

                                                </div>

                                            </div>
                                            <div className="col-12 pt-5 w-100 pl-0 pr-0">
                                                <button onClick={this.restablecer.bind(this)} className="Btn-restablecer pl-0">Restablecer</button>
                                                <button className="Btn-aplicar">Aplicar</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-3 p-0">
                                    <button onClick={this.toggle_filtro_tipo.bind(this)} className="Btn-gris-sinfondo">
                                        Tipo de vuelo
                                    </button>
                                    <div id="card_tipovuelo" className={`card Filtro-card Filtro-tipovuelo Z-index-alto`} style={ hidden_filtro_tipo }>
                                        <div className="d-flex flex-column px-4 justify-content-start pt-1">
                                            <div className="col-12 d-flex pl-0 pr-0 pt-3">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1"
                                                           value="1"/>
                                                    <label class="form-check-label pl-2">Vuelo individual</label>
                                                </div>
                                            </div>

                                            <div className="col-12 d-flex pl-0 pr-0 pt-2">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1"
                                                           value="1"/>
                                                    <label class="form-check-label pl-2">Con niños</label>
                                                </div>
                                            </div>

                                            <div className="col-12 d-flex pl-0 pr-0 pt-2">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1"
                                                           value="1"/>
                                                    <label class="form-check-label pl-2">Vuelo para 2</label>
                                                </div>
                                            </div>

                                            <div className="col-12 d-flex pl-0 pr-0 pt-2">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1"
                                                           value="1"/>
                                                    <label class="form-check-label pl-2">Vuelo para 4</label>
                                                </div>
                                            </div>

                                            <div className="col-12 d-flex pl-0 pr-0 pt-2">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1"
                                                           value="1"/>
                                                    <label class="form-check-label pl-2">Vuelos adaptados</label>
                                                </div>
                                            </div>

                                            <div className="col-12 d-flex pl-0 pr-0 pt-4 justify-content-end">
                                                <div class="form-check form-check-inline Input-gray m-0">
                                                    <label class="form-check-label  pr-3">Globo no compartido</label>

                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1"
                                                           value="1"/>
                                                </div>
                                            </div>

                                            <div className="col-12 pt-4 w-100 pl-0 pr-0">
                                                <button  className="Btn-restablecer pl-0">Restablecer</button>
                                                <button className="Btn-aplicar">Aplicar</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-3 p-0">
                                    <button className="Btn-gris-sinfondo">
                                        Packs
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-2">
                            {array_cards_experiencias}

                        </div>
                        <div className="row mt-5">
                            <div className="col-12 text-center">
                                {/*<button className="Btn-gris">Cargar más</button>*/}
                            </div>
                        </div>
                    </div>


                </main>


                <section className="Section3-filtro">
                    <div className="container Container-card h-50">
                        <Carousel_cards/>
                    </div>
                    <Experiencia_volarGlobo/>
                </section>

                <footer className="Footer_estilo1">
                    <Footer_estilo1/>
                </footer>

            </div>
        )
    }
}
export default Filtro;
