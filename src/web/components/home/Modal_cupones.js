import React, {Component} from 'react';

import $ from 'jquery';
import './Modal_cupones.css';

class Modal_cupon extends React.Component {


    render() {

        return (



            <div class="modal fade" id="modal_cupon" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered Mw-50" role="document">
                    <div class="modal-content H-70vh">
                        <div class="modal-header Titulo-cupon">
                            <h5 class="modal-title w-100 Oculto" id="exampleModalLongTitle">Felicidades!</h5>

                            <h5 class="modal-title w-100" id="exampleModalLongTitle">Canjea tu Cupón</h5>
                            <span className="w-75 text-center ">Has recibido tu código de reserva? Validalo a continuación y descubre el <strong>apasionante viaje</strong>  que te espera </span>
                            {/*<button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>*/}
                        </div>
                        <div class="modal-body text-center d-flex justify-content-center ">
                            <div className="form-group  m-t-20 p-0 w-50">
<h5 className="Oculto Cuponesh5">Tu código ha sido validado !</h5>
                                <h5 className="Oculto Cuponesh52">Vuelo Romántico + SPA</h5>
                                <input type="text"
                                       className=" p-0 text-center Input-cupon w-100"
                                       id="cupon"
placeholder="Inserta tu código"
                                       name="cupon"/>
                            </div>
                        </div>
                        <div class="modal-footer p-0">
                            <submit type="button" class="btn Boton-cupon" >Validar</submit>
                            <submit type="button" class="btn Boton-cupon Oculto" >Confirma tus Datos</submit>

                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Modal_cupon;
