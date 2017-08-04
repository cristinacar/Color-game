

	// var rgb = [];
	numSquares = 6;
	var square = document.getElementById("square");
	var colors = getColors(numSquares);
	var pickedColor = pickColor(colors);


	function randomColor(){
		/* rgb = [Math.floor(Math.random() *256), Math.floor(Math.random()*256), Math.floor(Math.random() *256)];
	 return rgb ;*/

	 	var num1 = Math.floor(Math.random() * 256);
	 	var num2 = Math.floor(Math.random() * 256);
	 	var num3 = Math.floor(Math.random() * 256);

	 	return "rgb(" + num1 + ", " + num2 + ", "  + num3 + ")"; 
	}
	
	function getColors(numSquares){
		var array = [];
		for(var i = 0; i < numSquares; i++){
			array.push(randomColor());
		}
		return array;

	}
	console.log(colors);

	function pickColor(colors){
		var random = Math.floor(Math.random() * colors.length);
		return colors[random];
	}
	 
	console.log(pickedColor)

	document.getElementById('resetButton').addEventListener("click", fillSqare);

	document.getElementById('newButton').addEventListener("click", fillSqare);

	function fillSqare(){

		var string = "square";
		colors = getColors(numSquares);
		pickedColor = pickColor(colors);
		for(var i = 1; i<= colors.length; i++){
			var squareToFill = document.getElementById(string + i);
			squareToFill.style.backgroundColor = colors[i]; 

		}

		document.getElementById('mainHeader').innerHTML = pickedColor;

	}

	function setupSquare(id) {
		
		var string = "square";
		string +=id;

		var squareClicked = document.getElementById(string);
		var clickedColor = squareClicked.style.backgroundColor;

		if(clickedColor === pickedColor) {
			document.getElementById('mainHeader').innerHTML = "Correct!";
		}else{
			document.getElementById('mainHeader').innerHTML = "Incorrect!";
		}
		console.log(clickedColor);
	}
	