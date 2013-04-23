// Include the required modules
var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);

// Let the app listen op port 1337
server.listen(1337);

// Set the console message
console.log('Application accessible at http://localhost:1337');

// Configure the application
app.configure(function() {
	// Enable the bodyParser so we can access POST data
	app.use(express.bodyParser());
	
	// Enable the cookieParser so we can work with cookies
	app.use(express.cookieParser('super-duper-secret'));

	// add req.session cookie support
	app.use(express.cookieSession());

	// Enable the logging
	app.use(express.logger('dev'));

	// Set the path to the public directory
	app.use(express.static(__dirname + '/public'));

	// Set the views directory
	app.set('views', __dirname + '/views');

	// Set the view engine
	app.set('view engine', 'jade');
});

// Todo index page (homepage)
app.get('/', function(req, res) {
	res.render('index');
});

// Contains all clients
var clients = {};

io.sockets.on('connection', function(socket) {

	// Add the client to the list of clients
	clients[socket.id] = socket;

	// A user has clicked on the link
	socket.on('msg', function(data) {

		// Strip the HTML tags
		var message = data.message.replace(/<(?:.|\n)*?>/gm, '');

		// Set the currentdate
		var curDate = new Date();
		var timestamp = curDate.getHours() + ':' + curDate.getMinutes();

		// Send back a message
		io.sockets.emit('newMessage', { 'message': message, 'timestamp': timestamp });
	});
});


