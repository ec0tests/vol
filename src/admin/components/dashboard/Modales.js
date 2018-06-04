import React, {Component} from 'react';


class Modales extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            titulo_form: 'Crear Reserva',
            usuario_reserva: '',
            precio_reserva: '',
            fecha_reserva: '',
            btn_reserva: 'Crear',
            nombre_reserva: '',

            showBorrar: false

        };
    }


    render() {

        return (
            <div>
                {/*MODAL CONTACTO*/}
                <div className="modal fade" id="modal_contacto" tabindex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="modal-title">Datos de contacto</h3>
                                <button type="button" className="close" data-dismiss="modal"
                                        aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-Body m-3">

                                <form className="form-material m-t-10 row" id="reserva_form">

                                    <div className="form-group col-12 col-md-12 m-t-20">
                                        <label className="Label-vuelos">Usuario:</label>
                                        <p>Usuario1</p>
                                    </div>
                                    <div className="form-group col-12 col-md-6 m-t-20">
                                        <label className="Label-vuelos">Nombre:</label>
                                        <p>Pepe</p>
                                    </div>
                                    <div className="form-group col-12 col-md-6 m-t-20">
                                        <label className="Label-vuelos">Apellidos:</label>
                                        <p>Fernandez Rico</p>
                                    </div>
                                    <div className="form-group col-12 col-md-6 m-t-20">
                                        <label className="Label-vuelos">Teléfono:</label>
                                        <p>666555444</p>
                                    </div>

                                    <div className="form-group col-12 col-md-6 m-t-20">
                                        <label className="Label-vuelos">Email:</label>
                                        <p>pepe@gmail.com</p>
                                    </div>

                                    <div className="form-group col-12 col-md-6 m-t-20">
                                        <label className="Label-vuelos">País:</label>
                                        <p>España</p>
                                    </div>

                                    <div className="form-group col-12 col-md-6 m-t-20">
                                        <label className="Label-vuelos">Dirección:</label>
                                        <p>Calle 8</p>
                                    </div>
                                    <div className="form-group col-md-12 m-t-20 text-right">

                                        <button type="button"
                                                className="btn btn-info waves-effect waves-light my-1">Contactar Usuario
                                        </button>
                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>

                </div>
                {/*MODAL*/}
                <div className="modal fade" id="modal_reserva_dashboard" tabindex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="modal-title"
                                    id="titulo_modal_reserva_dashboard">{this.state.titulo_form}</h3>
                                <button type="button" className="close" data-dismiss="modal"
                                        aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-Body m-3">

                                <form className="form-material m-t-10 row" id="reserva_form">

                                    <div className="form-group col-12 m-t-20">
                                        <label className="Label-vuelos"
                                               htmlFor="vuelo_nombre">Vuelo:</label>
                                        <select className="form-control form-control-line " id="reserva_vuelo"
                                                name="reserva_vuelo">
                                            <option value="idvuelo1">Vuelo</option>
                                            <option value="idvuelo1">Vuelo2</option>
                                            <option value="idvuelo1">Vuelo3</option>
                                        </select>
                                        <div class="alert alert-danger p-1 mt-2">
                                            <small>El vuelo seleccionado no está disponible en esta fecha</small>
                                        </div>


                                    </div>

                                    <div className="form-group col-12 col-md-6 m-t-20">
                                        <label className="Label-vuelos"
                                               htmlFor="vuelo_nombre">Usuario:</label>
                                        <input type="text"
                                               className="form-control form-control-line "
                                               id="reserva_usuario"
                                               value={this.state.usuario_reserva}
                                               name="reserva_usuario"/>
                                    </div>
                                    <div className="form-group col-12 col-md-6 m-t-20">
                                        <label className="Label-vuelos"
                                               htmlFor="vuelo_reserva">Reserva:</label>
                                        <input type="text"
                                               className="form-control form-control-line "
                                               id="reserva_nombre"
                                               value={this.state.nombre_reserva}
                                               name="reserva_nombre"/>
                                    </div>
                                    <div className="form-group col-12 col-md-6 m-t-20">
                                        <label className="Label-vuelos">Fecha:</label>

                                        <input type="date"
                                               className="form-control form-control-line "
                                               id="reserva_fecha"
                                               name="reserva_fecha" value={this.state.fecha_reserva}/>
                                    </div>
                                    <div className="form-group col-12 col-md-6 m-t-20">
                                        <label className="Label-vuelos">Precio:</label>
                                        <input type="text"
                                               className="form-control form-control-line "
                                               value="Precio" id="reserva_precio"
                                               name="reserva_precio" value={this.state.precio_reserva}/>
                                    </div>


                                    <div className="form-group col-md-12 m-t-20 text-right">
                                        <button type="button"
                                                className="btn btn-danger waves-effect waves-light my-1 mr-2"
                                                style={{display: this.state.showBorrar ? 'inline' : 'none'}}>Eliminar
                                            Reserva
                                        </button>
                                        <button type="submit"
                                                className="btn btn-info waves-effect waves-light my-1">{this.state.btn_reserva}
                                        </button>
                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>

                </div>

            </div>


        )

    }
}


export default Modales;