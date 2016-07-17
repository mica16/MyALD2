import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import Sidemenu from './sidemenu/sidemenu';

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  User,
  Sidemenu
])

.name;

export default commonModule;
