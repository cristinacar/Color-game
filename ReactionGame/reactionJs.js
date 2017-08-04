var clickedTime;
var createdTime;
var reactionTime;

$(document).ready(function(){
function randomColor(){
	
	  	var num1 = Math.floor(Math.random() * 256);
	 	var num2 = Math.floor(Math.random() * 256);
	 	var num3 = Math.floor(Math.random() * 256);

	 	return "rgb(" + num1 + ", " + num2 + ", "  + num3 + ")"; 
	}

function createBox(){
	var time = Math.random() * 2000;
	var top = Math.random() * 200;
	var left = Math.random() * 800;

		setTimeout(function(){
			$('#box').css("display", "block");
			$('#box').css("margin-top", top + "px");
			$('#box').css("margin-left", left + "px");
		
		$('#box').css("background-color", randomColor());

		createdTime= Date.now();	
		}, time);
};


$('#box').click(function(){
	clickedTime = Date.now();
	reactionTime = (clickedTime - createdTime) / 1000;
	$('#time').html(reactionTime);
	$(this).css("display","none");
	createBox();
});


$('#start').click(function(){
	createBox();
	$(this).hide();
	$('#stop').fadeIn();
	$('#reset').hide();
});

$('#stop').click(function(){
	$(this).hide();
	$('#box').hide();
	$('#start').fadeIn();
	$('#reset').fadeIn();
});

$('#reset').click(function(){
	location.reload()
});

});