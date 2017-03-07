import auth from './auth/auth.module';
import browse from './browse/browse.module';
import dashboard from './dashboard/dashboard.module';
import messages from './messages/messages.module';

const components = angular
  .module('components', [
    auth,
    browse,
    dashboard,
    messages
  ])
  .name;

export default components;