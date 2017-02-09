const router = require("express").Router();

var Feed = require("rss-to-json");

//get messages for channel
router.post("/", (req, res, next) => {

	Feed.load(req.body.url, function(err, rss) {
		
		if (err) 	
			res.status(400).send("Wrong url!");

		res.json(rss);
	});

});

module.exports = router;