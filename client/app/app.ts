import 'ionic-angular/release/js/ionic.bundle';
import config from './app.config';
import Common from './common/common';
import Components from './components/components';
import './app.scss';
import {Splashscreen} from 'ionic-native';
import IonicPlatformService = ionic.platform.IonicPlatformService;

angular.module('app', [
    'ionic',
    'ui.router',
    Common,
    Components
]).config(config)
    .run(run);

function run($ionicPlatform:IonicPlatformService, $timeout) {
    $ionicPlatform.ready(function () {
        if(ionic.Platform.isWebView())
        $timeout(function () {
            Splashscreen.hide();
        }, 500);
    });
}
