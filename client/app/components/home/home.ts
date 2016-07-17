/// <reference path="../../../../typings/globals/angular/index.d.ts" />
import config from './home.config'
import homeController from './home.controller';
import './home.scss';

export default angular.module('home', [
    'ui.router'
]).config(config)
    .controller('HomeController', homeController)
    .name;
