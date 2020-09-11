var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var qString = "SELECT * FROM users";
    debugger;
    dbConnect.query(qString, (err, res)=> {
      if (err) {
        throw err;
      }
      callback(null, res);
    })
  },
  create: function (callback, parameters) {
    var qString = "INSERT INTO users(username) VALUES (?)";
    dbConnect.query(qString, (err, res)=> {
      if (err) {
        throw err;
      }
      callback(null, res);
    })
  }
};
