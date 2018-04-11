import React, {Component} from 'react';
import './Footer_patrocinadores.css';
import colab_ico1 from '../../images/logo_catalunya.png';
import colab_ico2 from '../../images/pcbpgi.png';
import colab_ico3 from '../../images/logotipnatura.png';
import colab_ico4 from '../../images/costabravagironaconventionbureau.png';
import colab_ico5 from '../../images/europarc.png';
import colab_ico6 from '../../images/resnpisvetravel.png';
import colab_ico7 from '../../images/pantou.png';
const Footer_patrocinadores = ()=> (
    <div className="row Bkg-darkBlue p-3 w-100 ">
        <div className="Logos-patrocinadores">
            <img src={colab_ico1} className="img-fluid" alt=""/>
        </div>
        <div className="Logos-patrocinadores">
            <img src={colab_ico2} className="img-fluid" alt=""/>
        </div>
        <div className="Logos-patrocinadores">
            <img src={colab_ico3} className="img-fluid" alt=""/>
        </div>
        <div className="Logos-patrocinadores">
            <img src={colab_ico4} className="img-fluid" alt=""/>
        </div>
        <div className="Logos-patrocinadores">
            <img src={colab_ico5} className="img-fluid" alt=""/>
        </div>
        <div className="Logos-patrocinadores">
            <img src={colab_ico6} className="img-fluid" alt=""/>
        </div>
        <div className="Logos-patrocinadores">
            <img src={colab_ico7} className="img-fluid" alt=""/>
        </div>

    </div>
)

export default Footer_patrocinadores;