import React, {Component} from 'react';
import '../../css/style.css';
import '../../css/colors/blue.css';
import './Dashboard.scss';
import Adm_header from '../comunes/header/Header';
import Adm_menu from '../comunes/menu/Menu';


class Adm_dashboard extends React.Component {
    render() {

        return (
            <div className="fix-header fix-sidebar card-no-border logo-center">

                <div id="main-wrapper">
                    <Adm_header/>
                    <Adm_menu/>
                </div>

            </div>
        )

    }
}

export default Adm_dashboard;
