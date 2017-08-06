// 6. Modificarea continutului HTML
//modificare text din interiorul paragrafului la click pe cerc
$(document).ready(function(){

	$('#circle').click(function(){
		$('p').html("<b> Hello jello!</b>");
		alert($('p').html());
		$('#fortech').attr('src', 'http://training.fortech.ro');
		alert($('#fortech').attr('src'));
	});
// 7. Modificarea stilurilor
	$('#anotherCircle').click(function(){
	$('#anotherCircle').css('background-color', 'red');
	alert($('#anotherCircle').css('background-color'));
	});
	$('#container div').click(function(){
		$(this).hide();
	});
// 8. Animarea continutului
$('#blueCircle').click(function(){
	$('#blueCircle').animate( {opacity: '0.5', width: '150px', height: '150px'}, 2000, function(){
		$('#blueCircle').css('background-color', 'yellow');
		 });
});
// 10. Comunicarea prin AJAX cu ajutorul jQuery
 $.get('http://jsonplaceholder.typicode.com/posts/1', function(response){
		$('#title').html(response.title);
		$('#content').html(response.body);
	});

$.get('http://jsonplaceholder.typicode.com/posts', function(response){
	for(var i=0; i<response.length; i++){
		$('#container').append('<h3>' + response[i].title +'</h3>' + '<p>' + response[i].body +'</p>');
	}
});

// 11. Introducere in jQuery UI
	$('#patratColorat').draggable();
// 12. jQuery UI – Draggables Resizables
//restrictionare axei de miscare
	$('#patratColorat').draggable({
		// axis: "x"
		axis: "x"
	});
//restrictionarea zona de mișcare a patratului la div-ul parinte 
	$('#patratColorat').draggable({
		  containment: "parent"
	});
	// $('#patratColorat').resizable( { grid: [50,50] });

//13.jQuery UI – Accordion
	// $('#accordion').accordion();
	$.get('http://jsonplaceholder.typicode.com/posts', function(response){
		for(var i=0; i<response.length; i++){
			$('#accordion').append('<h3>' + response[i].title + '</h3>' +'<div> <p>' + response[i].body +'</p> </div>'); 
		console.log(response[1].title);
		}
    $('#accordion').accordion();
	});

// 14. Reaction testing game
	// $('#reactionCircle').click(function(){
	// 	$('#reactionCircle').animate({'margin-left':'100px'}, 2000);
	// });


});