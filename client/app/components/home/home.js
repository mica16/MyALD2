"use strict";
/// <reference path="../../../../typings/globals/angular/index.d.ts" />
var home_config_1 = require('./home.config');
var home_controller_1 = require('./home.controller');
require('./home.scss');
exports.__esModule = true;
exports["default"] = angular.module('home', [
    'ui.router'
]).config(home_config_1["default"])
    .controller('HomeController', home_controller_1["default"])
    .name;
//# sourceMappingURL=home.js.map