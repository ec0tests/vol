import React, {Component} from 'react';
import cerrar_cupon from '../../images/cerrar-cupon.png';

import $ from 'jquery';
import './Modal_cupones.css';
import Datepicker from '../comunes/Datepicker';

class Modal_cupon extends React.Component {

    fecha_confirmada =false;

    fase1() {
                $("#fecha_disponible").hide();
$("#btn_confirmar_fecha").addClass("Disabled");
this.fecha_confirmada=false;
        $("#fase1").hide();

        $("#fase2").fadeIn();
    }

    fase2() {
                $("#fecha_disponible").hide();
$("#btn_confirmar_fecha").addClass("Disabled");
this.fecha_confirmada=false;
        $("#fase2").hide();

        $("#fase3").fadeIn();
    }

    fase3() {
                $("#fecha_disponible").hide();
        if(this.fecha_confirmada==true){
            $("#fase3").hide();

            $("#fase4").fadeIn();
        }
    }
    fase3_volver() {
                $("#fecha_disponible").hide();
$("#btn_confirmar_fecha").addClass("Disabled");
this.fecha_confirmada=false;
            $("#fase3").fadeIn();

            $("#fase4").hide();
    }
    fase4() {
                $("#fecha_disponible").hide();
$("#btn_confirmar_fecha").addClass("Disabled");
this.fecha_confirmada=false;
            $("#fase4").hide();

            $("#fase5").fadeIn();


    }
    fase_final(){
        $("#fase5").hide();
        $("#fase1").show();

    }
    comprobar_fecha() {
        $("#fecha_disponible").hide();

        $("#btn_confirmar_fecha").removeClass('Disabled');

this.fecha_confirmada=true;

        $("#fecha_disponible").show();


    }
    render() {

        return (


            <div class="modal fade" id="modal_cupon" tabindex="-1" role="dialog"
                 aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered Mw-40-cup" role="document">
                    <div id="fase1" class="modal-content Back-dblue ">
                        <div class="modal-header pb-0 Titulo-cupon P-relative">
                            <img src={cerrar_cupon} className="Cerrar-cupon" data-dismiss="modal" alt=""/>
                            <h5 class="modal-title w-100  text-uppercase" id="exampleModalLongTitle">código
                                regalo</h5>
                            <span className="w-100 text-center ">Introduce el código que figura en tu tarjeta de regalo a continuación y descubre el apasionante viaje que te espera  </span>

                        </div>
                        <div class="modal-body pt-0  d-flex  flex-wrap">
                            <div className="form-group  m-t-20 p-0 w-50 ">

                                <input type="text"
                                       className=" p-0 text-center Input-cupon w-95 "
                                       id="cupon"
                                       placeholder="Introduce tu cupón"
                                       name="cupon"/>
                                <span id="error_cupon"
                                      className="danger text-danger  "> El código no es correcto</span>

                            </div>
                            <div className="form-group  m-t-20 p-0 w-50 ">

                                <button onClick={this.fase1.bind(this)} className="Btn-red Validar-cupon">VALIDAR
                                </button>

                            </div>

                        </div>

                    </div>

                    <div id="fase2" class="modal-content Back-dblue ">
                        <div class="modal-header Titulo-cupon pb-0 P-relative">
                            <img src={cerrar_cupon} className="Cerrar-cupon" data-dismiss="modal" alt=""/>

                            <h5 class="modal-title w-100  text-uppercase mb-2"
                                id="exampleModalLongTitle">completa <br/> tus datos </h5>
                            <span className="w-100 text-center ">Para disfrutar de la experiencia necesitamos que cierres una fecha y aportes algunos datos sobre ti y tus acompañantes  </span>
                            {/*<button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>*/}
                        </div>
                        <div class="modal-body  d-flex  flex-wrap pt-0">
                            <div className="form-group mb-1  m-t-20 mr-2 p-0 w-40 ">
                                <button onClick={this.fase2.bind(this)} className="Btn-red Validar-cupon">RELLENAR
                                    DATOS
                                </button>


                            </div>
                            <div className="form-group mb-1  m-t-20 p-0 w-40 ">

                                <a href="/ficha" ><button className="Btn-red Blue Validar-cupon"> VER EXPERIENCIA </button></a>

                            </div>
                            <div id="problema_arriba" className="w-100 text-left ">
                                <span className="Problema-txt">¿Algún problema? Ponte en <a href="/contacto">contacto</a> con nosotros </span>

                            </div>
                        </div>

                    </div>

                    <div id="fase3" class="modal-content Back-dblue ">
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
                                <p id="fecha_disponible"  className=" mb-0 mt-1 Problema-txt w-100 Fechad-txt">La fecha seleccionada está disponible</p>
                            </div>
                            <div className="col-12 col-lg-6 ">
                                <Datepicker tipo={'inline'} />
                            </div>
                        </div>
                        <div class="modal-footer Border-0  p-0 flex-column text-right">
                            <button id="btn_confirmar_fecha" onClick={this.fase3.bind(this)}  className="Disabled Btn-red Validar-cupon ml-auto mb-2">CONFIRMAR
                            </button>

                            <span id="problema_abajo" className="Problema-txt w-100">¿Algún problema? Ponte en <a
                                href="/contacto">contacto</a> con nosotros </span>
                        </div>
                    </div>

                    <div id="fase4" class="modal-content Back-dblue ">
                        <div class="modal-header pb-0 Titulo-cupon P-relative">
                            <img src={cerrar_cupon} className="Cerrar-cupon" data-dismiss="modal" alt=""/>
                            <h5 class="modal-title w-100  text-uppercase" id="exampleModalLongTitle">información de los pasajeros</h5>

                        </div>
                        <div class="modal-body pt-0  d-flex  flex-wrap">
                            <div className="w-100 Titulo-ac">
                                 Tus datos
                            </div>
                            <div className="w-100 Acompanante">
                                <div className=" m-t-20 p-0 w-50 ">

                                    <input type="text"
                                           className=" p-0 text-center Input-cupon w-97 "
                                           id="cupon"
                                           placeholder="Introduce tu cupón"
                                           name="cupon"/>


                                </div>
                                <div className=" m-t-20 p-0 w-25 ">

                                    <input type="text"
                                           className=" p-0 text-center Input-cupon w-95 "
                                           id="edad"
                                           placeholder="Edad"
                                           name="edad"/>


                                </div>
                                <div className=" m-t-20 p-0 w-25 ">

                                    <input type="text"
                                           className=" p-0 text-center Input-cupon w-95 "
                                           id="peso"
                                           placeholder="Peso"
                                           name="peso"/>


                                </div>

                                <div className="mt-2 p-0 w-50 ">

                                    <input type="text"
                                           className=" p-0 text-center Input-cupon w-97 "
                                           id="email"
                                           placeholder="Correo electrónico"
                                           name="email"/>


                                </div>
                            </div>


                            <div className="w-100 Titulo-ac">
                               Los datos de tus acompañantes
                            </div>
                            <div className="w-100 Acompanante">
                                <div className=" m-t-20 p-0 w-50 ">

                                    <input type="text"
                                           className=" p-0 text-center Input-cupon w-97 "
                                           id="cupon"
                                           placeholder="Introduce tu cupón"
                                           name="cupon"/>


                                </div>
                                <div className=" m-t-20 p-0 w-25 ">

                                    <input type="text"
                                           className=" p-0 text-center Input-cupon w-95 "
                                           id="edad"
                                           placeholder="Edad"
                                           name="edad"/>


                                </div>
                                <div className=" m-t-20 p-0 w-25 ">

                                    <input type="text"
                                           className=" p-0 text-center Input-cupon w-95 "
                                           id="peso"
                                           placeholder="Peso"
                                           name="peso"/>


                                </div>


                            </div>

                            <div className="w-100 Acompanante">
                                <div className=" m-t-20 p-0 w-50 ">

                                    <input type="text"
                                           className=" p-0 text-center Input-cupon w-97 "
                                           id="cupon"
                                           placeholder="Introduce tu cupón"
                                           name="cupon"/>


                                </div>
                                <div className=" m-t-20 p-0 w-25 ">

                                    <input type="text"
                                           className=" p-0 text-center Input-cupon w-95 "
                                           id="edad"
                                           placeholder="Edad"
                                           name="edad"/>


                                </div>
                                <div className=" m-t-20 p-0 w-25 ">

                                    <input type="text"
                                           className=" p-0 text-center Input-cupon w-95 "
                                           id="peso"
                                           placeholder="Peso"
                                           name="peso"/>


                                </div>


                            </div>
                        </div>
                        <div class="modal-footer Border-0  p-3 flex-column text-right">
                            <div className="ml-auto w-50 d-flex">
                            <button  onClick={this.fase3_volver.bind(this)}  className="w-50 mr-1 Btn-red Blue Validar-cupon ml-auto mb-2">VOLVER
                            </button>

                            <button onClick={this.fase4.bind(this)}  className="w-50 ml-1 Btn-red Validar-cupon ml-auto mb-2">CONFIRMAR
                            </button>
                            </div>
                            <span id="problema_abajo" className="Problema-txt w-100">¿Algún problema? Ponte en <a
                                href="/contacto">contacto</a> con nosotros </span>
                        </div>
                    </div>

                    <div id="fase5" class="modal-content Back-dblue ">
                        <div class="modal-header pb-0 Titulo-cupon P-relative">
                            <img src={cerrar_cupon} className="Cerrar-cupon" data-dismiss="modal" alt=""/>
                            <h5 class="modal-title w-100  text-uppercase" id="exampleModalLongTitle">disfruta de tu vuelo</h5>
                            <span className="w-100 text-center mt-2">
                                Los datos se han rellenado correctamente. Revisa tu correo electrónico, te hemos enviado un correo de confirmación. A medida que se acerque la fecha de tu vuelo te mantendremos informados. <br/> <br/> Muchas gracias por tu reserva.  </span>

                        </div>
                        <div class="modal-body pt-0  d-flex  flex-wrap">



                        </div>
                        <div class="modal-footer Border-0  p-3 flex-column text-right">
                            <div className="ml-auto w-50 d-flex">

                                <button onClick={this.fase_final.bind(this)} data-dismiss="modal" className="w-50 ml-1 Btn-red Validar-cupon ml-auto mb-2">Cerrar
                                </button>
                            </div>
                            <span id="problema_abajo" className="Problema-txt w-100">¿Algún problema? Ponte en <a
                                href="/contacto">contacto</a> con nosotros </span>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Modal_cupon;
