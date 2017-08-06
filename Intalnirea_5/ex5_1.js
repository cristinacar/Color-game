// $(document).ready(function(){
// 	$("#drag").draggable();
// })

// $(document).ready(function(){
// 	$("#drag").draggable({axis:"x"});
// })

// $(document).ready(function(){
// 	$("#drag").draggable({containment:'parent'});
// })

// $(document).ready(function(){
// 		$("#resize").resizable().bind({
// 			resizetop: function() {
// 				alert('Finish')
// 			}
// 		});
// });

$(document).ready(function(){
		$("#accordation").accordation();
});

$(document).ready(function(){
	$.get('https://jsonplaceholder.typicode.com/posts/', function(response) {

		for(var i=0; i<80; i++)
				$("#accordation").append('<h3>'+response[i].title+'</h3>','<div><p>'+response[i].body+'</p></div>');
	});
});