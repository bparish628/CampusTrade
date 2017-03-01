import auth from './auth/auth.module';

const components = angular
  .module('components', [
    auth
  ])
  .name;

export default components;