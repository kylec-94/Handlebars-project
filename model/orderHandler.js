
//import ORM

var orm = require('../config/orm.js');

var order = {

	// The variables cols and vals are arrays.
  createOrder: function(cols, vals, cb) {
    orm.create("new_orders", cols, vals, function(res) {
      cb(res);
    });
  },

  moveOrder: function(vals, cb) {
    orm.create("completed_orders", vals, function(res) {
      cb(res);
    });
  },

  deleteOrder: function(table, condition, cb) {
    orm.delete("new_orders", table, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = order;