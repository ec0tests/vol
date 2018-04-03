import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    {/*   MENUS SUPER */}
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6 text-left">
                                <img src="https://via.placeholder.com/383x80" className="img-fluid" alt=""/>
                            </div>
                            <div className="col-3 text-left">
                                <button className="Megamenu">Vuela en globo</button>
                            </div>
                        </div>
                    </div>

                    {/*   Principal*/}
                    <div className="container">
                            <div className="col-12 text-left">
                                <h1>VUELA EN GLOBO <br/> <span>en el parque natural de La Garrotxa</span></h1>
                            </div>
                            <div className="col-12 text-left">
                                <button className="text-uppercase">Reservar</button>
                            </div>
                            <div className="col-12 text-left">
                                <button className="text-uppercase">Canjear cupón</button>
                            </div>
                            <div className="col-12 text-left">
                                <button className="text-uppercase">regalar vuelo</button>
                            </div>
                    </div>
                    <div className="container">
                        <div className="row ">
                            <div className="Iconos-header col-6 p-0 d-flex">
                                <div className="col-4">
                                    <img className="img-fluid" src="https://via.placeholder.com/200x80" alt=""/>
                                    <h5 className="mt-3">Adlutos</h5>
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid" src="https://via.placeholder.com/200x80" alt=""/>
                                    <h5 className="mt-3">Adlutos</h5>
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid" src="https://via.placeholder.com/200x80" alt=""/>
                                    <h5 className="mt-3">Adlutos</h5>
                                </div>
                            </div>
                            <div className="Iconos-header col-6 p-0 d-flex">
                                <div className="col-4">
                                    <img className="img-fluid" src="https://via.placeholder.com/200x80" alt=""/>
                                    <h5 className="mt-3">Adlutos</h5>
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid" src="https://via.placeholder.com/200x80" alt=""/>
                                    <h5 className="mt-3">Adlutos</h5>
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid" src="https://via.placeholder.com/200x80" alt=""/>
                                    <h5 className="mt-3">Adlutos</h5>
                                </div>
                            </div>
                            <div className="col-12 mt-5 text-left">
                               <p>* Vuelos adaptados & 100% accesibles <br/> Personas mayores , discapacidades, sillas de ruedas </p>
                            </div>
                        </div>

                    </div>


                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">VolColoms</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
