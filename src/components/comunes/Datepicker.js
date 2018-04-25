import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';
import './Datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class Datepicker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    render() {
        if (this.props.tipo == 'inline') {
            return <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
                inline
                /*isClearable={true}*/
                className="Btn-gris-sinfondo text-center Dateppicker-input Cursor-pointer"
                placeholderText="Fechas"
            />
        }
        else {
            return <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}

                /*isClearable={true}*/
                className="Btn-gris-sinfondo text-center Dateppicker-input Cursor-pointer"
                placeholderText="Fechas"
            />
        }
    }
}

export default Datepicker;