import React, {Component} from 'react';
import './Card_image.css';

import $ from "jquery";


class Card_image extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    editarPiloto() {
        $("#modal_pilotos_nombre").val(this.props.nombre);
        $("#modal_pilotos_apellidos").val(this.props.apellidos);
    }

    borrarPiloto() {
        $("#nombre_piloto").val(this.props.nombre);

    }


    render() {


        return (
            <div className="col-lg-3 col-md-6">

                <div className="card p-1">
                    <button onClick={this.borrarPiloto.bind(this)} data-toggle="modal"
                            data-target="#exampleModal_piloto"
                            className=" P-absolute Cross-adm-pilotos Btn-transparent"><i class="fas fa-times"></i>
                    </button>
                    <div className="el-card-item" data-toggle="modal" data-target="#modal_crear_piloto"
                         onClick={this.editarPiloto.bind(this)}>
                        <div className="el-card-avatar el-overlay-1">
                            <img src='https://via.placeholder.com/320x250' className="img-fluid Cursor-pointer"
                                 alt="user"/>

                        </div>
                        <div className="el-card-content">
                            <small>{this.props.nombre}</small>
                            <br/></div>
                    </div>
                </div>

                <div className="modal fade" id="exampleModal_piloto" tabindex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title text-left" id="exampleModalLabel">Estás seguro de que quieres
                                    borrar
                                    este piloto?</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-Body m-3">
                                <h4 className="mb-4 text-left">Datos del piloto : </h4>
                                <h6 className="text-left">Nombre: <small className="ml-2"><input type="text"
                                                                                                 id="nombre_piloto"
                                                                                                 className="Btn-transparent"
                                                                                                 value={this.props.nombre}/>
                                </small></h6>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
                                <button type="button" className="btn btn-primary"
                                        onClick={this.borrarPiloto.bind(this)}>Sí
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Card_image;
