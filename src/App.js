import React, {Component} from 'react';
import Home from './components/home/Home';
import Pilotos from './components/pilotos/Pilotos';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';

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
                    {/*<Home/>*/}
                    {/* <Pilotos/>*/}
                </div>
            </Router>

        );
    }}
export default App;
