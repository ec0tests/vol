import React, {Component} from 'react';
import '../../css/style.css';
import '../../css/colors/blue.css';
import '../comunes/Nestable.css';
import './Reservas_adm.css';
import Adm_header from '../comunes/header/Header';
import Calendar from '../comunes/calendar/Calendar';
import Adm_menu from '../comunes/menu/Menu';
import Datatable from '../comunes/datatable/Datatable';
import $ from "jquery";

/*import File_upload from '../comunes/file_upload/File_upload';*/


class Reservas_adm extends React.Component {
    crearReserva() {
        $('#reserva_form')[0].reset();
    }

    editarReserva() {
        /*$("#editor_vuelo").fadeIn(600);
        $("#vuelo_nombre").val(this.props.nombre);
        $("#vuelo_personas").val(this.props.personas);
        $("#vuelo_precio").val(this.props.precio);
        $("#vuelo_tipo").val(this.props.tipo);
        $("#vuelo_fecha1").val(this.props.fecha1);
        $("#vuelo_fecha2").val(this.props.fecha2);
        $("#vuelo_descripcion").val(this.props.descripcion);*/
    }

    borrarReserva() {
        /*$("#nombre_vuelo").val(this.props.nombre);
        $("#personas_vuelo").val(this.props.personas);
        $("#fechaPublicacion_vuelo").val(this.props.fechaPublicacion_vuelo);*/

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
                                    <h3 className="text-themecolor m-b-0 m-t-0 text-left">Vuelo</h3>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                                        <li className="breadcrumb-item active">Vuelo</li>
                                    </ol>
                                </div>

                            </div>


                            <div className="row">
                                {/*MODAL*/}
                                <div className="modal fade" id="modal_reserva" tabindex="-1" role="dialog"
                                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h3 className="modal-title" id="exampleModalLabel">Crear Reserva</h3>
                                                <button type="button" className="close" data-dismiss="modal"
                                                        aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-Body m-3">

                                                <form className="form-material m-t-10 row" id="reserva_form">
                                                    <div class="form-group col-12 col-md-4 m-t-20">
                                                        <label className="Label-vuelos"
                                                               htmlFor="vuelo_nombre">Usuario:</label>
                                                        <input type="text" class="form-control form-control-line"
                                                               value="Nombre" id="vuelo_nombre" name="vuelo_nombre"/>
                                                    </div>
                                                    <div class="form-group col-12 col-md-4 m-t-20">
                                                        <label className="Label-vuelos">Fecha:</label>

                                                        <input type="text" class="form-control form-control-line"
                                                               value="Personas" id="vuelo_personas" name="vuelo_personas"/>
                                                    </div>
                                                    <div class="form-group col-12 col-md-4 m-t-20">
                                                        <label className="Label-vuelos">Precio:</label>
                                                        <input type="text" class="form-control form-control-line"
                                                               value="Precio" id="vuelo_precio" name="vuelo_precio"/>
                                                    </div>






                                                    <div class="form-group col-md-12 m-t-20 text-right">
                                                        <button type="submit"  className="btn btn-info waves-effect waves-light my-1">Guardar</button>
                                                    </div>

                                                </form>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                                <div className="col-8">

                                    <div className="card p-3">
                                        <h3 className="card-title w-100 mb-4"> Calendario Reservas
                                            <button data-toggle="modal" data-target="#modal_reserva"
                                                    onClick={this.crearReserva.bind(this)}
                                                    className="d-inline Float-r Cursor-pointer Btn-transparent"><i
                                                className="fas fa-plus-circle "></i></button></h3>
                                        <Calendar/>
                                    </div>
                                </div>

                                <div className="col-4">

                                    <div className="card ">
                                        <div className="card-body justify-content-start">
                                            <h3 className="card-title w-100 mb-4"> Reservas</h3>

                                            <div className="row">
                                                <Datatable data={this.dataSet} columns={this.columns}/>
                                            </div>
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

    dataSet = [
        ["Usuario1", "10/05/2018", "300"],
        ["Usuario2", "10/06/2018", "600"],
        ["Usuario3", "12/06/2018", "200"],
        ["Usuario4", "16/06/2018", "600"],
    ];

    columns = [
        {title: "Usuario"},
        {title: "Fecha Reserva"},
        {title: "Precio"},

    ]
}

export default Reservas_adm;
