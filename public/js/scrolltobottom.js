$.fn.scrollToBottom = function(duration) {
	var $el = this;
	var el  = $el[0];
	var startPosition = el.scrollTop;
	var delta = el.scrollHeight - $el.height() - startPosition;

	var startTime = Date.now();

	function scroll() {
		var fraction = Math.min(1, (Date.now() - startTime) / duration);

		el.scrollTop = delta * fraction + startPosition;

		if(fraction < 1) {
			setTimeout(scroll, 10);
		}
	}
	scroll();
};