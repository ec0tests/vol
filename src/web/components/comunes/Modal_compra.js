import React, {Component} from 'react';
import cerrar_cupon from '../../images/cerrar-cupon.png';

import $ from 'jquery';
import './Modal_compra.css';
import Datepicker from '../comunes/Datepicker';

class Modal_compra extends React.Component {

    fecha_confirmada = false;

    fase1_compra() {
        $("#fase1_compra").hide();

        $("#fase2_compra").fadeIn();
    }

    fase2_compra() {
        $("#fase2_compra").hide();

        $("#fase1_compra").fadeIn();
    }


    comprobar_fecha() {
        $("#fecha_disponible_compra").hide();

        $("#btn_confirmar_fecha_compra").removeClass('Disabled');

        this.fecha_confirmada = true;

        $("#fecha_disponible_compra").show();


    }

    render() {

        return (
<div>
    <div class="modal fade" id="modal_compras_pasajeros" tabindex="-1" role="dialog"
         aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered Mw-40-cup" role="document">
    <div id="" class="modal-content Back-dblue ">
        <div class="modal-header pb-0 Titulo-cupon P-relative">
            <img src={cerrar_cupon} className="Cerrar-cupon" data-dismiss="modal" alt=""/>
            <h5 class="modal-title w-100  text-uppercase" id="exampleModalLongTitle">selección de los pasajeros</h5>

        </div>
        <div class="modal-body pt-0  d-flex  flex-wrap">
            <div className="w-100 Titulo-ac">
                Tus datos
            </div>
            <div className="w-100 Acompanante">



                <div className="mt-2 p-0 w-50 ">

                    <input type="text"
                           className=" p-0 text-center Input-cupon w-97 "
                           id="email"
                           placeholder="Correo electrónico"
                           name="email"/>


                </div>
                <div className="mt-2 p-0 w-50 ">

                    <input type="text"
                           className=" p-0 text-center Input-cupon w-97 "
                           id="nombre"
                           placeholder="Nombre"
                           name="nombre"/>


                </div>
            </div>



            <div className="w-100 Acompanante">

                <div className=" m-t-20 p-0 w-50 ">

                    <select
                           className=" p-0 text-center Input-cupon w-25 "
                           id="adultos"
                           placeholder=""
                           name="adultos">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <span>adultos</span>

                </div>
            </div>

            <div className="w-100 Acompanante">

                <div className=" m-t-20 p-0 w-50 ">

                    <select
                        className=" p-0 text-center Input-cupon w-25 "
                        id="ninos"
                        placeholder=""
                        name="ninos">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>

                    <span>niños</span>

                </div>


            </div>

            <div className="w-100 Acompanante">

                <div className=" m-t-20 p-0 w-50 ">

                    <select
                        className=" p-0 text-center Input-cupon w-25 "
                        id="discapacitados"
                        placeholder=""
                        name="discapacitados">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>

                    <span>discapacitados</span>
                </div>


            </div>
        </div>
        <div class="modal-footer Border-0  p-3 pt-0 flex-column text-right">
            <div className="ml-auto w-100 d-flex align-items-center">
                <div className="Footer-precio">
                    <p className="mb-0 text-left"> Total: <span>500€</span> </p>
                    <p className="Peq">(IVA incluido)</p>
                </div>

                <button  onClick={this.fase1_compra.bind(this)}
                         className="w-25 ml-1 Btn-red Validar-cupon Pagar-modal-btn ml-auto mb-2 Funte-pew">CONFIRMAR
                </button>
            </div>
            <span id="problema_abajo" className="Problema-txt w-100">¿Algún problema? Ponte en <a
                href="/contacto">contacto</a> con nosotros </span>
        </div>
    </div>
        </div></div>


    <div class="modal fade" id="modal_compras_fechas" tabindex="-1" role="dialog"
         aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered Mw-40-cup" role="document">




            <div id="fase1" class="modal-content Back-dblue ">
                <div class="modal-header Titulo-cupon pb-0 P-relative">
                    <img src={cerrar_cupon} className="Cerrar-cupon" data-dismiss="modal" alt=""/>

                    <h5 class="modal-title w-100  text-uppercase mb-2"
                        id="exampleModalLongTitle">SELECCIONA LAS FECHAS</h5>
                    {/*<button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>*/}
                </div>
                <div class="modal-body  d-flex justify-content-start text-left  flex-wrap pt-0">

                    <div className="col-12 col-lg-6 pl-0">
                        <span className="my-3 d-block w-100 text-center Span-fecha">Selecciona la fecha de inicio de tu experiencia  </span>
                        <input type="text" placeholder="FECHA DE INICIO"  className="Btn-red Blue Fecha-input Validar-cupon mb-2  w-100 text-left">
                        </input>
                        <button   onClick={this.comprobar_fecha.bind(this)} className="Btn-red Validar-cupon w-100  text-left">COMPROBAR DISPONIBILIDAD
                        </button>
                        <p id="fecha_disponible_compra"  className=" mb-0 mt-1 Problema-txt w-100 Fechad-txt">La fecha seleccionada está disponible</p>
                    </div>
                    <div className="col-12 col-lg-6  Padding-l-movil-0">
                        <Datepicker tipo={'inline'} />
                    </div>
                </div>
                <div class="modal-footer Border-0  p-0 flex-column text-right">
                    <button id="btn_confirmar_fecha_compra"  className="Disabled Btn-red Validar-cupon ml-auto mb-2">CONFIRMAR
                    </button>

                    <span id="problema_abajo" className="Problema-txt w-100">¿Algún problema? Ponte en <a
                        href="/contacto">contacto</a> con nosotros </span>
                </div>
            </div>




        </div>
    </div>


            <div class="modal fade" id="modal_compra" tabindex="-1" role="dialog"
                 aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered Mw-40-cup" role="document">
                    <div id="fase1_compra" class="modal-content Back-dblue ">
                        <div class="modal-header pb-0 Titulo-cupon P-relative">
                            <img src={cerrar_cupon} className="Cerrar-cupon" data-dismiss="modal" alt=""/>
                            <h5 class="modal-title w-100  text-uppercase" id="exampleModalLongTitle">completar el
                                <br/> pago</h5>

                        </div>
                        <div class="modal-body pt-4 d-flex  flex-wrap Body-reserva">

                                <p>Vuelo compartido + Alojamiento en <strong>"Hotel Riu"</strong></p>
                                <p>250€ <strong>x2 </strong> ...............................................................................................500€ </p>

                            <p className="mt-3"><strong>Elige una opción</strong></p>

                            <div class="row w-100 mb-1">
                                <div class=" col-6 col-md-4 col-lg-4 Pad-l-9 pr-0">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                                        <label class="form-check-label" for="inlineCheckbox1">Pagar todo ahora
                                            (500€)</label>

                                </div>
                                <div class="form-check col-6 col-md-8 col-lg-8">
                                    <input class="form-check-input" type="checkbox" id="gridCheck_compra2"/>
                                    <label class="form-check-label Letrasch" for="gridCheck_compra2">Pagar ahora el 30%(150€) y el resto el día del vuelo</label>
                                </div>
                            </div>


                        </div>
                        <div class="modal-footer Border-0  p-3 pt-0 flex-column text-right">
                            <div className="ml-auto w-100 d-flex align-items-center">
                              <div className="Footer-precio">
                                  <p className="mb-0 text-left"> Total: <span>500€</span> </p>
                                  <p className="Peq">(IVA incluido)</p>
                              </div>

                                <button  onClick={this.fase1_compra.bind(this)}
                                         className="w-25 ml-1 Btn-red Validar-cupon Pagar-modal-btn ml-auto mb-2">PAGAR
                                </button>
                            </div>
                            <span id="problema_abajo" className="Problema-txt w-100">¿Algún problema? Ponte en <a
                                href="/contacto">contacto</a> con nosotros </span>
                        </div>
                    </div>

                    <div id="fase2_compra" class="modal-content Back-dblue ">
                        <div class="modal-header pb-0 Titulo-cupon P-relative">
                            <img src={cerrar_cupon} className="Cerrar-cupon" data-dismiss="modal" alt=""/>
                            <h5 class="modal-title w-100  text-uppercase" id="exampleModalLongTitle">disfruta de tu
                                vuelo</h5>
                            <span className="w-100 text-center mt-2">
                                Los datos se han rellenado correctamente. Revisa tu correo electrónico, te hemos enviado un correo de confirmación. A medida que se acerque la fecha de tu vuelo te mantendremos informados. <br/> <br/> Muchas gracias por tu compra.  </span>

                        </div>
                        <div class="modal-body pt-0  d-flex  flex-wrap">


                        </div>
                        <div class="modal-footer Border-0  p-3 flex-column text-right">
                            <div className="ml-auto w-75 d-flex">
                                <button className="w-50 mr-1 Btn-red Blue Validar-cupon ml-auto mb-2">GENERAR VALE
                                    REGALO
                                </button>

                                <button data-dismiss="modal"
                                        className="w-25 ml-1 Btn-red Validar-cupon ml-0 mb-2">CERRAR
                                </button>
                            </div>
                            <span id="problema_abajo" className="Problema-txt w-100">¿Algún problema? Ponte en <a
                                href="/contacto">contacto</a> con nosotros </span>
                        </div>
                    </div>


                </div>
            </div>
</div>
        )

    }
}

export default Modal_compra;
