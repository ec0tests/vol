/* eslint max-len: 0 */
/* eslint no-console: 0 */
import React from 'react';
import '../comunes/datatable/2/Datatable.css';
import {BootstrapTable, TableHeaderColumn, DeleteButton} from 'react-bootstrap-table';

import $ from 'jquery';


//...


const selectRow = {
    mode: 'radio' //radio or checkbox
};
/*addProducts(5);*/

function afterSearch(searchText, result) {
    console.log('Your search text is ' + searchText);
    console.log('Result is:');
    for (let i = 0; i < result.length; i++) {
        console.log('Fruit: ' + result[i].id + ', ' + result[i].name + ', ' + result[i].price);
    }
}






export default class Datatable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: props.modal,
        };
    }
    handleDeleteButtonClick = (onClick) => {
        // Custom your onClick event here,
        // it's not necessary to implement this function if you have no any process before onClick
        console.log('This is my custom function for DeleteButton click event');
        onClick();
    }
    createCustomDeleteButton = (onClick) => {
        return (
            <DeleteButton
                btnText='Desvincular '
                btnContextual='btn-danger'
                className='my-custom-class'
                /*btnGlyphicon='glyphicon-edit'*/
                onClick={ () => this.handleDeleteButtonClick(onClick) }/>
        );
    }

    options = {
        afterSearch: afterSearch,  // define a after search hook,
        onRowClick: function(row, columnIndex, rowIndex, e) {
            $("#post_titulo").val(row.titulo);
            $("#post_subtitulo").val(row.subtitulo);
            $("#post_contenido").html(row.contenido);


        },
        deleteBtn: this.createCustomDeleteButton,

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


            return (
                <BootstrapTable data={this.data} search={true}    strictSearch={false} pagination selectRow={ selectRow }
                                deleteRow   options={this.options}>
                    <TableHeaderColumn dataField='id' width='40' isKey={true} searchable={false}> ID</TableHeaderColumn>
                    {this.array_columnas[0]}
                    {this.array_columnas[1]}
                    {this.array_columnas[2]}
                </BootstrapTable>
            );
        }

}
