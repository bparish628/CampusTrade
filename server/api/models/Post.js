/**
 * Post.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: { type: 'string', required: true },
    description: { type: 'string', required: true },
    location: { type: 'string', defaultsTo: 'None' },
    price: { type: 'float', required: true },
    category: { type: 'integer', model: 'category', required: true },
    image: { type: 'string', defaultsTo: null },
    user: { type: 'integer', model: 'user', required: true }
  },

  seedData: [
    { name: 'Physics book', description: 'This book is in good condition', price: '15.00', category: 1, user: 1 },
    { name: 'Red couch', description: 'My grandma\'s couch.', price: '45.00', category: 6, user: 1 },
    { name: 'Lamp', description: 'This lamp lights this place up!', price: '8.00', category: 2, user: 2 },
    { name: 'Software Engineering Book', description: 'Book for software engineering', price: '60.00', category: 1, user: 1 },
    { name: 'Riot Points ($20)', description: '$20 worth of riot points', price: '19.99', category: 5, user: 3 },
    { name: 'Apple Macbook Pro', description: '2012 Edition', price: '450.00', category: 4, user: 3 }
  ]
};

