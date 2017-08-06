// $(document).ready(function(){

// 	$.get('https://jsonplaceholder.typicode.com/posts/', function(response){
// 		// $('#title').html(response.title);
// 		// $('#content').html(response.body);

// 		for(var i=0; i < response.length; i++)
// 		{
// 			$('#container').append('<h3>'+ response[i].title + '</h3><p>' + response[i].body + '</p>');


// 		}

		
// 		//console.log(response); // transforma din string in obiect javascript

// 	});
// });


// $(document).ready(function(){
// 	alert('page is ready1');
// });

// $(document).ready(function(){
// 	alert('page is ready2');
// });

// $(document).ready(function(){
// 	alert('page is ready3');
// });



// AJAX

$(document).ready(function(){

	$.get('https://jsonplaceholder.typicode.com/posts/1', function(response){
		$('#title').html(response.title);
		$('#content').html(response.body);
		//console.log(response); // transforma din string in obiect javascript

	});
});

