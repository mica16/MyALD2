declare function require(n:String)
export default ($urlRouterProvider) => {
    "ngInject";
    $urlRouterProvider.otherwise('/sidemenu/home');
}
