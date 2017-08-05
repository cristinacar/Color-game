$(document).ready(function(){
  
  var circle = $('#circle');
  var diff = $('#diff');
  
  
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
  circle.on('click',function(){
    $(this).css({
      'left':randomVW(),
      'top':randomVH()
    });
    
    var clickedTime = Date.now();
    var seconds = (clickedTime - createdTime) / 1000;
    var reactionTime = 'Your reaction is: ' + seconds + ' seconds';
    if(seconds < 0.700){
      diff.text('Nice! Your reaction is: ' + seconds + ' seconds');
    }else{
      diff.text('Nice job, grandpa! Your reaction is: ' + seconds + ' seconds');
    }
    createdTime = Date.now();
    
  });
  
});