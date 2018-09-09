import React, {Component} from 'react';

import TextEditor from '../comunes/text_editor/Text_editor'
import Dropzone from '../comunes/dropzone/Dropzone_clase'
import './Vuelo.css';
import $ from 'jquery';


class Vuelo extends React.Component {

    click = 1;

    constructor(props) {
        super(props);
        this.state = {
            explicacion_vuelo: '',
        };

    }


    change_tipo() {
        /*let texto_explicacion = '';
        switch ($("#vuelo_tipo").val()) {

            case 'exclusivo':
                texto_explicacion = '';
                break;
            case 'discapacitados':
                texto_explicacion = 'En la experiéncia para discapacitados es obligatorio que vay un integrante más por cada persona discapacitada. Por lo tanto el contador de personas del vuelo será el doble';
                break;
            case 'compartido':
                texto_explicacion = '';

                break;
            case 'ninyos':
                texto_explicacion = 'En la experiéncia para niño es obligatorio que vay un integrante más por cada  niño. Por lo tanto el contador de personas del vuelo será el doble';

                break;

            default:
                texto_explicacion = '';
                break;
        }

        this.setState({
            explicacion_vuelo: texto_explicacion,

        });*/


    }

    editarVuelo() {
        $('#exampleModalLabel_crearVuelo').text('Editar Vuelo');

        $("#editor_vuelo").fadeIn(600);
        $("#vuelo_nombre").val(this.props.nombre);
        $("#plazas_diarias_estandar").val(this.props.plazas_diarias_estandar);
        $("#plazas_diarias_ninos").val(this.props.plazas_diarias_ninos);
        $("#plazas_diarias_discapacitados").val(this.props.plazas_diarias_discapacitados);
        $("#vuelo_precio").val(this.props.precio);
        $("#vuelo_precio_ninyos").val(this.props.precio_ninyos);
        $("#vuelo_tematica").val(this.props.tematica);
        $("#vuelo_fecha1").val(this.props.fecha1);
        $("#vuelo_fecha2").val(this.props.fecha2);
        $("#vuelo_descripcion").val(this.props.descripcion);
    }

    borrarVuelo() {
        $("#nombre_vuelo").val(this.props.nombre);
        $("#personas_vuelo").val(this.props.personas);
        $("#fechaPublicacion_vuelo").val(this.props.fechaPublicacion_vuelo);

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
                                <span className="F-grand"><i class="mdi mdi-account"></i> {this.props.plazas_diarias_totales}</span>
                                <span className="F-grand">{this.props.precio}$</span>
                            </div>
                            <button data-toggle="modal" data-target="#exampleModal3"
                                    onClick={this.editarVuelo.bind(this)} className="w-100 Btn-editar">Editar
                            </button>
                            <button onClick={this.borrarVuelo.bind(this)} data-toggle="modal"
                                    data-target="#exampleModal2" onClick={this.editarVuelo.bind(this)}
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
                                    borrar este vuelo?</h3>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-Body m-3">
                                <h4 className="mb-4">Datos del vuelo : </h4>
                                <h6>Nombre: <small className="ml-2"><input type="text" id="nombre_vuelo"
                                                                           className="Btn-transparent"
                                                                           value={this.props.nombre}/></small>
                                </h6>
                               {/* <h6>Personas: <small className="ml-2">
                                    <p type="text" id="personas_vuelo"
                                       className="Btn-transparent"
                                    >
                                        {this.props.personas}
                                    </p>
                                </small></h6>
                                <h6>Fecha publicación: <small className="ml-2"><input type="text"
                                                                                      id="fechaPublicacion_vuelo"
                                                                                      className="Btn-transparent"
                                                                                      value={this.props.fecha_publicacion}/>
                                </small></h6>*/}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">No
                                </button>
                                <button type="button" className="btn btn-primary"
                                        onClick={this.borrarVuelo.bind(this)}>Sí
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
                                <h3 className="modal-title w-100 text-center" id="exampleModalLabel_crearVuelo"></h3>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-Body m-3">
                                <div id="editor_vuelo" className="col-12 Editor-vuelo">

                                    <form className="form-material m-t-10 row" id="vuelo_form">

                                   {/*     <div class="form-group col-12 col-md-6 m-t-20">
                                            <label className="Label-vuelos">Desde:</label>

                                            <input class="form-control" type="date" placeholder="Desde" value=""
                                                   id="vuelo_fecha1" name="fecha1"/>
                                        </div>
                                        <div class="form-group col-12 col-md-6 m-t-20">
                                            <label className="Label-vuelos">Hasta:</label>

                                            <input class="form-control" type="date" placeholder="Desde" value=""
                                                   id="vuelo_fecha2" name="vuelo_fecha2"/>
                                        </div>

                                        <div class="form-group col-12 col-md-12 m-t-20">

                                            <Calendar fechas={this.calendario_fechas} onselect_slot={

                                                slotInfo =>


                                                    this.click_calendario(slotInfo)


                                            }
                                                      onselect_event={event => alert("Esta fecha no está disponible ya que tiene un vuelo")}/>
                                        </div>*/}

                                        <div class="form-group col-12 col-md-6 m-t-20">
                                            <label className="Label-vuelos">Tipo:</label>
                                            <select onChange={this.change_tipo.bind(this)} class="form-control"
                                                    name="vuelo_tipo" id="vuelo_tipo">
                                                <option value=""  >Elige el tipo de experiencia</option>
                                                <option value="exclusivo">Exclusivo</option>
                                                <option value="compartido">Compartido</option>
                                               {/* <option value="discapacitados">Discapacitados</option>
                                                <option value="ninyos">Niños</option>*/}
                                            </select>
                                            <small className="Gris-flojo">{this.state.explicacion_vuelo}
                                            </small>

                                        </div>

                                            <div class="form-group col-12 col-md-6 m-t-20">
                                                <label className="Label-vuelos"
                                                       htmlFor="vuelo_nombre">Nombre:</label>
                                                <input type="text" class="form-control form-control-line"
                                                       placeholder="Nombre" id="vuelo_nombre" required name="vuelo_nombre"/>
                                            </div>
                                            <div class="form-group col-12 col-md-3 m-t-20">
                                                <label className="Label-vuelos">Plazas <br/> estándar:</label>

                                                <select type="text" class="form-control form-control-line"
                                                        id="plazas_diarias_estandar" name="plazas_diarias_estandar">
                                                    {/*{this.crearSelect()}*/}
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>

                                                </select>
                                            </div>
                                        <div class="form-group col-12 col-md-4 m-t-20">
                                            <label className="Label-vuelos"> Plazas <br/> Discapacitados + acompañantes:</label>

                                            <select type="text" class="form-control form-control-line"
                                                    id="plazas_diarias_discapacitados" name="plazas_diarias_discapacitados">
                                                {/*{this.crearSelect()}*/}
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>

                                            </select>
                                        </div>
                                        <div class="form-group col-12 col-md-4 m-t-20">
                                            <label className="Label-vuelos">Plazas <br/> Niños + Acompañantes:</label>

                                            <select type="text" class="form-control form-control-line"
                                                    id="plazas_diarias_ninos" name="plazas_diarias_ninos">
                                                {/*{this.crearSelect()}*/}
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                                <option value="11">12</option>
                                                <option value="13">13</option>
                                                <option value="14">14</option>
                                                <option value="15">15</option>
                                                <option value="16">16</option>

                                            </select>
                                        </div>
                                            <div class="form-group col-12 col-md-6 m-t-20">
                                                <label className="Label-vuelos">Precio estándar/discapacitados:</label>
                                                <input type="text" class="form-control form-control-line"
                                                       placeholder="Precio" id="vuelo_precio" name="vuelo_precio"/>
                                            </div>
                                        <div class="form-group col-12 col-md-6 m-t-20">
                                            <label className="Label-vuelos">Precio niños:</label>
                                            <input type="text" class="form-control form-control-line"
                                                   placeholder="Precio niños" id="vuelo_precio_ninyos" name="vuelo_precio_ninyos"/>
                                        </div>
                                            <div class="form-group col-12 col-md-6 m-t-20">
                                               {/* <label className="Label-vuelos">Temática:</label>
                                                <select class="form-control" name="vuelo_tematica" id="vuelo_tematica">
                                                    <option value="romantico">Romántico</option>
                                                    <option value="historico">Histórico</option>
                                                    <option value="aventuras">Aventuras</option>
                                                </select>*/}
                                            </div>
                                        <div class="form-group col-12 col-md-12 m-t-20">
                                            <label className="Label-vuelos">Video:</label>
                                            <input type="text" class="form-control form-control-line"
                                                   value="" placeholder="Inserte la URL de un video " id="vuelo_video" name="vuelo_video"/>
                                        </div>
                                            <div class="form-group col-md-12 m-t-20">
                                                <label>Descripción</label>
                                                <TextEditor/>
                                            </div>
                                        <div class="form-group col-md-12 m-t-20">
                                            <label>Imagen Principal</label>
                                            <Dropzone/>
                                        </div>
                                        <div class="form-group col-md-12 m-t-20">
                                            <label>Imágenes</label>
                                            <Dropzone/>
                                        </div>


                                            <div class="form-group col-md-12 m-t-20 text-right">
                                                <button type="submit"
                                                        className="btn btn-info waves-effect waves-light my-1">Guardar
                                                </button>
                                            </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar
                                </button>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )


    }



    formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }


}


export default Vuelo;