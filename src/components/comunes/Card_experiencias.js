import React, {Component} from 'react';
import './Card_experiencias.css';

class Card_experiencias extends React.Component {


    render() {

        return (
            <div className="col-12 col-sm-6 col-md-3 mb-5">
                <div className={`   text-left Card-experiencias ${this.props.tamanyo}`}>
                    <div className={`${this.props.tamanyo}2`}>

                        <img className="card-img-top img-fluid mh-100 mw-100"
                             src={require(`../../images/${this.props.photo.toLowerCase()}.jpg`)} alt="Card photo cap"/>
                        <div className="p-2 ">
                        <span
                            className={`text-uppercase Pack pl-1 ${this.props.pack.toLowerCase()}`}>pack {this.props.pack}
                            <i className="fas fa-home"></i><i
                                className="fas fa-bicycle"></i><i className="fas fa-utensils"></i></span>
                            <p className=" Titulo pt-2 pl-1 m-0">{this.props.titulo}</p>
                            <div className="row">
                                <div className="col-8 d-flex align-items-center pl-3 pt-1">
                                    <div className="col-3 p-0 ">
                                        <img className=" img-fluid"
                                             src={require(`../../images/${this.props.iconos}.png`)}
                                             alt="Card photo cap"/>

                                    </div>
                                    <div className="col-8 Tipo d-flex align-items-center pl-1 pr-0 pt-2">
                                        <span>{this.props.tipo_vuelo} <br/>{this.props.tipo_globo} </span>
                                    </div>
                                </div>
                                <div className="col-4 d-flex align-items-center p-0 pr-1 pt-2">
                                    <span className="Precio-card">{this.props.precio} €</span>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Card_experiencias;
