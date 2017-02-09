var Channel = require("../schemas/channel");;

var mongoose = require("mongoose");
var ObjectId = mongoose.Types.ObjectId;

module.exports = function () {

		let channels = [];

		channels.push(
			new Channel ({
				title: "CNN.com",
				url: "http://rss.cnn.com/rss/cnn_topstories.rss"
			}).toObject()
		);

		channels.push(
			new Channel ({
				title: "New York Times Home Page",
				url: "http://feeds.nytimes.com/nyt/rss/HomePage"
			}).toObject()
		);

		channels.push(
			new Channel ({
				title: "KSL Local Stories",
				url: "http://www.ksl.com/xml/148.rss"
			}).toObject()
		);

		channels.push(
			new Channel ({
				title: "AP Top U.S. News",
				url: "http://hosted.ap.org/lineups/USHEADS-rss_2.0.xml?SITE=RANDOM&SECTION=HOME"
			}).toObject()
		);

		channels.push(
			new Channel ({
				title: "New York Times > Utah",
				url: "http://topics.nytimes.com/top/news/national/usstatesterritoriesandpossessions/utah/index.html?inline=nyt-geo&rss=1"
			}).toObject()
		);

		channels.push(
			new Channel ({
				title: "Кино премьеры",
				url: "http://www.russiaru.net/rss/kinopremery.xml"
			}).toObject()
		);

		return {
			channels: channels
		};
	}
