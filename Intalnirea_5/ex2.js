$(document).ready(function(){
	$('#circle').click(function(){
		$('p').html("I'm a Jquery function");
		$(function() {
		  alert($("p").text());
		$('#iframe').attr('src', 'http://training.fortech.ro');
		});
	});

});