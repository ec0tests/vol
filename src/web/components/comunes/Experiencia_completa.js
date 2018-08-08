import React, {Component} from 'react';
import './Experiencia_completa.css';

import {Link} from 'react-router-dom'


import bkg3 from '../../images/bkg-3.png';

import exp_ico1 from '../../images/exp-ico1.jpg';
import exp_ico2 from '../../images/exp-ico2.jpg';
import exp_ico3 from '../../images/exp-ico3.jpg';
import exp_ico4 from '../../images/exp-ico4.jpg';


const Experiencia_completa = () => (
    <section id="Experiencia-completa" className="Experiencia-completa">
        <img src={bkg3} className="Experiencia-completa-bkg img-fluid" alt=""/>
        <div className="container pt-4">
            <h2 className="Text-gray text-uppercase d-none d-md-block">La experiencia completa </h2>
            <h2 className="Text-gray text-uppercase  d-md-none">La experiencia  </h2>
            <h3 className="d-none d-md-block Combina-vuelo-text">Una oferta redonda para cada gusto</h3>
            <div className="row justify-content-center pt-4">

                <a href="/pack_historico" className="col-6 col-md-6 col-lg-3 Exp-ico Cursor-pointer">
                    <h5 className="Text-experiencias">Aventura</h5>

                    <img src={exp_ico1} className="img-fluid Sombra-trans" alt=""/>


                </a>

                <a href="/pack_historico" className="col-6 col-md-6 col-lg-3 Exp-ico Cursor-pointer">

                    <h5 className="Text-experiencias">Histórico</h5>

                    <img src={exp_ico2} className="img-fluid Sombra-trans" alt=""/>


                </a>


                <a href="/pack_romantico" className="col-6 col-md-6 col-lg-3 Exp-ico  mt-3 mt-lg-0 Cursor-pointer">

                    <h5 className="Text-experiencias">Romántico</h5>

                    <img src={exp_ico3} className="img-fluid Sombra-trans" alt=""/>


                </a>
                <a href="/pack_romantico" className="col-6 col-md-6 col-lg-3 Exp-ico mt-3 mt-lg-0 Cursor-pointer">

                    <h5 className="Text-experiencias">Relax</h5>

                    <img src={exp_ico4} className="img-fluid Sombra-trans" alt=""/>

                </a>

            </div>

        </div>
    </section>
)

export default Experiencia_completa;

