import React, {Component} from 'react';

import Lightbox from 'react-image-lightbox';
import imagenes_instalaciones1 from '../../images/instalacion1.jpg';


class Imagenes_ficha extends React.Component {
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


                <div className="col-4 p-0 Div-imagenesinstalaciones">
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
                    <img onClick={() => this.setState({isOpen: true})}
                         src={require(`../../images/${this.props.photo.toLowerCase()}.jpg`)} className=" h-100 w-100"
                         alt=""/>
                </div>


        )

    }
}


export default Imagenes_ficha;