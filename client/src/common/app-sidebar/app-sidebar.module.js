import appSidebarComponent from './app-sidebar.component';
import './app-sidebar.scss'

const appSidebar = angular
  .module('common.app-sidebar', [])
  .component('appSidebar', appSidebarComponent)
  .run($api => {
    $api.add({
      resource: 'wishlist',
      url: '/wishlist'
    });
  })
  .name;

export default appSidebar;