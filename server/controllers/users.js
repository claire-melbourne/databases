var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll(function(err, data) {
      if (err) {
        throw error;
      }
      res.JSON(data);
    })
  },
  post: function (req, res) {
    var parameters = [req.body[username]];
    models.users.create(parameters, function(err, data) {
      if(err) {
        throw error;
      }
      res.sendStatus(201);
    })
  }
};
