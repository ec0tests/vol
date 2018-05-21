/*
import React, {Component} from 'react';
import './File_upload.css';
import './dropify.min.js';

    $(document).ready(function() {
    // Basic
    $('.dropify').dropify();

    // Translated
    $('.dropify-fr').dropify({
    messages: {
    default: 'Glissez-déposez un fichier ici ou cliquez',
    replace: 'Glissez-déposez un fichier ou cliquez pour remplacer',
    remove: 'Supprimer',
    error: 'Désolé, le fichier trop volumineux'
}
});

    // Used events
    var drEvent = $('#input-file-events').dropify();

    drEvent.on('dropify.beforeClear', function(event, element) {
    return confirm("Do you really want to delete \"" + element.file.name + "\" ?");
});

    drEvent.on('dropify.afterClear', function(event, element) {
    alert('File deleted');
});

    drEvent.on('dropify.errors', function(event, element) {
    console.log('Has Errors');
});

    var drDestroy = $('#input-file-to-destroy').dropify();
    drDestroy = drDestroy.data('dropify')
    $('#toggleDropify').on('click', function(e) {
    e.preventDefault();
    if (drDestroy.isDropified()) {
    drDestroy.destroy();
} else {
    drDestroy.init();
}
})
});


const File_upload = () =>
    <div class="card">
        <div class="card-body">
            <h4 class="card-title">File Upload1</h4>
            <label for="input-file-now">Your so fresh input file — Default version</label>
            <input type="file" id="input-file-now" class="dropify"/>
        </div>
    </div>


export default File_upload;



*/
