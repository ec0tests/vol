import React, {Component} from 'react';
import './Card_pilotos.css';

import Lightbox from 'react-image-lightbox';


class Card_pilotos extends Component {
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
            'https://via.placeholder.com/250x250',
            'https://via.placeholder.com/250x250',
            'https://via.placeholder.com/250x250',
            'https://via.placeholder.com/250x250',
        ];
        return (

        <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-5 mt-5">
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
            <div className="Piloto-card Piloto-card-img1 Cursor-pointer" onClick={() => this.setState({isOpen: true})} style={{background: 'url('+this.props.photo+')'}}>

                <span className="P-relative Z-index3">{this.props.name}</span>


                <div className="w-100 Blue-diagonal">

                </div>
            </div>
        </div>
)}}
export default Card_pilotos;
