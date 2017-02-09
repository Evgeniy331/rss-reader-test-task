var Repository = require("../units/Repository");
var Channel = require("../schemas/channel");

var ChannelRepository = function(){
	Repository.prototype.constructor.call(this);
	this.model = Channel;
};

ChannelRepository.prototype = new Repository();

module.exports = new ChannelRepository();