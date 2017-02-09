const message = require("./message");
const channel = require("./channel");

module.exports = function(app){
	app.use("/api/message", message);
	app.use("/api/channel", channel);
};