import React, {Component} from 'react';
import '../../css/style.css';
import '../../css/colors/blue.css';
import '../comunes/Nestable.css';
import './Vuelo_adm.css';
import Adm_header from '../comunes/header/Header';
import Adm_menu from '../comunes/menu/Menu';
import Text_editor from '../comunes/text_editor/Text_editor';
import Vuelo from './Vuelo';
import $ from "jquery";

/*import File_upload from '../comunes/file_upload/File_upload';*/


class Vuelo_adm extends React.Component {
    crearVuelo() {
        $('#vuelo_form')[0].reset();
        $("#editor_vuelo").fadeIn(600);
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
                                <div className="col-12 col-md-6">

                                    <div className="card Adm-card">
                                        <div className="card-body justify-content-start">
                                            <h4 className="card-title w-100"> Vuelo publicados
                                                <button onClick={this.crearVuelo.bind(this)}
                                                        className="d-inline Float-r Cursor-pointer Btn-transparent"><i
                                                    className="fas fa-plus-circle "></i></button></h4>
                                            <div className="myadmin-dd dd w-100 text-left" id="nestable">
                                                <ol className="dd-list ">
                                                    <Vuelo nombre={"Vuelo 1"} personas={"3"} precio={"300"}
                                                           fecha1={"22-02-2018"} fecha2={"12-06-2018"}
                                                           descripcion={"descripcion del vuelo"}/>
                                                    <Vuelo nombre={"Vuelo2"} personas={"2"} precio={"200"}
                                                           fecha1={"22-02-2018"} fecha2={"12-06-2018"}
                                                           descripcion={"descripcion del vuelo"}/>
                                                    <Vuelo nombre={"Vuelo3"} personas={"4"} precio={"400"}
                                                           fecha1={"22-02-2018"} fecha2={"12-06-2018"}
                                                           descripcion={"descripcion del vuelo"}/>
                                                    <Vuelo nombre={"Vuelo4"} personas={"1"} precio={"200"}
                                                           fecha1={"22-02-2018"} fecha2={"12-06-2018"}
                                                           descripcion={"descripcion del vuelo"}/>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="editor_vuelo" className="col-12 col-md-6 Editor-vuelo">

                                    <div className="card Adm-card">
                                        <div className="card-body justify-content-start">
                                            <h4 className="card-title w-100"> Editor de Vuelo</h4>
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
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )

    }
}

export default Vuelo_adm;
