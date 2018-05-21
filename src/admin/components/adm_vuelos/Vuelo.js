import React, {Component} from 'react';


import './Vuelo.css';
import $ from 'jquery';





class Vuelo extends React.Component {

    constructor(props){
        super(props);
    }
editarVuelo(){
    $("#editor_vuelo").fadeIn(600);
    $("#vuelo_nombre").val(this.props.nombre);
    $("#vuelo_personas").val(this.props.personas);
    $("#vuelo_precio").val(this.props.precio);
    $("#vuelo_tipo").val(this.props.tipo);
    $("#vuelo_fecha1").val(this.props.fecha1);
    $("#vuelo_fecha2").val(this.props.fecha2);
    $("#vuelo_descripcion").val(this.props.descripcion);
}

borrarVuelo(){
        $("#nombre_vuelo").val(this.props.nombre);
        $("#personas_vuelo").val(this.props.personas);
        $("#fechaPublicacion_vuelo").val(this.props.fechaPublicacion_vuelo);

}

    render() {

        return (
<div>
    <li className="dd-item " data-id="1">
        <div className="dd-handle Pregunta-adm">
            <h6 className="mb-0">{this.props.nombre} - Personas: {this.props.personas} - Precio: {this.props.precio}€ - Fecha publicación: {this.props.fecha_publicacion}
                <button onClick={this.borrarVuelo.bind(this)} data-toggle="modal" data-target="#exampleModal2"  className="P-absolute Cross-adm"><i
                    className="fas fa-times"></i></button>
                <button onClick={this.editarVuelo.bind(this)} className="P-absolute Edit-adm"><i
                    className="fas fa-pencil-alt "></i></button>
            </h6>

        </div>
    </li>
    <div className="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h3 className="modal-title" id="exampleModalLabel">Estás seguro de que quieres borrar este vuelo?</h3>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-Body m-3">
                   <h4 className="mb-4">Datos del vuelo : </h4>
                   <h6>Nombre: <small className="ml-2"> <input type="text" id="nombre_vuelo" className="Btn-transparent" value={this.props.nombre} /> </small></h6>
                    <h6>Personas: <small className="ml-2"> <input type="text" id="personas_vuelo" className="Btn-transparent" value={this.props.personas} /></small></h6>
                    <h6>Fecha publicación:  <small className="ml-2"> <input type="text" id="fechaPublicacion_vuelo" className="Btn-transparent" value={this.props.fecha_publicacion} /></small></h6>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
                    <button type="button" className="btn btn-primary" onClick={this.borrarVuelo.bind(this)}>Sí</button>
                </div>
            </div>
        </div>
    </div>
</div>



        )

    }
}


export default Vuelo;