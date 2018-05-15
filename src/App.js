import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';

import './App.css';
import $ from 'jquery';
import pleaseWait from 'please-wait';


import Home from './web/components/home/Home';
import Pilotos from './web/components/pilotos/Pilotos';
import Instalaciones from './web/components/instalaciones/Instalaciones';
import Blogp from './web/components/blogp/Blogp';
import Bloge from './web/components/bloge/Bloge';
import Faq from './web/components/faq/Faq';
import Pack_romantico from './web/components/pack_romantico/Pack_romantico';
import Filtro from './web/components/filtro/Filtro';
import Pack_historico from "./web/components/pack_historico/Pack_historico";
import Categorias from "./web/components/categorias/Categorias";
import Ficha from "./web/components/ficha/Ficha";
import Contact from "./web/components/contact/Contact";

import Adm_dashboard from "./admin/components/dashboard/Dashboard";

import bkg1 from "./web/images/bkg-1.jpg";

// Plugin: $.scrollSpeed
// Source: github.com/nathco/jQuery.scrollSpeed
// Author: Nathan Rutzky
// Update: 1.0.2

/*Plugin scroll suave*/
(function ($) {

    $.scrollSpeed = function (step, speed, easing) {

        var $document = $(document),
            $window = $(window),
            $body = $('html, body'),
            option = easing || 'default',
            root = 0,
            scroll = false,
            scrollY,
            scrollX,
            view;

        if (window.navigator.msPointerEnabled)

            return false;

        $window.on('mousewheel DOMMouseScroll', function (e) {

            var deltaY = e.originalEvent.wheelDeltaY,
                detail = e.originalEvent.detail;
            scrollY = $document.height() > $window.height();
            scrollX = $document.width() > $window.width();
            scroll = true;

            if (scrollY) {

                view = $window.height();

                if (deltaY < 0 || detail > 0)

                    root = (root + view) >= $document.height() ? root : root += step;

                if (deltaY > 0 || detail < 0)

                    root = root <= 0 ? 0 : root -= step;

                $body.stop().animate({

                    scrollTop: root

                }, speed, option, function () {

                    scroll = false;

                });
            }

            if (scrollX) {

                view = $window.width();

                if (deltaY < 0 || detail > 0)

                    root = (root + view) >= $document.width() ? root : root += step;

                if (deltaY > 0 || detail < 0)

                    root = root <= 0 ? 0 : root -= step;

                $body.stop().animate({

                    scrollLeft: root

                }, speed, option, function () {

                    scroll = false;

                });
            }

            return false;

        }).on('scroll', function () {

            if (scrollY && !scroll) root = $window.scrollTop();
            if (scrollX && !scroll) root = $window.scrollLeft();

        }).on('resize', function () {

            if (scrollY && !scroll) view = $window.height();
            if (scrollX && !scroll) view = $window.width();

        });
    };

    $.easing.default = function (x, t, b, c, d) {

        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    };

})($);


window.loading_screen = window.pleaseWait({
    logo: "http://clientes-optimoclick.es/sergio/img-vol/logo.png",
    backgroundColor: '#2863B1',
    loadingHtml: "<div class=\"spinner\">\n" +
    "  <div class=\"bounce1\"></div>\n" +
    "  <div class=\"bounce2\"></div>\n" +
    "  <div class=\"bounce3\"></div>\n" +
    "</div>"

});

$( document ).ready(function() {
    window.loading_screen.finish();

});

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">

                    <Route onUpdate={() => window.scrollTo(0, 0)} path="/" exact strict render={
                        () => {
                            return (<Home/>);
                        }
                    }/>

                    <Route onUpdate={() => window.scrollTo(0, 0)} path="/pilotos" exact strict render={
                        () => {
                            return (<Pilotos/>);
                        }
                    }/>

                    <Route onUpdate={() => window.scrollTo(0, 0)} path="/instalaciones" exact strict render={
                        () => {
                            return (<Instalaciones/>);
                        }
                    }/>

                    <Route onUpdate={() => window.scrollTo(0, 0)} path="/blog" exact strict render={
                        () => {
                            return (<Blogp/>);
                        }
                    }/>

                    <Route onUpdate={() => window.scrollTo(0, 0)} path="/entrada_blog" exact strict render={
                        () => {
                            return (<Bloge/>);
                        }
                    }/>

                    <Route onUpdate={() => window.scrollTo(0, 0)} path="/faq" exact strict render={
                        () => {
                            return (<Faq/>);
                        }
                    }/>
                    <Route onUpdate={() => window.scrollTo(0, 0)} path="/contact" exact strict render={
                        () => {
                            return (<Contact/>);
                        }
                    }/>


                    <Route path="/filtro" exact strict render={
                        () => {
                            return (<Filtro/>);
                        }
                    }/>

                    <Route path="/pack_romantico" exact strict render={
                        () => {
                            return (<Pack_romantico/>);
                        }
                    }/>
                    <Route path="/pack_historico" exact strict render={
                        () => {
                            return (<Pack_historico/>);
                        }
                    }/>
                    <Route path="/categorias" exact strict render={
                        () => {
                            return (<Categorias/>);
                        }
                    }/>

                    <Route path="/ficha" exact strict render={
                        () => {
                            return (<Ficha/>);
                        }
                    }/>

                    <Route path="/admin" exact strict render={
                        () => {
                            return (<Adm_dashboard/>);
                        }
                    }/>




                </div>
            </Router>

        );
    }
}

export default App;
