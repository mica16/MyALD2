import config from './sidemenu.config'
import sidemenuController from './sidemenu.controller';
import 'ionic-angular/release/js/ionic.bundle';

export default angular.module('sidemenu', [
    'ui.router'
]).config(config)
    .controller('SidemenuController', sidemenuController)
    .name;
