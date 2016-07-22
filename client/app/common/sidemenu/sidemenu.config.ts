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
