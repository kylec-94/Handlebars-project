

//require the exported connection module

var connection = require('./connection.js');

var orm = {

	create: function(table, cols, vals, cb){
		
		var queryString = "INSERT INTO " + table;

		queryString += " (";
    	queryString += cols.toString();
    	queryString += ") ";
    	queryString += "VALUES (";
   		queryString += JSON.stringify(vals).replace('[','').replace(']','');
    	queryString += ") ";

    	console.log(queryString);
		
		connection.query(queryString, function(err, result){

		if (err){
			throw err;
		}

		cb(result);
		});//end query connection

	},//end create	

	readNewOrder: function(table, vals, cb){

		var queryString = "SELECT * FROM " + table;

		queryString += " WHERE order_complete = " + vals;
console.log('queryString', queryString);
		connection.query(queryString, function(err, result){

			if (err){
				throw err;
			}
			cb(result);
		});
	},

	delete: function(table, val, cb) {

    var queryString = "DELETE FROM " + table;

    queryString += " WHERE id = ";

    queryString += val;
    
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }

};//end of orm object

module.exports = orm;

