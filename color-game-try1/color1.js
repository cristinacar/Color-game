window.addEventListener('keydown',function(e){
  var key_circle = document.querySelector("div[data-key='" + e.keyCode + "']");
  key_circle.classList.add('key1');
  setTimeout(function(){
    key_circle.classList.remove('key1');
  }, 500);

  console.log(key_circle);
});



//add hover delay and then click