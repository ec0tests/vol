import React, {Component} from 'react';


import './Usuario.css'
import $ from "jquery";


class Usuario extends React.Component {

    constructor(props) {
        super(props);

    }


    borrarUsuario() {
        $("#nom_usu").val(this.props.nombre_usu);

    }

    render() {
        return (
            <li class="dd-item " data-id="1">
                <div class="dd-handle Pregunta-adm">
                    <h6 className="mb-0">{this.props.nombre_usu}
                        <button onClick={this.borrarUsuario.bind(this)}  data-toggle="modal" data-target="#exampleModal_usuario" className="Btn-transparent P-absolute Cross-adm Scale">
                            <i class="fas fa-times "></i>

                        </button>
                        <button  className="Btn-transparent P-absolute Edit-adm ">   <i class="fas fa-pencil-alt "></i></button>

                    </h6>


                </div>
                <div className="modal fade" id="exampleModal_usuario" tabindex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title text-left" id="exampleModalLabel">Estás seguro de que quieres
                                    borrar
                                    este Usuario?</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-Body m-3">
                                <h6 className="text-left mt-3">Usuario: <small className="ml-2"><input type="text"
                                                                                                        id="nom_usu"
                                                                                                        className="Btn-transparent"
                                                                                                        value={this.props.nombre_usuario}/>
                                </small></h6>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
                                <button type="button" className="btn btn-primary"
                                        onClick={this.borrarUsuario.bind(this)}>Sí
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </li>)
    }
}

export default Usuario;