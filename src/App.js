import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <main id="Section1" className="Section1 ">

                    <header>
                        {/*   MENUS SUPER */}
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-6 text-left">
                                    <img src="https://via.placeholder.com/383x80" className="img-fluid" alt=""/>
                                </div>
                                <div className="col-6 d-flex align-items-center justify-content-end pr-5">
                                    <button className="Megamenu">Vuela en globo</button>
                                    <span className="ml-4">MENU</span>
                                </div>
                            </div>
                        </div>
                    </header>
                    {/*
                ---------
                SECCION 1
                ---------*/}
                    {/*   Principal*/}
                    <div className="container pb-5 mb-5">
                        <div className="row">
                            <div className="col-12 text-left">
                                <h1 className="display-2">VUELA EN GLOBO <br/>
                                    <span>en el parque natural de La Garrotxa</span></h1>
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-12 text-left ">
                                <button className="text-uppercase Btn-red-h mt-2">Reservar</button>
                            </div>
                            <div className="col-12 text-left ">
                                <button className="text-uppercase Btn-darkblue-h mt-2">Canjear cupón</button>
                            </div>
                            <div className="col-12 text-left">
                                <button className="text-uppercase Btn-darkblue-h mt-2">regalar vuelo</button>
                            </div>
                        </div>
                    </div>
                    <div className="container pt-5">
                        <div className="row ">
                            <div className="Iconos-header col-6 p-0 px-4">
                                <div className="col-12 text-left">
                                    <h6>Globo compartido</h6>
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid" src="https://via.placeholder.com/200x80" alt=""/>
                                    <p className="mt-3">Adlutos</p>
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid" src="https://via.placeholder.com/200x80" alt=""/>
                                    <p className="mt-3">Adlutos</p>
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid" src="https://via.placeholder.com/200x80" alt=""/>
                                    <p className="mt-3">Adlutos</p>
                                </div>
                            </div>
                            <div className="Iconos-header col-6 p-0 px-4">
                                <div className="col-12 text-left">
                                    <h6>Globo exclusivo</h6>
                                </div>

                                <div className="col-4">
                                    <img className="img-fluid" src="https://via.placeholder.com/200x80" alt=""/>
                                    <p className="mt-3">Adlutos</p>
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid" src="https://via.placeholder.com/200x80" alt=""/>
                                    <p className="mt-3">Adlutos</p>
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid" src="https://via.placeholder.com/200x80" alt=""/>
                                    <p className="mt-3">Adlutos</p>
                                </div>
                            </div>
                            <div className="col-12 mt-5 text-left">
                                <p className="text-white Little-text"> <strong> <span className=" Asterisco"> * </span> Vuelos adaptados & 100% accesibles </strong><br/> Personas mayores , discapacidades, sillas
                                    de ruedas </p>
                            </div>
                        </div>

                    </div>
                </main>
                <section id="Section2" className="Section2 Text-gray">
                    <div className="container">
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

                        <div className="row justify-content-center py-5 my-5">
                            <div className="col-1">
                                <img src="https://via.placeholder.com/80x80" alt=""/>
                            </div>
                            <div className="col-1">
                                <img src="https://via.placeholder.com/80x80" alt=""/>
                            </div>
                            <div className="col-1">
                                <img src="https://via.placeholder.com/80x80" alt=""/>
                            </div>
                            <div className="col-12 pt-3">
                                <h2 className="Text-gray display-4 text-uppercase">Personaliza tu experiencia</h2>
                                <h3 className="Text-gray">Combina tu vuelo con alojamiento, comida o actividades turísticas.</h3>
                                <button className="Btn-blue2 mt-4">Volar en globo</button>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="Section3" className="Section3 py-5">
                    <div className="container">
                        <div className="row text-white">
                            <div className="col-md-6 text-left">
                                <h4 className="font-weight-bold">25 AÑOS VOLANDO</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad adipisci amet
                                    dignissimos doloremque exercitationem fuga incidunt minus natus necessitatibus
                                    nostrum officia placeat praesentium quaerat recusandae, reprehenderit rerum ullam
                                    unde?</p>
                                <br/>
                                <h4 className="font-weight-bold">25 AÑOS VOLANDO</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad adipisci amet
                                    dignissimos doloremque exercitationem fuga incidunt minus natus necessitatibus
                                    nostrum officia placeat praesentium quaerat recusandae, reprehenderit rerum ullam
                                    unde?</p>
                                <br/>
                                <h4 className="font-weight-bold">25 AÑOS VOLANDO</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad adipisci amet
                                    dignissimos doloremque exercitationem fuga incidunt minus natus necessitatibus
                                    nostrum officia placeat praesentium quaerat recusandae, reprehenderit rerum ullam
                                    unde?</p>
                                <br/>
                                <h4 className="font-weight-bold">25 AÑOS VOLANDO</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad adipisci amet
                                    dignissimos doloremque exercitationem fuga incidunt minus natus necessitatibus
                                    nostrum officia placeat praesentium quaerat recusandae, reprehenderit rerum ullam
                                    unde?</p>
                                <button className="Btn-darkblue">Más info</button>
                            </div>
                        </div>


                    </div>
                </section>


                <section id="Section4" className="Section4">
                    <div className="container pt-4">
                        <h2 className="Text-gray text-uppercase display-4">La experiencia completa </h2>
                        <h3>Una oferta redonda para cada gusto</h3>
                        <div className="row justify-content-center pt-4">

                            <div className="col-md-3 ">
                                <h5>Aventura</h5>

                                <img src="https://via.placeholder.com/320x250" className="img-fluid" alt=""/>


                            </div>
                            <div className="col-md-3 ">
                                <h5>Aventura</h5>

                                <img src="https://via.placeholder.com/320x250" className="img-fluid" alt=""/>


                            </div>
                            <div className="col-md-3 ">
                                <h5>Aventura</h5>

                                <img src="https://via.placeholder.com/320x250" className="img-fluid" alt=""/>


                            </div>
                            <div className="col-md-3 ">
                                <h5>Aventura</h5>

                                <img src="https://via.placeholder.com/320x250" className="img-fluid" alt=""/>

                            </div>

                        </div>

                    </div>
                </section>


                <section id="Section5" className="Section5">
                    <div className="container-fluid">
                        <h2 className="Text-gray text-uppercase mb-3 ">Sube tu foto y gana un vuelo con <span className="Red-text">#voldecoloms</span>  </h2>
                        <div className="row justify-content-center">
                            <div className="col-md-2 ">
                                <img src="https://via.placeholder.com/320x250" className="img-fluid" alt=""/>
                            </div>
                            <div className="col-md-2 ">
                                <img src="https://via.placeholder.com/320x250" className="img-fluid" alt=""/>
                            </div>
                            <div className="col-md-2 ">
                                <img src="https://via.placeholder.com/320x250" className="img-fluid" alt=""/>
                            </div>
                            <div className="col-md-2 ">
                                <img src="https://via.placeholder.com/320x250" className="img-fluid" alt=""/>
                            </div>
                            <div className="col-md-2 ">
                                <img src="https://via.placeholder.com/320x250" className="img-fluid" alt=""/>
                            </div>
                            <div className="col-md-2 ">
                                <img src="https://via.placeholder.com/320x250" className="img-fluid" alt=""/>
                            </div>

                        </div>

                    </div>
                </section>

                <footer className="">
                    <div className="container-fluid">
                        <div className="row Row1 p-3">
                            <div className="col-lg-6 d-flex">
                                <div className="col-lg-3 p-0 d-flex align-items-center">
                                    <img className="img-fluid" src="https://via.placeholder.com/200x80" alt=""/>
                                </div>
                                <div className="col-lg-9 text-left d-flex align-items-center">
                                    <h1 className="text-white m-0 pt-2">VOL DE COLOMS</h1>
                                </div>

                            </div>
                            <div className="col-lg-6 d-flex flex-wrap pt-5">
                                <div className="col-lg-5 p-0 d-flex align-items-center justify-content-end">
                                    <button className="Btn-red">todos los vuelos</button>
                                </div>
                                <div className="col-lg-7 d-flex align-items-center">
                                    <div className="col-lg-2 p-0">
                                        <img src="https://via.placeholder.com/55x55" className="img-fluid" alt=""/>
                                    </div>
                                    <div className="col-lg-2 p-0">
                                        <img src="https://via.placeholder.com/55x55" className="img-fluid" alt=""/>
                                    </div>
                                    <div className="col-lg-2 p-0">
                                        <img src="https://via.placeholder.com/55x55" className="img-fluid" alt=""/>
                                    </div>
                                    <div className="col-lg-2 p-0">
                                        <img src="https://via.placeholder.com/55x55" className="img-fluid" alt=""/>
                                    </div>
                                    <div className="col-lg-2 p-0">
                                        <img src="https://via.placeholder.com/55x55" className="img-fluid" alt=""/>
                                    </div>

                                </div>
                                <div className="col-lg-12 text-left mt-4 ">
                                    <span className="text-white Copyrigth-text">©VOLS DE COLOM - Todos los derechos reservados - <a
                                        href="">Privacy Policy</a> - <a href="">Legal Advice</a> - <a href="">Cookies Privacy</a> - Diseñado por <a
                                        href="">Waka</a></span>
                                </div>

                            </div>

                        </div>
                        <div className="row Row2 p-3">
                            <div className="Logos-patrocinadores">
                                <img src="https://via.placeholder.com/320x80" className="img-fluid" alt=""/>
                            </div>
                            <div className="Logos-patrocinadores">
                                <img src="https://via.placeholder.com/320x80" className="img-fluid" alt=""/>
                            </div>
                            <div className="Logos-patrocinadores">
                                <img src="https://via.placeholder.com/320x80" className="img-fluid" alt=""/>
                            </div>
                            <div className="Logos-patrocinadores">
                                <img src="https://via.placeholder.com/320x80" className="img-fluid" alt=""/>
                            </div>
                            <div className="Logos-patrocinadores">
                                <img src="https://via.placeholder.com/320x80" className="img-fluid" alt=""/>
                            </div>
                            <div className="Logos-patrocinadores">
                                <img src="https://via.placeholder.com/320x80" className="img-fluid" alt=""/>
                            </div>
                            <div className="Logos-patrocinadores">
                                <img src="https://via.placeholder.com/320x80" className="img-fluid" alt=""/>
                            </div>

                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default App;
