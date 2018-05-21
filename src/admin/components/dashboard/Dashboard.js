import React, {Component} from 'react';
import '../../css/style.css';
import '../../css/colors/blue.css';
import Adm_header from '../comunes/header/Header';
import Adm_menu from '../comunes/menu/Menu';
import Morris from '../comunes/morris/Morris';


class Adm_dashboard extends React.Component {
    render() {

        return (
            <div className="fix-header fix-sidebar card-no-border logo-center">

                <div id="main-wrapper">
                    <Adm_header/>
                    <Adm_menu/>
                    <div className="page-wrapper">
                        <div className="container-fluid">
                            <div className="row page-titles">
                                <div className="col-md-5 col-8 align-self-center">
                                    <h3 className="text-themecolor m-b-0 m-t-0 text-left">Dashboard</h3>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                                        <li className="breadcrumb-item active">Dashboard</li>
                                    </ol>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                   <Morris/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )

    }
}

export default Adm_dashboard;
