import messagesCreateComponent from './messages-create.component';

const messagesCreate = angular
  .module('components.browse..view.message', [])
  .component('messagesCreate', messagesCreateComponent)
  .name;

export default messagesCreate;