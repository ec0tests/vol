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
import Adm_site from "./admin/components/site/Site";
import Adm_productos from "./admin/components/adm_productos/Producto_adm";
import Adm_blog from "./admin/components/adm_blog/Blog_adm";
import Adm_vuelos from "./admin/components/adm_vuelos/Vuelo_adm";
import Adm_ofertas from "./admin/components/adm_ofertas/Oferta_adm";
import Adm_reservas from "./admin/components/adm_reservas/Reservas_adm";
import Adm_experiencias from "./admin/components/adm_experiencias/Experiencias_adm";

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

let url_actual= document.URL;

let loadinghtml='';

if(url_actual.indexOf("/admin/")>0 && /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
    loadinghtml = "<h1 style='color:white;'>El administrador no está disponible para móvil.<br>  Gracias.</h1>";
}else{
     loadinghtml= "<div class=\"spinner\">\n" +
        "  <div class=\"bounce1\"></div>\n" +
        "  <div class=\"bounce2\"></div>\n" +
        "  <div class=\"bounce3\"></div>\n" +
        "</div>";

}
window.loading_screen = window.pleaseWait({
    logo: "https://image.ibb.co/cW4tZy/vdc_logo_b.png",
    backgroundColor: '#2863B1',
    loadingHtml: loadinghtml

});


$( document ).ready(function() {
    // si es móvil vuelvo no hago el finis del load en el administrador
    if(url_actual.indexOf("/admin/")>0 &&/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {

    }else{
        window.loading_screen.finish();

    }


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

                    <Route path="/admin/dashboard" exact strict render={
                        () => {
                            return (<div className="Admin"><Adm_dashboard/></div>);
                        }
                    }/>

                    <Route path="/admin/site" exact strict render={
                        () => {
                            return (<div className="Admin"><Adm_site/></div>);
                        }
                    }/>

                    <Route path="/admin/blog" exact strict render={
                        () => {
                            return (<div className="Admin"><Adm_blog/></div>);
                        }
                    }/>

                    <Route path="/admin/vuelos" exact strict render={
                        () => {
                            return (<div className="Admin"><Adm_vuelos/></div>);
                        }
                    }/>

                    <Route path="/admin/productos" exact strict render={
                        () => {
                            return (<div className="Admin"><Adm_productos/></div>);
                        }
                    }/>

                    <Route path="/admin/reservas" exact strict render={
                        () => {
                            return (<div className="Admin"><Adm_reservas/></div>);
                        }
                    }/>
                    <Route path="/admin/ofertas" exact strict render={
                        () => {
                            return (<div className="Admin"><Adm_ofertas/></div>);
                        }
                    }/>

                    <Route path="/admin/experiencias" exact strict render={
                        () => {
                            return (<div className="Admin"><Adm_experiencias/></div>);
                        }
                    }/>




                </div>
            </Router>

        );
    }
}

export default App;
