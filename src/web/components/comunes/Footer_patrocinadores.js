import React, {Component} from 'react';
import Slider from "react-slick";
import './Footer_patrocinadores.css';
import $ from 'jquery';

import colab_ico1 from '../../images/logo_catalunya.png';
import colab_ico2 from '../../images/pcbpgi.png';
import colab_ico3 from '../../images/logotipnatura.png';
import colab_ico4 from '../../images/costabravagironaconventionbureau.png';
import colab_ico5 from '../../images/europarc.png';
import colab_ico6 from '../../images/resnpisvetravel.png';
import colab_ico7 from '../../images/pantou.png';



class Footer_patrocinadores extends React.Component {
    render() {

        return (
<div className="py-4 Bkg-darkBlue d-flex justify-content-center flex-wrap">
                    <div className="Logos-patrocinadores d-flex justify-content-center">
                        <img src={colab_ico1} className="img-fluid" alt=""/>
                    </div>
                    <div className="Logos-patrocinadores d-flex justify-content-center">
                        <img src={colab_ico2} className="img-fluid" alt=""/>
                    </div>
                    <div className="Logos-patrocinadores d-flex justify-content-center">
                        <img src={colab_ico3} className="img-fluid" alt=""/>
                    </div>
                    <div className="Logos-patrocinadores d-flex justify-content-center">
                        <img src={colab_ico4} className="img-fluid" alt=""/>
                    </div>
                    <div className="Logos-patrocinadores d-flex justify-content-center">
                        <img src={colab_ico5} className="img-fluid" alt=""/>
                    </div>
                    <div className="Logos-patrocinadores d-flex justify-content-center">
                        <img src={colab_ico6} className="img-fluid" alt=""/>
                    </div>
                    <div className="Logos-patrocinadores d-flex justify-content-center Pantou">
                        <img src={colab_ico7} className="img-fluid" alt=""/>
                    </div>

              {/*  </Slider>*/}
</div>
        )
    }
}

export default Footer_patrocinadores;


