import React, {Component} from 'react';


import bkg from '../../images/instalacion1.jpg';
import './Pregunta_faq.css'
class Pregunta_faq extends React.Component {
    render() {
        return (
                <div className="col-12 col-md-6 mt-5">
                    <div className="col-12 mb-5 text-center ">
                        <img src={require(`../../images/${this.props.photo.toLowerCase()}.jpg`)}
                             className="img-fluid Img-entradablog w-100 "alt=""/>

                    </div>
                    <div className="col-12">
                    <h3 className="Entradablog-h3">{this.props.title}</h3>
                    </div>
                </div>


            );
    }
}


export default Pregunta_faq;