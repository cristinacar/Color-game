window.onload = function() {
	var score = 0;
	//function that generates and returns string with a random color values
	function generateRandomRGB() {
		var var1 = Math.floor(Math.random()*255);
		var var2 = Math.floor(Math.random()*255);
		var var3 = Math.floor(Math.random()*255);
		return "rgb(" + var1 + ", " + var2 + ", " + var3 + ")";
	};
	//function that uses the above function to generate 6 random colors that are saved in a global variable (array)
	function colorArrayGenerator() {
		return colorArray = [generateRandomRGB(), generateRandomRGB(), generateRandomRGB(), generateRandomRGB(), generateRandomRGB(), generateRandomRGB()];
	}
	var colorArray;
		 
	//function that picks a random value from that array and saves it into another global variable called pickedColor.
	function pickColor() {
		var pickAColor = Math.floor(Math.random()*6);
		var picked = colorArray[pickAColor];
		return picked;
	};
	var pickedColor;

	//function that uses the global variables to set the text in the header and the color for each square
	function resetGame() {
		console.log("The color array: " + colorArray);
		console.log("Picked Color is: " + pickedColor);
		document.getElementById("randomRGB").innerHTML = pickedColor;
		document.getElementById('sq1').style.background = colorArray[0];
		document.getElementById('sq2').style.background = colorArray[1];
		document.getElementById('sq3').style.background = colorArray[2];
		document.getElementById('sq4').style.background = colorArray[3];
		document.getElementById('sq5').style.background = colorArray[4];
		document.getElementById('sq6').style.background = colorArray[5];
	
	};

	function gameOver() {
		alert("Game Over");
		document.getElementById('randomRGB').innerHTML = "Congratulations! You scored: " + score;
		score = 0;
		document.getElementById('sq1').style.background="";
		document.getElementById('sq2').style.background="";
		document.getElementById('sq3').style.background="";
		document.getElementById('sq4').style.background="";
		document.getElementById('sq5').style.background="";
		document.getElementById('sq6').style.background="";
	}

	function setupSquares() {
		document.getElementById('sq1').addEventListener('click', function() {
			if (document.getElementById('sq1').style.background === pickedColor) {
				score++;
				//document.getElementById("sng").innerHTML = "Congratulations";
				generateRandomRGB();
				colorArrayGenerator();
				colorArray = colorArrayGenerator();
				pickedColor = pickColor();
				resetGame();
				document.getElementById('score').innerHTML = "Score:";
				document.getElementById('score').innerHTML += score;
			} else {
				gameOver();
			}
		});
		document.getElementById('sq2').addEventListener('click', function() {
			if (document.getElementById('sq2').style.background === pickedColor) {
				score++;
				//document.getElementById("sng").innerHTML = "Congratulations";
				generateRandomRGB();
				colorArrayGenerator();
				colorArray = colorArrayGenerator();
				pickedColor = pickColor();
				resetGame();
				document.getElementById('score').innerHTML = "Score:";
				document.getElementById('score').innerHTML += score;
			} else {
				gameOver();
			}
		});
		document.getElementById('sq3').addEventListener('click', function() {
			if (document.getElementById('sq3').style.background === pickedColor) {
				score++;
				//document.getElementById("sng").innerHTML = "Congratulations";
				generateRandomRGB();
				colorArrayGenerator();
				colorArray = colorArrayGenerator();
				pickedColor = pickColor();
				resetGame();
				document.getElementById('score').innerHTML = "Score:";
				document.getElementById('score').innerHTML += score;
			} else {
				gameOver();
			}
		});
		document.getElementById('sq4').addEventListener('click', function() {
			if (document.getElementById('sq4').style.background === pickedColor) {
				score++;
				//document.getElementById('sng').innerHTML = "Congratulations";
				generateRandomRGB();
				colorArrayGenerator();
				colorArray = colorArrayGenerator();
				pickedColor = pickColor();
				resetGame();
				document.getElementById('score').innerHTML = "Score:";
				document.getElementById('score').innerHTML += score;
			} else {
				gameOver();
			}
		});
		document.getElementById('sq5').addEventListener('click', function() {
			if (document.getElementById('sq5').style.background === pickedColor) {
				score++;
				//document.getElementById('sng').innerHTML = "Congratulations";
				generateRandomRGB();
				colorArrayGenerator();
				colorArray = colorArrayGenerator();
				pickedColor = pickColor();
				resetGame();
				document.getElementById('score').innerHTML = "Score:";
				document.getElementById('score').innerHTML += score;
			} else {
				gameOver();
			}
		});
		document.getElementById('sq6').addEventListener('click', function() {
			if (document.getElementById('sq6').style.background === pickedColor) {
				score++;
				//document.getElementById('sng').innerHTML = "Congratulations";
				generateRandomRGB();
				colorArrayGenerator();
				colorArray = colorArrayGenerator();
				pickedColor = pickColor();
				resetGame();
				document.getElementById('score').innerHTML = "Score:";
				document.getElementById('score').innerHTML += score;
			} else {
				gameOver();

			}
		});
	}


/*	function setupSquares() {
		for (var i=1; i<7; i++) {
			var squareId = String('sq' + i);
			document.getElementById(squareId).addEventListener('click', function() {
				if (document.getElementById(squareId).style.background === pickedColor) {
				console.log("bravo");
				} else {
					alert("Try again.");
				}
			});
		}
	}	
*/	
	setupSquares();
	document.getElementById('sng').addEventListener('click', function() {
		generateRandomRGB();
		colorArrayGenerator();
		colorArray = colorArrayGenerator();
		pickedColor = pickColor();
		resetGame();
		document.getElementById('score').innerHTML = "Score:"
		

	});
	
}