import React, {Component} from 'react';
import './Pilotos.css';
import Header from "../comunes/Header";
import Card_pilotos from "../pilotos/Card_pilotos";
import Seo_text from "../pilotos/Seo_text";
import Carousel_cards from "../comunes/Carousel_cards";
import Certificado from "../comunes/Certificado";
import Experiencia_volarGlobo from "../comunes/Experiencia_volarGlobo";
import Footer_estilo1 from "../comunes/Footer_estilo1";
import Footer_estilohome from "../comunes/Footer_estilohome";
import logo_b from '../../images/vdc-logo-b.png';

import Experiencia_completa from "../comunes/Experiencia_completa";
import logo_globo from '../../images/Globo-header-w.png';
import bkg1 from '../../images/pilotos-bkg1.png';
import Arrow_top from "../comunes/Arrow_top"

/*Creo el array de pilotos provisional*/
let pilot_cards = [];
let textos_seo = [];
/*JSON DE PRUEBA*/
let pilotos_json = {
    "piloto": [
        {"name": "John", "photo": 'https://via.placeholder.com/250x250'},
        {"name": "Alex", "photo": 'https://via.placeholder.com/250x250'},
        {"name": "Lola", "photo": 'https://via.placeholder.com/250x250'},
        {"name": "Lola", "photo": 'https://via.placeholder.com/250x250'},
        {"name": "Lola", "photo": 'https://via.placeholder.com/250x250'},
        {"name": "Lola", "photo": 'https://via.placeholder.com/250x250'},
        {"name": "Lola", "photo": 'https://via.placeholder.com/250x250'},
        {"name": "Lola", "photo": 'https://via.placeholder.com/250x250'},
    ]
}
let texto_seo_json = {
    "texto": [
        {
            "titulo": "Titulo1",
            "texto": `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur cumque eius eos facere
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur cumque eius eos facereLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur cumque eius eos facere
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur cumque eius eos facereLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur cumque eius eos facere
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur cumque eius eos facere`
        },
        {
            "titulo": "Titulo2",
            "texto": `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur cumque eius eos facere
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur cumque eius eos facereLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur cumque eius eos facere
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur cumque eius eos facereLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur cumque eius eos facere
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur cumque eius eos facere`
        },
        {
            "titulo": "Titulo3",
            "texto": `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur cumque eius eos facere
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur cumque eius eos facereLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur cumque eius eos facere
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur cumque eius eos facereLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur cumque eius eos facere
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur cumque eius eos facere`
        },
        {
            "titulo": "Titulo4",
            "texto": `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur cumque eius eos facere
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur cumque eius eos facereLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur cumque eius eos facere
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur cumque eius eos facereLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur cumque eius eos facere
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur cumque eius eos facere`
        },
        {
            "titulo": "Titulo5",
            "texto": `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur cumque eius eos facere
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur cumque eius eos facereLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur cumque eius eos facere
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur cumque eius eos facereLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur cumque eius eos facere
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur cumque eius eos facere`
        },
    ]
}
for (var i = 0; i < pilotos_json.piloto.length; i++) {
    pilot_cards.push(<Card_pilotos name={pilotos_json.piloto[i].name} photo={pilotos_json.piloto[i].photo}/>);
}

for (var i = 0; i < texto_seo_json.texto.length; i++) {

    textos_seo.push(<Seo_text title={texto_seo_json.texto[i].titulo} text={texto_seo_json.texto[i].texto}/>);
}

console.log(textos_seo);
const Pilotos = () => (
    <div className="Pilotos">
<Arrow_top/>
        <section className="Section1-pilotos">
            <Header logo={logo_b}/>
          
            <div className="container-fluid">
                <div className="row text-left p-1 p-md-3 pl-md-5 pt-md-5 pt-3 mt-md-5">
                    <div className="col-12 ">
                        <h1 className="text-uppercase Pilotos-h1 d-none d-sm-block"> los pilotos de <br/> vol de coloms</h1>
                        <h1 className="text-uppercase Pilotos-h1-movil d-block d-sm-none mt-4"> nuestros pilotos</h1>
                        <h2 className="text-uppercase Pilotos-h2-movil d-block d-sm-none"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto asperiores delectus dolores doloribus eos esse hic inventore minima nisi omnis porro praesentium reprehenderit saepe sequi sunt, suscipit veritatis, voluptatum!</h2>


                    </div>
                </div>
            </div>
        </section>

        <main className="Section2-pilotos text-left py-5">
            <div className="container">
                <div className="row pl-3 pr-1 pr-md-0 pl-md-0 Instalacionp">
                    <h3>La confianza de los mejores profesionales</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur cumque eius eos facere
                        nemo quidem sunt tempore velit voluptate. Dolores esse et eveniet explicabo facere itaque omnis
                        provident reiciendis.</p>
                </div>

                {/*TARJETA PILOTOS*/}
                <div className="row pt-2">
                    {pilot_cards}

                </div>

                {/*TEXTOS SEO*/}

                <div className="row mt-5 pt-5 d-none d-md-flex justify-content-between Seotext">
                    <div className="col-12 mb-5">
                        <h2>Qué debes saber</h2>
                    </div>
                    {textos_seo}
                </div>

            </div>


        </main>

        <section className="Section3-pilotos d-none d-md-block">
            <div className="container">
                <Certificado/>

            </div>
        </section>
        <div className=" d-md-none">
            <Experiencia_completa/>
        </div>
        <section className="Seccion-final">
            <div className="container Container-card d-none d-md-block">
                <Carousel_cards/>
            </div>
        <Experiencia_volarGlobo/>

        </section>
        <footer className="Footer_estilo1 d-none d-md-block">
            <Footer_estilo1/>
        </footer>

        <div className="Footer_estilohome d-block d-md-none ">
            <div className="container mw-100">

                <Footer_estilohome/>
            </div>

        </div>
    </div>
)
export default Pilotos;
