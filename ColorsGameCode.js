window.onload = function() {
	
	var color;
	//Create a function that generates a random Color and returns it in Rgb form.
	function generateRandomRGB() {
		var var1 = Math.floor(Math.random()*255);
		var var2 = Math.floor(Math.random()*255);
		var var3 = Math.floor(Math.random()*255);
		return "Rgb(" + var1 + ", " + var2 + ", " + var3 + ")";
	}

	function randomSquare() {
		return 'sq' + Math.floor(Math.random()*6);
	}
	
	document.getElementById('sng').addEventListener('click', function() {
		//Print RGB of the color to be guessed in h1 when 'Start new game' button is clicked.
		color = generateRandomRGB();
		document.getElementById('randomRGB').innerHTML = color;
		//Give a random color to each square.
		document.getElementById('sq1').style.background = generateRandomRGB();
		document.getElementById('sq2').style.background = generateRandomRGB();
		document.getElementById('sq3').style.background = generateRandomRGB();
		document.getElementById('sq4').style.background = generateRandomRGB();
		document.getElementById('sq5').style.background = generateRandomRGB();
		document.getElementById('sq6').style.background = generateRandomRGB();
		//Give the colorg from h1 to a random square.
		document.getElementById(randomSquare()).style.background = color;
	});
	


}