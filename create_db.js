var mysql = require('mysql');
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    passwod:"",
    database:"mydb"
});
confirm.connect(function(err){
    if(err) throw err;
    console.log("Connected!");

    confirm.query("CREATE DATABASE IF NOT EXISTS mydb",function
        (err,result) {
            if(err) throw err;
            console.log("Database created")
        }
    );
});