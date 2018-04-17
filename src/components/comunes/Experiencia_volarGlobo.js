import React, {Component} from 'react';
import './Experiencia_volarGlobo.css';
import play_ico from '../../images/play-ico.png';
import ModalVideo from 'react-modal-video';


class Experiencia_volarGlobo extends React.Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <div className="container Container-video">
                <div className="row">
                    <div className="col-12 ">
                        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='Xw119l397Qc' onClose={() => this.setState({isOpen: false})} />
                        <img src={play_ico} onClick={this.openModal} className="img-fluid mb-4 Cursor-pointer" alt=""/>
                        <h4 className="text-white text-uppercase Experiencia-h4">La experiencia <br/> <span
                            className="font-weight-normal">de volar en globo</span></h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default Experiencia_volarGlobo;

