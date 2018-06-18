import React, {Component} from 'react';
import '../../css/style.css';
import '../../css/colors/blue.css';
import '../comunes/Nestable.css';
import './Reservas_adm.css';
import Adm_header from '../comunes/header/Header';
import Calendar from '../comunes/calendar/Calendar';
import Adm_menu from '../comunes/menu/Menu';
import Datatable from '../comunes/datatable/2/Datatable';
import $ from "jquery";

/*import File_upload from '../comunes/file_upload/File_upload';*/


class Reservas_adm extends React.Component {

    constructor(props) {
        super(props);
        this.setState.bind(this)

        this.state = {
            titulo_form: 'Crear Reserva',
            usuario_reserva: '',
            precio_reserva: '',
            fecha_reserva: '',
            nombre_reserva: '',
            btn_reserva: 'Crear',
            showBorrar: false

        };

    }


    crearReserva() {
        this.setState({
            titulo_form: 'Crear Reserva',
            precio_reserva: '',
            usuario_reserva: '',
            fecha_reserva: '',
            nombre_reserva: '',
            btn_reserva: 'Crear',
            showBorrar: false

        });
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


    click_calendario(slotInfo) {


    }

    click_reservas(event) {
        this.setState({
            titulo_form: 'Editar Reserva',
            precio_reserva: event.precio,
            usuario_reserva: event.usuario,
            fecha_reserva: event.start,
            nombre_reserva:  event.title,

            btn_reserva: 'Editar',
            showBorrar: true


        });

        $('#modal_reserva').modal('show')


    }
    /*AL CLICKAR EN LA FILA*/
    options_reserva = {
        afterSearch: '',  // define a after search hook,
        onRowClick: function (row, columnIndex, rowIndex, e) {

            $('#reserva_usuario').val(row.usuario)
            $('#reserva_precio').val(row.precio)
            $('#reserva_fecha').val(row.fecha)
            $('#reserva_nombre').val(row.reserva)
            $('#modal_reserva').modal('show')
        },
        exportCSVText: '',
        insertText: 'Crear',
        deleteText: 'Borrar',
        saveText: 'Guardar',
        closeText: 'Cerrar'
    }

    columnas_reservas = {
        "columnas": [
            {
                "nombre": "Reserva",
                "field": 'reserva',

            },
            {
                "nombre": "Usuario",
                "field": 'usuario',

            },
            {
                "nombre": "Fecha",
                "field": 'fecha'
            }
            ,
            {
                "nombre": "Precio",
                "field": 'precio'
            },

        ]
    };

    data_reservas = [
        {'id': 0, 'reserva': 'reserva1','usuario': 'usuario1', 'fecha': '10/05/2018', 'precio': 100},
        {'id': 1, 'reserva': 'reserva2','usuario': 'usuario2', 'fecha': '10/06/2018', 'precio': 100},
        {'id': 2, 'reserva': 'reserva3','usuario': 'usuario3', 'fecha': '12/06/2018', 'precio': 100}
    ]




    calendario_fechas = [
        {
            start: new Date('2018-05-10'),
            end: new Date('2018-05-10'),

            title: "Reserva1",
            usuario: "Usuario1",
            precio: '100',


        }
        ,
        {
            start: new Date('2018-06-10'),
            end: new Date('2018-06-10'),

            title: "Reserva2",
            usuario: "Usuario1",
            precio: '100',

        },
        {
            start: new Date('2018-06-12'),
            end: new Date('2018-06-12'),

            title: "Reserva3",
            usuario: "Usuario1",
            precio: '100',

        },
        {
            start: new Date('2018-06-16'),
            end: new Date('2018-06-16'),

            title: "Reserva4",
            usuario: "Usuario1",
            precio: '100',

        },

    ]

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
                                                <h3 className="modal-title"
                                                    id="titulo_modal_reserva">{this.state.titulo_form}</h3>
                                                <button type="button" className="close" data-dismiss="modal"
                                                        aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-Body m-3">

                                                <form className="form-material m-t-10 row" id="reserva_form">

                                                    <div className="form-group col-12 m-t-20">
                                                        <label className="Label-vuelos"
                                                               htmlFor="vuelo_nombre">Vuelo:</label>
                                                        <select className="form-control form-control-line " id="reserva_vuelo" name="reserva_vuelo">
                                                            <option value="idvuelo1">Vuelo</option>
                                                            <option value="idvuelo1">Vuelo2</option>
                                                            <option value="idvuelo1">Vuelo3</option>
                                                          </select>
                                                    <div class="alert alert-danger p-1 mt-2"><small>El vuelo seleccionado no está disponible en esta fecha</small> </div>


                                                    </div>

                                            <div className="form-group col-12 col-md-6 m-t-20">
                                                <label className="Label-vuelos"
                                                       htmlFor="vuelo_nombre">Usuario:</label>
                                                <input type="text"
                                                       className="form-control form-control-line "
                                                        id="reserva_usuario"
                                                       value={this.state.usuario_reserva}
                                                       name="reserva_usuario"/>
                                            </div>
                                                    <div className="form-group col-12 col-md-6 m-t-20">
                                                        <label className="Label-vuelos"
                                                               htmlFor="vuelo_nombre">Reserva:</label>
                                                        <input type="text"
                                                               className="form-control form-control-line "
                                                               id="reserva_nombre"
                                                               value={this.state.nombre_reserva}
                                                               name="reserva_nombre"/>
                                                    </div>
                                            <div className="form-group col-12 col-md-6 m-t-20">
                                                <label className="Label-vuelos">Fecha:</label>

                                                <input type="date"
                                                       className="form-control form-control-line "
                                                        id="reserva_fecha"
                                                       name="reserva_fecha" value={this.state.fecha_reserva}/>
                                            </div>
                                            <div className="form-group col-12 col-md-6 m-t-20">
                                                <label className="Label-vuelos">Precio:</label>
                                                <input type="text"
                                                       className="form-control form-control-line "
                                                       value="Precio" id="reserva_precio"
                                                       name="reserva_precio" value={this.state.precio_reserva}/>
                                            </div>


                                            <div className="form-group col-md-12 m-t-20 text-right">
                                                <button type="button"
                                                        className="btn btn-danger waves-effect waves-light my-1 mr-2"
                                                        style={{display: this.state.showBorrar ? 'inline' : 'none'}}>Eliminar
                                                    Reserva
                                                </button>
                                                <button type="submit"
                                                        className="btn btn-info waves-effect waves-light my-1">{this.state.btn_reserva}
                                                </button>
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
                                <Calendar fechas={this.calendario_fechas} onselect_slot={

                                    slotInfo =>


                                        this.click_calendario(slotInfo)


                                }
                                          onselect_event={event => this.click_reservas(event)}/>
                            </div>
                        </div>

                        <div className="col-4">

                            <div className="card ">
                                <div className="card-body justify-content-start">
                                    <h3 className="card-title w-100 mb-4"> Reservas</h3>

                                        <Datatable options={this.options_reserva} columnas={this.columnas_reservas} data={this.data_reservas}/>
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

export default Reservas_adm;
