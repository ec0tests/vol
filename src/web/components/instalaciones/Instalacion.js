import React, {Component} from 'react';

import Lightbox from 'react-image-lightbox';
import bkg from '../../images/instalacion1.jpg';





class Instalacion extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    render() {
        const {photoIndex, isOpen} = this.state;
        const images = [
            require('../../images/instalacion1.jpg'),
             require('../../images/instalacion1.jpg'),
             require('../../images/instalacion1.jpg'),
             require('../../images/instalacion1.jpg'),
        ];
        return (
            <div>
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({isOpen: false})}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )
                }

                <div className="row mt-5 w-100 Instalacionp">
                    <div className="col-md-12">
                        <h3>{this.props.title}</h3>

                    </div>
                    <div className="col-md-12">
                        <p>{this.props.text}</p>

                    </div>
                    <div className="col-md-12">
                        <img  onClick={() => this.setState({isOpen: true})}
                             src={require(`../../images/${this.props.photo.toLowerCase()}.jpg`)} className="w-100 Cursor-pointer"
                             alt=""/>

                    </div>
                </div>
            </div>
        )

    }
}


export default Instalacion;