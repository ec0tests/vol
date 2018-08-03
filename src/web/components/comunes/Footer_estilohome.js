import React, {Component} from 'react';
import './Footer_estilohome.css';
import tingle from 'tingle.js';

/*import ico_face from '../../images/Icon-RRSS-fb-b-55.png';
import ico_twitter from '../../images/Icon-RRSS-tw-b-55.png';
import ico_inst from '../../images/Icon-RRSS-in-b-55.png';
import ico_google2 from '../../images/ico-google2.jpg';
import ico_youtube from '../../images/Icon-RRSS-yt-b-55.png';*/

import ico_trip from '../../images/Icon-RRSS-tr-b-55.png';

import ico_face from '../../images/face.png';
import ico_twitter from '../../images/twitter.png';
import ico_inst from '../../images/insta.png';
import ico_youtube from '../../images/youtube.png';
import ico_google2 from '../../images/google.png';
import logo_b from '../../images/vdc-logo-b.png';

// instanciate new modal
var modal_privacy = new tingle.modal({
    footer: false,
    stickyFooter: true,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
    onOpen: function () {
        console.log('modal open');
    },
    onClose: function () {
        console.log('modal closed');
    },
    beforeClose: function () {
        // here's goes some logic
        // e.g. save content before closing the modal
        return true; // close the modal
        return false; // nothing happens
    }
});

var modal_cookies = new tingle.modal({
    footer: false,
    stickyFooter: true,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
    onOpen: function () {
        console.log('modal open');
    },
    onClose: function () {
        console.log('modal closed');
    },
    beforeClose: function () {
        // here's goes some logic
        // e.g. save content before closing the modal
        return true; // close the modal
        return false; // nothing happens
    }
});

var modal_legal = new tingle.modal({
    footer: false,
    stickyFooter: true,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
    onOpen: function () {
        console.log('modal open');
    },
    onClose: function () {
        console.log('modal closed');
    },
    beforeClose: function () {
        // here's goes some logic
        // e.g. save content before closing the modal
        return true; // close the modal
        return false; // nothing happens
    }
});
// set content
modal_privacy.setContent('' +
    '<h2>Privacy Policy</h2>' +
    '<hr>' +
    '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, deserunt dignissimos dolore doloribus dolorum eius, impedit inventore laboriosam magnam molestias mollitia provident ratione repudiandae soluta suscipit velit, veniam voluptas?</p>' +
    '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, deserunt dignissimos dolore doloribus dolorum eius, impedit inventore laboriosam magnam molestias mollitia provident ratione repudiandae soluta suscipit velit, veniam voluptas?</p>' +
    '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, deserunt dignissimos dolore doloribus dolorum eius, impedit inventore laboriosam magnam molestias mollitia provident ratione repudiandae soluta suscipit velit, veniam voluptas?</p>'
);

modal_legal.setContent('' +
    '<h2>Legal Advice</h2>' +
    '<hr>' +
    '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, deserunt dignissimos dolore doloribus dolorum eius, impedit inventore laboriosam magnam molestias mollitia provident ratione repudiandae soluta suscipit velit, veniam voluptas?</p>' +
    '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, deserunt dignissimos dolore doloribus dolorum eius, impedit inventore laboriosam magnam molestias mollitia provident ratione repudiandae soluta suscipit velit, veniam voluptas?</p>' +
    '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, deserunt dignissimos dolore doloribus dolorum eius, impedit inventore laboriosam magnam molestias mollitia provident ratione repudiandae soluta suscipit velit, veniam voluptas?</p>'
);

modal_privacy.setContent('' +
    '<h2>Cookies</h2>' +
    '<hr>' +
    '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, deserunt dignissimos dolore doloribus dolorum eius, impedit inventore laboriosam magnam molestias mollitia provident ratione repudiandae soluta suscipit velit, veniam voluptas?</p>' +
    '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, deserunt dignissimos dolore doloribus dolorum eius, impedit inventore laboriosam magnam molestias mollitia provident ratione repudiandae soluta suscipit velit, veniam voluptas?</p>' +
    '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, deserunt dignissimos dolore doloribus dolorum eius, impedit inventore laboriosam magnam molestias mollitia provident ratione repudiandae soluta suscipit velit, veniam voluptas?</p>'
);

function openPrivacy() {
    modal_privacy.open();
}

function openLegal() {
    modal_legal.open();
}

function openCookies() {
    modal_cookies.open();
}

/*// add a button
modal.addFooterBtn('Button label', 'tingle-btn tingle-btn--primary', function() {
    // here goes some logic
    modal.close();
});

// add another button
modal.addFooterBtn('Dangerous action !', 'tingle-btn tingle-btn--danger', function() {
    // here goes some logic
    modal.close();
});*/

const Footer_estilohome = () => (

            <div className="row Row1 py-2 py-md-0 p-md-3">
                <div className="col-12 col-md-5 d-flex justify-content-center">
                    <div className="col-12 col-md-8 p-0 d-flex align-items-center justify-content-center">
                        <img className="img-fluid" src={logo_b} alt=""/>
                    </div>


                </div>
                <div className="col-12 col-md-7  pb-2 d-flex flex-wrap pt-0 justify-content-end pt-md-5">
                    <div
                        className="col-12 col-md-5 p-0 d-flex align-items-center py-5 py-md-0 Justify-md-content-end">
                        <a href="/filtro">
                            <button className="Btn-red">todos los vuelos</button>
                        </a>
                    </div>
                    <div
                        className="col-10 col-sm-6 col-md-7 col-lg-6 col-xl-4 d-flex   align-items-center justify-content-center Margen-movil">
                        <div className="Div-ico-h">
                            <a target="_blank" href="https://es-es.facebook.com/voldecoloms/">
                                <img  src={ico_face} alt=""/>

                            </a>
                        </div>
                        <div className="Div-ico-h">
                            <a target="_blank" href="https://twitter.com/voldecoloms">
                                <img  src={ico_twitter} alt=""/>

                            </a>
                        </div>
                        <div className="Div-ico-h">
                            <a target="_blank" href="https://www.instagram.com/voldecoloms/">
                                <img  src={ico_inst} alt=""/>

                            </a>
                        </div>
                        <div className="Div-ico-h">
                            <a target="_blank" href="https://www.youtube.com/user/Voldecoloms">
                                <img  src={ico_youtube} alt=""/>

                            </a>
                        </div>
                        <div className="Div-ico-h">
                            <a target="_blank" href="">

                                <img   src={ico_google2} alt=""/>

                            </a>
                        </div>
                    </div>
                    <div className=" col-12 col-md-11  mt-4  d-flex justify-content-end">
                                       <span className="text-white Copyrigth-text text-center text-md-right">©VOL DE COLOMS - Todos los derechos reservados - <a
                                           onClick={openPrivacy}
                                           className="Underline Cursor-pointer"> Privacy Policy</a> - <a
                                           onClick={openLegal}
                                           className="Underline Cursor-pointer">Legal Advice</a> - <a
                                           onClick={openCookies}
                                           className="Underline Cursor-pointer">Cookies Privacy</a> - Diseñado por <a
                                           target="_blank" href="https://www.somoswaka.com/">Waka</a><br/> Made with love by   <a
                                           target="_blank" href="https://www.ecoders.io/">Ecoders</a> !</span>
                    </div>

                </div>

            </div>

)

export default Footer_estilohome;