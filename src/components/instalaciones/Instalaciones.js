import React, {Component} from 'react';
import './Instalaciones.css';
import Header from "../comunes/Header";
import Certificado from "../comunes/Certificado";
import Instalacion from "./Instalacion"
import logo_b from '../../images/vdc-logo-b.png';
import ico_face from '../../images/Icon-RRSS-fb-b-55.png';
import ico_twitter from '../../images/Icon-RRSS-tw-b-55.png';
import ico_inst from '../../images/Icon-RRSS-in-b-55.png';
import ico_trip from '../../images/Icon-RRSS-tr-b-55.png';
import ico_youtube from '../../images/Icon-RRSS-yt-b-55.png';
import play_ico from '../../images/play-ico.png';
/*Creo el array de instalaciones provisional*/

let array_instalaciones = [];
/*JSON DE PRUEBA*/
let instalaciones_json = {
    "instalaciones": [
        {
            "title": "Restaurante",
            "text": "Justo en medio del Parque Natural de la Zona volcánica de La Garrotxa se encuentras las instalaciones de Vol de Coloms, accesibles al 100%. Parking privado, servicio de cafetería y wc, para que en invierno, pueda tomar un café al lado de la chimenea mientras observa la preparación de los globos, o la terraza al aire libre para los días de primavera y verano",
            "photo": 'instalacion1'
        },
        {
            "title": "Restaurante",
            "text": "Justo en medio del Parque Natural de la Zona volcánica de La Garrotxa se encuentras las instalaciones de Vol de Coloms, accesibles al 100%. Parking privado, servicio de cafetería y wc, para que en invierno, pueda tomar un café al lado de la chimenea mientras observa la preparación de los globos, o la terraza al aire libre para los días de primavera y verano",
            "photo": 'instalacion1'
        },
        {
            "title": "Restaurante",
            "text": "Justo en medio del Parque Natural de la Zona volcánica de La Garrotxa se encuentras las instalaciones de Vol de Coloms, accesibles al 100%. Parking privado, servicio de cafetería y wc, para que en invierno, pueda tomar un café al lado de la chimenea mientras observa la preparación de los globos, o la terraza al aire libre para los días de primavera y verano",
            "photo": 'instalacion1'
        },
        {
            "title": "Restaurante",
            "text": "Justo en medio del Parque Natural de la Zona volcánica de La Garrotxa se encuentras las instalaciones de Vol de Coloms, accesibles al 100%. Parking privado, servicio de cafetería y wc, para que en invierno, pueda tomar un café al lado de la chimenea mientras observa la preparación de los globos, o la terraza al aire libre para los días de primavera y verano",
            "photo": 'instalacion1'
        },
        {
            "title": "Restaurante",
            "text": "Justo en medio del Parque Natural de la Zona volcánica de La Garrotxa se encuentras las instalaciones de Vol de Coloms, accesibles al 100%. Parking privado, servicio de cafetería y wc, para que en invierno, pueda tomar un café al lado de la chimenea mientras observa la preparación de los globos, o la terraza al aire libre para los días de primavera y verano",
            "photo": 'instalacion1'
        },
        {
            "title": "Restaurante",
            "text": "Justo en medio del Parque Natural de la Zona volcánica de La Garrotxa se encuentras las instalaciones de Vol de Coloms, accesibles al 100%. Parking privado, servicio de cafetería y wc, para que en invierno, pueda tomar un café al lado de la chimenea mientras observa la preparación de los globos, o la terraza al aire libre para los días de primavera y verano",
            "photo": 'instalacion1'
        },
    ]
}
for (var i = 0; i < instalaciones_json.instalaciones.length; i++) {
    array_instalaciones.push(<Instalacion title={instalaciones_json.instalaciones[i].title}
                                          text={instalaciones_json.instalaciones[i].text}
                                          photo={instalaciones_json.instalaciones[i].photo}/>);
}
console.log(array_instalaciones);

const Instalaciones = () => (
    <div className="Instalaciones">

        <section className="Section1-instalaciones">
            <Header logo={logo_b}/>
            <div className="container-fluid">
                <div className="row text-left p-3 pl-5">
                    <div className="col-12 ">
                        <h1 className="text-uppercase Instalaciones-h1"> Nuestras <br/> instalaciones</h1>
                        <h5 className="text-white w-50">Combina tu viaje en globo con actividades de aventura para disfrutar del paraje de la
                            Garrocha en todo su esplendor con actividades.</h5>

                    </div>
                </div>
            </div>
        </section>

        <main className="Section2-instalaciones text-left py-5">
            <div className="container">

                {/*TARJETA PILOTOS*/}
                <div className="row pt-2">
                    {/* {instalaciones_cards}*/}

                </div>

                {/*TEXTOS SEO*/}

                {array_instalaciones}


            </div>


        </main>

        <section className="Section3-instalaciones">
            <div className="container">
                <Certificado/>

            </div>
        </section>
        <section className="Section4-instalaciones d-flex justify-content-center">
            <div className="container Container-card">
            </div>
            <div className="container Container-video pt-5">
                <div className="row">
                    <div className="col-12 ">
                        <img src={play_ico} className="img-fluid mb-4" alt=""/>
                        <h4>La experiencia <br/> <span className="font-weight-normal">de volar en globo</span></h4>
                    </div>
                </div>
            </div>

        </section>

        <footer >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <img src={logo_b} alt=""/>
                    </div>
                    <div className="col-6 d-flex justify-content-end align-items-center flex-wrap pr-5">
                            <div className="Div-ico">
                                <img src={ico_face} alt=""/>
                            </div>
                            <div className="Div-ico">
                                <img src={ico_twitter} alt=""/>
                            </div>
                            <div className="Div-ico">
                                <img src={ico_inst} alt=""/>
                            </div>
                            <div className="Div-ico">
                                <img src={ico_youtube} alt=""/>
                            </div>
                            <div className="Div-ico">
                                <img src={ico_face} alt=""/>
                            </div>
                        <div className="row w-100 text-right justify-content-end pr-3 pt-3">
                                    <span className="text-white Copyrigth-text">©VOLS DE COLOM - Todos los derechos reservados - <a
                                        href="">Privacy Policy</a> - <a href="">Legal Advice</a> - <a href="">Cookies Privacy</a> - Diseñado por <a
                                        href="">Waka</a></span>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    </div>
)
export default Instalaciones;
