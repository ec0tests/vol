import React, {Component} from 'react';


import './Vuelo.css';
import $ from 'jquery';


class Vuelo extends React.Component {

    constructor(props) {
        super(props);
    }

    editarVuelo() {
        $("#editor_vuelo").fadeIn(600);
        $("#vuelo_nombre").val(this.props.nombre);
        $("#vuelo_personas").val(this.props.personas);
        $("#vuelo_precio").val(this.props.precio);
        $("#vuelo_tipo").val(this.props.tipo);
        $("#vuelo_fecha1").val(this.props.fecha1);
        $("#vuelo_fecha2").val(this.props.fecha2);
        $("#vuelo_descripcion").val(this.props.descripcion);
    }

    borrarVuelo() {
        $("#nombre_vuelo").val(this.props.nombre);
        $("#personas_vuelo").val(this.props.personas);
        $("#fechaPublicacion_vuelo").val(this.props.fechaPublicacion_vuelo);

    }

    render() {

        return (
            <div className="col-4">

                <div className="card">
                    <div className="card-img-top" src="http://via.placeholder.com/350x150" alt="Card image cap">
                        <img className="img-fluid w-100" src="http://via.placeholder.com/350x150" alt=""/>
                    </div>

                    <div className="card-body pb-2">
                            <div className="row">
                                <div className="col-12 d-flex justify-content-between my-2">
                                    <span lassName="F-peq2">{this.props.tipo}</span>
                                    <span lassName="F-peq2">{this.props.fecha1}</span>
                                </div>
                                <div className="col-12">
                                    <h3 className="text-center">{this.props.nombre}</h3>
                                    <p className="F-peq">{this.props.descripcion}</p>
                                </div>
                                <div className="col-12 d-flex justify-content-around">
                                    <span className="F-grand"><i class="fas fa-user-alt"></i> {this.props.personas}</span>
                                    <span className="F-grand">{this.props.precio}$</span>
                                </div>
                                <button data-toggle="modal"  data-target="#exampleModal3" onClick={this.editarVuelo.bind(this)} className="w-100 Btn-editar">Editar</button>
                                <button onClick={this.borrarVuelo.bind(this)} data-toggle="modal"
                                        data-target="#exampleModal2" onClick={this.editarVuelo.bind(this)}
                                        className="Btn-transparent P-absolute Cross-adm-pilotos"><i class="fas fa-times "></i>
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
                                <h6>Personas: <small className="ml-2"><input type="text" id="personas_vuelo"
                                                                             className="Btn-transparent"
                                                                             value={this.props.personas}/>
                                </small></h6>
                                <h6>Fecha publicación: <small className="ml-2"><input type="text"
                                                                                      id="fechaPublicacion_vuelo"
                                                                                      className="Btn-transparent"
                                                                                      value={this.props.fecha_publicacion}/>
                                </small></h6>
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
                                <h3 className="modal-title" id="exampleModalLabel">Formulario Vuelo</h3>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-Body m-3">
                                <div id="editor_vuelo" className="col-12 Editor-vuelo">

                                            <form className="form-material m-t-10 row" id="vuelo_form">
                                                <div class="form-group col-12 col-md-4 m-t-20">
                                                    <label className="Label-vuelos"
                                                           htmlFor="vuelo_nombre">Nombre:</label>
                                                    <input type="text" class="form-control form-control-line"
                                                           value="Nombre" id="vuelo_nombre" name="vuelo_nombre"/>
                                                </div>
                                                <div class="form-group col-12 col-md-4 m-t-20">
                                                    <label className="Label-vuelos">Personas:</label>

                                                    <input type="text" class="form-control form-control-line"
                                                           value="Personas" id="vuelo_personas" name="vuelo_personas"/>
                                                </div>
                                                <div class="form-group col-12 col-md-4 m-t-20">
                                                    <label className="Label-vuelos">Precio:</label>
                                                    <input type="text" class="form-control form-control-line"
                                                           value="Precio" id="vuelo_precio" name="vuelo_precio"/>
                                                </div>
                                                <div class="form-group col-12 col-md-6 m-t-20">
                                                    <label className="Label-vuelos">Tipo:</label>
                                                    <select class="form-control" name="vuelo_tipo" id="vuelo_tipo">
                                                        <option value="romantico">Romántico</option>
                                                        <option value="historico">Histórico</option>
                                                        <option value="aventuras">Aventuras</option>
                                                    </select>
                                                </div>
                                                <div class="form-group col-12 col-md-6 m-t-20">
                                                    <label className="Label-vuelos">Imágen:</label>

                                                    <div class="fileinput fileinput-new input-group"
                                                         data-provides="fileinput">
                                                        <div class="form-control" data-trigger="fileinput"><i
                                                            class="glyphicon glyphicon-file fileinput-exists"></i> <span
                                                            class="fileinput-filename"></span></div>
                                                        <span class="input-group-addon btn btn-default btn-file"> <span
                                                            class="fileinput-new">Seleccionar</span> <span
                                                            class="fileinput-exists">Cambiar</span>
                                                        <input type="hidden"/><input type="file" name="vuelo_imagen"
                                                                                     id="vuelo_imagen"/> </span> <a
                                                        href="#"
                                                        class="input-group-addon btn btn-default fileinput-exists"
                                                        data-dismiss="fileinput">Borrar</a></div>
                                                </div>

                                                <div class="form-group col-12 col-md-6 m-t-20">
                                                    <label className="Label-vuelos">Desde:</label>

                                                    <input class="form-control" type="date" placeholder="Desde" value=""
                                                           id="fecha1" name="fecha1"/>
                                                </div>
                                                <div class="form-group col-12 col-md-6 m-t-20">
                                                    <label className="Label-vuelos">Hasta:</label>

                                                    <input class="form-control" type="date" placeholder="Desde" value=""
                                                           id="vuelo_fecha2" name="vuelo_fecha2"/>
                                                </div>
                                                <div class="form-group col-md-12 m-t-20">
                                                    <label>Descripción</label>
                                                    <textarea class="form-control" rows="5" id="vuelo_descripcion"
                                                              name="vuelo_descripcion"></textarea>
                                                </div>

                                                <div class="form-group col-md-12 m-t-20 text-right">
                                                    <button type="submit"  className="btn btn-info waves-effect waves-light my-1">Guardar</button>
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
                }


                export default Vuelo;