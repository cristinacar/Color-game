
var number = 6;
var pickedColor = pickColor();
var reset = document.getElementById('start');
var circles = document.querySelectorAll('.color-circle');
var colors = sixColors(number);
var correct = document.getElementById('correct');
var rgbText = document.getElementById('rgb-text');
var header = document.querySelector('.header');


window.addEventListener('keydown',function(e){
  //store the keycode for the following keys (q,w,e,a,s,d) in the key_circle variable
  var key_circle = document.querySelector("div[data-key='" + e.keyCode + "']");
  //add the key1 class to the variable key_circle 
  key_circle.classList.add('key1');
  //i defined a setTimeout function to automatically remove the key1 class added on keydown
  //i matched the 500ms value with the transition that i defined for the .color-circle class 
  setTimeout(function(){
    key_circle.classList.remove('key1');
  }, 500);
  
  

  console.log(key_circle.style.background);
  //i stored the rgb value of the key_circle in keyRgb variable
  var keyRgb = key_circle.style.background;
  //this is the picked color.
  var picked = pickedColor.style.background;
  //if keyRgb is equal to the picked color
  if(keyRgb === picked){
  //the text from the h1 with the id of correct will be changed to 'Correct'
    correct.textContent = 'CORRECT';
  //and the header background color will be the color that was picked
    header.style.background = picked;
  }else{
  //else correct is equal to no
    correct.textContent= 'NO!';
  //and the key_circle will 'dissapear'
    key_circle.style.background = 'white';
  }
});






function randomColor(){
  //Math.floor rounds the number to the lowest integer ex: 32.99 = 32 
  //Math.random() * 256 returns a random number from 0 to 255 -> //Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  //Math.floor(Math.random() * (255 - 0 + 1) + 0;
  //stored the random number from 0 to 255 in the red, green and blue variables
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  // return a string that concatenates the random values that were generated in the above variables.
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}



function sixColors(num){
  //created an empty array to store the rgb colors
  var array1 = [];
  //for loop to create num colors
  for(var i = 0; i < num; i++ ){
  //push those 6 colors in the empty array
    array1.push(randomColor());
  }
  return array1;
  
}



function pickColor() {
  //fetched the circles
  var circles = document.querySelectorAll('.color-circle');  
  //this creates a random number from 0 - 5
  var random = Math.floor(Math.random() * circles.length);
  //returns a circle with a random [i]
  return circles[random];
} 



reset.addEventListener('click',function(){
  //stored those 6 random rgb colors in the var colors
  colors = sixColors(number);
  //pickedColor is equal to the picked color
  pickedColor = pickColor();
  //header style is coded again here so that when i click the reset button the last color that was assigned to the header to dissapear
  header.style.background = '#00A69C';
  //for loop that runs 6 times
  for(var i = 0; i < circles.length; i++){
  //the rgb text in the header will be equal to the picked color 
    rgbText.textContent = pickedColor.style.background;
  //every circle is assigned with a rgb color
    circles[i].style.background = colors[i];
    console.log(colors[i]);
  }
});



  //6times
for(var i = 0; i < circles.length; i++){
  //this is used once again because i want my game to be playable from the very beggining. without this line there would be no text in the h1 with the rgb color
  rgbText.textContent = pickedColor.style.background;
  //the same with colors of the circle. without this line the circles would have the colors that were defined in the css file.
  circles[i].style.background = colors[i];
  //added a click event listener to whatever circle is clicked
  circles[i].addEventListener('click',function(){
  //clicked is equal to the color of the clicked circle
    var clicked = this.style.background;
  //picked is equal to picked color 
    var picked = pickedColor.style.background;
    
    
  //if they are equal 
    if(clicked === picked){
  //the last h1 text will be changed to 'correct'
      correct.textContent = 'Correct';
  //and the header color will be the picked color. and transition will have a 500ms ease 
      header.style.background = picked;
      
      
      
    }else {
  //else the h1 will say 'NO"
      correct.textContent = 'NO!';
  //and the color of the circle will 'dissapear'
      this.style.background = 'white';
    }
  });
}






