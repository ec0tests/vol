import React, {Component} from 'react';
import './Certificado.css';
import tripadvisor from '../../images/tripadvisor-logo.jpg'
const Certificado = ()=> (
    <div className="row">
        <div className="col-md-12 mb-5 ">
            <img src={tripadvisor} className="img-fluid tripadvisor" alt=""/>

        </div>

        <div className="col-md-12">
            <h2 className="w-100">Certificado de excelencia</h2>
            <h4 className="font-weight-normal">5 estrellas en más de 200 opiniones de tripadvisor</h4>
            <button className="Btn-blue mt-4 ">Ver opiniones</button>
        </div>
    </div>
)

export default Certificado;