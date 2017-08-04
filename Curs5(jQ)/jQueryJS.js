// $(document).ready(function(){
// 	alert('page is ready!');
// })

// $(document).ready(function(){
// 	// Task2
// 	// $("#circle").click(function(){
// 	// 	alert('clicked the circle!');
// 	// })

// 	//Task3
// 	// $(".square").click(function(){
// 	// alert('clicked the square!');
// 	// })

// 	//Task4
// 	$('.square, #circle').click(function(){
// 	alert('clicked!');
// 	})

// })
	// Task 1,2,3
// $(document).ready(function(){
// 	$("#circle").click(function(){
// 		$("p").html('Away');
// 		alert($("p").html());
// 	})
// })

// ajax call
// $(document).ready(function(){
// 	$.get('http://jsonplaceholder.typicode.com/posts', function(response){

// 	for(var i = 0; i < 20; i++)
// 		$('#section1').append('<h4>'+ response[i].title + '</h4>','<p>' + response[i].body + '</p>');
	

// 	for(var i = 20; i < 40; i++)
// 		$('#section2').append('<h4>'+ response[i].title + '</h4>','<p>' + response[i].body + '</p>');


// 	for(var i = 40; i < 60; i++)
// 		$('#section3').append('<h4>'+ response[i].title + '</h4>','<p>' + response[i].body + '</p>');
	


// });
// 	$("#accordion").accordion();
// });

// $(document).ready(function(){
// 	$("#circle").click(function(){
// 		$("#abc_frame").attr('src', 'http://www.training.fortech.ro');
// 	})
// })

//Task 1,2,3
// $(document).ready(function(){
// 	$("#circle2").click(function(){
// 		$("#circle2").css("background-color","yellow");
// 		alert("Background-color = " + $("#circle").css("background-color"));
// 	});
// }); 

//Task 4
// $(document).ready(function() {
// 	$("#circle, .square, #circle2").click(function(){
// 		$(this).css("display","none");
// 	});
// });

//Task animate
$(document).ready(function(){
	$("#circle3").click(function(){
		$("#circle3").animate({
			left: '250px',
			height: '+=150px',
			width: '+=150px'
		},2000, function(){
			$("#circle3").css("background-color","yellow");
		});
	});
});


//Draggable task
// $(document).ready(function(){
// 	$("#draggable").draggable();
// })

//Draggable only on x axis
// $(document).ready(function(){
// 	$("#draggable").draggable({axis: "x"});
// })


//Draggable inside a div
$(document).ready(function(){
	$("#draggable").draggable({containment: 'parent'});
})

//Resizable
$(document).ready(function(){
	$("#resize").resizable().bind({
		resizestop: function(){
			alert("Done!");
		}
	});
});

// $(document).ready(function(){
// 	$("#accordion").accordion();
// });

$(document).ready(function(){
	$.get('http://jsonplaceholder.typicode.com/posts', function(response){

	for(var i = 0; i < 100; i++)
		$('#accordion').append('<h3>'+response[i].title+'</h3>','<div><p>' + response[i].body + '</p></div>');
});
});
