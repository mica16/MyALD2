/// <reference path="../../../../typings/globals/angular/index.d.ts" />
import config from './sidemenu.config'
import sidemenuController from './sidemenu.controller';

export default angular.module('sidemenu', [
    'ui.router'
]).config(config)
    .controller('SidemenuController', sidemenuController)
    .name;
