import ReactWeather2 from 'react-open-weather';
//Optional include of the default css styles
import 'react-open-weather/lib/css/ReactWeather.css';
import React from "react";

class ReactWeather extends React.Component {
    render() {
        return (
            <ReactWeather2
                forecast="5days"
                apikey="596384759f37460188c195616182904"
                type="city"
                city="Gerona"/>)
    }
}


export default ReactWeather;