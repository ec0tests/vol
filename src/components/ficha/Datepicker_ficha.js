
import React, {Component} from 'react';
import Datepicker from './CreateDatepicker_ficha';
import moment from 'react-datepicker';




class Datepicker_ficha extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    render() {

        return (

            <div className="col-md-12 p-0 ">
                <Datepicker/>
            </div>
        )

    }
}


export default Datepicker_ficha;