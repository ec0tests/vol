import React, {Component} from 'react';
import $ from 'jquery';
import './Carousel_card.css';
import swipe from 'jquery-touchswipe';
import swipeLeft from 'jquery-touchswipe';
import swipeRight from 'jquery-touchswipe';



class Carousel_cards extends React.Component{
    componentDidMount(){


// Swipe functions for Bootstrap Carousel
        $(".carousel-inner").swipe( {
            //Generic swipe handler for all directions
            swipeLeft:function(event, direction, distance, duration, fingerCount) {
                $(this).parent().carousel('next');
            },
            swipeRight: function() {
                $(this).parent().carousel('prev');
            },
            //Default is 75px, set to 0 for demo so any distance triggers swipe
            threshold:0
        });


        $(".Flecha-real1").click(function () {
            $(".Flecha-real1").hide();
            $(".Flecha-real2").hide();

            setTimeout(function () {
                $(".Flecha-real1").fadeIn(100);
                $(".Flecha-real2").fadeIn(100);
            },400)
        });

        $(".Flecha-real2").click(function () {
            $(".Flecha-real1").hide();
            $(".Flecha-real2").hide();

            setTimeout(function () {
                $(".Flecha-real1").fadeIn(100);
                $(".Flecha-real2").fadeIn(100);
            },400)
        });
    }


    render () {
        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="Div-indicators">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    </ol>
                </div>

                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <div className="row justify-content-center py-5 mb-5 Card-row align-items-center">
                            <a className=" Flecha-falsa1" >
                                <i  className="fas fa-angle-left Carousel-arrow"></i>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className=" Flecha-falsa2" >
                                <i className="fas fa-angle-right Carousel-arrow"></i>
                                <span className="sr-only">Next</span>
                            </a>
                            <div className="col-12 col-md-9 col-lg-9 col-xl-8">
                                <div className="card w-100 h-100 p-0 p-md-4">
                                    <div className="card-body text-left">
                                        <div className="">
                                            <div className="col-md-12">

                                                <h5 className="Titulo-tarjeta card-title w-100 text-left text-uppercase Barlow">14/febrero
                                                    san valentin</h5>
                                                <p className=" Width-75 text-left Subtitulo-tarjeta">Vuelo en pareja & noche romántica en una cabaña en un árbol.</p>
                                            </div>

                                        </div>

                                        <div className="row w-100 pt-2 pt-lg-5 justify-content-between mb-4 mb-md-0">
                                            <div className="col-12 col-sm-5 col-md-5  text-left d-flex align-items-center mb-4  mb-lg-0">
                                                <button className=" Btn-blue W-8rem Mayor-responsive">VER OFERTA</button>
                                            </div>
                                            <div className="col-12 col-sm-7 col-md-7 mt-3 mt-md-0 text-left d-flex Tarjeta-footer flex-md-row">
                                                <div className="d-flex">
                                                    <img src="https://via.placeholder.com/55x55" className=""
                                                         alt=""/>
                                                    <span className=" d-flex align-items-center p-2 Info-card">Vuela en globo <br/> Globo no compartido</span>
                                                </div>
                                                <div className="d-flex">
                                                    <span className="d-flex align-items-center Price-card pl-3">250€</span>

                                                </div>
                                            </div>
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <div className="row justify-content-center py-5 mb-5 Card-row align-items-center">
                            <a className=" Flecha-falsa1" >
                                <i  className="fas fa-angle-left Carousel-arrow"></i>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className=" Flecha-falsa2" >
                                <i className="fas fa-angle-right Carousel-arrow"></i>
                                <span className="sr-only">Next</span>
                            </a>
                            <div className="col-12 col-md-9 col-lg-9 col-xl-8">
                                <div className="card w-100 h-100 p-0 p-md-4">
                                    <div className="card-body text-left">
                                        <div className="">
                                            <div className="col-md-12">

                                                <h5 className="Titulo-tarjeta card-title w-100 text-left text-uppercase Barlow">14/febrero
                                                    san valentin</h5>
                                                <p className=" Width-75 text-left Subtitulo-tarjeta">Vuelo en pareja & noche romántica en una cabaña en un árbol.</p>
                                            </div>

                                        </div>

                                        <div className="row w-100 pt-2 pt-lg-5 justify-content-between mb-3 mb-md-0">
                                            <div className="col-12 col-sm-5 col-md-5  text-left d-flex align-items-center mb-4  mb-lg-0">
                                                <button className=" Btn-blue W-8rem Mayor-responsive">VER OFERTA</button>
                                            </div>
                                            <div className="col-12 col-sm-7 col-md-7 mt-3 mt-md-0 text-left d-flex Tarjeta-footer flex-md-row">
                                                <div className="d-flex">
                                                    <img src="https://via.placeholder.com/55x55" className=""
                                                         alt=""/>
                                                    <span className=" d-flex align-items-center p-2 Info-card">Vuela en globo <br/> Globo no compartido</span>
                                                </div>
                                                <div className="d-flex">
                                                    <span className="d-flex align-items-center Price-card pl-3">250€</span>

                                                </div>
                                            </div>
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev Flecha-real  Flecha-real1" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <i href="#carouselExampleIndicators" role="button" data-slide="prev" className="fas fa-angle-left Carousel-arrow"></i>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next Flecha-real Flecha-real2" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <i className="fas fa-angle-right Carousel-arrow"></i>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}
export default Carousel_cards;
