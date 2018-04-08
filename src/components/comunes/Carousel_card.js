import React, {Component} from 'react';
import './Carousel_card.css';

const Carousel_card = () => (
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row justify-content-center py-5 mb-5 Card-row">
                            <div className="col-md-8">
                                <div className="card w-100 h-100 p-4">
                                    <div className="card-body text-left">
                                        <div className="row w-100">
                                            <div className="col-md-12">

                                                <h5 className="display-3 card-title w-100 text-left text-uppercase ">14/febrero
                                                    san valentin</h5>
                                                <p className="card-text w-75 text-left">Some quick example text to build
                                                    on the
                                                    card
                                                    title and
                                                    make up the bulk of the card's content.</p>
                                            </div>

                                        </div>

                                        <div className="row w-100 pt-5">
                                            <div className="col-md-4 text-left d-flex align-items-center">
                                                <button className=" Btn-blue">VER OFERTA</button>
                                            </div>
                                            <div className="col-md-7 text-left d-flex justify-content-end">
                                                <img src="https://via.placeholder.com/55x55" className="img-fluid"
                                                     alt=""/>
                                                <span className=" d-flex align-items-center p-2 Info-card">Vuela en globo <br/> Globo no compartido</span>
                                                <span className="d-flex align-items-center Price-card pl-3">250€</span>
                                            </div>
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row justify-content-center py-5 mb-5 Card-row">
                            <div className="col-md-8">
                                <div className="card w-100 h-100 p-4">
                                    <div className="card-body text-left">
                                        <div className="row w-100">
                                            <div className="col-md-12">

                                                <h5 className="display-3 card-title w-100 text-left text-uppercase ">14/febrero
                                                    san valentin</h5>
                                                <p className="card-text w-75 text-left">Some quick example text to build
                                                    on the
                                                    card
                                                    title and
                                                    make up the bulk of the card's content.</p>
                                            </div>

                                        </div>

                                        <div className="row w-100 pt-5">
                                            <div className="col-md-4 text-left d-flex align-items-center">
                                                <button className=" Btn-blue">VER OFERTA</button>
                                            </div>
                                            <div className="col-md-7 text-left d-flex justify-content-end">
                                                <img src="https://via.placeholder.com/55x55" className="img-fluid"
                                                     alt=""/>
                                                <span className=" d-flex align-items-center p-2 Info-card">Vuela en globo <br/> Globo no compartido</span>
                                                <span className="d-flex align-items-center Price-card pl-3">250€</span>
                                            </div>
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row justify-content-center py-5 mb-5 Card-row">
                            <div className="col-md-8">
                                <div className="card w-100 h-100 p-4">
                                    <div className="card-body text-left">
                                        <div className="row w-100">
                                            <div className="col-md-12">

                                                <h5 className="display-3 card-title w-100 text-left text-uppercase ">14/febrero
                                                    san valentin</h5>
                                                <p className="card-text w-75 text-left">Some quick example text to build
                                                    on the
                                                    card
                                                    title and
                                                    make up the bulk of the card's content.</p>
                                            </div>

                                        </div>

                                        <div className="row w-100 pt-5">
                                            <div className="col-md-4 text-left d-flex align-items-center">
                                                <button className=" Btn-blue">VER OFERTA</button>
                                            </div>
                                            <div className="col-md-7 text-left d-flex justify-content-end">
                                                <img src="https://via.placeholder.com/55x55" className="img-fluid"
                                                     alt=""/>
                                                <span className=" d-flex align-items-center p-2 Info-card">Vuela en globo <br/> Globo no compartido</span>
                                                <span className="d-flex align-items-center Price-card pl-3">250€</span>
                                            </div>
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <i href="#carouselExampleIndicators" role="button" data-slide="prev" className="fas fa-angle-left Carousel-arrow"></i>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <i className="fas fa-angle-right Carousel-arrow"></i>
                    <span className="sr-only">Next</span>
                </a>
            </div>
)
export default Carousel_card;
