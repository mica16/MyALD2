/// <reference path="../../../../typings/globals/angular-ui-router/index.d.ts" />
/// <reference path="../../../../typings/globals/angular/index.d.ts" />
/// <reference path="../../../../typings/globals/jquery/index.d.ts" />
declare function require(n:String)
export default ($stateProvider:ng.ui.IStateProvider) => {
    "ngInject";

    $stateProvider
        .state('sidemenu', {
            url: '/sidemenu',
            abstract: true,
            template: require('./sidemenu.html')
        });
}
