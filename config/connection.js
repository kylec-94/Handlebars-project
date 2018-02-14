
//======================
//CONNECTION TO DB

//require package
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "restaurant_POS_db"
});

//connect and throw err if can't connect
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//export the module 
module.exports = connection;