
import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import './Dropzone.css';
import DropzoneComponent from 'react-dropzone-component';

class Dropzone_clase extends React.Component {
    constructor() {
        super()
        this.state = { files: [] }
    }

     componentConfig = {
        iconFiletypes: ['.jpg', '.png', '.gif'],
        showFiletypeIcon: true,
        postUrl: '/uploadHandler'
    };

     djsConfig = { autoProcessQueue: false }
     eventHandlers = { addedfile: (file) => console.log(file) }
    render() {
        return (
            <DropzoneComponent config={this.componentConfig}
                               eventHandlers={this.eventHandlers}
                               djsConfig={this.djsConfig} />
        );
    }
}

export default Dropzone_clase;
