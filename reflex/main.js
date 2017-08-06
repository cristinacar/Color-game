$(document).ready(function(){
	var starttime;

	function start(){
		$('#circle').css('position','absolute');

		$('#circle').css('left','20%');
		$('#circle').css('width','200px');
		$('#circle').css('height','200px');
		$('#circle').css('background','red');
		starttime = Date.now();//saving the time
	}
function clicking(){
	$('#circle').click(function(){
		var clicked = Date.now();
		result = (clicked - starttime) / 1000;
		$('#circle').css('background','green');
		$('#circle').css('top','40%');
		$('#circle').css('left','40%');
		$('#result').text('Your time is: ' + result + ' seconds.');
});
}

//click event to start the game
$('#start').click(function(){
	start();
	clicking();
});

//click event to reset the game
$('#reset').click(function(){
	location.reload();
});
});