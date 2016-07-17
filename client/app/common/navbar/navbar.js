import navbarComponent from './navbar.component';

let navbarModule = angular.module('navbar', [
  'ui.router'
])

.component('navbar', navbarComponent)

.name;

export default navbarModule;
