/**
 * Wishlist.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    post: { type: 'integer', model: 'post' },
    user: { type: 'integer', model: 'user', required: true }
  },

  seedData: [
    { post: 1, user: 1 }
  ]
};

