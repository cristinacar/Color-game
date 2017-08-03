
var circle = document.getElementById('circle');
var diff = document.getElementById('diff');


function randomVW(){
  var vw = Math.floor(Math.random() * 101);
  if(vw >= 90){
    return 'calc('+vw+'vw - 200px)';
  } 
  return vw + 'vw';
}


function randomVH(){
  var vh = Math.floor(Math.random() * 101);
  if(vh >= 79){
    return 'calc('+vh+'vh - 400px)';
  }
  return vh + 'vh';
}

var createdTime = Date.now();
circle.addEventListener('click',function(){
  this.style.left = randomVW();
  this.style.top = randomVH();
  var clickedTime = Date.now();
  var seconds = (clickedTime - createdTime) / 1000;
  console.log(seconds);
  var reactionTime ='Your reaction is: ' + seconds + ' seconds';
  if(seconds < 0.700) {
    diff.textContent = 'Nice! Your reaction is: ' + seconds + ' seconds';
  }else {
    diff.textContent = 'Nice job, grandpa! Your reaction is: ' + seconds + ' seconds';
  }
  //diff.textContent = reactionTime;
  createdTime = Date.now();
});


/*difference between mouse up and mouse down*/