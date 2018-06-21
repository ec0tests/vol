import React, {Component} from 'react';

import TextEditor from '../comunes/text_editor/Text_editor'
import Calendar from '../comunes/calendar/Calendar'
import Dropzone from '../comunes/dropzone/Dropzone_clase'
import './Oferta.css';
import $ from 'jquery';


class Oferta extends React.Component {

    click = 1;

    constructor(props) {
        super(props);
        this.state = {
            explicacion_oferta: '',
        };

    }


    change_tipo() {
       /* let texto_explicacion = '';
        switch ($("#oferta_tipo").val()) {

            case 'exclusivo':
                texto_explicacion = '';
                break;
            case 'discapacitados':
                texto_explicacion = 'En la experiéncia para discapacitados es obligatorio que vay un integrante más por cada persona discapacitada. Por lo tanto el contador de plazas del oferta será el doble';
                break;
            case 'compartido':
                texto_explicacion = '';

                break;
            case 'ninyos':
                texto_explicacion = 'En la experiéncia para niño es obligatorio que vay un integrante más por cada  niño. Por lo tanto el contador de plazas del oferta será el doble';

                break;

            default:
                texto_explicacion = '';
                break;
        }

        this.setState({
            explicacion_oferta: texto_explicacion,

        });
        $('#div_oculto').fadeIn();
*/

    }

    editarOferta() {
        $('#exampleModalLabel_crearOferta').text('Editar Oferta');

        $("#editor_oferta").fadeIn(600);
        $("#oferta_nombre").val(this.props.nombre);
        $("#oferta_plazas").val(this.props.plazas);
        $("#oferta_precio").val(this.props.precio);
        $("#oferta_tematica").val(this.props.tematica);
        $("#oferta_fecha1").val(this.props.fecha1);
        $("#oferta_fecha2").val(this.props.fecha2);
        $("#oferta_descripcion").val(this.props.descripcion);
    }

    borrarOferta() {
        $("#nombre_oferta").val(this.props.nombre);
        $("#plazas_oferta").val(this.props.plazas);
        $("#fechaPublicacion_oferta").val(this.props.fechaPublicacion_oferta);

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
                            <div className="col-12 d-flex justify-content-between  my-2 mb-3">
                                <span className="F-peq">{this.props.tipo}</span>
                                <span className="F-peq">{this.props.fecha1}</span>
                            </div>
                            <div className="col-12">
                                <h3 className="text-center my-2 mb-4">{this.props.nombre}</h3>
                                <p className="F-peq">{this.props.descripcion}</p>
                            </div>
                            <div className="col-12 d-flex justify-content-around">
                                <span className="F-grand"><i class="mdi mdi-account"></i> {this.props.plazas}</span>
                                <span className="F-grand">{this.props.precio}$</span>
                            </div>
                            <button data-toggle="modal" data-target="#exampleModal3"
                                    onClick={this.editarOferta.bind(this)} className="w-100 Btn-editar">Editar
                            </button>
                            <button onClick={this.borrarOferta.bind(this)} data-toggle="modal"
                                    data-target="#exampleModal2" onClick={this.editarOferta.bind(this)}
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
                                    borrar este oferta?</h3>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-Body m-3">
                                <h4 className="mb-4">Datos del oferta : </h4>
                                <h6>Nombre: <small className="ml-2"><input type="text" id="nombre_oferta"
                                                                           className="Btn-transparent"
                                                                           value={this.props.nombre}/></small>
                                </h6>


                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">No
                                </button>
                                <button type="button" className="btn btn-primary"
                                        onClick={this.borrarOferta.bind(this)}>Sí
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
                                <h3 className="modal-title w-100 text-center" id="exampleModalLabel_crearOferta"></h3>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-Body m-3">
                                <div id="editor_oferta" className="col-12 Editor-oferta">

                                    <form className="form-material m-t-10 row" id="oferta_form">
                                        <div class="form-group col-12 col-md-6 m-t-20">
                                            <label className="Label-ofertas">Vincular Experiéncia:</label>
                                            <select class="form-control" name="oferta_experiencia" id="oferta_experiencia">
                                                <option value="1">Exp1</option>
                                                <option value="0">Exp2</option>
                                            </select>
                                        </div>

                                        <div class="form-group col-12 col-md-6 m-t-20">
                                            <label className="Label-ofertas">Estado:</label>
                                            <select class="form-control" name="oferta_estado" id="oferta_estado">
                                                <option value="1">Activado</option>
                                                <option value="0">Desactivado</option>
                                            </select>
                                        </div>


                                            <div class="form-group col-12 col-md-6 m-t-20">
                                                <label className="Label-ofertas"
                                                       htmlFor="oferta_nombre">Nombre:</label>
                                                <input type="text" class="form-control form-control-line"
                                                       placeholder="Nombre" id="oferta_nombre" required name="oferta_nombre"/>
                                            </div>

                                            <div class="form-group col-12 col-md-6 m-t-20">
                                                <label className="Label-ofertas">Precio:</label>
                                                <input type="text" class="form-control form-control-line"
                                                       placeholder="Precio" id="oferta_precio" name="oferta_precio"/>
                                            </div>
                                        <div class="form-group col-12 col-md-6 m-t-20">
                                            <label className="Label-ofertas">Descuento:</label>
                                            <input type="text" class="form-control form-control-line"
                                                   placeholder="Oferta" id="oferta_descuento" name="oferta_descuento"/>
                                        </div>



                                            <div class="form-group col-md-12 m-t-20">
                                                <label>Descripción</label>
                                                <TextEditor/>
                                            </div>
                                            <div class="form-group col-md-12 m-t-20">
                                                <label>Imagen Principal</label>
                                                <Dropzone/>
                                            </div>

                                            <div class="form-group col-12 col-md-6 m-t-20">
                                                <label className="Label-ofertas">Desde:</label>

                                                <input class="form-control" type="date" placeholder="Desde" value=""
                                                       id="oferta_fecha1" name="fecha1"/>
                                            </div>
                                            <div class="form-group col-12 col-md-6 m-t-20">
                                                <label className="Label-ofertas">Hasta:</label>

                                                <input class="form-control" type="date" placeholder="Desde" value=""
                                                       id="oferta_fecha2" name="oferta_fecha2"/>
                                            </div>

                                            <div class="form-group col-12 col-md-12 m-t-20">

                                                <Calendar fechas={this.calendario_fechas} onselect_slot={

                                                    slotInfo =>


                                                        this.click_calendario(slotInfo)


                                                }
                                                          onselect_event={event => alert("Esta fecha no está disponible ya que tiene un oferta")}/>
                                            </div>


                                            <div class="form-group col-md-12 m-t-20 text-right">

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

            title: "Oferta1"
        }
        ,
        {
            start: new Date('2018-06-10'),
            end: new Date('2018-06-18'),

            title: "Oferta2"
        },
        {
            start: new Date('2018-06-12'),
            end: new Date('2018-06-22'),

            title: "Oferta3"
        },
        {
            start: new Date('2018-06-16'),
            end: new Date('2018-06-26'),

            title: "Oferta4"
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
            $("#oferta_fecha1").val(this.formatDate(slotInfo.start.toLocaleString('en-US', {timeZone: 'UTC'})))
            this.click = 2;
        } else {

            $("#oferta_fecha2").val(this.formatDate(slotInfo.start.toLocaleString('en-US', {timeZone: 'UTC'})))
            this.click = 1;

        }
    }
}


export default Oferta;