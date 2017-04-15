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
    { user: 1, recipient: 2, message: 'Hello!', read: true, updatedAt: '2017-03-30T17:57:51.816Z' },
    { user: 2, recipient: 1, message: 'Sup Dude!', read: true, updatedAt: '2017-03-31T17:57:51.816Z' },
    { user: 1, recipient: 2, message: 'Not much...', read: false, updatedAt: '2017-04-01T17:57:51.816Z' },
    { user: 2, recipient: 3, message: 'Would you pay $65', read: false, updatedAt: '2017-04-01T17:57:51.816Z' },
    { user: 1, recipient: 3, message: 'its me!', read: false, updatedAt: '2017-04-01T17:57:51.816Z' },
    { user: 1, recipient: 2, message: 'We should trade!', read: false, updatedAt: '2017-04-01T17:57:51.816Z' },
  ]
};

