/*Unfinished project*/

list = document.querySelectorAll('li');

console.log(list);

function randomColor() {
	
	var color = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
	return color;
	
}

var colorArray = [randomColor(), randomColor(), randomColor(), randomColor(), randomColor(), randomColor()];

console.log(colorArray);
function pickC()
{
	var select = Math.floor(Math.random() * 6);
	var pickedColor = colorArray[select];
	return pickedColor;
}
console.log("the colore picked: " + pickC());


function startGame(){
	var colors;
	var arrayColors = [];
	for (i = 0; i < list.length; i++)
		{
			arrayColors.push(colors);
			list[i].style.backgroundColor = colors;
			console.log(list[i]);
			list[i].addEventListener('click',valid);
		}
	console.log(arrayColors.length);
	mod = arrayColors[Math.random() * 5];
	document.getElementById('h32').innerHTML = mod;
	return mod;
}