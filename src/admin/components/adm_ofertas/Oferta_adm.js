import React, {Component} from 'react';
import '../../css/style.css';
import '../../css/colors/blue.css';
import '../comunes/Nestable.css';
import './Oferta_adm.css';
import Adm_header from '../comunes/header/Header';
import Adm_menu from '../comunes/menu/Menu';
import Text_editor from '../comunes/text_editor/Text_editor';
import Oferta from './Oferta';
import $ from "jquery";

/*import File_upload from '../comunes/file_upload/File_upload';*/


class Oferta_adm extends React.Component {
    crearOferta() {
        $('#oferta_form')[0].reset();
        $('#exampleModalLabel_crearOferta').text('Crear Oferta');
    }

    render() {

        return (
            <div className="fix-header fix-sidebar card-no-border logo-center">

                <div id="main-wrapper">
                    <Adm_header/>
                    <Adm_menu/>
                    <div className="page-wrapper">
                        <div className="container-fluid">
                            <div className="row page-titles">
                                <div className="col-md-5 col-8 align-self-center">
                                    <h3 className="text-themecolor m-b-0 m-t-0 text-left">Oferta</h3>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                                        <li className="breadcrumb-item active">Oferta</li>
                                    </ol>
                                </div>

                            </div>


                            <div className="row">
                                <div className="col-12">

                                    <div className="card ">
                                        <div className="card-body justify-content-start">
                                            <h3 className="card-title w-100 mb-4"> Ofertas publicadas
                                                <button data-toggle="modal"  data-target="#exampleModal3"  onClick={this.crearOferta.bind(this)}
                                                        className="d-inline Float-r Cursor-pointer Btn-transparent"><i
                                                    className="fas fa-plus-circle "></i></button></h3>
                                            <div className="row">
                                                    <Oferta nombre={"Oferta 1"} plazas={"3"} precio={"300"}
                                                           fecha1={"22-02-2018"} fecha2={"12-06-2018"}
                                                            descripcion={"descripcion de la oferta"}/>
                                                    <Oferta nombre={"Oferta2"} plazas={"2"} precio={"200"}
                                                           fecha1={"22-02-2018"} fecha2={"12-06-2018"}
                                                           descripcion={"descripción de la oferta"}/>
                                                    <Oferta nombre={"Oferta3"} plazas={"4"} precio={"400"}
                                                           fecha1={"22-02-2018"} fecha2={"12-06-2018"}
                                                           descripcion={"descripción de la oferta"}/>
                                                    <Oferta  nombre={"Oferta4"} plazas={"1"} precio={"200"}
                                                           fecha1={"22-02-2018"} fecha2={"12-06-2018"}
                                                          descripcion={"descripción de la oferta"}/></div>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )

    }
}

export default Oferta_adm;
