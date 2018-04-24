import React, {Component} from 'react';
import './Faq.css';

import logo_globo from '../../images/Globo-header-w.png';

import ico_face from '../../images/Icon-RRSS-fb-b-55.png';
import ico_twitter from '../../images/Icon-RRSS-tw-b-55.png';
import ico_inst from '../../images/Icon-RRSS-in-b-55.png';
import ico_trip from '../../images/Icon-RRSS-tr-b-55.png';
import ico_youtube from '../../images/Icon-RRSS-yt-b-55.png';
import play_ico from '../../images/play-ico.png';
import bkg2 from '../../images/bkg-2.png';


import Carousel_cards from "../comunes/Carousel_cards";
import Pregunta_faq from "./Pregunta_faq";
import Header from "../comunes/Header";
import Experiencia_completa from "../comunes/Experiencia_completa";
import Footer_estilohome from "../comunes/Footer_estilohome";
import Footer_estilo1 from "../comunes/Footer_estilo1";
import Experiencia_volarGlobo from "../comunes/Experiencia_volarGlobo";
import Arrow_top from "../comunes/Arrow_top";

/*Creo el array de faq provisional*/

let array_preguntas_faq = [];
/*JSON DE PRUEBA*/
let preguntas_faq = {

    "preguntas_faq": [
        {
            "pregunta": "Feria medieval de Besalú y vuelo en globo en la Garrotxa",
            "respuesta": 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam blanditiis consectetur delectus dolore earum eos, ex illum ipsa ipsam iusto labore modi molestias omnis repudiandae tenetur velit vitae voluptatem.\n'
        },
        {
            "pregunta": "Feria medieval de Besalú y vuelo en globo en la Garrotxa",
            "respuesta": 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam blanditiis consectetur delectus dolore earum eos, ex illum ipsa ipsam iusto labore modi molestias omnis repudiandae tenetur velit vitae voluptatem.\n'

        },
        {
            "pregunta": "Feria medieval de Besalú y vuelo en globo en la Garrotxa",
            "respuesta": 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam blanditiis consectetur delectus dolore earum eos, ex illum ipsa ipsam iusto labore modi molestias omnis repudiandae tenetur velit vitae voluptatem.\n'

        },
        {
            "pregunta": "Feria medieval de Besalú y vuelo en globo en la Garrotxa",
            "respuesta": 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam blanditiis consectetur delectus dolore earum eos, ex illum ipsa ipsam iusto labore modi molestias omnis repudiandae tenetur velit vitae voluptatem.\n'

        },
        {
            "pregunta": "Feria medieval de Besalú y vuelo en globo en la Garrotxa",
            "respuesta": 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam blanditiis consectetur delectus dolore earum eos, ex illum ipsa ipsam iusto labore modi molestias omnis repudiandae tenetur velit vitae voluptatem.\n'

        },
        {
            "pregunta": "Feria medieval de Besalú y vuelo en globo en la Garrotxa",
            "respuesta": 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam blanditiis consectetur delectus dolore earum eos, ex illum ipsa ipsam iusto labore modi molestias omnis repudiandae tenetur velit vitae voluptatem.\n'

        }
    ]
}
for (var i = 0; i < preguntas_faq.preguntas_faq.length; i++) {
    array_preguntas_faq.push(<Pregunta_faq pregunta={preguntas_faq.preguntas_faq[i].pregunta}
                                           respuesta={preguntas_faq.preguntas_faq[i].respuesta}/>);
}
const Faq = () => (
    <div className="Faq">
<Arrow_top/>
        <section className="Section1-faq">
            <Header logo={logo_globo}/>
            <div className="container-fluid mt-auto">
                <div className="row pl-0 pl-md-5">
                    <div className="col-12 col-md-6  Div-experiencias text-left">
                        <h1>Toda la información que necesitas</h1>
                        <h3>Combina tu viaje en globo con actividades de aventura para disfrutar del paraje de la
                            Garrocha en todo su esplendor con actividades de aventura para disfrutar del paraje de la
                            Garrocha en todo su esplendor.</h3>
                    </div>
                </div>
            </div>
        </section>

        <main className="Section2-faq text-left ">
            <div className="container-fluid px-0 px-md-5">

                <div className="row pt-2 w-100">
                    {array_preguntas_faq}

                </div>
                <div className="row mt-5 w-100">
                    <div className="col-12 text-center">
                    </div>
                </div>
            </div>


        </main>

        <div className="d-md-none">
        <Experiencia_completa/>
        </div>
        <section id="Section3" className="Section3-faq Text-gray d-none d-md-block">
            <img src={bkg2} className="Seccion3-faq-bkg" alt=""/>

            <div className="container">
                <Carousel_cards/>
            </div>
        </section>
        <section className="Section4-faq">
            <Experiencia_volarGlobo/>
        </section>


        <footer className="Footer_estilo1 d-none d-md-block">
            <Footer_estilo1/>
        </footer>

        <div className="Footer_estilohome d-block d-md-none">
            <div className="container">

                <Footer_estilohome/>
            </div>

        </div>

    </div>
)
export default Faq;
