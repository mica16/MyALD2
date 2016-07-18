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
    .config(($locationProvider, $stateProvider, $urlRouterProvider) => {
        "ngInject";
        $urlRouterProvider.otherwise('/sidemenu/home');
        // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
        // #how-to-configure-your-server-to-work-with-html5mode
        $locationProvider.html5Mode(true).hashPrefix('!');
    });
