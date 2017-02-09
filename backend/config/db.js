module.exports = {
	uri: "mongodb://localhost/rss-channels-app",
	opts: {
		server: { 
			auto_reconnect: true,
			poolSize: 40
		},
		user: "root"
	}
};