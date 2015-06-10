'use strict';

// Styles
require('./assets/styles/main.scss');

// Vendors
require('./vendors/angular/angular.min');

// Initialize
(function () {
    var appModule = require('./modules/Sixpack.es6');
    angular.element(document).ready(function () {
        angular.bootstrap(document, [appModule]);
    });
});
