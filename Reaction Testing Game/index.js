
var circle = document.getElementById('circle');


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
    return 'calc('+vh+'vh - 200px)';
  }
  return vh + 'vh';
}

circle.addEventListener('click',function(){
  this.style.left = randomVW();
  this.style.top = randomVH();
});