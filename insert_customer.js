var mysql = require('mysql');
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database: "mydb"
});
con.connect(function(err){
    if(err) throw err;
    console.log("connect");
    var sql ="INSERT INTO Customers (name,address) VALUES('Jason','Highway 37')";
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log("Customer Created.");
    })

})