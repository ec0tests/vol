
import React, {Component} from 'react';
import './Header.css';

/* HAGO DESTRUCTURING: En vez de crear la const logo con props.logo le añado al parametro {} y le pongo de nomrbe el nombre de la prop que le paso
* así lo coge directamente*/
const Header = ({logo}) => (
       <header className="text-white">
        <div className="container-fluid">
            <div className="row p-3 pl-5">
                <div className="col-6 text-left">
                    <img src={logo} className="img-fluid" alt=""/>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-end pr-5">
                    <button className="Megamenu">Vuela en globo</button>
                    <span className="ml-4">MENÚ</span>
                </div>
            </div>
        </div>
    </header>
)

export default Header;

