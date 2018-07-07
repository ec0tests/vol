/* eslint max-len: 0 */
/* eslint no-console: 0 */
import React from 'react';


import $ from 'jquery';


export default class Row_lista extends React.Component {
    constructor(props) {
        super(props);
    }

    editar_desdeCalendario(){
        $('#reserva_precio').val(this.props.reserva_precio)
        $('#fecha_reserva').val(this.props.fecha_reserva)
        $('#fecha_vuelo').val(this.props.fecha_vuelo)
        $('#reserva_nombre').val(this.props.reserva_nombre)
        $('#reserva_personas').val(this.props.reserva_personas)
        $('#reserva_tipo_vuelo').val(this.props.reserva_tipo_vuelo)
        $('#reserva_telefono').val(this.props.reserva_telefono)
        $('#reserva_email').val(this.props.reserva_email)
        $('#reserva_especiales').val(this.props.reserva_especiales)
        $('#reserva_ninyos').val(this.props.reserva_ninyos)
        $('#reserva_estandar').val(this.props.reserva_estandar)
        $('#reserva_discapacitados').val(this.props.reserva_discapacitados)
        $('#modal_lista').modal('hide')

        $('#modal_reserva').modal('show')
    }

    render() {


            return (
                    <li class="list-group-item text-left">{this.props.reserva_nombre} <button onClick={this.editar_desdeCalendario.bind(this)} className="Btn-icono"> <i className="mdi mdi-grease-pencil"></i></button></li>


            );
        }

}


