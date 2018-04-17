import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';

import './App.css';

import Home from './components/home/Home';
import Pilotos from './components/pilotos/Pilotos';
import Instalaciones from './components/instalaciones/Instalaciones';
import Blogp from './components/blogp/Blogp';
import Bloge from './components/bloge/Bloge';
import Faq from './components/faq/Faq';
import Pack_romantico from './components/pack_romantico/Pack_romantico';
import Filtro from './components/filtro/Filtro';
import Pack_historico from "./components/pack_historico/Pack_historico";
import Categorias from "./components/categorias/Categorias";


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App" >

                    <Route path="/" exact strict render={
                        ()=>{
                            return (<Home/>);
                        }
                    }/>

                    <Route path="/pilotos" exact strict render={
                        ()=>{
                            return (<Pilotos/>);
                        }
                    }/>

                    <Route path="/instalaciones" exact strict render={
                        ()=>{
                            return (<Instalaciones/>);
                        }
                    }/>

                    <Route path="/blog" exact strict render={
                        ()=>{
                            return (<Blogp/>);
                        }
                    }/>

                    <Route path="/entrada_blog" exact strict render={
                        ()=>{
                            return (<Bloge/>);
                        }
                    }/>

                    <Route path="/faq" exact strict render={
                        ()=>{
                            return (<Faq/>);
                        }
                    }/>

                    <Route path="/filtro" exact strict render={
                        ()=>{
                            return (<Filtro/>);
                        }
                    }/>

                    <Route path="/pack_romantico" exact strict render={
                        ()=>{
                            return (<Pack_romantico/>);
                        }
                    }/>
                    <Route path="/pack_historico" exact strict render={
                        ()=>{
                            return (<Pack_historico/>);
                        }
                    }/>
                    <Route path="/categorias" exact strict render={
                        ()=>{
                            return (<Categorias/>);
                        }
                    }/>
                </div>
            </Router>

        );
    }}
export default App;
