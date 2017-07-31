  //variables to store the html id/class
  var rgbText = document.getElementById('rgb-text');
  var circles = document.querySelectorAll('.color-circle');
  var reset = document.getElementById('start');
  
  
  
  //on keydown return a callback function
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
    
    console.log(key_circle);
  });

  
  //added the click event using plain javascript

  //i stored the circles in the keyc variable
  
  //i looped through all circles
  for(var i = 0; i < circles.length; i++){
  //i defined a function that invokes immediately because of the scope/closure problem. this problem would have been solved with the es6 let keyword. so for each iteration through the loop will have a new value of i where each value is scoped inside the loop
    (function(){
      //console.log(keyc[i]);
  //added a click event listener for whatever circle is clicked
     circles[i].addEventListener('click',function(){
  //add the class key1
        this.classList.add('key1');
  //i defined x = this to make sure that the setTimeout function will work. otherwise 'this' will refer to the window global 
        var x = this;
        setTimeout(function(){
          x.classList.remove('key1');
        }, 500);
      });
    }());
  }
    
  


//added the click event using jquery 

 /* 
  $('.color-circle').click(function(){
    //this refers to the clicked circle
    var theDiv = this;
    console.log(this);
    //add the class key1 on the clicked circle
    $(theDiv).addClass('key1');
    //remove the class after 500ms just as the keydown event above
    setTimeout(function(){
      $(theDiv).removeClass('key1');
    },500);
  });
  */
  


  //create a function that generates and returns string with a random color values (ex: 'rgb(123,211,122)' )
  

  var randomColor = function() {
    //Math.floor rounds the number to the lowest integer ex: 32.99 = 32 
    //Math.random() * 256 returns a random number from 0 to 255 -> //Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    //Math.floor(Math.random() * (255 - 0 + 1) + 0;
    //stored the random number from 0 to 255 in the red, green and blue variables
    
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    // return a string that concatenates the random values that were generated in the above variables.
    return "rgb(" + red + ", " + green +", " + blue + ")";
  }
  
  
  //create a function that uses the above function to generate 6 random colors that are saved in a global variable (array)
  
  
  var sixColors = function(){
    //created an empty array to store the rgb colors
    var colors_array = [];
    //for loop to create 6 colors
    for(var i = 0; i < 6; i++){
    //push those 6 colors in the empty array
      colors_array.push(randomColor());
    }
    //this picks a random value from the colors_array 
    var randomPickedColor = Math.floor(Math.random() * colors_array.length); 
    //this return a single rgb value from the array in the form of colors_array[i]
    //return colors_array[randomPickedColor];
    
    
    return colors_array;
    console.log(colors_array); 
  }


  
  //create a resetGame function that uses the global variables to set the text in the header and the color for each square.
  
  
  //created a click event listener for the reset button
  reset.addEventListener('click',function(){
  //stored the function that creates 6 random colors into colors variable
    var colors = sixColors();
  //whenever the button is clicked the rgbText is changed with a new rgb value
    rgbText.textContent = randomColor();
  //loop into the circles to define the random colors for each other
    for(var i = 0; i < circles.length; i++){
  //every circle is defined with a new color
      circles[i].style.background = colors[i];
  
      
    }
    console.log(colors);
    
  });
  


