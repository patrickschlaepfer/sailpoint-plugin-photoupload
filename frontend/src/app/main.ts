'use strict';

// java libs
import 'angular';
import 'angular-sanitize';
import 'angular-route';
import 'angular-ui-bootstrap';
import 'dropzone';
import 'ngdropzone';

// Vendor specific js
import {PhotoUploadController} from './photos/photo-upload.component';

import photoUploadTmpl from './photos/photo-upload.component.html'

import '../../node_modules/dropzone/dist/dropzone.css'
import '../../node_modules/ngdropzone/dist/ng-dropzone.css'

angular.module('PhotoUploadApp',
[
  'ngRoute',
  'ui.bootstrap',
  'ngSanitize',
  'thatisuday.dropzone'
])

// Services


// Controllers
.controller('PhotoUploadController',PhotoUploadController)

.filter('',)

.config(($routeProvider: ng.Route.IRouteProvider) => {
  $routeProvider
  .when('/', {
    template: photoUploadTmpl, controller: 'PhotoUploadController', controllerAs: 'photoupload'
  })
})

.config(function(dropzoneOpsProvider){
        dropzoneOpsProvider.setOptions({
            url : '/upload',
            acceptedFiles : 'image/jpeg, images/jpg, image/png',
            addRemoveLinks : true,
            dictDefaultMessage : 'Click to add or drop photos (10 max)',
            dictRemoveFile : 'Remove photo',
            dictResponseError : 'Could not upload this photo'
        });
});
