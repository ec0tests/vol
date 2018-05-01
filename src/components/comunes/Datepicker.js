import React from 'react';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';
import './Datepicker.css';

import DatePicker from 'react-date-picker';
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class Datepicker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: "",
        };
    }

    onChange = date => this.setState({ date })

    render() {
        if (this.props.tipo == 'inline') {
            return  <div className="Datepicker-inline">
                <DatePicker
                    onChange={this.onChange}
                    isOpen="true"

                    value={this.state.date}
                />
            </div>
        }
        else {
            return  <div>
                <DatePicker
                    onChange={this.onChange}

                    value={this.state.date}
                />
            </div>
        }
    }
}

export default Datepicker;