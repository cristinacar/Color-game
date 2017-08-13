	//var cb = document.getElementById("cb");
	var colorsArray = getColors(6);
	var pickedColor = pickColor(colorsArray);

function randomRGB(){
	var rColor =  Math.floor(Math.random() * (255 + 1));
	var gColor = Math.floor(Math.random() * (255 + 1));
	var bColor = Math.floor(Math.random() * (255 + 1));
	return ('rgb(' + rColor + ', ' + gColor + ', ' + bColor + ')' );
};

function getColors(){
	var colorsArray = [];
	for(var i = 0; i < 6; i++){
		colorsArray.push(randomRGB());
	}
	return colorsArray;
};
console.log(colorsArray);

function pickColor(colorsArray){
		var randomColor = Math.floor(Math.random() * colorsArray.length);
		return colorsArray[randomColor];
};
console.log(pickedColor);

document.getElementById('sButton').addEventListener("click", resetGame);

var cb = document.querySelectorAll('.cb'); 

function resetGame(){
	var s = "cb";
	colorsArray = getColors(6);
		pickedColor = pickColor(colorsArray);
		for(var i = 0; i< colorsArray.length; i++){
			cb[i].style.backgroundColor = colorsArray[i]; 
		}
		document.getElementById('rgb').innerHTML = pickedColor;
};

function setupSquares(){
	for(var i=0;i <cb.length; i++){
		cb[i].addEventListener('click', function(){
			var clickedCb = this.style.backgroundColor;
			 if(clickedCb == pickedColor){
			 	document.getElementById('rgb').innerHTML = 'Correct Answer!';
			 	console.log(pickedColor);
			 }
			 else{
			 	document.getElementById('rgb').innerHTML = 'Try Again!';
			 }
		});
	};
};
setupSquares();
	