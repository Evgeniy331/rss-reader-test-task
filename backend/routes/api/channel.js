const router = require("express").Router();
const channelRepository = require("../../repositories/channel");

var Feed = require("rss-to-json");

//get all channels
router.get("/", (req, res, next) => {

	channelRepository.getAll(function(err, data) {
		
		if (err) 
			throw err;

        res.json(data);
    });

});


router.delete("/:id", (req, res, next) => {
	
	var channelID = req.params.id || "";

	channelRepository.delete(channelID, function(err) {
		
		if (err) 
			throw err;

		res.send("Deleted");

    });
});

router.post('/', (req, res, next) => {

	console.log("ZASHEL");

	channelRepository.add(req.body, function(err, data){
        res.json(data);
    });

});

module.exports = router;