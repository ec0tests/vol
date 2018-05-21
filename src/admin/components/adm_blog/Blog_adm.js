import React, {Component} from 'react';
import '../../css/style.css';
import '../../css/colors/blue.css';
import '../comunes/Nestable.css';
import './Blog_adm.css';
import Adm_header from '../comunes/header/Header';
import Adm_menu from '../comunes/menu/Menu';
import Text_editor from '../comunes/text_editor/Text_editor';
import Post from './Post';
import $ from "jquery";

/*import File_upload from '../comunes/file_upload/File_upload';*/


class Blog_adm extends React.Component {
    crearPost(){
        $('#blog_form')[0].reset();

        $("#editor_post").fadeIn(600);
    }
    render() {

        return (
            <div className="fix-header fix-sidebar card-no-border logo-center">

                <div id="main-wrapper">
                    <Adm_header/>
                    <Adm_menu/>
                    <div className="page-wrapper">
                        <div className="container-fluid">
                            <div className="row page-titles">
                                <div className="col-md-5 col-8 align-self-center">
                                    <h3 className="text-themecolor m-b-0 m-t-0 text-left">Blog</h3>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                                        <li className="breadcrumb-item active">Blog</li>
                                    </ol>
                                </div>

                            </div>


                            <div className="row">
                                <div className="col-12 col-md-6">

                                    <div className="card Adm-card">
                                        <div className="card-body justify-content-start">
                                            <h4 className="card-title w-100"> Post publicados
                                                <button onClick={this.crearPost.bind(this)} className="d-inline Float-r Cursor-pointer Btn-transparent"><i
                                                    className="fas fa-plus-circle "></i></button></h4>
                                            <div className="myadmin-dd dd w-100 text-left" id="nestable">
                                                <ol className="dd-list ">
                                                    <Post titulo={"Post 1"} subtitulo={"subtitulo1"} contenido={"contenido1"} fecha={"22-02-2018"} visitas={"100"}/>
                                                    <Post titulo={"Post2"} subtitulo={"subtitulo2"} contenido={"contenido2"} fecha={"22-02-2018"} visitas={"100"}/>
                                                    <Post titulo={"Post3"} subtitulo={"subtitulo3"} contenido={"contenido3"} fecha={"22-02-2018"} visitas={"100"}/>
                                                    <Post titulo={"Post4"} subtitulo={"subtitulo4"} contenido={"contenido4"} fecha={"22-02-2018"} visitas={"100"}/>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="editor_post" className="col-12 col-md-6 Editor-vuelo">

                                    <div className="card Adm-card">
                                        <div className="card-body justify-content-start">
                                            <h4 className="card-title w-100"> Editor de post</h4>
                                            <form className="form-horizontal m-t-10" id="blog_form" name="blog_form">
                                                <div className="form-group">
                                                    <label>Título </label>
                                                    <input type="text" className="form-control" placeholder="Título"
                                                           name="post_titulo" id="post_titulo"/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Subtítulo </label>
                                                    <input type="text" className="form-control" placeholder="Título"
                                                           name="post_subtitulo" id="post_subtitulo"/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Imágen del post</label>
                                                    <input type="file" className="form-control" id="post_imagen"
                                                           aria-describedby="Imágen del post"/>
                                                </div>
                                                    <div className="form-group">
                                                        <label>Contenido del post</label>
                                                        <Text_editor/>
                                                    </div>
                                                <div class="form-group col-md-12 m-t-20 text-right">
                                                    <button type="submit" className="btn btn-info waves-effect waves-light my-1">Guardar</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )

    }
}

export default Blog_adm;
