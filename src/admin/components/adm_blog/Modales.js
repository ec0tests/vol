import React, {Component} from 'react';


import './Post.css';
import $ from 'jquery';





class Modal extends React.Component {
editarPost(){
    $("#editor_post").fadeIn(600);
    $("#post_titulo").val(this.props.titulo);
    $("#post_subtitulo").val(this.props.subtitulo);
    $("#post_contenido").val(this.props.contenido);
}

borrarPost(){
    $("#titulo_post").val(this.props.titulo);
    $("#subtitulo_post").val(this.props.subtitulo);
}

    render() {

        return (
<div>

    <div className="modal fade" id="modal_borrar_post" tabindex="-1" role="dialog" aria-labelledby="modal_borrar_post" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h3 className="modal-title" id="modal_borrar_post">Estás seguro de que quieres borrar este post?</h3>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-Body m-3">


                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
                    <button type="button" className="btn btn-primary" onClick={this.borrarPost.bind(this)}>Sí</button>
                </div>
            </div>
        </div>
    </div>
</div>



        )

    }
}


export default Modal;