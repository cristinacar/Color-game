window.onload = function (){
  var score = 5;
  var x = document.querySelectorAll("td");


  function random(max){
    var myRandom = Math.floor(Math.random() * (max + 1));
    return myRandom;
  };

  function genRGB(){
    var myRGB = 'rgb(';
    var r1 = random(255);
    var r2 = random(255);
    var r3 = random(255);
    myRGB += r1 + ", " + r2 + ", " + r3 + ')';
    return myRGB;
  };

  function initiateGame() {
      var myStr = genRGB();
      var rgbs = [];
      console.log(myStr);
      for (var i=0; i < x.length ; i++){
        var myStr = genRGB();
        rgbs.push(myStr);
        x[i].style.background = myStr;
        console.log(x[i]);
        x[i].addEventListener("click", valid);
      }
      console.log(rgbs.length);
      r = rgbs[random(5)];
      document.getElementById('RGB').innerHTML = r;
      return r;
  };



  function valid() {

    this.style.opacity = 0.5;
    var bg = this.style.background;
    console.log(bg + " " + r);
    if (r == bg){
      var s = '<i class="fa fa-check-circle-o" aria-hidden="true"></i>'
      var para = document.createElement('p');
      para.innerHTML = s;
      this.appendChild(para);
      for (var i=0; i < x.length ; i++){
        x[i].removeEventListener('click',valid);
      }
      setTimeout(function(){
      alert("Your score: " + score);
      },10);
    }
    else {
      var s = '<i class="fa fa-times" aria-hidden="true"></i>'
      var para = document.createElement('p');
      para.innerHTML = s;
      this.appendChild(para);
      score--;
      this.removeEventListener('click',valid);
    }
  };

  var r =  initiateGame();

};
