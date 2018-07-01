/* eslint max-len: 0 */
/* eslint no-console: 0 */
import React from 'react';
import './Datatable.css';
import {BootstrapTable, TableHeaderColumn,SearchField } from 'react-bootstrap-table';

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
            <button className='btn btn-info' data-toggle="modal"  data-target="#modal_contacto">Ver / Editar</button>
        );
    }
}

function actionFormatter(cell, row) {
    return <ActionFormatter />;
}



export default class Datatable extends React.Component {
    constructor(props) {
        super(props);
    }

    options = this.props.options;

     data = this.props.data;





    render() {


        if(this.props.accion==true){
            return (
             <BootstrapTable data={this.data} search={true} searchPlaceholder={'Buscar'}   strictSearch={false} pagination  exportCSV options={this.options}>
                <TableHeaderColumn dataField='id' width='40' dataSort={ true } isKey={true} searchable={false}> ID</TableHeaderColumn>
                 <TableHeaderColumn dataField='nombre' dataSort={ true } width='120' searchable={true}>Nombre</TableHeaderColumn>
                 <TableHeaderColumn dataField='personas' dataSort={ true }  width='90'>Personas</TableHeaderColumn>
                 <TableHeaderColumn dataField='especiales'  dataSort={ true } width='100'>Especiales</TableHeaderColumn>
                 <TableHeaderColumn dataField='tipo_vuelo' width='120'>Tipo Vuelo</TableHeaderColumn>
                 <TableHeaderColumn dataField='fecha' width='120' searchable={true}>Fecha</TableHeaderColumn>
                 <TableHeaderColumn dataField='action' width='120' dataFormat={ actionFormatter } export={ false }></TableHeaderColumn>

             </BootstrapTable>
            );

        }else{
            return (
                <BootstrapTable data={this.data} search={true}   strictSearch={false} pagination  exportCSV options={this.options}>
                    <TableHeaderColumn dataField='id' width='40' isKey={true} searchable={false}> ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='nombre' dataSort={ true } searchable={true}>Nombre</TableHeaderColumn>
                    <TableHeaderColumn dataField='personas' dataSort={ true }  width='90'>Personas</TableHeaderColumn>
                    <TableHeaderColumn dataField='especiales' dataSort={ true }  width='100'>Especiales</TableHeaderColumn>
                    <TableHeaderColumn dataField='tipo_vuelo'>Tipo Vuelo</TableHeaderColumn>
                    <TableHeaderColumn dataField='fecha' searchable={true}>Fecha</TableHeaderColumn>
                </BootstrapTable>
            );
        }

    }
}
