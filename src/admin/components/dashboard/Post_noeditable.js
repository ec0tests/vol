import React, {Component} from 'react';


class Post_noeditable extends React.Component {

    constructor(props){
        super(props);
    }


    render() {

        return (

            <li className="dd-item " data-id="1">
                <div className="dd-handle Pregunta-adm">
                    <h6 className="mb-0">{this.props.titulo} - Número de visitas : {this.props.visitas}</h6>

                </div>
            </li>




        )

    }
}


export default Post_noeditable;