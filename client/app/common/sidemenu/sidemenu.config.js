"use strict";
/// <reference path="../../../../typings/globals/angular-ui-router/index.d.ts" />
/// <reference path="../../../../typings/globals/es6-promise/index.d.ts" />
/// <reference path="../../../../typings/globals/angular/index.d.ts" />
/// <reference path="../../../../typings/globals/jquery/index.d.ts" />
exports.__esModule = true;
exports["default"] = function ($stateProvider) {
    "ngInject";
    $stateProvider
        .state('sidemenu', {
        url: '/sidemenu',
        abstract: true,
        template: require('./sidemenu.html')
    });
};
//# sourceMappingURL=sidemenu.config.js.map