import 'ionic-angular/release/js/ionic.bundle';
import config from './app.config';
import Common from './common/common';
import Components from './components/components';
import './app.scss';
import {Push, Splashscreen} from 'ionic-native';
import IonicPlatformService = ionic.platform.IonicPlatformService;

angular.module('app', [
    'ionic',
    'ui.router',
    Common,
    Components
]).config(config)
    .run(run);

function run($ionicPlatform:IonicPlatformService, $timeout) {
    $ionicPlatform.ready(() => {
        if (!ionic.Platform.isWebView())
            return;
        $timeout(function () {
            Splashscreen.hide();
            let push = Push.init({
                ios: {
                    alert: "true",
                    badge: true,
                    sound: 'false'
                }
            });
            push.on('registration', (data) => {
                alert("device token -> " + data.registrationId);
                //TODO - send device token to server
            });
            push.on('error', (e) => {
                alert(e.message);
            });
        }, 500);

    });
}
