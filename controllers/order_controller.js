
var express = require('express');
var app = express();

var router = express.Router();

var order = require('../model/orderHandler.js');



//route for order sent from homescreen 

router.post("/api/order-add", function(req, res) {
	console.log("req.body:", JSON.stringify(req.body, null, 2));
  order.createOrder(["table_number", "server_number", "food_items", "notes", "order_complete"], 
  					[req.body.table, req.body.server, req.body.food, req.body.notes, req.body.status], 
  					function(result, err) {
    
    						if(err){
    							throw err;
    						}
    						else{
    							res.json();
    							console.log("Entered into database");
    						}
  });
});

//pull orders to kitchen page
router.get("/api/pull-orders", function(req, res){

	console.log('res: ', res);

	order.readNewOrder("restaurant_pos_db", "0", function(result, err){

		if(err){
			throw err;
		}
		else{

			console.log("read db successfully");

			console.log("orders:", result);

			// res.render("index", { order: result });
			res.send(result);
		}

	});


});

//change status of order
router.put("/api/change-order", function(req, res){

	order.changeOrder


});







module.exports = router;