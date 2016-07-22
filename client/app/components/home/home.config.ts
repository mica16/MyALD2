declare function require(n:String)
export default ($stateProvider:ng.ui.IStateProvider) => {
    "ngInject";

    $stateProvider
        .state('sidemenu.home', {
            url: '/home',
            views: {
                'menuContent': {
                    template: require('./home.html'),
                    controllerAs: 'home',
                    controller: 'HomeController'
                }
            }

        });
}
