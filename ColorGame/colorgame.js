//create a function that generates and returns string with a random color values (ex: 'rgb(123,211,122)' )
function randomNumber(){
	var max= 255;
	var redColor =  Math.floor(Math.random() * (max + 1));
	var greenColor = Math.floor(Math.random() * (max + 1));
	var blueColor = Math.floor(Math.random() * (max + 1));
	return ('RGB(' + redColor + ', ' + greenColor + ', ' + blueColor + ')' );
};
document.getElementById('rgb').innerHTML = randomNumber() ;

//create a function that uses the above function to generate 6 random colors that are saved in a global variable (array)

var color = [];
function randomColors(){
	// var randomColors = [];
	for(i=0; i<6; i++){
		color.push(randomNumber());
	}
};
randomColors();
console.log(color);

//create a function that picks a random value from that array and saves it into another global variable called pickedColor

var picked =" ";
function picksRandomValue(){
	var randomValue = color[Math.floor(Math.random() * randomColors.length)];
	picked = randomValue;
};
picksRandomValue();
console.log(picked);

//create a resetGame function that uses the global variables to set the text in the header and the color for each square.

patrate = document.querySelectorAll('.patrat');
document.getElementById('reset').addEventListener('click', function(){
	resetGame();
});
function resetGame(){
	color = [];
	picked = " ";
	randomColors();
	picksRandomValue();
	document.getElementById('rgb').innerText = picked;
	for( var i=0;i<6;i++){
		patrate[i].style.backgroundColor = color[i];
	}
};