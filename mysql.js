const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'info',
  port: '3306'

});
  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    // var sql = "INSERT INTO login (username, password) VALUES ('hari', '1234')";
    // connection.query(sql, function (err, result) {
    //   if (err) throw err;
    //   console.log("1 record inserted");
//}
   // );
  });

connection.query(
    'SELECT * from `login`',
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );
  // const ab=connection.query(`select * 'login'`),
  // function(err,results,fields)
  //   console.log(ab);
  //   async function transfer {
  //     const contrast=await connection.query(ab){
  //       console.log(contrast)
  //     }
    
    
  }