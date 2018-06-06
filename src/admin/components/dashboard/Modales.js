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


            </div>


        )

    }
}


export default Modales;