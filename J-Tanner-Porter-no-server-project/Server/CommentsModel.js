var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Comments = Schema({
  name: { type: String},
	email: { type: String},
	message: { type: String}
});

module.exports = mongoose.model('Comments', Comments);
