var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll(function(err, data) {
      if (err) {
        throw error;
      }
      res.JSON(data)
    })
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    var parameters = [req.body[userMessage], req.body[user_id]];
    models.messages.create(parameters, function(err, result) {
      if (err) {
        throw error;
      }
      res.sendStatus(201);
    })
  } // a function which handles posting a message to the database
};
