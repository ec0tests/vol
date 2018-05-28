import React, {Component} from 'react';
import './Menu.scss';
import {NavLink} from 'react-router-dom';

class Adm_menu extends React.Component {


    render() {

        return (
            <aside className="left-sidebar">
                <div className="scroll-sidebar">
                    <nav className="sidebar-nav">
                        <ul id="sidebarnav">
                            <li className="nav-small-cap">PERSONAL</li>

                            <li>
                                <NavLink to="/admin/dashboard" className="has-arrow" activeStyle={{fontWeight: '500', color: '#333333'}}>
                                <span className="hide-menu">
                                    <i
                                        className="mdi mdi-gauge"></i>
                                    Dashboard
                                </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/site" className="has-arrow" activeStyle={{fontWeight: '500', color: '#333333'}}>
                                <span className="hide-menu">
                                    <i
                                        className="mdi mdi-bullseye"></i>
                                    Site
                                </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/vuelos" className="has-arrow" activeStyle={{fontWeight: '500', color: '#333333'}}>
                                <span className="hide-menu">
                                    <i
                                        className="mdi mdi-airplane"></i>
                                    Vuelos
                                </span>
                                </NavLink>


                            </li>
                            <li>
                                <NavLink to="/admin/reservas" className="has-arrow" activeStyle={{fontWeight: '500', color: '#333333'}}>
                                <span className="hide-menu">
                                    <i
                                        className="mdi mdi-book-open-variant"></i>
                                    Reservas
                                </span>
                                </NavLink>


                            </li>
                            <li>
                                <NavLink to="/admin/experiencias" className="has-arrow" activeStyle={{fontWeight: '500', color: '#333333'}}>
                                <span className="hide-menu">
                                   <i
                                       className="mdi mdi-widgets"></i>
                                    Experiencias
                                </span>
                                </NavLink>

                            </li>
                            <li>
                                <NavLink to="/admin/cupones" className="has-arrow" activeStyle={{fontWeight: '500', color: '#333333'}}>
                                <span className="hide-menu">
                                 <i
                                     className="mdi mdi-chart-bubble"></i>
                                    Cupones
                                </span>
                                </NavLink>
                            </li>
                            <li>


                                <NavLink to="/admin/blog" className="has-arrow" activeStyle={{fontWeight: '500', color: '#333333'}}>
                                <span className="hide-menu">
                                 <i
                                     className="mdi mdi-chart-bubble"></i>
                                    Blog
                                </span>
                                </NavLink>
                            </li>


                        </ul>
                    </nav>
                </div>
            </aside>
        )

    }
}

export default Adm_menu;
