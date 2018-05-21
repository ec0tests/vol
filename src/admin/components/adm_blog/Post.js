import React, {Component} from 'react';


import './Post.css';
import $ from 'jquery';





class Post extends React.Component {
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
    <li className="dd-item " data-id="1">
        <div className="dd-handle Pregunta-adm">
            <h6 className="mb-0">{this.props.titulo}-{this.props.fecha}-{this.props.visitas}
                <button data-toggle="modal" data-target="#exampleModal"  className="P-absolute Cross-adm"><i
                    className="fas fa-times"></i></button>
                <button onClick={this.editarPost.bind(this)} className="P-absolute Edit-adm"><i
                    className="fas fa-pencil-alt "></i></button>
            </h6>

        </div>
    </li>
    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h3 className="modal-title" id="exampleModalLabel">Estás seguro de que quieres borrar este post?</h3>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-Body m-3">
                   <h5 className="mb-4">Datos del post: </h5>
                   <h6>Titulo:<small><input type="text" id="titulo_post" className="Btn-transparent" value={this.props.titulo} /> </small></h6>
                    <h6>Subtítulo:<small><input type="text" id="subtitulo_post" className="Btn-transparent" value={this.props.subtitulo} /> </small></h6>


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


export default Post;