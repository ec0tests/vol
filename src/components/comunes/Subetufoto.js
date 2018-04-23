import React, {Component} from 'react';
import './Subetufoto.css';
import Slider from "react-slick";
import $ from 'jquery';

class Subetufoto extends React.Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            arrows: false,
            speed: 5000,
            slidesToShow: 4,
            slidesToScroll: 1,
            swipeToSlide: true,
            autoplay: true,
            autoplaySpeed: 3000
        };

        return (
            <div className="container-fluid">
                <h3 className="Text-gray text-uppercase mb-3 Home-h2 Subetufoto-h3 w-100">Sube tu foto y gana un vuelo
                    con <span
                        className="Red-text">#voldecoloms</span></h3>
                    <Slider {...settings}>
                        <img src="https://via.placeholder.com/320x250" className="img-fluid w-100" alt=""/>
                        <img src="https://via.placeholder.com/320x250" className="img-fluid w-100" alt=""/>
                        <img src="https://via.placeholder.com/320x250" className="img-fluid w-100" alt=""/>
                        <img src="https://via.placeholder.com/320x250" className="img-fluid w-100" alt=""/>
                        <img src="https://via.placeholder.com/320x250" className="img-fluid w-100" alt=""/>
                        <img src="https://via.placeholder.com/320x250" className="img-fluid w-100" alt=""/>
                        <img src="https://via.placeholder.com/320x250" className="img-fluid w-100" alt=""/>
                        <img src="https://via.placeholder.com/320x250" className="img-fluid w-100" alt=""/>

                    </Slider>

            </div>
        )
    }
}

export default Subetufoto;