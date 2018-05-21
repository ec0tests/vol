import React, {Component} from 'react';
import './Card_image.css';

import Lightbox from 'react-image-lightbox';
class Card_image extends React.Component {
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
            'https://via.placeholder.com/320x250',
            'https://via.placeholder.com/320x250',
            'https://via.placeholder.com/320x250',
            'https://via.placeholder.com/320x250',
        ];

        return (
            <div className="col-lg-3 col-md-6">
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
                <div className="card p-1">
                    <i class="fas fa-times P-absolute Cross-adm-pilotos"></i>
                    <div className="el-card-item">
                        <div className="el-card-avatar el-overlay-1">
                            <img src='https://via.placeholder.com/320x250' className="img-fluid Cursor-pointer" alt="user"  onClick={() => this.setState({isOpen: true})} style={{background: 'url('+this.props.photo+')'}} />

                        </div>
                        <div className="el-card-content">
                            <small>Nombre</small>
                            <br/> </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Card_image;
