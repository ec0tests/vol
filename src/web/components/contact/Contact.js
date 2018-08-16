import React, {Component} from 'react';
import './Contact.css';

import logo_globo from '../../images/Globo-header-w.png';
import logo_b from '../../images/vdc-logo-b.png';

import ico_face from '../../images/Icon-RRSS-fb-b-55.png';
import ico_twitter from '../../images/Icon-RRSS-tw-b-55.png';
import ico_inst from '../../images/Icon-RRSS-in-b-55.png';
import ico_trip from '../../images/Icon-RRSS-tr-b-55.png';
import ico_youtube from '../../images/Icon-RRSS-yt-b-55.png';
import play_ico from '../../images/play-ico.png';
import bkg2 from '../../images/bkg-2.png';

import Carousel_cards from "../comunes/Carousel_cards";
import Header from "../comunes/Header";
import Experiencia_completa from "../comunes/Experiencia_completa";
import Footer_estilohome from "../comunes/Footer_estilohome";
import Footer_estilo1 from "../comunes/Footer_estilo1";
import Experiencia_volarGlobo from "../comunes/Experiencia_volarGlobo";
import Arrow_top from "../comunes/Arrow_top";
import $ from 'jquery';
import Footer_patrocinadores from "../comunes/Footer_patrocinadores";
/*Creo el array de contact provisional*/
$(document).ready(function(){
    $('#characterLeft').text('');
    $('#message').keydown(function () {
        var max = 140;
        var len = $(this).val().length;
        if (len >= max) {
            $('#characterLeft').text('You have reached the limit');
            $('#characterLeft').addClass('red');
            $('#btnSubmit').addClass('disabled');
        }
        else {
            var ch = max - len;
            $('#characterLeft').text(ch + ' characters left');
            $('#btnSubmit').removeClass('disabled');
            $('#characterLeft').removeClass('red');
        }
    });
});


const Contact = () => (
    <div className="Contact">
        <Arrow_top/>
        <section className="Section1-contact">
            <Header logo={logo_b}/>

            <div className="container-fluid mt-auto">
                <div className="row pl-0 pl-md-5">
                    <div className="col-12 col-md-6  Div-experiencias text-left">
                        <h1>CONTACTO</h1>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem luptate voluptatibus?</h3>
                    </div>
                </div>
            </div>
        </section>

        <main className="Section2-contact text-left ">
            <div className="container-fluid px-0 px-md-5">

                <div className="row pt-2 w-100">

                </div>
                <div className="row mt-5 w-100">
                    <div className="col-12 text-center">
                    </div>
                </div>
            </div>


        </main>


        <section id="Section3" className="Section3-contact Text-gray ">
            <div className="container">
                <div class="col-12 col-md-8">
                    <div class="form-area">
                        <form role="form">
                            <br />
                            <h2 className="w-100 mb-4 text-left">Formulario de Contacto</h2>
                            <div class="form-group">
                                <input type="text" class="form-control" id="name" name="name" placeholder="Nombre" required/>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="subject" name="subject" placeholder="Apellidos" required/>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="email" name="email" placeholder="Email" required/>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="mobile" name="mobile" placeholder="Teléfono" required/>
                            </div>

                            <div class="form-group">
                                <textarea class="form-control" type="textarea" id="message" placeholder="Mensaje" maxlength="140" rows="7"></textarea>
                                <span class="help-block"><p id="characterLeft" class="help-block ">Has pasado el límite de carácteres</p></span>
                            </div>

                            <button type="button" id="submit" name="submit" class="Btn-blue">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>

            <img src={bkg2} className="Seccion3-contact-bkg" alt=""/>

        </section>


        <section className="Section4-contact">
            <Experiencia_volarGlobo/>
        </section>


        <footer className="Footer_estilo1 d-none d-md-block Desktop">
            <Footer_estilo1/>
        </footer>
        <footer className="Footer_estilohome  Tablet">
            <Footer_estilohome/>
            <Footer_patrocinadores/>

        </footer>

        <div className="Footer_estilohome d-block d-md-none Movil">
            <div className="container mw-100">

                <Footer_estilohome/>
            </div>

        </div>

    </div>
)
export default Contact;
