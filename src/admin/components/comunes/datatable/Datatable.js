import React, {Component} from 'react';
import './Datatable.css'

import $ from 'jquery'
$.DataTable = require('datatables.net');
class Datatable extends React.Component {
componentDidMount(){
this.$el= $(this.el)
this.$el.DataTable(
    {
    data: this.props.data,
    columns: this.props.columns


    })



}

    render() {

        return (
                <table className="display" width="100%" ref={el=>this.el = el}></table>
        )

    }
}

export default Datatable;
