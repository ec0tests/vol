import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import bkg from '../../images/instalacion1.jpg';
import './Entrada_blog.css'
class Entrada_blog extends React.Component {
    render() {
        return (
                <div className="col-12 col-md-6 p-0 p-md-2 mt-5">
                    <div className="col-12 mb-5 p-0 p-md-2 text-center ">
                        <a href="/entrada_blog"><img src={require(`../../images/${this.props.photo.toLowerCase()}.jpg`)}
                                        className="img-fluid Img-entradablog w-100 Cursor-pointer"alt=""/></a>

                    </div>
                    <div className="col-12">
                    <h3 className="Entradablog-h3">{this.props.title}</h3>
                    </div>
                </div>


            );
    }
}


export default Entrada_blog;