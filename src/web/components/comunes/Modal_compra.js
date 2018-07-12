import React, {Component} from 'react';
import Calendario from '../comunes/calendar/Calendar';
import compra_ico1 from '../../images/download.png';
import compra_ico2 from '../../images/clock.png';
import compra_ico3 from '../../images/fingerprint (1).png';
import compra_ico4 from '../../images/tickets.png';
import corazon from '../../images/corazon.png';
import tick from '../../images/tick.png';

import $ from 'jquery';
import './Modal_compra.css';

class Modal_compra extends React.Component {


    constructor(props) {
        super(props);
        this.setState.bind(this);
        this.state = {
            type1: 'text',
            type2: 'text',

        };

    }

    onFocus1() {
        this.setState({type1: 'date'});
    }

    onBlur1() {
        this.setState({type1: 'text'});
    }

    onFocus2() {
        this.setState({type2: 'date'});
    }

    onBlur2() {
        this.setState({type2: 'text'});
    }

    descripcion_compra() {
        $(".Fase1_compra").hide();
        $(".Ico-compra1").hide();
        $(".Div-ico2").addClass("Border-green");

        $(".Tick1").fadeIn();
        $(".Fase2_compra").fadeIn();
        $(".Volver2").fadeIn();
    }

    fecha_compra() {
        $(".Fase2_compra").hide();
        $(".Ico-compra2").hide();
        $(".Div-ico3").addClass("Border-green");

        $(".Volver2").hide();

        $(".Tick2").fadeIn();
        $(".Fase3_compra").fadeIn();

        $(".Volver3").fadeIn();

    }

    calendario_compra() {
        $(".Fase3_compra").hide();
        $(".Ico-compra3").hide();
        $(".Div-ico4").addClass("Border-green");
        $(".Volver3").hide();

        $(".Tick3").fadeIn();
        $(".Fase4_compra").fadeIn();

        $(".Volver4").fadeIn();

    }

    confirmar_compra() {
        $(".Fase4_compra").hide();
        $(".Volver4").hide();

        $(".Ico-compra4").hide();

        $(".Tick4").fadeIn();
        $(".Fase5_compra").fadeIn();

    }

    volver_compra() {
        $(".Fase5_compra").hide();
        $(".Div-ico1").addClass("Border-green");
        $(".Div-ico2").removeClass("Border-green");
        $(".Div-ico3").removeClass("Border-green");
        $(".Div-ico4").removeClass("Border-green");
        $(".Volver2").hide();
        $(".Volver3").hide();
        $(".Volver4").hide();
        $(".Volver5").hide();
        $(".Ico-compra1").fadeIn();
        $(".Ico-compra2").fadeIn();
        $(".Ico-compra3").fadeIn();
        $(".Ico-compra4").fadeIn();

        $(".Tick").hide();
        $(".Fase1_compra").fadeIn();
    }















    /*ICONO VOLVER*/
    volver2() {
        $(".Fase2_compra").hide();
        $(".Ico-compra1").fadeIn();
        $(".Volver2").hide();

        $(".Div-ico2").removeClass("Border-green");
        $(".Div-ico1").addClass("Border-green");

        $(".Tick1").hide();
        $(".Fase1_compra").fadeIn();
    }

    volver3() {
        $(".Fase3_compra").hide();
        $(".Ico-compra2").fadeIn();
        $(".Volver3").hide();
        $(".Volver2").fadeIn();

        $(".Div-ico3").removeClass("Border-green");
        $(".Div-ico2").addClass("Border-green");

        $(".Tick2").hide();
        $(".Fase2_compra").fadeIn();
    }

    volver4() {
        $(".Fase4_compra").hide();
        $(".Volver4").hide();
        $(".Volver3").fadeIn();

        $(".Ico-compra3").fadeIn();
        $(".Div-ico4").removeClass("Border-green");
        $(".Div-ico3").addClass("Border-green");

        $(".Tick3").hide();
        $(".Fase3_compra").fadeIn();
    }

    volver5() {
        $(".Fase5_compra").hide();
        $(".Div-ico1").addClass("Border-green");
        $(".Div-ico2").removeClass("Border-green");
        $(".Div-ico3").removeClass("Border-green");
        $(".Div-ico4").removeClass("Border-green");
        $(".Volver2").hide();
        $(".Volver3").hide();
        $(".Volver4").hide();
        $(".Volver5").hide();
        $(".Ico-compra1").fadeIn();
        $(".Ico-compra2").fadeIn();
        $(".Ico-compra3").fadeIn();
        $(".Ico-compra4").fadeIn();

        $(".Tick").hide();
        $(".Fase1_compra").fadeIn();
    }

    render() {

        return (


            <div class="modal fade" id="modal_compra" tabindex="-1" role="dialog"
                 aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered Mw-40" role="document">
                    <div class="modal-content">
                        <div class="modal-header Titulo-compra text-center">
                            <div className="Volver-compra">
                                <button className="Oculto Volver2" onClick={this.volver2.bind(this)}> <i className="fas fa-angle-left Ico-fl"></i> </button>
                                <button className="Oculto Volver3" onClick={this.volver3.bind(this)}> <i className="fas fa-angle-left Ico-fl"></i> </button>
                                <button className="Oculto Volver4" onClick={this.volver4.bind(this)}> <i className="fas fa-angle-left Ico-fl"></i> </button>
                            </div>
                            <h5 className="h5-compra">Nombre del Vuelo</h5>
                            <div className="Blue-line"></div>
                            <div className="Div-icoscompra">
                                <div className="Compra-ico Div-ico1 Border-green">
                                    <img src={compra_ico1} className="Ico-compra Ico-compra1" alt=""/>
                                    <img src={tick} className="Tick Oculto Tick1" alt=""/>

                                </div>
                                <div className="Compra-ico Div-ico2">
                                    <img src={compra_ico2} className="Ico-compra Ico-compra2" alt=""/>
                                    <img src={tick} className="Tick Oculto Tick2" alt=""/>

                                </div>
                                <div className="Compra-ico Div-ico3">
                                    <img src={compra_ico3} className="Ico-compra Ico-compra3" alt=""/>
                                    <img src={tick} className="Tick Oculto Tick3" alt=""/>


                                </div>
                                <div className="Compra-ico Div-ico4">
                                    <img src={compra_ico4} className="Ico-compra Ico-compra4" alt=""/>
                                    <img src={tick} className="Tick Oculto Tick4" alt=""/>

                                </div>
                            </div>
                        </div>
                        <div class="modal-body text-center D-flex justify-content-center flex-wrap mt-5  px-4">
                            {/*FASE 1*/}
                            <div className="Fase1_compra w-100">

                                <h6 className="h6-compra  ">Descripción del vuelo</h6>

                                <p className="  ">Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Asperiores, cum eos. Consectetur delectus illo, itaque molestias nostrum saepe
                                    voluptatem. Alias commodi dolor illum impedit laborum obcaecati quibusdam quo
                                    repellendus totam?</p>

                                <p className="  ">Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Asperiores, cum eos. Consectetur delectus illo, itaque molestias nostrum saepe
                                    voluptatem. Alias commodi dolor illum impedit laborum obcaecati quibusdam quo
                                    repellendus totam?</p>

                                <div className="alert-success Div-modalcompra   ">
                                    <p className="text-center m-0   ">Necesitaremos tus datos para
                                        formalizar la reserva, así como los de tus acompañantes </p>

                                </div>
                            </div>
                            {/*FASE 2*/}

                            <div className="Fase2_compra w-100 Oculto">

                                <h6 className="h6-compra  mb-2">Selecciona las fechas de tu viaje</h6>
                                <div className="row w-100 ">
                                    <div className="col-7 col-lg-7">
                                        <Calendario fechas={this.calendario_fechas} onselect_slot={

                                            slotInfo =>


                                                this.click_calendario(slotInfo)


                                        }
                                                    onselect_event={event => alert("Esta fecha no está disponible ya que tiene un experiencia")}/>

                                    </div>
                                    <div className="col-5 col-lg-5 pl-0 pr-0 D-flex flex-column justify-content-center">


                                        <div className="form-group w-100  m-t-20 p-0 w-50 ">

                                            <input type={this.state.type1}
                                                   onFocus={this.onFocus1.bind(this)}
                                                   onBlur={this.onBlur1.bind(this)}
                                                   className=" p-0 Input-compra w-100  "
                                                   id="salida"
                                                   placeholder="Salida"
                                                   name="salida"/>

                                        </div>
                                        <div className="form-group w-100  m-t-20 p-0 w-50 ">

                                            <input type={this.state.type2}
                                                   onFocus={this.onFocus2.bind(this)}
                                                   onBlur={this.onBlur2.bind(this)}
                                                   className=" p-0 Input-compra w-100  "
                                                   id="llegada"
                                                   placeholder="Llegada"
                                                   name="llegada"/>

                                        </div>
                                    </div>
                                </div>
                                <div className="alert-success Div-modalcompra  ">
                                    <p className="text-center m-0 ">Genial! Están disponibles las entradas
                                        que has seleccionado.</p>

                                </div>

                            </div>
                            {/*FASE 3*/}
                            <div className="Fase3_compra w-100 Oculto">
                                <h6 className="h6-compra  mb-2">Información de los pasajeros</h6>
                                {/*PASAJERO*/}
                                <div className="row w-100 ">

                                    <div className="col-12 col-md-4 px-3 D-flex flex-column justify-content-center">


                                        <div className="form-group w-100  m-t-20 p-0 w-50 ">

                                            <input type="text"

                                                   className=" p-0 Input-compra2 w-100  "

                                                   placeholder="Nombre y Apellidos"
                                            />

                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4 px-3 D-flex flex-column justify-content-center">


                                        <div className="form-group w-100  m-t-20 p-0 w-50 ">

                                            <input type="text"

                                                   className=" p-0 Input-compra2 w-100  "

                                                   placeholder="Edad"
                                            />

                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4 px-3 D-flex flex-column justify-content-center">


                                        <div className="form-group w-100  m-t-20 p-0 w-50 ">

                                            <input type="text"

                                                   className=" p-0 Input-compra2 w-100  "

                                                   placeholder="Mail"
                                            />

                                        </div>
                                    </div>
                                </div>
                                {/*PASAJERO*/}
                                <div className="row w-100 ">

                                    <div className="col-12 col-md-4 px-3 D-flex flex-column justify-content-center">


                                        <div className="form-group w-100  m-t-20 p-0 w-50 ">

                                            <input type="text"

                                                   className=" p-0 Input-compra2 w-100  "

                                                   placeholder="Nombre y Apellidos"
                                            />

                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4 px-3 D-flex flex-column justify-content-center">


                                        <div className="form-group w-100  m-t-20 p-0 w-50 ">

                                            <input type="text"

                                                   className=" p-0 Input-compra2 w-100  "

                                                   placeholder="Edad"
                                            />

                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4 px-3 D-flex flex-column justify-content-center">


                                        <div className="form-group w-100  m-t-20 p-0 w-50 ">

                                            <input type="text"

                                                   className=" p-0 Input-compra2 w-100  "

                                                   placeholder="Mail"
                                            />

                                        </div>
                                    </div>
                                </div>
                                {/*PASAJERO*/}
                                <div className="row w-100 ">

                                    <div className="col-12 col-md-4 px-3 D-flex flex-column justify-content-center">


                                        <div className="form-group w-100  m-t-20 p-0 w-50 ">

                                            <input type="text"

                                                   className=" p-0 Input-compra2 w-100  "

                                                   placeholder="Nombre y Apellidos"
                                            />

                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4 px-3 D-flex flex-column justify-content-center">


                                        <div className="form-group w-100  m-t-20 p-0 w-50 ">

                                            <input type="text"

                                                   className=" p-0 Input-compra2 w-100  "

                                                   placeholder="Edad"
                                            />

                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4 px-3 D-flex flex-column justify-content-center">


                                        <div className="form-group w-100  m-t-20 p-0 w-50 ">

                                            <input type="text"

                                                   className=" p-0 Input-compra2 w-100  "

                                                   placeholder="Mail"
                                            />

                                        </div>
                                    </div>
                                </div>


                                {/*COMÚN*/}
                                <div className="row w-100 ">

                                    <div className="col-12 col-md-12 px-3 D-flex flex-column justify-content-center">


                                        <div className="form-group w-100  m-t-20 p-0 w-50  text-center">

                                            <input type="text"

                                                   className=" p-0 Input-compra2 w-100  w-33"

                                                   placeholder="Mail Contacto"
                                            />

                                        </div>
                                    </div>


                                </div>
                                <div className="alert-success Div-modalcompra  ">
                                    <p className="text-center m-0 ">Se enviará un informe de Aviación Civil
                                        a la cuenta de Mail especificada.</p>

                                </div>

                            </div>

                            {/*FASE 4*/}
                            <div className="Fase4_compra w-100 D-flex flex-wrap justify-content-center Oculto">

                                <h6 className="h6-compra  ">Subtotal</h6>
                                <h6 className="h6-compra  font-weight-normal">Todos los servicios incluidos</h6>

                                <div className="Div-compra-precio mt-2">
                                    195 €
                                </div>
                                <h6 className="h6-compra  my-5">¿ Deseas regalar este viaje ? </h6>

                                <div class="form-check-inline mb-4 w-45">
                                    <label class="form-check-label mx-auto">
                                        <input type="checkbox" class="form-check-input Check" value=""/><span className="h6-compra">No, es para mí</span>
                                    </label>
                                </div>
                                <div class="form-check-inline mb-4 w-45">
                                    <label class="form-check-label P-relative mx-auto">


                                        <input type="checkbox" class="form-check-input Check" value=""/>
                                        <span className="h6-compra">Sí, es un regalo </span>
                                        <span className="Recibiras">Recibirás en tu correo electrónico el bono con el código de la reserva</span>
                                    </label>
                                </div>


                                <div className="alert-success Div-modalcompra   mt-5">
                                    <p className="text-center m-0   ">Aún no has regalado nunca ningún vuelo en globo? Ya sabes originalidad al poder! </p>

                                </div>
                            </div>

                            {/*FASE 5*/}
                            <div className="Fase5_compra w-100 D-flex flex-wrap justify-content-center Oculto">
                                <h6 className="h6-compra  ">Gracias por confiar en nosotros!</h6>

                                <div className="w-100">
    <img src={corazon} className="Corazon" alt=""/>
</div>

                                <h6 className="h6-compra  font-weight-normal w-75 text-center mx-auto">Te hemos enviado todos los datos de la reserva al mail especificado.</h6>



                                <div className="Div-modalcompra2   mt-3">
                                    <p className="text-center m-0   ">Tienes alguna duda? <b>Contáctanos en el: 93 xxx xx xx</b> </p>

                                </div>
                            </div>

                            {/*  <div className="form-group  m-t-20 p-0 w-50 Fase3_compra">

                              <input type="text"
                                       className=" p-0 text-center Input-cupon w-100  Oculto"
                                       id="cupon"
                                       placeholder="Inserta tu código"
                                       name="cupon"/>
                                <span id="error_compra" className="danger text-danger Fase1_compra Oculto"> El código no es correcto</span>

                            </div>*/}
                        </div>
                        <div class="modal-footer p-0 Cursor-pointer">
                            <input type="button" id="descripcion_compra"
                                   class="btn Boton-cupon m-0  Fase1_compra  py-2"
                                   onClick={this.descripcion_compra.bind(this)} value="Siguiente"/>
                            <input type="button" id="fecha_compra" class="btn Boton-cupon m-0 Oculto Fase2_compra  py-2"
                                   onClick={this.fecha_compra.bind(this)} value="Siguiente"/>
                            <input type="button" id="calendario_compra"
                                   class="btn Boton-cupon m-0  Fase3_compra Oculto py-2"
                                   onClick={this.calendario_compra.bind(this)} value="Siguiente"/>
                            <input type="button" id="pasajeros_compra"
                                   class="btn Boton-cupon m-0  Fase4_compra Oculto py-2"
                                   onClick={this.confirmar_compra.bind(this)} value="Confirmar Reserva"/>
                            <input type="button" id="confirmar_compra"
                                   class="btn Boton-cupon m-0  Fase5_compra Oculto py-2"
                                   onClick={this.volver_compra.bind(this)} value="Volver"/>


                        </div>
                    </div>
                </div>
            </div>

        )

    }

    calendario_fechas = [


        {
            start: new Date('2018-07-12'),
            end: new Date('2018-07-15'),

            title: "Lorem"
        },
        {
            start: new Date('2018-07-18'),
            end: new Date('2018-07-20'),

            title: "Lorem"
        },

    ]

    formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }

    click_calendario(slotInfo) {

        if (this.click == 1) {
            $("#llegada").val(this.formatDate(slotInfo.start.toLocaleString('en-US', {timeZone: 'UTC'})))
            this.click = 2;
        } else {

            $("#salida").val(this.formatDate(slotInfo.start.toLocaleString('en-US', {timeZone: 'UTC'})))
            this.click = 1;

        }
    }
}

export default Modal_compra;
