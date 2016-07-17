import template from './navbar.html';
import controller from './navbar.controller';
import './navbar.scss';

let navbarComponent = {
  restrict: 'E',
  bindToController: {},
  template,
  controller
};

export default navbarComponent;
