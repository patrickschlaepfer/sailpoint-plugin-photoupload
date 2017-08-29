'use strict';

// java libs
import 'angular';
import 'angular-sanitize';
import 'angular-route';
import 'angular-ui-bootstrap';

// Vendor specific js
import {PhotoUploadController} from './photos/photo-upload.component';

import photoUploadTmpl from './photos/photo-upload.component.html'


angular.module('PhotoUploadApp',
[
  'ngRoute',
  'ui.bootstrap',
  'ngSanitize'
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
});s
