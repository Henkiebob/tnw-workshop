$(document).ready(function(){
	$('form').submit(function(e){
		e.preventDefault();
		$('.message').append('<p>aa</p>');
	});
});