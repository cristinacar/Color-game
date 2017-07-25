$(document).ready(function(){
  
  //keydown
  window.addEventListener('keydown',function(e){
    var key_circle = document.querySelector("div[data-key='" + e.keyCode + "']");
    key_circle.classList.add('key1');
    setTimeout(function(){
      key_circle.classList.remove('key1');
    }, 500);

    console.log(key_circle);
  });

  //added the click event 
  $('.color-circle').click(function(){
    var theDiv = this;
    $(theDiv).addClass('key1');
    setTimeout(function(){
      $(theDiv).removeClass('key1');
    },500);
  });



});
