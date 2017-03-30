import auth from './auth/auth.module';
import browse from './browse/browse.module';
import dashboard from './dashboard/dashboard.module';
import messages from './messages/messages.module';
import profile from './profile/profile.module';

const components = angular
  .module('components', [
    auth,
    browse,
    dashboard,
    messages,
    profile
  ])
  .name;

export default components;