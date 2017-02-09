var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var channelSchema = new Schema({
	title: String,
	url: String
});

module.exports = mongoose.model("Channel", channelSchema);