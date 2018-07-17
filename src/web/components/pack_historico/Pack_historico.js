import React, {Component} from 'react';
import './Pack_historico.css';
import logo_globo from '../../images/Globo-header-w.png';

import logo_b from '../../images/vdc-logo-b.png';

import Header from "../comunes/Header";
import Footer_estilo1 from "../comunes/Footer_estilo1";
import Certificado from "../comunes/Certificado";
import Card_experiencias from "../comunes/Card_experiencias";
import Debes_saber from "../comunes/Debes_saber";
import Experiencia_completa from "../comunes/Experiencia_completa";
import Experiencia_volarGlobo from "../comunes/Experiencia_volarGlobo";
import Buscador_filtro from "../comunes/Buscador_filtro";
import Buscador_filtro_movil from "../comunes/Buscador_filtro_movil";


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

                    <div className="container-fluid pl-1 pl-sm-5">
                        <div className="row text-left pl-1 pl-sm-3">
                            <div className="col-12 Div-pack-historico">
                                <h5>packs de experiencias</h5>
                                <h1>Vuelos <br/> Históricos</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <main className="Section2-pack-historico text-left px-2 px-sm-5">
                    <div className="container-fluid px-2 px-sm-5">
                       <Buscador_filtro pack={'Pack_historico'} color="text-white" texto={'Histórico'}/>

                        <Buscador_filtro_movil pack={'Pack_historico'} color="text-white" texto={'Histórico'}/>
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
