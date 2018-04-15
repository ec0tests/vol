import React, {Component} from 'react';
import './Experiencia_completa.css';
import bkg3 from '../../images/bkg-3.png';

import exp_ico1 from '../../images/exp-ico1.jpg';
import exp_ico2 from '../../images/exp-ico2.jpg';
import exp_ico3 from '../../images/exp-ico3.jpg';
import exp_ico4 from '../../images/exp-ico4.jpg';


const Experiencia_completa = ()=> (
    <section id="Experiencia-completa" className="Experiencia-completa">
        <img src={bkg3} className="Experiencia-completa-bkg" alt=""/>
        <div className="container pt-4">
            <h2 className="Text-gray text-uppercase ">La experiencia completa </h2>
            <h3>Una oferta redonda para cada gusto</h3>
            <div className="row justify-content-center pt-4">

                <div className="col-md-3 Exp-ico ">
                    <h5>Aventura</h5>

                    <img src={exp_ico1} className="img-fluid" alt=""/>


                </div>
                <div className="col-md-3 Exp-ico ">
                    <h5>Aventura</h5>

                    <img src={exp_ico2} className="img-fluid" alt=""/>


                </div>
                <div className="col-md-3 Exp-ico ">
                    <h5>Aventura</h5>

                    <img src={exp_ico3} className="img-fluid" alt=""/>


                </div>
                <div className="col-md-3 Exp-ico ">
                    <h5>Aventura</h5>

                    <img src={exp_ico4} className="img-fluid" alt=""/>

                </div>

            </div>

        </div>
    </section>
)

export default Experiencia_completa;

