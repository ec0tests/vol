import React, {Component} from 'react';
import './Footer_estilo1.css';

import ico_face from '../../images/Icon-RRSS-fb-b-55.png';
import ico_twitter from '../../images/Icon-RRSS-tw-b-55.png';
import ico_inst from '../../images/Icon-RRSS-in-b-55.png';
import ico_trip from '../../images/Icon-RRSS-tr-b-55.png';
import ico_youtube from '../../images/Icon-RRSS-yt-b-55.png';
import logo_b from '../../images/vdc-logo-b.png';

const Footer_estilo1 = ()=> (
    <div className="container-fluid">
        <div className="row">
            <div className="col-6">
                <img src={logo_b} alt=""/>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center flex-wrap pr-5">
                <div className="Div-ico">
                    <a href="https://es-es.facebook.com/voldecoloms/">
                        <img src={ico_face} alt=""/>

                    </a>
                </div>
                <div className="Div-ico">
                    <a href="https://twitter.com/voldecoloms?lang=es">
                        <img src={ico_twitter} alt=""/>

                    </a>
                </div>
                <div className="Div-ico">
                    <a href="https://www.instagram.com/voldecoloms/">
                        <img src={ico_inst} alt=""/>

                    </a>
                </div>
                <div className="Div-ico">
                    <a href="https://www.youtube.com/user/Voldecoloms">
                        <img src={ico_youtube} alt=""/>

                    </a>
                </div>
                <div className="Div-ico">
                    <a href="https://es-es.facebook.com/voldecoloms/">
                        <img src={ico_face} alt=""/>

                    </a>
                </div>
                <div className="row w-100 text-right justify-content-end pr-3 pt-3">
                                  <span className="text-white Copyrigth-text">©VOLS DE COLOM - Todos los derechos reservados - <a
                                      href="#" data-toggle="modal"
                                      data-target="#privacy_modal">Privacy Policy</a> - <a
                                      href="#" data-toggle="modal"
                                      data-target="#legal_modal">Legal Advice</a> - <a href="#" data-toggle="modal"
                                                                                       data-target="#cookies_modal">Cookies Privacy</a> - Diseñado por <a
                                      href="https://www.somoswaka.com/">Waka</a></span>
                </div>
            </div>

            {/*Privacy polici*/}
            <div className="modal fade" id="privacy_modal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="py-1">
                            <h2 className="py-1 w-100 text-center">PRIVACY POLICY</h2>
                            <button type="button" className="close"
                                    data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body text-left p-1">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque error
                                eveniet magni nulla, odit quod reprehenderit sed? Adipisci, aspernatur
                                corporis facilis in modi molestias nesciunt nisi nostrum praesentium
                                similique sint!</p>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger"
                                    data-dismiss="modal">Cerrar
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            {/*Legal advice*/}
            <div className="modal fade" id="legal_modal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="py-1">
                            <h2 className="py-1 w-100 text-center">LEGAL ADVICE</h2>
                            <button type="button" className="close"
                                    data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body text-left p-1">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque error
                                eveniet magni nulla, odit quod reprehenderit sed? Adipisci, aspernatur
                                corporis facilis in modi molestias nesciunt nisi nostrum praesentium
                                similique sint!</p>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger"
                                    data-dismiss="modal">Cerrar
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            {/*Cookies*/}
            <div className="modal fade" id="cookies_modal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="py-1">
                            <h2 className="py-1 w-100 text-center">COOKIES</h2>
                            <button type="button" className="close"
                                    data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body text-left p-1">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque error
                                eveniet magni nulla, odit quod reprehenderit sed? Adipisci, aspernatur
                                corporis facilis in modi molestias nesciunt nisi nostrum praesentium
                                similique sint!</p>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger"
                                    data-dismiss="modal">Cerrar
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Footer_estilo1;