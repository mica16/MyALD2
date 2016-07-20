import 'ionic-angular/release/js/ionic.bundle';
import Common from './common/common';
import Components from './components/components';
import './app.scss';

angular.module('app', [
    'ionic',
    'ui.router',
    Common,
    Components
])
    .config(($stateProvider, $urlRouterProvider) => {
        "ngInject";
        $urlRouterProvider.otherwise('/sidemenu/home');
    });
