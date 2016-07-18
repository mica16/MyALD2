import config from './home.config'
import homeController from './home.controller';
import './home.scss';
import 'ionic-angular/release/js/ionic.bundle';

export default angular.module('home', [
    'ui.router'
]).config(config)
    .controller('HomeController', homeController)
    .name;
