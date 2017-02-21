import appHeaderComponent from './app-header.component';
import './app-header.scss'

const appHeader = angular
  .module('common.app-header', [])
  .component('appHeader', appHeaderComponent)
  .name;

export default appHeader;