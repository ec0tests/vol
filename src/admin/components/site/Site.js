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
import Usuario from '../comunes/usuario/Usuario';
import Datatable from '../comunes/datatable/Datatable';

/*import File_upload from '../comunes/file_upload/File_upload';*/


class Site extends React.Component {


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
                                            <h4 class="card-title">Datatable</h4>
                                            <Datatable data={this.dataSet} columns={this.columns}/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="card Adm-card">
                                        <div class="card-body justify-content-start">
                                            <h4 class="card-title w-100">Gestión de Pilotos <i
                                                class="fas fa-plus-circle Float-r Cursor-pointer"></i></h4>
                                            <div className="row">
                                                <Card_image nombre="Piloto1"/>
                                                <Card_image nombre="Piloto1"/><Card_image nombre="Piloto1"/><Card_image
                                                nombre="Piloto3"/><Card_image nombre="Piloto4"/><Card_image
                                                nombre="Piloto5"/><Card_image nombre="Piloto6"/>
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

                                            <div className="row">
                                                <div className="col-12 col-lg-6">
                                                    {/*  <File_upload/>*/}
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
                                <div class="col-12">

                                    <div class="card Adm-card">
                                        <div class="card-body justify-content-start">
                                            <h4 class="card-title w-100">Gestión de Usuarios <i
                                                class="fas fa-plus-circle Float-r Cursor-pointer"></i></h4>
                                            <div class="myadmin-dd dd w-100 text-left" id="nestable">
                                                <ol class="dd-list ">
                                                    <Usuario nombre_usu={"Usuario 1"}/>
                                                    <Usuario nombre_usu={" Usuario2"}/>
                                                    <Usuario nombre_usu={" Usuario3"}/>
                                                    <Usuario nombre_usu={" Usuario4"}/>
                                                </ol>
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

    dataSet = [
        [ "Oferta1", "10" ],
        [ "Oferta2", "20"]
    ];

    columns=[
        {title: "Nombre Oferta"},
        {title: "Clicks"},

    ]
}

export default Site;
