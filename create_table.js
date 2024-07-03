var mysql = require('mysql');
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    passwod:"",
    database:"mydb"
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    var sql = 'CREATE TABLE IF NOT EXISTS Customers ( ' +
              'id INT AUTO_INCREMENT PRIMARY KEY, ' +
              'name VARCHAR(20) NOT NULL, ' +
              'address VARCHAR(100) )';
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Table 'Customers' created");
    });

    con.end(); 
});
