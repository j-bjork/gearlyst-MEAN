var mongoose = require('mongoose');

/*module.exports = mongoose.model('Item', {
	name: String
});*/


var ItemSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
  note: String
});

module.exports = mongoose.model('Item', ItemSchema);