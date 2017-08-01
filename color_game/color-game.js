var nrPatrat = 6;
var colors = getColors(nrPatrat);
var patrat = document.querySelectorAll(".patrat");
var h1 = document.querySelector("h1");
var header = document.querySelector("#rgb");
var animatie = document.querySelector("#animatie");
var resetButton = document.querySelector("#reset");
var nivelCurent = document.querySelector(".select");
FillPatrat(patrat,colors);
var alegeColor = alegeColor(colors);
header.textContent = alegeColor;
var nivelButtons = document.querySelectorAll(".nivel");
var easyButton = document.querySelector("#easy");






//resetam jocul
function reset() {
	h1.style.background = "pink";
	animatie.textContent = "";
	resetButton.textContent = "New Color";
	//Modul easy al jocului 
	if(nivelCurent.textContent === "Easy") {
		nrPatrat = 3;
	}
	// primim culoarea si o atribuim patratului
	colors = getColors(nrPatrat);
	FillPatrat(patrat, colors);
	alegeColor = alegeColor(colors);
	header.textContent = alegeColor;
}



//Returns an array of colors
function getColors(nr) {
	var MyArray = [];
	for(var i = 0; i < nr; i++) {
		MyArray.push(realizeazaColor()); //cu push adaugam o culoare la array-ul nostru

	}
	return MyArray; //returnam arrayul
}

//Picks a color from a bunch of choices
function alegeColor(alegere) {
	var random = Math.floor(Math.random() * alegere.length);
	return alegere[random];
}

//Implem toate patratele cu culoare
function FillPatrat(patrat, colors) {
	for(var i = 0; i < patrat.length; i++) {
		patrat[i].style.display = "block";
		if(colors[i]) {
			patrat[i].style.background = colors[i];
		} else {
			patrat[i].style.display = "none";
		}
	}
}


//Generam o culoare RGB prin functia random (intre 0 -255 ). Iar cu floor putem elimina decimalele randomului
function realizeazaColor() {
	var red = Math.floor(Math.random() * 256); 
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

// Adaugarea de EVENT LISTENER PT BUTOANE 
//Pt butonul de reset 
resetButton.addEventListener("click", reset);


//Pt restul butoanelor
for(var i = 0; i < nivelButtons.length; i++) {
	nivelButtons[i].addEventListener("click", function() {
		if(currentMode !== this) {
			this.classList.add("select");
			nivelCurent.classList.remove("select");
			nivelCurent = this;
			reset();
		}
	});
}

//Pentru patrate (chenare)
for(var i = 0; i < patrat.length; i++) {
	patrat[i].addEventListener("click", function() {
		var clickPeCuloare = this.style.background;
		if(clickPeCuloare === alegeColor) {
			// Aratam ca a ghicit varianta corecta 
			animatie.textContent = "Correct!";
			//Schimbam culoarea la toate patratelele in varianta corecta, in urma verificarii conditiei anterioare 
			for(var i = 0; i < patrat.length; i++) {
				patrat[i].style.background = alegeColor;
			}
			h1.style.background = alegeColor;
			resetButton.textContent = "Play Again?";
		} else {
			//Daca nu a ghicit culoarea
			animatie.textContent = "Incorrect";
			this.style.background = "#232323";
		}
	});
}
