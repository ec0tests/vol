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

                {/*MODAL OFERTA*/}
                <div className="modal fade" id="modal_crear_oferta" tabindex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="modal-title"
                                    id="oferta_modal_titulo">Crear Oferta</h3>
                                <button type="button" className="close" data-dismiss="modal"
                                        aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-Body m-3">

                                <form className="form-material m-t-10 row" id="oferta_form">


                                    <div className="form-group col-12 col-md-6 m-t-20">
                                        <label className="Label-vuelos"
                                               htmlFor="oferta_nombre">Nombre Oferta:</label>
                                        <input type="text"
                                               className="form-control form-control-line "
                                               id="oferta_nombre"
                                               value=''
                                               name="oferta_nombre"/>
                                    </div>
                                    <div className="form-group col-12 col-md-6 m-t-20">
                                        <label className="Label-vuelos"
                                               htmlFor="oferta_clicks">Clicks Oferta:</label>
                                        <input type="text"
                                               className="form-control form-control-line "
                                               id="oferta_clicks"
                                               value=''
                                               name="oferta_clicks"/>
                                    </div>




                                    <div className="form-group col-md-12 m-t-20 text-right">
                                        <button type="button" id="btn_modal_eliminarOferta"
                                                className="btn btn-danger waves-effect waves-light my-1">Eliminar
                                        </button>
                                        <button type="submit"
                                                className="btn btn-info waves-effect waves-light my-1">Guardar
                                        </button>
                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>

                </div>

                {/*MODAL USUARIOS*/}
                <div className="modal fade" id="modal_crear_usuario" tabindex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="modal-title"
                                    id="titulo_modal_crear_usuario">Crear Usuario</h3>
                                <button type="button" className="close" data-dismiss="modal"
                                        aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-Body m-3">

                                <form className="form-material m-t-10 row" id="usuario_form">


                                    <div className="form-group col-12 col-md-6 m-t-20">
                                        <label className="Label-vuelos"
                                               htmlFor="vuelo_nombre">Usuario:</label>
                                        <input type="text"
                                               className="form-control form-control-line "
                                               id="modal_usuario_usuario"
                                               value=''
                                               name="modal_usuario_usuario"/>
                                    </div>
                                    <div className="form-group col-12 col-md-6 m-t-20">
                                        <label className="Label-vuelos"
                                               htmlFor="vuelo_reserva">Nombre:</label>
                                        <input type="text"
                                               className="form-control form-control-line "
                                               id="modal_usuario_nombre"
                                               value=''
                                               name="modal_usuario_nombre"/>
                                    </div>
                                    <div className="form-group col-12 col-md-6 m-t-20">
                                        <label className="Label-vuelos">Apellidos:</label>

                                        <input type="text"
                                               className="form-control form-control-line "
                                               id="modal_usuario_apellidos"
                                               name="modal_usuario_apellidos" value=''/>
                                    </div>
                                    <div className="form-group col-12 col-md-6 m-t-20">
                                        <label className="Label-vuelos">País:</label>

                                        <input type="text"
                                               className="form-control form-control-line "
                                               id="modal_usuario_pais"
                                               name="modal_usuario_pais" value=''/>
                                    </div>
                                    <div className="form-group col-12 col-md-6 m-t-20">
                                        <label className="Label-vuelos">Dirección:</label>

                                        <input type="text"
                                               className="form-control form-control-line "
                                               id="modal_usuario_direccion"
                                               name="modal_usuario_direccion" value=''/>
                                    </div>
                                    <div className="form-group col-12 col-md-6 m-t-20">
                                        <label className="Label-vuelos">Email:</label>

                                        <input type="text"
                                               className="form-control form-control-line "
                                               id="modal_usuario_email"
                                               name="modal_usuario_email" value=''/>
                                    </div>

                                    <div className="form-group col-12 col-md-6 m-t-20">
                                        <label className="Label-vuelos">Teléfono:</label>

                                        <input type="text"
                                               className="form-control form-control-line "
                                               id="modal_usuario_telefono"
                                               name="modal_usuario_telefono" value=''/>
                                    </div>



                                    <div className="form-group col-md-12 m-t-20 text-right">
                                        <button type="button" id="btn_modal_eliminarUsuario"
                                                className="btn btn-danger waves-effect waves-light my-1">Eliminar
                                        </button>
                                        <button type="submit"
                                                className="btn btn-info waves-effect waves-light my-1">Guardar
                                        </button>
                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>

                </div>

                {/*MODAL Pilotos*/}
                <div className="modal fade" id="modal_crear_piloto" tabindex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="modal-title"
                                    id="titulo_modal_crear_piloto">Crear Piloto</h3>
                                <button type="button" className="close" data-dismiss="modal"
                                        aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-Body m-3">

                                <form className="form-material m-t-10 row" id="reserva_form">


                                    <div className="form-group col-12 col-md-6 m-t-20">
                                        <label className="Label-vuelos"
                                               htmlFor="vuelo_nombre">Nombre:</label>
                                        <input type="text"
                                               className="form-control form-control-line "
                                               id="modal_pilotos_nombre"
                                               value=''
                                               name="modal_pilotos_nombre"/>
                                    </div>
                                    <div className="form-group col-12 col-md-6 m-t-20">
                                        <label className="Label-vuelos"
                                               htmlFor="vuelo_nombre">Apellidos:</label>
                                        <input type="text"
                                               className="form-control form-control-line "
                                               id="modal_pilotos_apellidos"
                                               value=''
                                               name="modal_pilotos_apellidos"/>
                                    </div>
                                    <div className="form-group col-12 col-md-12 m-t-20">
                                        <label className="Label-vuelos"
                                               htmlFor="vuelo_reserva">Foto:</label>
                                        <input type="file"
                                               className="form-control form-control-line "
                                               id="modal_pilotos_foto"
                                               name="modal_pilotos_foto"/>
                                    </div>




                                    <div className="form-group col-md-12 m-t-20 text-right">


                                        <button type="submit"
                                                className="btn btn-info waves-effect waves-light my-1">Guardar
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