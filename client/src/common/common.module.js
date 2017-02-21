import appFooter from './app-footer/app-footer.module';

const common = angular
  .module('common', [
    appFooter
  ])
  .name;

export default common;