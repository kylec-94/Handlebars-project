//require packages

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mysql = require('mysql');

//turn 'express' into an easier variable to handle
var app = express();

//choosing port for app
var PORT = 3000;

//require orm package
var orm = require('./config/orm.js');
/* Importing the modules for existing orders */
var orderModule = require('./controllers/order_controller.js');

//Set up the server to handle data parsing 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var orders = [];
//========================
//HTML ROUTES

//homepage route
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, 'views/homescreen.html'));
});

//kitchen view route 
app.get("/kitchen", function(req, res) {
  res.sendFile(path.join(__dirname, 'views/kitchen.html'));
});

//test to see if data is transferring

app.get("/check-kitchen", function(req, res){

	res.json(orders);
});


//========================
//api routes

//post route for new order from homepage
app.post("/api/order-add", function(req, res){

	var data = req.body;

	orm.addOrder(data);

	orders.push(data);

});


//========================
//listener event for when server starts 

app.listen(PORT, function(){

console.log("App listening on PORT " + PORT);

});