import React, {Component} from 'react';
import '../../css/style.css';
import '../../css/colors/blue.css';
import '../comunes/Nestable.css';
import './Reservas_adm.css';
import Adm_header from '../comunes/header/Header';
import Calendar from '../comunes/calendar/Calendar';
import Adm_menu from '../comunes/menu/Menu';
import Row_lista from './Row_lista';
import Select2 from 'react-select2-wrapper';

import Datatable from './Datatable_reservas';
import $ from "jquery";

/*import File_upload from '../comunes/file_upload/File_upload';*/




/*Creo el array de filtro provisional*/







function afterSearch(searchText, result) {
    console.log('Your search text is ' + searchText);
    console.log(this.state);
}

class Reservas_adm extends React.Component {
    array_reservas =[];

    rellenarReservas(){
        for (var i = 0; i < this.data_reservas.length; i++) {
            this.array_reservas.push(<Row_lista reserva_nombre={this.data_reservas[i].reserva_nombre} reserva_telefono={this.data_reservas[i].reserva_telefono}
                                               reserva_email={this.data_reservas[i].reserva_email} reserva_personas={this.data_reservas[i].reserva_personas}
                                              reserva_tipo_vuelo={this.data_reservas[i].reserva_tipo_vuelo}
                reserva_estandar={this.data_reservas[i].reserva_estandar} reserva_discapacitados={this.data_reservas[i].reserva_discapacitados} reserva_ninyos={this.data_reservas[i].reserva_ninyos}
                                                reserva_precio={this.data_reservas[i].reserva_precio} fecha_reserva={this.data_reservas[i].fecha_reserva} fecha_vuelo={this.data_reservas[i].fecha_vuelo}/>);
        }
    }
    constructor(props) {
        super(props);
        this.setState.bind(this);

        this.state = {
            titulo_form: '',
            reserva_nombre: '',
            reserva_telefono: '',
            reserva_email: '',
            reserva_personas: '',
            reserva_estandar: '',
            reserva_discapacitados: '',
            reserva_ninyos: '',
            reserva_precio: '',
            reserva_ofertas: '',
            reserva_productos: '',
            fecha_reserva: '',
            fecha_vuelo: '',

            modal_lista_header:'',
            btn_reserva: 'Crear',
            showBorrar: false,
            showGuardar: false,

        };

    }


    crearReserva() {
        this.setState({
            titulo_form: 'Crear Reserva',
            reserva_precio: '',
            reserva_nombre: '',
            fecha_reserva: '',

            btn_reserva: 'Crear',
            showBorrar: false,
            showGuardar: false,


        });
    }

    editarReserva() {
        this.setState({
            titulo_form: 'Editar Reserva',
            reserva_precio: '',
            reserva_nombre: '',
            fecha_reserva: '',

            btn_reserva: 'Guardar',
            showBorrar: true,
            showGuardar: false,


        });
    }

    borrarReserva() {
        /*$("#nombre_vuelo").val(this.props.nombre);
        $("#personas_vuelo").val(this.props.personas);
        $("#fechaPublicacion_vuelo").val(this.props.fechaPublicacion_vuelo);*/

    }

    formEditar() {
        /*  $('input').removeClass( "CursorNormal");
          $('input').prop('readonly', false);
          $('select').prop('disabled', false);*/
    }

    click_calendario(slotInfo) {


    }

    formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [day, month, year].join('/');
    }

    click_reservas(event) {
        this.array_reservas=[];
        this.rellenarReservas();


        /*       $('.react-bs-table-search-form input').val(this.formatDate(event.start));
               $('.react-bs-table-search-form input').keyup();
               $('.react-bs-table-search-form input').keydown();
               $('.react-bs-table-search-form input').keypress();
               $('html,body').animate({scrollTop: 0}, 'slow');*/
        this.setState({
             titulo_form: 'Editar Reserva',
             reserva_nombre: event.usuario,
             reserva_telefono: event.reserva_telefono,
             reserva_email: event.reserva_email,
             reserva_ofertas: event.reserva_ofertas,
             reserva_productos: event.reserva_productos,
             reserva_tipo_vuelo: event.reserva_tipo_vuelo,
             reserva_personas: event.reserva_personas,
             reserva_estandar: event.reserva_estandar,
             reserva_ninyos: event.reserva_ninyos,
             reserva_discapacitados: event.reserva_discapacitados,
             fecha_reserva: event.fecha_reserva,
             fecha_vuelo: event.fecha_vuelo,
             reserva_precio: event.precio,
             modal_lista_header: 'Reservas del  '+ this.formatDate(event.start ),
             btn_reserva: 'Editar',
             showBorrar: true


         });

        $('#modal_lista').modal('show')


    }

    /*AL CLICKAR EN LA FILA*/
    options_reserva = {
        afterSearch: afterSearch,  // define a after search hook,

        onRowClick: function (row, columnIndex, rowIndex, e) {
            /* $('input').addClass( "CursorNormal");
             $('input').prop('readonly', true);
             $('select').prop('disabled', true);
 */
            $('#titulo_modal_reserva').html('Ver / Editar reserva');

            $('#reserva_precio').val(row.reserva_precio)
            $('#fecha_reserva').val(row.fecha_reserva)
            $('#fecha_vuelo').val(row.fecha_vuelo)
            $('#reserva_nombre').val(row.reserva_nombre)
            $('#reserva_personas').val(row.reserva_personas)
            $('#reserva_tipo_vuelo').val(row.reserva_tipo_vuelo)
            $('#reserva_telefono').val(row.reserva_telefono)
            $('#reserva_email').val(row.reserva_email)
            $('#reserva_especiales').val(row.reserva_especiales)
            $('#reserva_ninyos').val(row.reserva_ninyos)
            $('#reserva_estandar').val(row.reserva_estandar)
            $('#reserva_discapacitados').val(row.reserva_discapacitados)
            $('#modal_reserva').modal('show')
        },
        exportCSVText: '',
        insertText: 'Crear',
        deleteText: 'Borrar',
        saveText: 'Guardar',
        closeText: 'Cerrar'
    }


    data_reservas = [
        {
            'id': 0,
            'reserva_nombre': 'Pepe Garcia',
            'reserva_personas': 5,
            'reserva_email': 'email@gmail.com',
            'reserva_telefono' : '999555444',
            'reserva_especiales': 5,
            'reserva_tipo_vuelo': 'compartido',
            'fecha_vuelo': '10/07/2018',
            'fecha_reserva': '10/07/2018',
            'reserva_discapacitados': 4,
            'reserva_ninyos': 3,
            'reserva_estandar': 4,
            'reserva_precio': 200

        },
        {
            'id': 1,
            'reserva_nombre': 'Juan Castro',
            'reserva_personas': 6,
            'reserva_email': 'email@gmail.com',
            'reserva_telefono' : '999555444',
            'reserva_especiales': 5,
            'reserva_tipo_vuelo': 'compartido',
            'fecha_vuelo': '10/06/2018',
            'fecha_reserva': '10/06/2018',
            'reserva_discapacitados': 4,
            'reserva_ninyos': 3,
            'reserva_estandar': 4,
            'reserva_precio': 200

        },
        {
            'id': 2,
            'reserva_nombre': 'Lola Rodriguez',
            'reserva_personas': 7,
            'reserva_email': 'email@gmail.com',
            'reserva_telefono' : '999555444',
            'reserva_especiales': 5,
            'reserva_tipo_vuelo': 'Compartido',
            'fecha_vuelo': '12/06/2018',
            'fecha_reserva': '12/06/2018',
            'reserva_discapacitados': 4,
            'reserva_ninyos': 3,
            'reserva_estandar': 4,
            'reserva_precio': 200
        }
    ]


    calendario_fechas = [
        {
            start: new Date('2018-07-10'),
            end: new Date('2018-07-10'),

            title: 3,
            usuario: "Usuario1",
            precio: '100',


        }
        ,
        {
            start: new Date('2018-06-10'),
            end: new Date('2018-06-10'),

            title: 3,
            usuario: "Usuario1",
            precio: '100',

        },
        {
            start: new Date('2018-06-12'),
            end: new Date('2018-06-12'),

            title: 3,
            usuario: "Usuario1",
            precio: '100',

        },
        {
            start: new Date('2018-06-16'),
            end: new Date('2018-06-16'),

            title: 3,
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
                                            <div className="modal-header ">
                                                <h3 className="modal-title"
                                                    id="titulo_modal_reserva">{this.state.titulo_form}</h3>
                                                <button type="button" className="close" data-dismiss="modal"
                                                        aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-Body m-3">

                                                <form className="form-material m-t-10 row" id="reserva_form">


                                                    <div className="form-group col-12 col-md-6 m-t-20">
                                                        <label className="Label-vuelos"
                                                               htmlFor="vuelo_nombre">Nombre y apellidos:</label>
                                                        <input type="text"
                                                               className="form-control form-control-line "
                                                               id="reserva_nombre"

                                                               name="reserva_nombre"/>
                                                    </div>

                                                    <div className="form-group col-12 col-md-6 m-t-20">
                                                        <label className="Label-vuelos"
                                                               htmlFor="vuelo_nombre">Email:</label>
                                                        <input type="text"
                                                               className="form-control form-control-line "
                                                               id="reserva_email"
                                                               name="reserva_email"/>
                                                    </div>

                                                    <div className="form-group col-12 col-md-6 m-t-20">
                                                        <label className="Label-vuelos"
                                                               htmlFor="vuelo_nombre">Teléfono:</label>
                                                        <input type="text"
                                                               className="form-control form-control-line "
                                                               id="reserva_telefono"
                                                               name="reserva_telefono"/>
                                                    </div>

                                                    <div className="form-group col-12 col-md-6 m-t-20">
                                                        <label className="Label-vuelos">Fecha reserva:</label>

                                                        <input type="date"
                                                               className="form-control form-control-line "
                                                               id="reserva_fecha"
                                                               name="reserva_fecha"/>
                                                    </div>
                                                    <div className="form-group col-12 col-md-6 m-t-20">
                                                        <label className="Label-vuelos">Fecha vuelo:</label>

                                                        <input type="date"
                                                               className="form-control form-control-line "
                                                               id="reserva_vuelo"
                                                               name="reserva_vuelo"/>
                                                    </div>

                                                    <div className="form-group col-12 m-t-20">
                                                        <label className="Label-vuelos"
                                                               htmlFor="reserva_tipo_vuelo">Tipo vuelo:</label>
                                                        <select className="form-control form-control-line "
                                                                id="reserva_tipo_vuelo" name="reserva_tipo_vuelo">
                                                            <option value="compartido">Compartido</option>
                                                            <option value="exclusivo">Exclusivo</option>
                                                        </select>


                                                    </div>

                                                    <div className="form-group col-12 col-md-6 m-t-20">
                                                        <label className="Label-vuelos"
                                                               htmlFor="vuelo_nombre">Personas:</label>
                                                        <input type="number"
                                                               className="form-control form-control-line "
                                                               id="reserva_personas"
                                                               name="reserva_personas"/>
                                                    </div>

                                                    <div className="form-group col-12 col-md-6 m-t-20">
                                                        <label className="Label-vuelos"
                                                               htmlFor="vuelo_nombre">Estándar:</label>
                                                        <input type="number"
                                                               className="form-control form-control-line "
                                                               id="reserva_estandar"
                                                               name="reserva_estandar"/>
                                                    </div>

                                                    <div className="form-group col-12 col-md-6 m-t-20">
                                                        <label className="Label-vuelos"
                                                               htmlFor="reserva_ninyos">Niños:</label>
                                                        <input type="number"
                                                               className="form-control form-control-line "
                                                               id="reserva_ninyos"
                                                               name="reserva_ninyos"/>
                                                    </div>

                                                    <div className="form-group col-12 col-md-6 m-t-20">
                                                        <label className="Label-vuelos"
                                                               htmlFor="reserva_discapacitados">Discapacitados:</label>
                                                        <input type="number"
                                                               className="form-control form-control-line "
                                                               id="reserva_discapacitados"
                                                               name="reserva_discapacitados"/>
                                                    </div>

                                                    <div class="form-group col-12 col-md-6 m-t-20 d-flex flex-column">
                                                        <label className="Label-experiencias">Productos
                                                            asociados:</label>
                                                        <Select2
                                                            multiple
                                                            defaultValue={[1, 4]}
                                                            data={[
                                                                {text: 'producto1', id: 1},
                                                                {text: 'producto2', id: 2}

                                                            ]}
                                                            options={{
                                                                placeholder: 'Buscador',
                                                            }}
                                                        />
                                                    </div>

                                                    <div class="form-group col-12 col-md-6 m-t-20 d-flex flex-column">
                                                        <label className="Label-experiencias">Ofertas asociadas:</label>
                                                        <Select2
                                                            multiple

                                                            defaultValue={[1, 4]}
                                                            data={[
                                                                {text: 'oferta1', id: 1},
                                                                {text: 'oferta2', id: 2}
                                                            ]}
                                                            options={{
                                                                placeholder: 'Buscador',
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="form-group col-12 col-md-6 m-t-20">
                                                        <label className="Label-vuelos"
                                                               htmlFor="reserva_discapacitados">Precio total:</label>
                                                        <input type="text"
                                                               className="form-control form-control-line "
                                                               id="reserva_precio"
                                                               name="reserva_precio"/>
                                                    </div>

                                                    <div className="form-group col-md-12 m-t-20 text-right">
                                                        <button type="button"
                                                                className="btn btn-danger waves-effect waves-light my-1 mr-2"
                                                                style={{display: this.state.showBorrar ? 'inline' : 'none'}}>Eliminar
                                                            Reserva
                                                        </button>
                                                        <button type="button" onClick={this.formEditar.bind(this)}
                                                                className="btn btn-info waves-effect waves-light my-1">Editar
                                                        </button>
                                                        <button type="submit"
                                                                style={{display: this.state.showGuardar ? 'inline' : 'none'}}
                                                                className="btn btn-info waves-effect waves-light my-1">{this.state.btn_reserva}
                                                        </button>
                                                    </div>

                                                </form>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                                {/*MODAL LISTA*/}
                                <div class="modal" id="modal_lista">
                                    <div class="modal-dialog">
                                        <div class="modal-content">

                                            <div class="modal-header">
                                                <h4 class="modal-title text-center" id="">{this.state.modal_lista_header}</h4>
                                                <button type="button" class="close"
                                                        data-dismiss="modal">&times;</button>
                                            </div>

                                            <div class="modal-body Scroll">
                                                <ul class="list-group">

                                                    {this.array_reservas}
                                                </ul>
                                            </div>

                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-danger"
                                                        data-dismiss="modal">Close
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">

                                    <div className="card ">
                                        <div className="card-body justify-content-start">
                                            <h3 className="card-title w-100 mb-4"> Reservas
                                                <button data-toggle="modal" data-target="#modal_reserva"
                                                        onClick={this.crearReserva.bind(this)}
                                                        className="d-inline Float-r Cursor-pointer Btn-transparent"><i
                                                    className="fas fa-plus-circle "></i></button></h3>
                                            <Datatable options={this.options_reserva} accion={true}
                                                       data={this.data_reservas}/>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-12">

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


                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )

    }




}

export default Reservas_adm;
