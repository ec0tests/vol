import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';

import './App.css';

import Home from './components/home/Home';
import Pilotos from './components/pilotos/Pilotos';
import Instalaciones from './components/instalaciones/Instalaciones';
import Blogp from './components/blogp/Blogp';
import Faq from './components/faq/Faq';


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">

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

                    <Route path="/faq" exact strict render={
                        ()=>{
                            return (<Faq/>);
                        }
                    }/>
                </div>
            </Router>

        );
    }}
export default App;
