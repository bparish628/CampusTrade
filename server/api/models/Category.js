/**
 * Category.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true,
      unique: true
    }
  },

  seedData: [
    { name: 'Books', icon: 'book' },
    { name: 'Electronics', icon: 'tv' },
    { name: 'Cell Phones', icon: 'smartphone' },
    { name: 'Computers', icon: 'computer' },
    { name: 'Games', icon: 'videogame_asset' },
    { name: 'Furniture', icon: 'weekend' },
    { name: 'Clothing', icon: 'watch' },
    { name: 'Vehicles', icon: 'motorcycle' },
    { name: 'Other', icon: 'local_offer' }
  ]
};

