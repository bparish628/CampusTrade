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
    dateOfBirth: { type: 'string', required: true }
  },

  
  register: function (inputs, cb) {
    User.create({
      // name: inputs.name,
      email: inputs.email,
      password: inputs.password
    })
    .exec(cb);
  },

  login: function (inputs, cb) {
    User.findOne({
      email: inputs.email,
      password: inputs.password
    })
    .exec(cb);
  }
};

