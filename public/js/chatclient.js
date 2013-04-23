$(document).ready(function() {
	
	// Set the focus to the textfield.
	$('.textfield').focus();

	// Connect to the server
	var socket = io.connect(document.URL);

	socket.on('newMessage', function(message) {
		// Append the inserted text to the div
		$('.messages > div').append('<p><span>'+ message.timestamp + ':</span> ' + message.message + '</p>');

		// Scroll the window to the bottom
		$('.messages').scrollToBottom(100);
	});

	// Check if the form has been submitted
	$('.form').submit(function(e) {

		// Prevent the form from being submitted
		e.preventDefault();

		// Get the text from the textfield
		var message = $('.textfield').val();

		// Empty the textfield
		$('.textfield').val('');

		// Send the message to the server
		socket.emit('msg', { message: message });
	});

});