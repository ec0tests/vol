import React, {Component} from 'react';
import './Certificado_peq.css';
import tripadvisor from '../../images/tripadvisor-logo.jpg';
import tingle from "tingle.js";

// instanciate new modal
var modal_opiniones = new tingle.modal({
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




function openOpiniones() {
    modal_opiniones.open();
}


const Certificado_peq = ()=> (
    <div className="row justify-content-center Certificado_peq mt-5">
        <div className="col-md-12 mb-1  text-center">
            <img src={tripadvisor} className="img-fluid Tripadvisor-peq" alt=""/>

        </div>

        <div className="col-md-12 text-center">
            <h2 className="w-100">Certificado de excelencia</h2>
            <h4 className="font-weight-normal">5 estrellas en más de 200 opiniones de tripadvisor</h4>
            <button onClick={openOpiniones} className="Btn-blue mt-4 ">Ver opiniones</button>
            <div id="TA_certificateOfExcellence99" class="TA_certificateOfExcellence">
                <ul id="5OBkUU9JYr" class="TA_links zgEs5zbzW8 p-0">
                    <li id="c36iAohCr1c" class="G221BL">
                       {/* <a target="_blank" href="https://www.tripadvisor.com/Attraction_Review-g911486-d3247038-Reviews-Vol_de_Coloms-Olot_Province_of_Girona_Catalonia.html"><img src="https://www.tripadvisor.com/img/cdsi/img2/awards/CoE2017_WidgetAsset-14348-2.png" alt="TripAdvisor" class="widCOEImg" id="CDSWIDCOELOGO"/></a>
                */}    </li>
                </ul>
            </div>

        </div>
    </div>
)

export default Certificado_peq;