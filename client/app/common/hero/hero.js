import heroComponent from './hero.component';

let heroModule = angular.module('hero', [
  'ui.router'
])

.component('hero', heroComponent)

.name;

export default heroModule;
