import React, {Component} from 'react';
import './Footer_estilo1.css';

import ico_face from '../../images/Icon-RRSS-fb-b-55.png';
import ico_twitter from '../../images/Icon-RRSS-tw-b-55.png';
import ico_inst from '../../images/Icon-RRSS-in-b-55.png';
import ico_trip from '../../images/Icon-RRSS-tr-b-55.png';
import ico_youtube from '../../images/Icon-RRSS-yt-b-55.png';
import logo_b from '../../images/vdc-logo-b.png';

const Footer_estilo1 = ()=> (
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
)

export default Footer_estilo1;