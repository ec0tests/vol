import React, {Component} from 'react';
import '../../css/style.css';
import '../../css/colors/blue.css';
import '../comunes/Nestable.css';
import './Producto_adm.css';
import Adm_header from '../comunes/header/Header';
import Adm_menu from '../comunes/menu/Menu';
import Text_editor from '../comunes/text_editor/Text_editor';
import Producto from './Producto';
import $ from "jquery";

/*import File_upload from '../comunes/file_upload/File_upload';*/


class Producto_adm extends React.Component {
    crearProducto() {
        $('#producto_form')[0].reset();
        $('#exampleModalLabel_crearProducto').text('Crear Producto');
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
                                    <h3 className="text-themecolor m-b-0 m-t-0 text-left">Producto</h3>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                                        <li className="breadcrumb-item active">Producto</li>
                                    </ol>
                                </div>

                            </div>


                            <div className="row">
                                <div className="col-12">

                                    <div className="card ">
                                        <div className="card-body justify-content-start">
                                            <h3 className="card-title w-100 mb-4"> Productos publicadas
                                                <button data-toggle="modal"  data-target="#exampleModal3"  onClick={this.crearProducto.bind(this)}
                                                        className="d-inline Float-r Cursor-pointer Btn-transparent"><i
                                                    className="fas fa-plus-circle "></i></button></h3>
                                            <div className="row">
                                                    <Producto  nombre={"Producto 1"} plazas={"3"} precio={"300"}
                                                           fecha1={"22-02-2018"} fecha2={"12-06-2018"}
                                                           tipo={"Alojamiento"} descripcion={"descripcion de la producto"}/>
                                                    <Producto nombre={"Producto2"} plazas={"2"} precio={"200"}
                                                           fecha1={"22-02-2018"} fecha2={"12-06-2018"}
                                                           tipo={"Restaurante"} descripcion={"descripción de la producto"}/>
                                                    <Producto  nombre={"Producto3"} plazas={"4"} precio={"400"}
                                                           fecha1={"22-02-2018"} fecha2={"12-06-2018"}
                                                           tipo={"Actividades turísticas"} descripcion={"descripción de la producto"}/>
                                                    <Producto  nombre={"Producto4"} plazas={"1"} precio={"200"}
                                                           fecha1={"22-02-2018"} fecha2={"12-06-2018"}
                                                           tipo={"Restaurante"} descripcion={"descripción de la producto"}/></div>
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

export default Producto_adm;
