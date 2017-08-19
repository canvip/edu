var mongoose = require('mongoose');
var schema = mongoose.Schema;

var customerSchema = new schema({
	name:String,
	phone : String,
	address : String,
	createDate: {type:Date, defaul:Date.now}
})

exports=mongoose.model('customer',customerSchema);