import UserFactory from './user.factory';

let userModule = angular.module('user', [])

.factory('User', UserFactory)

.name;

export default userModule;
