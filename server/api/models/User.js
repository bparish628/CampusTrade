/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    email: { unique: true, type: 'email', required: true},
    password: { type: 'string', required: true },
    firstName: { type: 'string', required: true },
    lastName: { type: 'string', required: true },
    // dateOfBirth: { type: 'string', required: true }

    // Override toJSON instance method to remove password value
    toJSON: function() {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    }
  },
  
  register: function (inputs, cb) {
    User.create({
      email: inputs.email,
      password: inputs.password,
      firstName: inputs.firstName,
      lastName: inputs.lastName
    })
    .exec(cb);
  },

  login: function (inputs, cb) {
    User.findOne({
      email: inputs.email,
      password: inputs.password
    })
    .exec(cb);
  },

  seedData: [
    { email: 'test@test.com', password: 'password', firstName: 'Test', lastName: 'User' },
    { email: 'johndoe@campustrade.com', password: 'password', firstName: 'John', lastName: 'Doe' },
    { email: 'bobross@campustrade.com', password: 'password', firstName: 'Bob', lastName: 'Ross' }
  ]
};

