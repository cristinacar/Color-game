var colors = [];
var pickedColor;

function genRGB() {
	var r = Math.round(Math.random() * 256);
	var g = Math.round(Math.random() * 256);
	var b = Math.round(Math.random() * 256);
	return "rgb(" + r + "," + g + "," + b + ")";
}

function resetColors() {
	colors = [];
	for (var i = 0; i < 6; i++) {
		colors.push(genRGB());
	}
}

function pickColor() {
	var i = Math.round(Math.random() * 6);

	pickedColor = colors[i];
}

function resetGame() {
	resetColors();
	pickColor();
	document.getElementById('pickedColor').innerHTML = pickedColor;
	for (var i = 0; i < 6; i++) {
		document.getElementById('color' + (i + 1)).style.backgroundColor = colors[i];
	}
}

function checkColor(str) {
	if (str == pickedColor)
		alert("Correct!");
	else
		alert("Wrong!");
}

window.onload = function() {
	document.getElementById('startButton').addEventListener('click', function() {
		resetGame();

		console.log(colors);
	});

	document.getElementById('color1').addEventListener('click', function() {
		checkColor(colors[0]);
	});
	document.getElementById('color2').addEventListener('click', function() {
		checkColor(colors[1]);
	});
	document.getElementById('color3').addEventListener('click', function() {
		checkColor(colors[2]);
	});
	document.getElementById('color4').addEventListener('click', function() {
		checkColor(colors[3]);
	});
	document.getElementById('color5').addEventListener('click', function() {
		checkColor(colors[4]);
	});
	document.getElementById('color6').addEventListener('click', function() {
		checkColor(colors[5]);
	});
}