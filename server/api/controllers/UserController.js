/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  login: function (req, res) {
    User.login({
      // name: req.param('name'),
      email: req.param('email'),
      password: req.param('password')
    }, function (err, user) {
      if (err) return res.negotiate(err);
      if (!user) {
        if (req.wantsJSON) {
          return res.badRequest('Invalid username/password combination.');
        }
        return res.redirect('/');
      }

      req.session.me = user;

      if (req.wantsJSON) {
        return res.ok(user);
      }

      return res.redirect('/welcome');
    });
  },

  logout: function (req, res) {
    req.session.me = null;

    if (req.wantsJSON) {
      return res.ok('Logged out successfully!');
    }

    return res.redirect('/');
  },


  register: function (req, res) {

    // Attempt to signup a user using the provided parameters
    User.register({
      firstName: req.param('firstName'),
      lastName: req.param('lastName'),
      email: req.param('email'),
      password: req.param('password')
    }, function (err, user) {
      if (err) return res.badRequest('Invalid credentials have been entered. Please check and resubmit');;
      req.session.me = user.id;

      if (req.wantsJSON) {
        return res.ok(user);
      }

      return res.redirect('/');
    });
  },

  current: function (req, res) {
    if (req.session.me) {
      return res.ok(req.session.me);
    }
    return res.badRequest('Not logged in.');
  }
};

