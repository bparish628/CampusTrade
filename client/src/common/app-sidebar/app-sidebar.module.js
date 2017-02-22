import appSidebarComponent from './app-sidebar.component';
import './app-sidebar.scss'

const appSidebar = angular
  .module('common.app-sidebar', [])
  .component('appSidebar', appSidebarComponent)
  .name;

export default appSidebar;