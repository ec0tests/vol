import React, {Component} from 'react';


import './Pregunta_faq_adm.css'
import $ from "jquery";


class Pregunta_faq_adm extends React.Component {
    constructor(props) {
        super(props);

    }


    borrarPregunta() {
        $("#pregunta").val(this.props.pregunta);

    }

    render() {
        return (
            <li class="dd-item " data-id="1">
                <div class="dd-handle Pregunta-adm">
                    <h6>{this.props.pregunta}
                        <button onClick={this.borrarPregunta.bind(this)} data-toggle="modal"
                                data-target="#exampleModal_pregunta"
                                className="Btn-transparent P-absolute Cross-adm-pilotos"><i class="fas fa-times "></i>
                        </button>
                    </h6>
                    <p>{this.props.respuesta}</p>

                </div>
                <div className="modal fade" id="exampleModal_pregunta" tabindex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title text-left" id="exampleModalLabel">Estás seguro de que quieres
                                    borrar
                                    esta Pregunta?</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-Body m-3">
                                <h6 className="text-left mt-3">Pregunta: <small className="ml-2"><input type="text"
                                                                                                        id="pregunta"
                                                                                                        className="Btn-transparent"
                                                                                                        value={this.props.pregunta}/>
                                </small></h6>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
                                <button type="button" className="btn btn-primary"
                                        onClick={this.borrarPregunta.bind(this)}>Sí
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        )
    }


}


export default Pregunta_faq_adm;