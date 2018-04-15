import React, {Component} from 'react';
import './Pack_historico.css';
import logo_b from '../../images/vdc-logo-b.png';


import Header from "../comunes/Header";
import Footer_estilo1 from "../comunes/Footer_estilo1";
import Certificado from "../comunes/Certificado";
import Card_experiencias from "../comunes/Card_experiencias";
import Debes_saber from "../comunes/Debes_saber";
import Experiencia_completa from "../comunes/Experiencia_completa";
import Experiencia_volarGlobo from "../comunes/Experiencia_volarGlobo";


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


class Pack_historico extends React.Component{

    constructor(){
        super();
        this.state = {
            mostrar_filtro_tipo: true,
            mostrar_filtro_personas: true,
            contador_adultos:0,
            contador_ninyos:0,
        };
    }
    toggle_filtro_tipo() {
        this.setState({
            mostrar_filtro_tipo: !this.state.mostrar_filtro_tipo
        });
    }
    toggle_filtro_personas() {
        this.setState({
            mostrar_filtro_personas: !this.state.mostrar_filtro_personas
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
        var mostrar_filtro_tipo = {
            display: this.state.mostrar_filtro_tipo ? "block" : "none"
        };

        var mostrar_filtro_personas = {
            display: this.state.mostrar_filtro_personas ? "block" : "none"
        };

        var hidden_filtro_tipo = {
            display: this.state.mostrar_filtro_tipo ? "none" : "block"
        }

        var hidden_filtro_personas = {
            display: this.state.mostrar_filtro_personas ? "none" : "block"
        }

        return (
            <div className="Pack-historico">

                <section className="Section1-pack-historico d-flex flex-column">
                    <Header logo={logo_b}/>
                    <div className="container-fluid pl-5">
                        <div className="row text-left pl-3">
                            <div className="col-12 Div-pack-historico">
                                <h5>packs de experiencias</h5>
                                <h1>Vuelos <br/> Históricos</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <main className="Section2-pack-historico text-left px-5">
                    <div className="container-fluid px-5">
                        <div className="row p-3 Botones-pack-historico">
                            <div className="col-6 d-flex pl-0">
                                <div className="col-3 p-0">
                                    <button className="Btn-gris-sinfondo">
                                        Fechas
                                    </button>
                                </div>
                                <div className="col-3 p-0">
                                    <button onClick={this.toggle_filtro_personas.bind(this)} className="Btn-gris-sinfondo">
                                        Personas
                                    </button>
                                    <div id="card_personas" className={`card Pack_historico-card Pack_historico-personas `} style={ hidden_filtro_personas }>
                                        <div className="d-flex flex-column p-4 justify-content-start pt-4">
                                            <div className="col-12 d-flex pl-0 pr-0">
                                                <div className="col-6 pl-0 d-flex align-items-center">
                                                    <span>Adultos</span>

                                                </div>
                                                <div className="col-6 pr-0 d-flex align-items-center justify-content-around">
                                                    <div onClick={this.rest_adultos.bind(this)} className="Pack_historico-boton-menos">-</div>
                                                    <span>{this.state.contador_adultos}+</span>
                                                    <div onClick={this.sum_adultos.bind(this)} className="Pack_historico-boton-mas">+</div>
                                                </div>

                                            </div>
                                            <div className="col-12 d-flex pl-0 pr-0 pt-3">
                                                <div className="col-6 pl-0 d-flex align-items-center">
                                                    <span>Niños <br/> <span className="Pack_historico-gray">hasta 12 años</span></span>

                                                </div>
                                                <div className="col-6 pr-0 d-flex align-items-center justify-content-around">
                                                    <div onClick={this.rest_ninyos.bind(this)} className="Pack_historico-boton-menos">-</div>
                                                    <span>{this.state.contador_ninyos}+</span>
                                                    <div onClick={this.sum_ninyos.bind(this)} className="Pack_historico-boton-mas">+</div>

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
                                    <div id="card_tipovuelo" className={`card Pack_historico-card Pack_historico-tipovuelo`} style={ hidden_filtro_tipo }>
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
                                    <button className="Btn-gris-sinfondo Btn-historico">
                                        Pack Histórico
                                    </button>
                                </div>
                            </div>
                            <div className="col-6 d-flex align-items-center justify-content-end">
                                <span>Tienes la posibilidad de <b> 60 tipos de vuelo</b> con tu búsqueda</span>
                            </div>
                        </div>
                        <div className="row pt-2">
                            {array_cards_experiencias}

                        </div>
                        <div className="row mt-1">
                            <div className="col-12 text-center">
                                <button className="Btn-gris">Cargar más</button>
                            </div>
                        </div>

                    </div>


                </main>


                <section className="py-5 my-5">
                    <div className="container Container-card h-50">
                       <Certificado/>
                    </div>
                </section>

                <Debes_saber/>

                <Experiencia_completa/>


                <div className="Section5-pack-historico">
                    <Experiencia_volarGlobo/>
                </div>
                <footer className="Footer_estilo1">
                    <Footer_estilo1/>
                </footer>

            </div>
        )
    }
}
export default Pack_historico;
