import React, {Component} from 'react';
import './Footer_estilo1.css';
import tingle from 'tingle.js';

import ico_face from '../../images/Icon-RRSS-fb-b-55.png';
import ico_twitter from '../../images/Icon-RRSS-tw-b-55.png';
import ico_inst from '../../images/Icon-RRSS-in-b-55.png';
import ico_trip from '../../images/Icon-RRSS-tr-b-55.png';
import ico_youtube from '../../images/Icon-RRSS-yt-b-55.png';
import ico_google2 from '../../images/ico-google2.jpg';
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

const Footer_estilo1 = () => (
    <div className="container-fluid">
        <div className="row">
            <div className="col-6">
                <img src={logo_b} alt=""/>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center flex-wrap pr-5">
                <div className="Div-ico">
                    <a target="_blank" href="https://es-es.facebook.com/voldecoloms/">
                        <img className="img-fluid" src={ico_face} alt=""/>

                    </a>
                </div>
                <div className="Div-ico">
                    <a target="_blank" href="https://twitter.com/voldecoloms?lang=es">
                        <img className="img-fluid" src={ico_twitter} alt=""/>

                    </a>
                </div>
                <div className="Div-ico">
                    <a target="_blank" href="https://www.instagram.com/voldecoloms/">
                        <img  className="img-fluid" src={ico_inst} alt=""/>

                    </a>
                </div>
                <div className="Div-ico">
                    <a target="_blank" href="https://www.youtube.com/user/Voldecoloms">
                        <img className="img-fluid" src={ico_youtube} alt=""/>

                    </a>
                </div>
                <div className="Div-ico">
                    <a target="_blank" href="">
                        <img className="img-fluid" src={ico_google2} alt=""/>

                    </a>
                </div>

                <div className="row w-100 text-right justify-content-end pr-3 pt-3">
                                  <span className="text-white Copyrigth-text">©VOL DE COLOMS - Todos los derechos reservados - <a
                                      onClick={openPrivacy}
                                      className="Underline Cursor-pointer"> Privacy Policy</a> - <a
                                      onClick={openLegal} className="Underline Cursor-pointer">Legal Advice</a> - <a
                                      onClick={openCookies} className="Underline Cursor-pointer">Cookies Privacy</a> - Diseñado por <a
                                      target="_blank" href="https://www.somoswaka.com/">Waka</a> <br/> Made with love by   <a
                                      target="_blank" href="https://www.ecoders.io/">Ecoders</a> !</span>
                </div>
            </div>


        </div>
    </div>
)

export default Footer_estilo1;