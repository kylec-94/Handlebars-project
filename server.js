//require packages

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mysql = require('mysql');

//turn 'express' into an easier variable to handle
var app = express();

//choosing port for app
var PORT = 3000;

//establish connection for SQL
//create connection to the SQL table 
var connection = sql.createConnection({

	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '',
	database: 'restaurant_POS_db'

});

//Set up the server to handle data parsing 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//========================
//HTML ROUTES

//homepage route
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, 'views/homescreen.html'));
});

//kitchen view route 
app.get("/kitchen", function(req, res) {
  res.sendFile(path.join(__dirname, '.html'));
});


//========================
//api routes

//post route for new order from homepage
app.post("/order-add", function(data){

var query = "INSERT INTO ?? VALUES (?, ?, ? , ?, ?)";



});


//========================
//listener event for when server starts 

app.listen(PORT, function(){

console.log("App listening on PORT " + PORT);

});