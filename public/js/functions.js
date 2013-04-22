$(document).ready(function() {
	// Set the focus to the textfield.
	$('.textfield').focus();

	// Check if the form has been submitted
	$('form').submit(function(e){

		// Prevent the form from being submitted
		e.preventDefault();

		// Get the text from the textfield
		var text = $('.textfield').val();

		// Empty the textfield
		$('.textfield').val('');

		// Append the inserted text to the div
		$('.messages > div').append('<p>'+text+'</p>');

		// Scroll the window to the bottom
		$('.messages').scrollToBottom(100);

		// Set the focus to the textfield.
		$('.textfield').focus();
	});
});