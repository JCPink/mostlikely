//var config = require ('./config').values

var app = require ('./app').getApp()

var port =  process.env.PORT || 8080;
app.listen(port);

//create handler for socket.io
var race = require ('./lib/modules/race')
race.createRace(app);

//console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);

process.on('SIGINT', function () {
	app.close();
	console.log();
	console.log('Shutting down server...');
	process.exit(0);
});
