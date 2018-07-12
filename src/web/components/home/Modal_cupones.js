import React, {Component} from 'react';
import regalo from '../../images/regalo.png';

import $ from 'jquery';
import './Modal_cupones.css';

class Modal_cupon extends React.Component {


    validar_cupon(){
        $(".Fase1").hide();

        $(".Fase2").fadeIn();
    }

    render() {

        return (



            <div class="modal fade" id="modal_cupon" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered Mw-50" role="document">
                    <div class="modal-content ">
                        <div class="modal-header Titulo-cupon">
                            <h5 class="modal-title w-100 Fase2 Oculto" id="exampleModalLongTitle">Felicidades!</h5>
                            <img className="Fase2 Oculto w-25 mt-3" alt="regalo" src={regalo}/>
                            <h5 class="modal-title w-100 Fase1" id="exampleModalLongTitle">Canjea tu Cupón</h5>
                            <span className="w-75 text-center Fase1">Has recibido tu código de reserva? Validalo a continuación y descubre el <strong>apasionante viaje</strong>  que te espera </span>
                            {/*<button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>*/}
                        </div>
                        <div class="modal-body text-center d-flex justify-content-center flex-wrap">
                            <h5 className="Fase2 Oculto Cuponesh5 Fase1 text-center w-100">Tu código ha sido validado !</h5>
                            <h5 className="Fase2 Oculto Cuponesh52 text-center w-100">Vuelo Romántico + SPA</h5>
                            <div className="form-group  m-t-20 p-0 w-50 Fase1">

                                <input type="text"
                                       className=" p-0 text-center Input-cupon w-100 Fase1"
                                       id="cupon"
placeholder="Inserta tu código"
                                       name="cupon"/>
                                <span id="error_cupon" className="danger text-danger Fase1"> El código no es correcto</span>

                            </div>
                        </div>
                        <div class="modal-footer p-0">
                            <input type="button" id="validar_cupon" class="btn Boton-cupon m-0 Fase1" onClick={this.validar_cupon.bind(this)} value="Validar" />
                            <input type="button" class="btn Boton-cupon Fase2 Oculto m-0" value="Confirma tus Datos" />

                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Modal_cupon;
