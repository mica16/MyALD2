"use strict";
/// <reference path="../../../../typings/globals/angular/index.d.ts" />
var sidemenu_config_1 = require('./sidemenu.config');
var sidemenu_controller_1 = require('./sidemenu.controller');
require('ionic-angular/release/js/ionic.bundle');
exports.__esModule = true;
exports["default"] = angular.module('sidemenu', [
    'ui.router'
]).config(sidemenu_config_1["default"])
    .controller('SidemenuController', sidemenu_controller_1["default"])
    .name;
//# sourceMappingURL=sidemenu.js.map