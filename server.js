//require packages

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//choosing port for app
var PORT = process.env.PORT || 3000;

var app = express();

//Set up the server to handle data parsing 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require('./controllers/order_controller.js');

app.use(routes);





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

// //post route for new order from homepage
// router.post("/api/order-add", function(req, res){

// 	console.log("Request complete: ", req.body);

// 	var data = req.body;

	

// 	orders.push(data);

	
// 	orm.addOrder(new_orders,[req.table, req.server, req.food, req.notes, req.status], cb);
		
// 	// var queryString = "INSERT INTO new_orders (table_number, server_number, food_items, notes, order_complete) VALUES (?, ?, ?, ?, ?)";

	

// 	// connection.query(queryString, [data.table, data.server, data.food, data.notes, data.status] ,function(err, res){

// 	// 	if (err) throw err;

// 	// });

// 	// res.json(data);
		
// });


//========================
//listener event for when server starts 

app.listen(PORT, function(){

console.log("App listening on PORT " + PORT);

});




