import React, {Component} from 'react';
import './Card_roja.css';

const Card_roja = () => (
    <div className="row w-100 justify-content-center py-5 mb-5 Card-row Card-roja">
        <div className="col-md-8 Col-tarjeta d-flex justify-content-end">
            <div className="card w-100 h-100 p-4">
                <div className="card-body text-left p-1">
                    <div className="row w-100">
                        <div className="col-md-12">

                            <h1 className=" card-title w-100 text-left text-uppercase ">14/febrero
                                san valentin</h1>
                            <p className="card-text w-75 text-left">Some quick example text to build
                                on the
                                card
                                title and
                                make up the bulk of the card's content.</p>
                        </div>

                    </div>

                    <div className="row w-100 pt-5">
                        <div className="col-md-4 text-left d-flex align-items-center">
                            <button className=" Btn-red">VER VUELO</button>
                        </div>
                        <div className="col-md-7 text-left d-flex justify-content-end">
                            <img src="https://via.placeholder.com/55x55" className="img-fluid"
                                 alt=""/>
                            <span className="d-flex align-items-center Price-card pl-3">250€</span>

                            <span className=" d-flex align-items-center p-2 Info-card">Vuela en globo <br/> Globo no compartido</span>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    </div>
)
export default Card_roja;
