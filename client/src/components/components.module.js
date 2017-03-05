import auth from './auth/auth.module';
import browse from './browse/browse.module';
import dashboard from './dashboard/dashboard.module';

const components = angular
  .module('components', [
    auth,
    browse,
    dashboard
  ])
  .name;

export default components;