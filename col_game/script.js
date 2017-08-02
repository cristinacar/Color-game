window.onload = function () {
  var array = [];
  var pickedColor = " ";

  // function that returns a random RGB color value as a string
  function randColVal() {
    var max = 255;
    var r = Math.floor(Math.random() * (max + 1));
    var g = Math.floor(Math.random() * (max + 1));
    var b = Math.floor(Math.random() * (max + 1));
    return 'rgb(' + r + ',' + g + ',' + b + ');';
  };

  document.getElementById('rgbColor').innerHTML = randColVal();

  // function that uses the above function to generate 6 random colors that are saved in an array
  function randCols() {
    for (var i = 0; i < 6; i++) {
      array.push(randColVal());
    };
  };

  randCols();
  console.log(array);

  // function that picks a random value from the above array and saves it into another global variable called pickedColor
  function pickRandVal(){
	   var randVal = array[Math.floor(Math.random() * randCols.length)];
	    pickedColor = randVal;
  };
  pickRandVal();
  console.log(pickedColor);

  // resetGame function that uses the global variables to set the text in the header and the color for each square.
  allSQ = document.querySelectorAll('.singleSQ');

  function resetGame() {
    array = [];
  	pickedColor = " ";
  	randCols();
  	pickRandVal();

  	document.getElementById('rgbColor').innerText = pickedColor;

  	for(var i=0; i<6; i++) {
  		allSQ[i].style.backgroundColor = array[i];
  	};
  };

// reset the game at click on StarNewGame
  document.getElementById('clgStart').addEventListener('click', function () {
	resetGame();
  });

  function setupSquares() {
    var el = document.getElementById('clkSQR');
    var bgProperty = window.getComputedStyle(el, null).getPropertyValue('background-color');
    console.log(bgProperty);

    for(var i = 0; i < 0; i++) {
      return console.log(allSQ[i]);

    //   if (allSQ[i].style.backgroundColor == pickedColor) {
    //     return alert(true);
    //   } else {
    //     return alert(false);
    //   };
    };

  };

  document.getElementById('clkSQR').addEventListener('click', setupSquares() );

};
