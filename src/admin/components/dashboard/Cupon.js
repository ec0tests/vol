import React, {Component} from 'react';


class Cupon extends React.Component {

    constructor(props){
        super(props);
    }


    render() {

        return (

            <li className="dd-item " data-id="1">
                    <div className="dd-handle Pregunta-adm">
                        <h6 className="mb-0">{this.props.cupon} - Ventas : {this.props.ventas} - Número de usos : {this.props.precio}</h6>

                    </div>
                </li>




        )

    }
}


export default Cupon;