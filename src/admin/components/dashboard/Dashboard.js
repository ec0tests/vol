import React, {Component} from 'react';
import '../../css/style.css';
import '../../css/colors/blue.css';
import Adm_header from '../comunes/header/Header';
import Adm_menu from '../comunes/menu/Menu';
import Cupon from './Cupon';
import Chart from './Chart';
import Post_noeditable from './Post_noeditable';
import Modales from './Modales';
import Datatable from "../comunes/datatable/2/Datatable";
import Calendar from "../comunes/calendar/Calendar";
import $ from "jquery";


class Adm_dashboard extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            titulo_form: 'Crear Reserva',
            cliente_reserva: '',
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
            cliente_reserva: '',
            fecha_reserva: '',
            nombre_reserva: '',
            btn_reserva: 'Crear',
            showBorrar: false

        });
    }

    click_reservas(event) {
        this.setState({
            titulo_form: 'Editar Reserva',
            precio_reserva: event.precio,
            cliente_reserva: event.cliente,
            fecha_reserva: event.start,
            nombre_reserva:  event.title,

            btn_reserva: 'Editar',
            showBorrar: true


        });

        $('#modal_reserva_dashboard').modal('show')


    }


    render() {

        return (
            <div className="fix-header fix-sidebar card-no-border logo-center">

                <div id="main-wrapper">
                    <Adm_header/>
                    <Adm_menu/>
                    <div className="page-wrapper">
                        {/*MODAL*/}
                        <div className="modal fade" id="modal_reserva_dashboard" tabindex="-1" role="dialog"
                             aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h3 className="modal-title"
                                            id="titulo_modal_reserva_dashboard">{this.state.titulo_form}</h3>
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
                                                <select className="form-control form-control-line " id="reserva_vuelo"
                                                        name="reserva_vuelo">
                                                    <option value="idvuelo1">Vuelo</option>
                                                    <option value="idvuelo1">Vuelo2</option>
                                                    <option value="idvuelo1">Vuelo3</option>
                                                </select>
                                                <div class="alert alert-danger p-1 mt-2">
                                                    <small>El vuelo seleccionado no está disponible en esta fecha</small>
                                                </div>


                                            </div>

                                            <div className="form-group col-12 col-md-6 m-t-20">
                                                <label className="Label-vuelos"
                                                       htmlFor="vuelo_nombre">Clientes:</label>
                                                <input type="text"
                                                       className="form-control form-control-line "
                                                       id="reserva_cliente"
                                                       value={this.state.cliente_reserva}
                                                       name="reserva_cliente"/>
                                            </div>
                                            <div className="form-group col-12 col-md-6 m-t-20">
                                                <label className="Label-vuelos"
                                                       htmlFor="vuelo_reserva">Reserva:</label>
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
                        <div className="container-fluid">
                            <div className="row page-titles">
                             <Modales/>
                                <div className="col-md-5 col-8 align-self-center">
                                    <h3 className="text-themecolor m-b-0 m-t-0 text-left">Dashboard</h3>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                                        <li className="breadcrumb-item active">Dashboard</li>
                                    </ol>
                                </div>

                            </div>
                            <div className="row">
                                <div class="col-lg-6 col-md-12">
                                    <div class="card Adm-card">
                                        <div class="card-body justify-content-start">
                                            <h4 class="card-title ">Últimas Reservas</h4>
                                            <Datatable options={this.options_boton} columnas={this.columnas_ultimas_reservas} accion={true} data={this.data_ultimas_reservas}/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="card Adm-card">
                                        <div class="card-body justify-content-start">
                                            <h4 class="card-title">Packs más vendidos</h4>
                                            <Datatable options={this.options_boton} columnas={this.columnas_packs} data={this.data_packs}/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div class="col-lg-6 col-md-12">
                                    <div class="card Adm-card">
                                        <div class="card-body justify-content-start">
                                            <h4 class="card-title ">Reservas por cliente</h4>
                                            <Datatable options={this.options_boton} columnas={this.columnas_cliente_reservas} accion={true} data={this.data_cliente_reservas}/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="card Adm-card">
                                        <div class="card-body justify-content-start">
                                            <h4 class="card-title">Calendario de reservas</h4>
                                            <Calendar fechas={this.calendario_fechas} onselect_slot={

                                                slotInfo =>


                                                    this.click_calendario(slotInfo)


                                            }
                                                      onselect_event={event => this.click_reservas(event)}/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div class="col-lg-6 col-md-12">
                                    <div class="card Adm-card">
                                        <div class="card-body justify-content-start">
                                            <h4 class="card-title">Cupones activos</h4>
                                            <Datatable options={this.options_boton} columnas={this.columnas_cupones} data={this.data_cupones}/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="card Adm-card">
                                        <div class="card-body justify-content-start">
                                            <h4 class="card-title">Cupones cerrados</h4>
                                            <Datatable options={this.options_boton} columnas={this.columnas_cupones_cerrados} data={this.data_cupones_cerrados}/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="card Adm-card">
                                        <div class="card-body justify-content-start">
                                            <h4 class="card-title">Últimos post</h4>
                                            <Datatable options={this.options_boton} columnas={this.columnas_ultimos_post} data={this.data_ultimos_post}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div class="col-12">
                                    <div class="card Adm-card Overflow-h">
                                        <div class="card-body justify-content-start">
                                            <h4 class="card-title">Evolución de reservas</h4>
                                            <Chart/>
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



    /*CALENDARIO */

    click_calendario(slotInfo) {


    }



    calendario_fechas = [
        {
            start: new Date('2018-05-10'),
            end: new Date('2018-05-10'),

            title: "Reserva1",
            cliente: "Cliente1",
            precio: '100',


        }
        ,
        {
            start: new Date('2018-06-10'),
            end: new Date('2018-06-10'),

            title: "Reserva2",
            cliente: "Cliente1",
            precio: '100',

        },
        {
            start: new Date('2018-06-12'),
            end: new Date('2018-06-12'),

            title: "Reserva3",
            cliente: "Cliente1",
            precio: '100',

        },
        {
            start: new Date('2018-06-16'),
            end: new Date('2018-06-16'),

            title: "Reserva4",
            cliente: "Cliente1",
            precio: '100',

        },

    ]

    /*COLUMNAS DATATABLE*/
    columnas_ultimas_reservas = {
        "columnas": [
            {
                "nombre": "Producto",
                "field": 'producto'
            },
            {
                "nombre": "Fecha",
                "field": 'fecha'
            }
        ]
    };

    data_ultimas_reservas = [
        {'id': 0, 'producto': 'producto1', 'fecha': '22/05/2018'},
        {'id': 1, 'producto': 'producto2', 'fecha': '22/05/2018'},
        {'id': 2, 'producto': 'producto3', 'fecha': '22/05/2018'}
    ]


    columnas_packs = {
        "columnas": [
            {
                "nombre": "Nombre",
                "field": 'nombre'
            },
            {
                "nombre": "Ventas totales",
                "field": 'ventas_totales'
            },
            {
                "nombre": "Total",
                "field": 'total'
            },
        ]
    };

    data_packs = [
        {'id': 0, 'nombre': 'nombre1', 'ventas_totales': 100, 'total': 3000},
        {'id': 1, 'nombre': 'nombre2', 'ventas_totales': 100, 'total': 3000},
        {'id': 2, 'nombre': 'nombre3', 'ventas_totales': 100, 'total': 3000}
    ]

    columnas_cliente_reservas = {
        "columnas": [
            {
                "nombre": "Clientes",
                "field": 'cliente'
            },
            {
                "nombre": "Total Reservas",
                "field": 'total_reservas'
            },
            {
                "nombre": "Facturación",
                "field": 'facturacion'
            },
        ]
    };

    data_cliente_reservas = [
        {'id': 0, 'cliente': 'cliente1', 'total_reservas': 100, 'facturacion': 3000},
        {'id': 1, 'cliente': 'cliente2', 'total_reservas': 100, 'facturacion': 3000},
        {'id': 2, 'cliente': 'cliente3', 'total_reservas': 100, 'facturacion': 3000}
    ]


    columnas_cupones = {
        "columnas": [
            {
                "nombre": "Cupon",
                "field": 'cupon'
            },
            {
                "nombre": "Ventas",
                "field": 'ventas'
            },

            {
                "nombre": "Fecha de cierre",
                "field": 'fecha_cierre'
            },
        ]
    };

    data_cupones = [
        {'id': 0, 'cupon': 'cupon1', 'ventas': 100, 'fecha_cierre': '18/08/2018'},
        {'id': 1, 'cupon': 'cupon2', 'ventas': 100, 'fecha_cierre': '14/08/2018'},
        {'id': 2, 'cupon': 'cupon3', 'ventas': 100, 'fecha_cierre': '18/07/2018'}
    ]

    columnas_cupones_cerrados = {
        "columnas": [
            {
                "nombre": "Cupon",
                "field": 'cupon'
            },
            {
                "nombre": "Ventas",
                "field": 'ventas'
            },

            {
                "nombre": "Fecha de cierre",
                "field": 'fecha_cierre'
            },
        ]
    };

    data_cupones_cerrados = [
        {'id': 0, 'cupon': 'cupon1', 'ventas': 100, 'fecha_cierre': '18/05/2018'},
        {'id': 1, 'cupon': 'cupon2', 'ventas': 100, 'fecha_cierre': '14/05/2018'},
        {'id': 2, 'cupon': 'cupon3', 'ventas': 100, 'fecha_cierre': '18/05/2018'}
    ]


    columnas_ultimos_post = {
        "columnas": [
            {
                "nombre": "Post",
                "field": 'post'
            },
            {
                "nombre": "Visitas",
                "field": 'visitas'
            },
        ]
    };

    data_ultimos_post = [
        {'id': 0, 'post': 'post1', 'visitas': 100},
        {'id': 1, 'post': 'post2', 'visitas': 100},
        {'id': 2, 'post': 'post3', 'visitas': 100}
    ]

    options_boton = {
        afterSearch: '',  // define a after search hook,
        exportCSVText: '',
        insertText: 'Crear',
        deleteText: 'Borrar',
        saveText: 'Guardar',
        closeText: 'Cerrar'
    }

}

export default Adm_dashboard;
