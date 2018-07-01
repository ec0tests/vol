import React, {Component} from 'react';

import TextEditor from '../comunes/text_editor/Text_editor'
import Calendar from '../comunes/calendar/Calendar'
import Dropzone from '../comunes/dropzone/Dropzone_clase'
import React_select from '../comunes/react-select/React-select'
import './Experiencia.css';
import $ from 'jquery';
import Datatable from './Datatable_blog';
import Select2 from 'react-select2-wrapper';
import 'react-select2-wrapper/css/select2.css';


class Experiencia extends React.Component {

    click = 1;

    constructor(props) {
        super(props);
        this.state = {
            explicacion_experiencia: '',
        };

    }

    columnas_ofertas = {
        "columnas": [
            {
                "nombre": "Nombre",
                "field": 'nombre'
            },
            {
                "nombre": "Descuento",
                "field": 'descuento'
            }
           
        ]
    };

    data_ofertas = [
        {'id': 0, 'nombre': 'oferta1', 'descuento': '10%'},
        {'id': 1, 'nombre': 'oferta2', 'descuento': '40%'},
        {'id': 2, 'nombre': 'oferta3', 'descuento': '15%'}
    ]

    columnas_packs = {
        "columnas": [
            {
                "nombre": "Nombre",
                "field": 'nombre'
            }
        ]
    };

    data_packs = [
        {'id': 0, 'nombre': 'Romantico'},
        {'id': 1, 'nombre': 'Aventura'},
        {'id': 2, 'nombre': 'Histórico'}
    ]

    change_tipo() {
        /*let texto_explicacion = '';
        switch ($("#experiencia_tipo").val()) {

            case 'exclusivo':
                texto_explicacion = '';
                break;
            case 'discapacitados':
                texto_explicacion = 'En la experiéncia para discapacitados es obligatorio que vay un integrante más por cada persona discapacitada. Por lo tanto el contador de personas del experiencia será el doble';
                break;
            case 'compartido':
                texto_explicacion = '';

                break;
            case 'ninyos':
                texto_explicacion = 'En la experiéncia para niño es obligatorio que vay un integrante más por cada  niño. Por lo tanto el contador de personas del experiencia será el doble';

                break;

            default:
                texto_explicacion = '';
                break;
        }

        this.setState({
            explicacion_experiencia: texto_explicacion,

        });*/


    }

    editarExperiencia() {
        $('#exampleModalLabel_crearExperiencia').text('Editar Experiencia');

        $("#editor_experiencia").fadeIn(600);
        $("#experiencia_nombre").val(this.props.nombre);
        $("#plazas_diarias").val(this.props.plazas_diarias);
        $("#experiencia_precio").val(this.props.precio);
        $("#experiencia_tematica").val(this.props.tematica);
        $("#experiencia_fecha1").val(this.props.fecha1);
        $("#experiencia_fecha2").val(this.props.fecha2);
        $("#experiencia_descripcion").val(this.props.descripcion);
    }

    borrarExperiencia() {
        $("#nombre_experiencia").val(this.props.nombre);
        $("#personas_experiencia").val(this.props.personas);
        $("#fechaPublicacion_experiencia").val(this.props.fechaPublicacion_experiencia);

    }

    crearSelect() {
        for (var i = 1; i < 13; i++) {
            return '<option value="' + i + '">' + i + '</option>'
        }
    }

    render() {

        return (
            <div className="col-3">

                <div className="card">
                    <div className="card-img-top" src="http://via.placeholder.com/350x150" alt="Card image cap">
                        <img className="img-fluid w-100" src="http://via.placeholder.com/350x150" alt=""/>
                    </div>

                    <div className="card-body pb-2 pt-0">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-between my-2 mb-3">
                                <span className="F-peq">{this.props.tipo}</span>
                                <span className="F-peq">{this.props.fecha1}</span>
                            </div>
                            <div className="col-12">
                                <h4 className="text-center my-2 mb-4">{this.props.nombre}</h4>
                                <p className="F-peq">{this.props.descripcion}</p>
                            </div>
                            <div className="col-12 d-flex justify-content-around">
                                <span className="F-grand"><i class="mdi mdi-account"></i> {this.props.personas}</span>
                                <span className="F-grand">{this.props.precio}$</span>
                            </div>
                            <button data-toggle="modal" data-target="#exampleModal3"
                                    onClick={this.editarExperiencia.bind(this)} className="w-100 Btn-editar">Editar
                            </button>
                            <button onClick={this.borrarExperiencia.bind(this)} data-toggle="modal"
                                    data-target="#exampleModal2" onClick={this.editarExperiencia.bind(this)}
                                    className="Btn-transparent P-absolute Cross-adm-pilotos"><i
                                class="fas fa-times "></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="exampleModal2" tabindex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="modal-title" id="exampleModalLabel">Estás seguro de que quieres
                                    borrar este experiencia?</h3>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-Body m-3">
                                <h4 className="mb-4">Datos del experiencia : </h4>
                                <h6>Nombre: <small className="ml-2"><input type="text" id="nombre_experiencia"
                                                                           className="Btn-transparent"
                                                                           value={this.props.nombre}/></small>
                                </h6>
                                <h6>Personas: <small className="ml-2">
                                    <p type="text" id="personas_experiencia"
                                       className="Btn-transparent"
                                    >
                                        {this.props.personas}
                                    </p>
                                </small></h6>
                                <h6>Fecha publicación: <small className="ml-2"><input type="text"
                                                                                      id="fechaPublicacion_experiencia"
                                                                                      className="Btn-transparent"
                                                                                      value={this.props.fecha_publicacion}/>
                                </small></h6>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">No
                                </button>
                                <button type="button" className="btn btn-primary"
                                        onClick={this.borrarExperiencia.bind(this)}>Sí
                                </button>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="modal fade" id="exampleModal3" tabindex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="modal-title w-100 text-center"
                                    id="exampleModalLabel_crearExperiencia"></h3>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-Body m-3">
                                <div id="editor_experiencia" className="col-12 Editor-experiencia">

                                    <form className="form-material m-t-10 row" id="experiencia_form">
                                        <div class="form-group col-12 col-md-12 m-t-20 d-flex flex-column">
                                            <label className="Label-experiencias">Activat/Desactivar:</label>
                                            <select name="experiencia_activar" className="form-control"
                                                    id="experiencia_activar">
                                                <option value="1">Activar</option>
                                                <option value="0">Desactivar</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-12 col-md-6 m-t-20 d-flex flex-column">
                                            <label className="Label-experiencias">Añadir globo:</label>
                                            <Select2
                                                multiple
                                                defaultValue={[1, 4]}
                                                data={[
                                                    {text: 'globo1', id: 1},
                                                    {text: 'globo2', id: 2},
                                                    {text: 'globo3', id: 3},
                                                    {text: 'globo4', id: 4},
                                                ]}
                                                options={{
                                                    placeholder: 'Buscador',
                                                }}
                                            />
                                        </div>
                                        <div class="form-group col-12 col-md-6 m-t-20 d-flex flex-column">
                                            <label className="Label-experiencias">Añadir producto:</label>
                                            <Select2
                                                multiple
                                                defaultValue={[1, 4]}
                                                data={[
                                                    {text: 'producto1', id: 1},
                                                    {text: 'producto2', id: 2},
                                                    {text: 'producto3', id: 3},
                                                    {text: 'producto4', id: 4},
                                                ]}
                                                options={{
                                                    placeholder: 'Buscador',
                                                }}
                                            />
                                        </div>
                                        <div class="form-group col-12 col-md-6 m-t-20">
                                            <label className="Label-experiencias">Precio:</label>
                                            <input type="text" class="form-control form-control-line"
                                                   placeholder="Precio" id="experiencia_precio"
                                                   name="experiencia_precio"/>
                                        </div>

                                        {/*     <div class="form-group col-12 col-md-6 m-t-20">
                                            <label className="Label-experiencias">Desde:</label>

                                            <input class="form-control" type="date" placeholder="Desde" value=""
                                                   id="experiencia_fecha1" name="fecha1"/>
                                        </div>
                                        <div class="form-group col-12 col-md-6 m-t-20">
                                            <label className="Label-experiencias">Hasta:</label>

                                            <input class="form-control" type="date" placeholder="Desde" value=""
                                                   id="experiencia_fecha2" name="experiencia_fecha2"/>
                                        </div>

                                        <div class="form-group col-12 col-md-12 m-t-20">

                                            <Calendar fechas={this.calendario_fechas} onselect_slot={

                                                slotInfo =>


                                                    this.click_calendario(slotInfo)


                                            }
                                                      onselect_event={event => alert("Esta fecha no está disponible ya que tiene un experiencia")}/>
                                        </div>*/}

                                        <div class="form-group col-12 col-md-6 m-t-20">
                                            <label className="Label-experiencias">Packs (si el pack escrito no existe, se creará):</label>
                                            <React_select/>

                                        </div>

                                        <div class="form-group col-12 col-md-6 m-t-20">
                                            <label className="Label-experiencias"
                                                   htmlFor="experiencia_nombre">Nombre:</label>
                                            <input type="text" class="form-control form-control-line"
                                                   placeholder="Nombre" id="experiencia_nombre" required
                                                   name="experiencia_nombre"/>
                                        </div>


                                      {/*  <div class="form-group col-12 col-md-6 m-t-20">
                                            <label className="Label-experiencias">Temática:</label>
                                            <select class="form-control" name="experiencia_tematica"
                                                    id="experiencia_tematica">
                                                <option value="romantico">Romántico</option>
                                                <option value="historico">Histórico</option>
                                                <option value="aventuras">Aventuras</option>
                                            </select>
                                        </div>*/}
                                        <div class="form-group col-md-12 m-t-20">
                                            <label>Descripción</label>
                                            <TextEditor/>
                                        </div>
                                        <div class="form-group col-md-12 m-t-20">
                                            <label>Imagen Principal</label>
                                            <Dropzone/>
                                        </div>

                                        <div className="col-md-12">
                                            <h4>Ofertas Vinculadas</h4>
                                            <Datatable columnas={this.columnas_ofertas} data={this.data_ofertas}/>
                                        </div>
                                        <div className="col-md-12">
                                            <h4>Packs Vinculados</h4>

                                            <Datatable columnas={this.columnas_packs} data={this.data_packs}/>
                                        </div>



                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit"
                                        className="btn btn-info waves-effect waves-light my-1">Guardar
                                </button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar
                                </button>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )


    }

    calendario_fechas = [
        {
            start: new Date('2018-05-10'),
            end: new Date('2018-05-16'),

            title: "Experiencia1"
        }
        ,
        {
            start: new Date('2018-06-10'),
            end: new Date('2018-06-18'),

            title: "Experiencia2"
        },
        {
            start: new Date('2018-06-12'),
            end: new Date('2018-06-22'),

            title: "Experiencia3"
        },
        {
            start: new Date('2018-06-16'),
            end: new Date('2018-06-26'),

            title: "Experiencia4"
        },

    ]

    formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }

    click_calendario(slotInfo) {

        if (this.click == 1) {
            $("#experiencia_fecha1").val(this.formatDate(slotInfo.start.toLocaleString('en-US', {timeZone: 'UTC'})))
            this.click = 2;
        } else {

            $("#experiencia_fecha2").val(this.formatDate(slotInfo.start.toLocaleString('en-US', {timeZone: 'UTC'})))
            this.click = 1;

        }
    }
}


export default Experiencia;