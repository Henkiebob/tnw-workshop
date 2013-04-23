# Example chat application MTNW
An example chat application used to demonstrate the functionalities of Node.js combined with the Expressjs framework and Socket.io.


## Installing Node.js

### On Windows:
1. Install Node.js from www.nodejs.org
2. In the commandline: npm install -g nodemon


### On Mac OSX:
1. Install Node.js from www.nodejs.org
2. In the terminal: sudo npm install -g nodemon


### Check if Node.js and NPM are installed:
1. Open up the terminal of commandline
2. Run the command: node -v
3. Run the command: npm -v
4. Both of these commands should return a version number


## Running the application
1. Download the source from www.vbremer.nl/mtnw.zip
2. Extract the contents to a folder
3. Start your terminal, and find the files you just extracted
4. Run the command: npm install
5. Start the server by running: nodemon app.js
6. Check if the server is running by pointing your webbrowser to http://localhost:1337



## A nice cheatsheet for Socket.io

	// send to current request socket client
	socket.emit('newMessage', "you are connected");

	// sending to all clients, include sender
	io.sockets.emit('newMessage', "this is a test");

	// sending to all clients except sender
	socket.broadcast.emit('newMessage', "a new user connected");

	// sending to all clients in 'game' room(channel) except sender
	socket.broadcast.to('game').emit('newMessage', 'a new user joined the game room');

	 // sending to all clients in 'game' room(channel), include sender
	io.sockets.in('game').emit('newMessage', 'hello gamers');

	// sending to individual socketid
	io.sockets.socket(socketid).emit('newMessage', 'only for you lady');
