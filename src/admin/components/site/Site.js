import React, {Component} from 'react';
import '../../css/style.css';
import '../../css/colors/blue.css';
import '../comunes/Nestable.css';
import './Site.css';
import Adm_header from '../comunes/header/Header';
import Adm_menu from '../comunes/menu/Menu';
import Card_image from '../comunes/card_image/Card_image';
import Text_editor from '../comunes/text_editor/Text_editor';
import Pregunta_faq from '../comunes/pregunta_faq_adm/Pregunta_faq_adm';
import Dropzone_clase from '../comunes/dropzone/Dropzone_clase';
import Usuario from '../comunes/usuario/Usuario';
import Datatable from '../comunes/datatable/2/Datatable';
import Modales from "./Modales";
import $ from 'jquery';

/*import File_upload from '../comunes/file_upload/File_upload';*/


class Site extends React.Component {

    cambiarURL() {
        $("#site_video").attr("src", $("#input_url").val());
        alert($("#input_url").val());
    }

    crearOferta(){
        $('#oferta_modal_titulo').html('Crear Oferta');
        $('#oferta_form')[0].reset();

    }
    crearUsuario(){
        $('#titulo_modal_crear_usuario').html('Crear Usuario');
        $('#usuario_form')[0].reset();

    }
    render() {

        return (
            <div className="fix-header fix-sidebar card-no-border logo-center">

                <div id="main-wrapper">
                    <Adm_header/>
                    <Adm_menu/>
                    <div className="page-wrapper">
                        <div className="container-fluid">
                            <Modales/>
                            <div className="row page-titles">
                                <div className="col-md-5 col-8 align-self-center">
                                    <h3 className="text-themecolor m-b-0 m-t-0 text-left">Site</h3>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                                        <li className="breadcrumb-item active">Site</li>
                                    </ol>
                                </div>

                            </div>

                            <div className="row">
                                <div class="col-lg-6 col-md-12">
                                    <div class="card Adm-card">
                                        <div class="card-body justify-content-start">
                                            <div className="w-100 text-center mb-4">
                                                <h4 class="card-title d-inline">Ofertas </h4>
                                                <i
                                                    class="fas fa-plus-circle Float-r Cursor-pointer"
                                                    data-toggle="modal" data-target="#modal_crear_oferta" onClick={this.crearOferta.bind(this)}
                                                    id="crear_oferta"></i>
                                            </div>
                                            <Datatable columnas={this.columnas_oferta} modal={'modal_crear_oferta'}
                                                       data={this.data_oferta} options={this.options_oferta} />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="card Adm-card">
                                        <div class="card-body justify-content-start">
                                            <div className="w-100 text-center mb-4">
                                                <h4 class="card-title d-inline">Gestión de Pilotos </h4>

                                                <i
                                                    class="fas fa-plus-circle Float-r Cursor-pointer"
                                                    data-toggle="modal" data-target="#modal_crear_piloto"></i>
                                            </div>
                                            <div className="row">
                                                <Card_image nombre="Piloto1" apellidos="Perez Gonzalez"/>
                                                <Card_image nombre="Piloto11" apellidos="ED Gonzalez"/>
                                                <Card_image nombre="Piloto22" apellidos="ES Gonzalez"/>
                                                <Card_image nombre="Piloto3" apellidos="FD Gonzalez"/>
                                                <Card_image nombre="Piloto4" apellidos="GG Gonzalez"/>
                                                <Card_image nombre="Piloto5" apellidos="D Gonzalez"/>
                                                <Card_image nombre="Piloto6" apellidos="Perez Gonzalez"/>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div class="col-lg-12 col-md-12">

                                    <div class="card M-h35">
                                        <div class="card-body justify-content-start">
                                            <h4 class="card-title w-100">Editor de textos literales</h4>
                                            <h6 class="card-title w-100">Desde aquí puedes editar algunos textos</h6>
                                            <div className="row my-4 w-75 justify-content-center">
                                                <div class="form-group">
                                                    <select class="form-control">
                                                        <option>Sección 1</option>
                                                        <option>Sección 2</option>
                                                        <option>Sección 3</option>
                                                        <option>Sección 4</option>
                                                        <option>Sección 5</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row w-100">
                                                <Text_editor/>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                    <div class="card Adm-card">
                                        <div class="card-body justify-content-start">
                                            <h4 class="card-title w-100">Gestor de imágenes </h4>
                                            <h6 class="card-title w-100">Aquí podrás editar las imágenes que aparezcan
                                                en el panel</h6>

                                            <div className="row w-100">
                                                <div className="col-12 col-lg-7">
                                                      <Dropzone_clase/>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div class="col-lg-6 col-md-12">

                                    <div class="card Adm-card">
                                        <div class="card-body justify-content-start">
                                            <h4 class="card-title w-100">Preguntas Frecuentes <i
                                                class="fas fa-plus-circle Float-r Cursor-pointer"></i></h4>
                                            <div class="myadmin-dd dd w-100 text-left" id="nestable">
                                                <ol class="dd-list ">
                                                    <Pregunta_faq pregunta={"Pregunta"}
                                                                  respuesta={"lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum"}/>
                                                    <Pregunta_faq pregunta={"Pregunta"}
                                                                  respuesta={"lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum"}/>
                                                    <Pregunta_faq pregunta={"Pregunta"}
                                                                  respuesta={"lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum"}/>
                                                    <Pregunta_faq pregunta={"Pregunta"}
                                                                  respuesta={"lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum"}/>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">

                                    <div class="card Adm-card">
                                        <div class="card-body justify-content-start">
                                            <h4 class="card-title">Contacto y redes sociales</h4>
                                            <div class="myadmin-dd dd w-100 text-left" id="nestable">
                                                <ol class="dd-list Redes-sociales">
                                                    <li class="dd-item d-flex align-items-center" data-id="1">
                                                        <div className="col-1 d-flex align-items-center">
                                                            <i class="fab fa-youtube Ico-redes"></i>
                                                        </div>
                                                        <div className="col-11">
                                                            <div class="dd-handle "><input type="text"
                                                                                           placeholder='Youtube'/>
                                                            </div>
                                                        </div>

                                                    </li>

                                                    <li class="dd-item d-flex align-items-center" data-id="1">
                                                        <div className="col-1 d-flex align-items-center">
                                                            <i class="fab fa-facebook Face-ico Ico-redes"></i>
                                                        </div>
                                                        <div className="col-11">
                                                            <div class="dd-handle "><input type="text"
                                                                                           placeholder='Facebook'/>
                                                            </div>
                                                        </div>

                                                    </li>

                                                    <li class="dd-item d-flex align-items-center" data-id="1">
                                                        <div className="col-1 d-flex align-items-center">
                                                            <i class="fab fa-instagram Ico-redes"></i>
                                                        </div>
                                                        <div className="col-11">
                                                            <div class="dd-handle "><input type="text"
                                                                                           placeholder='Instagram'/>
                                                            </div>
                                                        </div>

                                                    </li>

                                                    <li class="dd-item d-flex align-items-center" data-id="1">
                                                        <div className="col-1 d-flex align-items-center">
                                                            <i class="fab fa-twitter Ico-redes Twitter-ico"></i>
                                                        </div>
                                                        <div className="col-11">
                                                            <div class="dd-handle "><input type="text"
                                                                                           placeholder='Twitter'/>
                                                            </div>
                                                        </div>

                                                    </li>

                                                    <li class="dd-item d-flex align-items-center" data-id="1">
                                                        <div className="col-1 d-flex align-items-center">
                                                            <i class="fab fa-google-plus Ico-redes Google-ico"></i>
                                                        </div>
                                                        <div className="col-11">
                                                            <div class="dd-handle "><input type="text"
                                                                                           placeholder='Google+'/>
                                                            </div>
                                                        </div>

                                                    </li>
                                                    <li class="dd-item d-flex align-items-center" data-id="1">
                                                        <div className="col-1 d-flex align-items-center">
                                                            <i class="far fa-envelope Ico-redes"></i>
                                                        </div>
                                                        <div className="col-11">
                                                            <div class="dd-handle "><input type="text"
                                                                                           placeholder='Mail'/>
                                                            </div>
                                                        </div>

                                                    </li>
                                                </ol>
                                            </div>
                                            <div className="row mt-3">
                                                <button type='submit'
                                                        className="btn btn-info waves-effect waves-light ">Guardar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div class="col-12 col-md-6">

                                    <div class="card Adm-card">
                                        <div class="card-body justify-content-start">
                                            <h4 class="card-title w-100">Gestión de Usuarios <i
                                                class="fas fa-plus-circle Float-r Cursor-pointer" data-toggle="modal"
                                                data-target="#modal_crear_usuario"></i></h4>
                                            <Datatable columnas={this.columnas_usuario} options={this.options_usuario} modal={'modal_crear_usuario'}
                                                       data={this.data_usuario} onClick={this.crearUsuario.bind(this)}/>

                                        </div>
                                    </div>
                                </div>

                                <div class="col-12 col-md-6">

                                    <div class="card Adm-card">
                                        <div class="card-body justify-content-start">
                                            <h4 class="card-title w-100">Editor de Video </h4>
                                            <iframe width="210" height="155" className="Site-video" id="site_video"
                                                    src="https://www.youtube.com/embed/Xw119l397Qc">
                                            </iframe>

                                            <div className="form-group col-md-12 m-t-20 text-right">
                                                <input type="text" id="input_url"
                                                       className="form-control form-control-line w-75"
                                                       placeholder="URL"
                                                />
                                                <button type="button"
                                                        className="btn btn-info waves-effect waves-light "
                                                        onClick={this.cambiarURL.bind(this)}>Guardar
                                                </button>
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

    columnas_oferta = {
        "columnas": [
            {
                "nombre": "Oferta",
                "field": 'oferta'
            },
            {
                "nombre": "Clicks",
                "field": 'clicks'
            },

        ]
    };

    data_oferta = [
        {'id': 0, 'oferta': 'oferta1', 'clicks': 100},
        {'id': 1, 'oferta': 'oferta2', 'clicks': 100},
        {'id': 2, 'oferta': 'oferta3', 'clicks': 100}
    ]

    options_oferta = {
        afterSearch: '',  // define a after search hook,
        onRowClick: function (row, columnIndex, rowIndex, e) {

           /* alert(`You click row id: ${row.id}, column index: ${columnIndex}, row index: ${rowIndex}`);*/
            $('#modal_crear_oferta').modal('show');
            $('#oferta_modal_titulo').html('Editar Oferta');
            $('#oferta_nombre').val(row.oferta);
            $('#oferta_clicks').val(row.clicks);
        },
        exportCSVText: '',
        insertText: 'Crear',
        deleteText: 'Borrar',
        saveText: 'Guardar',
        closeText: 'Cerrar'
    }




    columnas_usuario = {
        "columnas": [
            {
                "nombre": "Usuario",
                "field": 'usuario'
            },
            {
                "nombre": "Nombre",
                "field": 'nombre'
            },
            {
                "nombre": "Apellidos",
                "field": 'apellidos'
            },


        ]
    };

    data_usuario = [
        {'id': 0, 'usuario': 'usuario1', 'nombre': 'Pepe1', 'apellidos': 'Gonzalez1'},
        {'id': 1, 'usuario': 'usuario2', 'nombre': 'Pepe2', 'apellidos': 'Gonzalez2'},
        {'id': 2, 'usuario': 'usuario3', 'nombre': 'Pepe3', 'apellidos': 'Gonzalez3'}
    ]

/*TENGO QUE PONER LOS OPTIONS AQUI PORQUE NO DEJA ACCEDER A LOS PROPS DENTRO DEL ONROWCLICK*/
    options_usuario = {
        afterSearch: '',  // define a after search hook,
        onRowClick: function (row, columnIndex, rowIndex, e) {

            /*alert(`You click row id: ${row.id}, column index: ${columnIndex}, row index: ${rowIndex}`);*/
            $('#modal_crear_usuario').modal('show');
            $('#titulo_modal_crear_usuario').html('Editar Usuario');
            $('#modal_usuario_usuario').val(row.usuario);
            $('#modal_usuario_nombre').val(row.nombre);
            $('#modal_usuario_apellidos').val(row.apellidos);
        },
        exportCSVText: 'Exportar a CSV',
        insertText: 'Crear',
        deleteText: 'Borrar',
        saveText: 'Guardar',
        closeText: 'Cerrar'
    }
}

export default Site;
