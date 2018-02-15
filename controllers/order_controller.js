
var express = require('express');

var router = express.Router();

var order = require('../model/orderHandler.js');



//route for order sent from homescreen 

router.post("/api/order-add", function(req, res) {
  order.createOrder([
    "table_number", "server_number", "food_items", "notes", "order_complete"
  ], [
    req.body.table, req.body.server, req.body.food, req.body.notes, req.body.status
  ], function(result) {
    
    	if(err){
    		throw err;
    	}
    	else{
    		console.log("Entered into database");
    	}
  });
});

module.exports = router;