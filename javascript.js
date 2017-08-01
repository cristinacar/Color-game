window.onload = function(){
	//  JS here

		// GLOBALS
	var colorsArray = [];
	var pickedColor = "pickedColor";
	var pickedColorIndex;


	 	// FUNCTIONS
	function randomColor(){
		var color = "";
		var red = Math.floor((Math.random() * 255) + 0);
		var green = Math.floor((Math.random() *255) + 0);
		var blue = Math.floor((Math.random() *255) + 0);
				// rgb(241, 94, 39)
		
		var color = "rgb(" + red + ", "+ green + ", "+ blue + ")";
		return color;
	}


	function generateColors(){
		for(var i = 0; i<6; i++){
			colorsArray[i] = randomColor();
		}
		console.log(colorsArray);
	}


	
	function selectRightColor(){
		generateColors();
		pickedColorIndex = Math.floor((Math.random() * 6) + 0);
		pickedColor = colorsArray[pickedColorIndex];
		return pickedColorIndex;
	}


	function resetGame(){
		selectRightColor();
		document.getElementById("rgbTitle").innerHTML = pickedColor; // set right collor RGB code in the Header of the page
		console.log(pickedColorIndex);
		var id = "Square"+pickedColorIndex;

		if(pickedColorIndex == 0){
			document.getElementById(id).style.backgroundColor = colorsArray[0];
			document.getElementById("Square1").style.backgroundColor = colorsArray[1];
			document.getElementById("Square2").style.backgroundColor = colorsArray[2];
			document.getElementById("Square3").style.backgroundColor = colorsArray[3];
			document.getElementById("Square4").style.backgroundColor = colorsArray[4];
			document.getElementById("Square5").style.backgroundColor = colorsArray[5];

		}else if(pickedColorIndex == 1){
			document.getElementById("Square0").style.backgroundColor = colorsArray[0];
			document.getElementById(id).style.backgroundColor = colorsArray[1];
			document.getElementById("Square2").style.backgroundColor = colorsArray[2];
			document.getElementById("Square3").style.backgroundColor = colorsArray[3];
			document.getElementById("Square4").style.backgroundColor = colorsArray[4];
			document.getElementById("Square5").style.backgroundColor = colorsArray[5];

		}else if(pickedColorIndex == 2){
			document.getElementById("Square0").style.backgroundColor = colorsArray[0];
			document.getElementById("Square1").style.backgroundColor = colorsArray[1];
			document.getElementById(id).style.backgroundColor = colorsArray[2];
			document.getElementById("Square3").style.backgroundColor = colorsArray[3];
			document.getElementById("Square4").style.backgroundColor = colorsArray[4];
			document.getElementById("Square5").style.backgroundColor = colorsArray[5];

		}else if(pickedColorIndex == 3){
			document.getElementById("Square0").style.backgroundColor = colorsArray[0];
			document.getElementById("Square1").style.backgroundColor = colorsArray[1];
			document.getElementById("Square2").style.backgroundColor = colorsArray[2];
			document.getElementById(id).style.backgroundColor = colorsArray[3];
			document.getElementById("Square4").style.backgroundColor = colorsArray[4];
			document.getElementById("Square5").style.backgroundColor = colorsArray[5];

		}else if(pickedColorIndex == 4){
			document.getElementById("Square0").style.backgroundColor = colorsArray[0];
			document.getElementById("Square1").style.backgroundColor = colorsArray[1];
			document.getElementById("Square2").style.backgroundColor = colorsArray[2];
			document.getElementById("Square3").style.backgroundColor = colorsArray[3];
			document.getElementById(id).style.backgroundColor = colorsArray[4];
			document.getElementById("Square5").style.backgroundColor = colorsArray[5];

		}else if(pickedColorIndex == 5){
			document.getElementById("Square0").style.backgroundColor = colorsArray[0];
			document.getElementById("Square1").style.backgroundColor = colorsArray[1];
			document.getElementById("Square2").style.backgroundColor = colorsArray[2];
			document.getElementById("Square3").style.backgroundColor = colorsArray[3];
			document.getElementById("Square4").style.backgroundColor = colorsArray[4];
			document.getElementById(id).style.backgroundColor = colorsArray[5];

		}
		setupSquares();
	}

	function setupSquares(){
		function setupSquare(x){
			document.getElementById(x).addEventListener("click", function(){
				var squareColor = document.getElementById(x).style.backgroundColor;
				console.log(squareColor);
				console.log(pickedColor);
				if( squareColor === pickedColor){
					document.getElementById("gameResult").innerHTML = "Ai ghicit culoarea!";
					document.getElementById("background").style.height = '1500px';
				}else{
					document.getElementById("gameResult").innerHTML = "Mai incearca!";
					document.getElementById("background").style.height = '1500px';
				}
			});
		}
		setupSquare("Square0");
		setupSquare("Square1");
		setupSquare("Square2");
		setupSquare("Square3");
		setupSquare("Square4");
		setupSquare("Square5");
	}

	function startApp(){
		resetGame();

		startNewGame = document.getElementById("startNewGame");
		startNewGame.addEventListener("click", function(){
			resetGame();
		});
	}
	
	startApp();



	



}