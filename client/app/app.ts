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

function run($ionicPlatform:IonicPlatformService, $timeout, $http) {
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
                $http.post("http://192.168.200.169:3001/registrationIds", {registrationId: data.registrationId}).then(function () {
                    alert("This device whose registrationId is: " + data.registrationId + " is now registered!");
                }, function (e) {
                    alert(JSON.stringify(e));
                });
            });
            push.on('error', (e) => {
                alert(e.message);
            });
        }, 500);

    });
}
