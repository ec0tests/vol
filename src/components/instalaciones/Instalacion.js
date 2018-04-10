import React, {Component} from 'react';


import bkg from '../../images/instalacion1.jpg';

class Instalacion extends React.Component{
    render() {
    return(
        <div className="row mt-5 ">
            <div className="col-md-12">
                <h3>{this.props.title}</h3>

            </div>
            <div className="col-md-12">
                <p>{this.props.text}</p>

            </div>
            <div className="col-md-12">
                <img src={require(`../../images/${this.props.photo.toLowerCase()}.jpg`)} className="w-100" alt=""/>

            </div>
        </div>);
}
}



export default Instalacion;