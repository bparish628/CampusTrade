/**
 * User_Message.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    user: { type: 'integer', model: 'user' },
    recipient: { type: 'integer', model: 'user' },
    message: { type: 'string', size: 512 },
    read: { type: 'boolean' }
  },

  seedData: [
    { user: 1, recipient: 2, message: 'Hello!', read: true },
    { user: 2, recipient: 1, message: 'Sup Dude!', read: true },
    { user: 1, recipient: 2, message: 'Not much...', read: false },
  ]
};

