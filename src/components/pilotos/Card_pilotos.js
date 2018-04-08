import React, {Component} from 'react';
import './Card_pilotos.css';


const Card_pilotos = ({name,photo}) =>
(
        <div className="col-4 mb-5 mt-5">
            <div className="Piloto-card Piloto-card-img1" style={{background: 'url('+photo+')'}}>

                <span>{name}</span>


                <div className="w-100 Blue-diagonal">

                </div>
            </div>
        </div>
);
export default Card_pilotos;
