import appFooter from './app-footer/app-footer.module';
import appHeader from './app-header/app-header.module';
import appSidebar from './app-sidebar/app-sidebar.module';

const common = angular
  .module('common', [
    appHeader,
    appFooter,
    appSidebar
  ])
  .name;

export default common;