window.onload = function (){
  var a = document.querySelectorAll("li");
  var rgb = [];
  var pickedColor;
  
  
  function random(limit){
    var myRand = Math.floor(Math.random() * (limit + 1));
    return myRand;
  };

  function newRGB(){
    var myRGB = 'rgb';
    var r = random(255);
    var g = random(255);
    var b = random(255);
    myRGB += '(' + r + ", " + g + ", " + b + ')';
    return myRGB;
  };

  function resetGame(){
      var myStr = newRGB();

      for (var i=0; i < a.length ; i++){
        var myStr = newRGB();
        rgb.push(myStr);
        a[i].style.background = myStr;
        console.log(a[i]);
        a[i].addEventListener("click", setupSquares);

      }
      
      pickedColor = rgb[random(5)];
      document.getElementById('target').innerHTML = pickedColor;     
  };

 


  function setupSquares(){
    var squareColor = this.style.background;

    if (pickedColor == squareColor){
      result.textContent = "Correct!";
    }else{
      result.textContent = "Incorrect!";      
    }
  };

  resetGame();
  
};