import React, {Component} from 'react';
import './Header.css';
import logo_b from '../../../../web/images/vdc-logo-b.png';
class Adm_header extends React.Component {


    render() {

        return (
            <header className="topbar">
                <nav className="navbar top-navbar navbar-expand-md navbar-light justify-content-end">

                    <div className="navbar-header">
                        <a className="navbar-brand" href="index.html">
                            <img src={logo_b} className='img-fluid' alt="Logo vol de coloms"/>

                           </a>
                    </div>
                    <i class="fas fa-sign-out-alt Sign-out"></i>
                </nav>
            </header>
        )

    }
}

export default Adm_header;
