$(document).ready(function(){
	$('#circle').click(function(){
		var div = $("div");
		div.animate({left: '500px'}, "2000s");
        div.animate({fontSize: '6em'}, "2000s");
        div.animate({
        	backgroundColor: 'red',
        });
	});
});