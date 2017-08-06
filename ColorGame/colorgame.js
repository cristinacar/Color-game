//create a function that generates and returns string with a random color values (ex: 'rgb(123,211,122)' )
function randomNumber(){
	var max= 255;
	var redColor =  Math.floor(Math.random() * (max + 1));
	var greenColor = Math.floor(Math.random() * (max + 1));
	var blueColor = Math.floor(Math.random() * (max + 1));
	return ('rgb(' + redColor + ', ' + greenColor + ', ' + blueColor + ')' );
};
document.getElementById('rgb').innerHTML = randomNumber() ; 

//create a function that uses the above function to generate 6 random colors that are saved in a global variable (array)

var color = [];
function randomColors(){
	for(i=0; i<6; i++){
		color.push(randomNumber());
	}
};
randomColors();
// console.log(color);

//create a function that picks a random value from that array and saves it into another global variable called pickedColor

var pickedColor =" ";
function picksRandomValue(){
	var randomValue = color[Math.floor(Math.random() * color.length)];
	pickedColor = randomValue;
};
picksRandomValue();
console.log(pickedColor);

document.getElementById('startgame').addEventListener('click', function(){
	document.getElementById('startgame').innerHTML = 'RESTART GAME';
});
//create a resetGame function that uses the global variables to set the text in the header and the color for each square.

var patrate = document.querySelectorAll('.patrat');
document.getElementById('startgame').addEventListener('click', function(){
	resetGame();
});
function resetGame(){
	color = [];
	pickedColor = " ";
	randomColors();
	picksRandomValue();
	document.getElementById('rgb').innerText = pickedColor;
	document.getElementById('answer').innerText = " ";
	for( var i=0;i<6;i++){
		patrate[i].style.backgroundColor = color[i];
	}
};

//FOURTH STEPS
//create a setupSquares function in which we add a click event on each square where you compare
//the color of the clicked square with the pickedColor if the color is corect then show the message in the header

function setupSquares(){
	for(var i=0;i <patrate.length; i++){
		patrate[i].addEventListener('click', function(){
			var clickedSquare = this.style.backgroundColor;
			 if(clickedSquare == pickedColor){
			 	document.getElementById('answer').innerHTML = 'Correct Answer!';
			 	document.querySelector('header').style.backgroundColor = " " + clickedSquare + "";
			 	console.log(pickedColor);
			 }else{
			 	document.getElementById('answer').innerHTML = 'Try Again!';
			 	this.style.backgroundColor = "white";
			 }
		});
	};
};
setupSquares();

//when you press start new game, the resetGame function is called.

document.getElementById('startgame').addEventListener('click', function(){
	resetGame();
});



// easy game & hard game - not finished
var easy = document.getElementById('easy');
var hard = document.getElementById('hard');
easy.addEventListener('click', function(){
alert('alert easy game');
});

hard.addEventListener('click', function(){
alert('alert hard game');
});

