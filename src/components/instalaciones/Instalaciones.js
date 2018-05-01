import React, {Component} from 'react';
import './Instalaciones.css';
import Header from "../comunes/Header";
import Certificado from "../comunes/Certificado";
import Instalacion from "./Instalacion"
import Footer_estilo1 from "../comunes/Footer_estilo1"
import Weathermap from "../comunes/Weathermap";

import Footer_estilohome from "../comunes/Footer_estilohome"
import logo_globo from '../../images/Globo-header-w.png';
import Lightbox from 'react-image-lightbox';

import play_ico from '../../images/play-ico.png';
import Experiencia_volarGlobo from "../comunes/Experiencia_volarGlobo";
import Arrow_top from "../comunes/Arrow_top";
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



 class Instalaciones extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    render() {


        return (
            <div className="Instalaciones">
<Arrow_top/>
                <section className="Section1-instalaciones">
                    <Header logo={logo_globo}/>

                    <div className="container-fluid">
                        <div className="row text-left p-3 pl-md-5">
                            <div className="col-12 ">
                                <h1 className="text-uppercase Instalaciones-h1"> Nuestras <br/> instalaciones</h1>
                                <h5 className="text-white w-50">Combina tu viaje en globo con actividades de aventura
                                    para disfrutar del paraje de la
                                    Garrocha en todo su esplendor con actividades.</h5>

                            </div>
                        </div>
                    </div>
                </section>

                <main className="Section2-instalaciones text-left py-5">
                    <div className="container">

                        {/*TARJETA PILOTOS*/}
                        <div className="row w-100 pt-2">
                            {/* {instalaciones_cards}*/}

                        </div>

                        {/*TEXTOS SEO*/}

                        {array_instalaciones}


                    </div>


                </main>

                <section className="Section3-instalaciones d-none d-md-block">
                    <div className="container">
                        <Certificado/>

                    </div>
                </section>
                <section className="Section4-instalaciones d-flex justify-content-center">
                    <div className="container Container-card">
                    </div>
                   <Experiencia_volarGlobo/>

                </section>

                <footer className="Footer_estilo1">
                    <Footer_estilo1/>
                </footer>

                <div className="Footer_estilohome">
                    <div className="container">

                        <Footer_estilohome/>
                    </div>

                </div>
            </div>
        )
    }
}
export default Instalaciones;
