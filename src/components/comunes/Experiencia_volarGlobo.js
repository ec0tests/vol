import React, {Component} from 'react';
import './Experiencia_volarGlobo.css';
import play_ico from '../../images/play-ico.png';


const Experiencia_volarGlobo = ()=> (
    <div className="container Container-video pt-5">
        <div className="row">
            <div className="col-12 ">
                <img src={play_ico} className="img-fluid mb-4" alt=""/>
                <h4>La experiencia <br/> <span className="font-weight-normal">de volar en globo</span></h4>
            </div>
        </div>
    </div>
)

export default Experiencia_volarGlobo;

