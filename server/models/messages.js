var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var qString = "SELECT messages.ID, messages.userMessage FROM messages LEFT OUTER JOIN users ON (messages.username_id = users.ID)" ;
    dbConnect.query(qString, (err, data) => {
      if(err) {
        throw err;
      }
      callback(null, data);
    })

  }, // a function which produces all the messages

  create: function (callback, parameters) {
    var qString = "INSERT INTO messages(userMessage, username_id) VALUES (?, (SELECT users.id FROM users WHERE users.username = (?)) )"
    dbConnect.query(qString, (err, parameters, results) => {
      if (err) {
        throw err;
      }
      callback(null, results);
    })
  } // a function which can be used to insert a message into the database
};
