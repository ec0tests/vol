import React, {Component} from 'react';
import '../../css/style.css';
import '../../css/colors/blue.css';
import Adm_header from '../comunes/header/Header';
import Adm_menu from '../comunes/menu/Menu';
import Cupon from './Cupon';
import Chart from './Chart';
import Post_noeditable from './Post_noeditable';


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
                                <div class="col-lg-6 col-md-12">
                                    <div class="card Adm-card">
                                        <div class="card-body justify-content-start">
                                            <h4 class="card-title">Cupones más utilizados</h4>
                                            <div class="myadmin-dd dd w-100 text-left" id="nestable">
                                                <ol class="dd-list ">
                                                    <Cupon cupon="cupon1" ventas="10" usos="3"/>
                                                    <Cupon cupon="cupon1" ventas="10" usos="3"/>
                                                    <Cupon cupon="cupon1" ventas="10" usos="3"/>
                                                    <Cupon cupon="cupon1" ventas="10" usos="3"/>
                                                    <Cupon cupon="cupon1" ventas="10" usos="3"/>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="card Adm-card">
                                        <div class="card-body justify-content-start">
                                            <h4 class="card-title">Últimos post</h4>
                                            <div class="myadmin-dd dd w-100 text-left" id="nestable">
                                                <ol class="dd-list ">
                                                    <Post_noeditable titulo="Post1 " visitas="1000"/>
                                                    <Post_noeditable titulo="Post2 " visitas="1000"/>
                                                    <Post_noeditable titulo="Post3 " visitas="1000"/>
                                                    <Post_noeditable titulo="Post4 " visitas="1000"/>
                                                    <Post_noeditable titulo="Post5 " visitas="1000"/>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div class="col-12">
                                    <div class="card Adm-card Overflow-h">
                                        <div class="card-body justify-content-start">
                                            <h4 class="card-title">Evolución de ventas</h4>
                                            <Chart/>
                                        </div>
                                    </div>
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
