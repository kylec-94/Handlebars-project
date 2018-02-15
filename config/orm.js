

//require the exported connection module

var connection = require('./connection.js');

var orm = {

	create: function(table, cols, vals, cb){
		
		var queryString = "INSERT INTO " + table;

		queryString += " (";
    	queryString += cols.toString();
    	queryString += ") ";
    	queryString += "VALUES (";
   		queryString += vals.toString();
    	queryString += ") ";

    	console.log(queryString);
		
		connection.query(queryString, vals, function(err, result){

		if (err){
			throw err;
		}

		cb(result);
		});//end query connection

	},//end create	



	delete: function(table, condition, cb) {

    var queryString = "DELETE FROM " + table;

    queryString += " WHERE ";

    queryString += condition;
    
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }

};//end of orm object

module.exports = orm;

