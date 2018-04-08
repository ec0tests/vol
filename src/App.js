import React, {Component} from 'react';
import Home from './components/home/Home';
import Pilotos from './components/pilotos/Pilotos';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                {/*<Home/>*/}
                <Pilotos/>
            </div>
        );
    }
}

export default App;
