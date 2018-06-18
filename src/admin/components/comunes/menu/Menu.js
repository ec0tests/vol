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
                                <NavLink to="/admin/experiencias" className="has-arrow" activeStyle={{fontWeight: '500', color: '#333333'}}>
                                <span className="hide-menu">
                                    <i
                                        className="mdi mdi-airplane"></i>
                                    Experiencias
                                </span>
                                </NavLink>


                            </li>
                            <li>
                                <NavLink to="/admin/productos" className="has-arrow" activeStyle={{fontWeight: '500', color: '#333333'}}>
                                <span className="hide-menu">
                                    <i
                                        className="mdi mdi-book-open-variant"></i>
                                    Productos
                                </span>
                                </NavLink>


                            </li>
                            <li>
                                <NavLink to="/admin/ofertas" className="has-arrow" activeStyle={{fontWeight: '500', color: '#333333'}}>
                                <span className="hide-menu">
                                   <i
                                       className="mdi mdi-widgets"></i>
                                    Ofertas
                                </span>
                                </NavLink>

                            </li>
                            <li>
                                <NavLink to="/admin/pack-regalo" className="has-arrow" activeStyle={{fontWeight: '500', color: '#333333'}}>
                                <span className="hide-menu">
                                 <i
                                     className="mdi mdi-gift"></i>
                                    Pack regalo
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
