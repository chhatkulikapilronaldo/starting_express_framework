// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'',
  port:'3306',
  database:'loginsystem'
});
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
connection.execute('SELECT * FROM `signup`',
function(err, results, fields) {
  console.log(results); // results contains rows returned by server
//   console.log(fields); // fields contains extra meta data about results, if available

  // If you execute same statement again, it will be picked from a LRU cache
  // which will save query preparation time and give better performance
});