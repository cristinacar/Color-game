// $(document).ready(function() {
// $('#circle').click(function(){
// 	alert('Ati realizat un click pe cercul verde!');
// })
// });

// $(document).ready(function() {
// $('.square').click(function(){
// 	alert('Ati realizat un click pe patrat!');
// })
// });


$(document).ready(function() {
$('#circle, .square').click(function(){
	if($(this).attr('id') == 'circle')
		{alert("ex4 in circle");}
	else if($(this).attr('class') == 'square')
	{
		alert('ex4 in square');
	}

});
});