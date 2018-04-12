import React, {Component} from 'react';
import './Certificado_peq.css';
import tripadvisor from '../../images/tripadvisor-logo.jpg'
const Certificado_peq = ()=> (
    <div className="row justify-content-center Certificado_peq mt-5">
        <div className="col-md-12 mb-1  text-center">
            <img src={tripadvisor} className="img-fluid Tripadvisor-peq" alt=""/>

        </div>

        <div className="col-md-12 text-center">
            <h2 className="w-100">Certificado de excelencia</h2>
            <h4 className="font-weight-normal">5 estrellas en más de 200 opiniones de tripadvisor</h4>
            <button className="Btn-blue mt-4 ">Ver opiniones</button>
        </div>
    </div>
)

export default Certificado_peq;