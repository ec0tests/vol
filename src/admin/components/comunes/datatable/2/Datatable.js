/* eslint max-len: 0 */
/* eslint no-console: 0 */
import React from 'react';
import './Datatable.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import $ from 'jquery';



/*addProducts(5);*/

function afterSearch(searchText, result) {
    console.log('Your search text is ' + searchText);
    console.log('Result is:');
    for (let i = 0; i < result.length; i++) {
        console.log('Fruit: ' + result[i].id + ', ' + result[i].name + ', ' + result[i].price);
    }
}



class ActionFormatter extends React.Component {

    render() {
        return (
            <button className='btn btn-info' data-toggle="modal"  data-target="#modal_contacto">Ver</button>
        );
    }
}

function actionFormatter(cell, row) {
    return <ActionFormatter />;
}

export default class Datatable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: props.modal,
        };
    }

    options = {
        afterSearch: afterSearch,  // define a after search hook,
        onRowClick: function(row, columnIndex, rowIndex, e) {
            console.log(this.props)
            alert(`You click row id: ${row.id}, column index: ${columnIndex}, row index: ${rowIndex}`);
            console.log(e);


        },
        exportCSVText: 'Exportar a CSV',
        insertText: 'Crear',
        deleteText: 'Borrar',
        saveText: 'Guardar',
        closeText: 'Cerrar'
    };

     data = this.props.data;

    array_columnas = [];

    columnas = this.props.columnas;

    rellenar_columnas() {
        for (var i = 0; i < this.columnas.columnas.length; i++) {

            this.array_columnas.push(<TableHeaderColumn
                dataField={this.columnas.columnas[i].field}>{this.columnas.columnas[i].nombre}</TableHeaderColumn>)
        }
    }

    pintar_array() {
        for (var i = 0; i < this.array_columnas.length; i++) {
            return this.array_columnas[i];
        }
    }


    render() {

        this.rellenar_columnas();

        if(this.props.accion==true){
            return (
             <BootstrapTable data={this.data} search={true}   strictSearch={false} pagination  exportCSV options={this.options}>
                    <TableHeaderColumn dataField='id' width='40' isKey={true} searchable={false}> ID</TableHeaderColumn>
                    {this.array_columnas[0]}
                    {this.array_columnas[1]}
                    {this.array_columnas[2]}
                    <TableHeaderColumn dataField='action' width='120' dataFormat={ actionFormatter } export={ false }>Datos Contacto</TableHeaderColumn>
                </BootstrapTable>
            );

        }else{
            return (
                <BootstrapTable data={this.data} search={true}   strictSearch={false} pagination  exportCSV options={this.options}>
                    <TableHeaderColumn dataField='id' width='40' isKey={true} searchable={false}> ID</TableHeaderColumn>
                    {this.array_columnas[0]}
                    {this.array_columnas[1]}
                    {this.array_columnas[2]}
                </BootstrapTable>
            );
        }

    }
}
