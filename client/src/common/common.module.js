import appFooter from './app-footer/app-footer.module';
import appHeader from './app-header/app-header.module';

const common = angular
  .module('common', [
    appHeader,
    appFooter
  ])
  .name;

export default common;