import appFooterComponent from './app-footer.component';
import './app-footer.scss';

const appFooter = angular
  .module('common.app-footer', [])
  .component('appFooter', appFooterComponent)
  .name;

export default appFooter;