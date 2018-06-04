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



    render() {

        return (
            <div className="fix-header fix-sidebar card-no-border logo-center">

                <div id="main-wrapper">
                    <Adm_header/>
                    <Adm_menu/>
                    <div className="page-wrapper">

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
                                            <Datatable columnas={this.columnas_ultimas_reservas} accion={true} data={this.data_ultimas_reservas}/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="card Adm-card">
                                        <div class="card-body justify-content-start">
                                            <h4 class="card-title">Packs más vendidos</h4>
                                            <Datatable columnas={this.columnas_packs} data={this.data_packs}/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div class="col-lg-6 col-md-12">
                                    <div class="card Adm-card">
                                        <div class="card-body justify-content-start">
                                            <h4 class="card-title ">Reservas por usuario</h4>
                                            <Datatable columnas={this.columnas_usuario_reservas} accion={true} data={this.data_usuario_reservas}/>
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
                                            <h4 class="card-title">Cupones más utilizados</h4>
                                            <Datatable columnas={this.columnas_cupones} data={this.data_cupones}/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="card Adm-card">
                                        <div class="card-body justify-content-start">
                                            <h4 class="card-title">Últimos post</h4>
                                            <Datatable columnas={this.columnas_ultimos_post} data={this.data_ultimos_post}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div class="col-12">
                                    <div class="card Adm-card Overflow-h">
                                        <div class="card-body justify-content-start">
                                            <h4 class="card-title">Evolución de ventas</h4>
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

    click_reservas(event) {
        this.setState({
            titulo_form: 'Editar Reserva',
            precio_reserva: event.precio,
            usuario_reserva: event.usuario,
            fecha_reserva: event.start,
            btn_reserva: 'Editar',
            nombre_reserva:  event.title,

            showBorrar: true


        });

        $('#modal_reserva_dashboard').modal('show')


    }

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

    columnas_usuario_reservas = {
        "columnas": [
            {
                "nombre": "Usuario",
                "field": 'usuario'
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

    data_usuario_reservas = [
        {'id': 0, 'usuario': 'usuario1', 'total_reservas': 100, 'facturacion': 3000},
        {'id': 1, 'usuario': 'usuario2', 'total_reservas': 100, 'facturacion': 3000},
        {'id': 2, 'usuario': 'usuario3', 'total_reservas': 100, 'facturacion': 3000}
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
                "nombre": "Nº Usos",
                "field": 'usos'
            },
        ]
    };

    data_cupones = [
        {'id': 0, 'cupon': 'cupon1', 'ventas': 100, 'usos': 3},
        {'id': 1, 'cupon': 'cupon2', 'ventas': 100, 'usos': 3},
        {'id': 2, 'cupon': 'cupon3', 'ventas': 100, 'usos': 3}
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


}

export default Adm_dashboard;
