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

app.engine("handlebars", exphbs({ defaultLayout: "main.html" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require('./controllers/order_controller.js');

app.use(routes);



// var orders = [];



//HTML ROUTES

//homepage route
app.get("/", function(req, res) {

  res.sendFile(path.join(__dirname, 'views/homescreen.html'));

});

var order = require('./model/orderHandler.js');

//kitchen view route 
app.get("/kitchen", function(req, res) {
// console.log('req', req);
  // res.sendFile(path.join(__dirname, 'views/layouts/main.html'));

  // app.get("/api/pull-orders", function(req, data){
  // 	console.log('data', data);

  // 	res.render("index", { order: data });

  // });
	order.readNewOrder("new_orders", 0, function(result, err){

		if(err){
			throw err;
		}
		else{

			console.log("read db successfully");

			console.log("orders:", result);

			res.render("index", { order: result });
			// res.send(result);
		}

	});
});

app.delete("/api/delete-order/:id", function(req,res){

	order.deleteOrder("new_orders", [req.params.id], function(result, err){

		if(err){
			throw err;
		}
		else{
		
		console.log("deleted successfully");
		
		}
	});

});




//listener event for when server starts 

app.listen(PORT, function(){

console.log("App listening on PORT " + PORT);

});




