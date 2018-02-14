

//require the exported connection module

var connection = require('./connection.js');

var orm = {

	addOrder: function(data){


		//for loop b/c receiving data as JSON and need to loop through
		for (var i = 0; i < data.length; i++) {
		
		var queryString = "INSER INTO ?? VALUES (?, ?, ?, ?, ?)"

		connection.query(queryString, [new_orders, data[i].table, data[i].food, data[i].server, data[i].status], function(err, res){

			if (err) throw err;
			console.log(res);
		});
		}//end for loop 
	}//end addOrder

};

module.exports = orm;

