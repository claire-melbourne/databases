var mysql = require('mysql');
dbConnect = mysql.createConnection({
  user: 'root',
  // password: 'student',
  database: 'chat'
});

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

dbConnect.connect();

module.exports.dbConnect;
