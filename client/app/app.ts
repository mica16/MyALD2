import 'ionic-angular/release/js/ionic.bundle';
import config from './app.config';
import Common from './common/common';
import Components from './components/components';
import './app.scss';

angular.module('app', [
    'ionic',
    'ui.router',
    Common,
    Components
]).config(config);
