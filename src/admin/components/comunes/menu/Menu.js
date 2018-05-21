import React, {Component} from 'react';
import './Menu.scss';

class Adm_menu extends React.Component {


    render() {

        return (
            <aside className="left-sidebar">
                <div className="scroll-sidebar">
                    <nav className="sidebar-nav">
                        <ul id="sidebarnav">
                            <li className="nav-small-cap">PERSONAL</li>
                            <li>
                                <a className="has-arrow" href="/admin" aria-expanded="false"><i className="mdi mdi-gauge"></i><span className="hide-menu">Dashboard </span></a>

                            </li>
                            <li>
                                <a className="has-arrow " href="/admin/site" aria-expanded="false"><i className="mdi mdi-bullseye"></i><span className="hide-menu">Site</span></a>

                            </li>
                            <li >
                                <a className="has-arrow" href="/admin/vuelos" aria-expanded="false"><i className="mdi mdi-book-open-variant"></i><span className="hide-menu">Vuelos</span></a>

                            </li>
                            <li >
                                <a className="has-arrow" href="/admin/experiencias" aria-expanded="false"><i className="mdi mdi-widgets"></i><span className="hide-menu">Experiencias</span></a>

                            </li>
                            <li >
                                <a className="has-arrow" href="/admin/cupones" aria-expanded="false"><i className="mdi mdi-chart-bubble"></i><span className="hide-menu">Cupones</span></a>

                            </li>
                            <li >
                                <a className="has-arrow" href="/admin/blog" aria-expanded="false"><i className="mdi mdi-chart-bubble"></i><span className="hide-menu">Blog</span></a>

                            </li>


                        </ul>
                    </nav>
                </div>
            </aside>
        )

    }
}

export default Adm_menu;
