$(document).ready(function(){
  
  $('#circle').on('click',function(){
    //alert('click pe cerc');
    $('#circle').css('position','relative').css('left','100px').css('background-color','blue');
    
  })
  
  $('.square').on('click',function(){
    //alert('click pe patrat');
    $('.square').toggleClass('iii').fadeOut(1000);
  })
  /*
  $('.square, #circle').on('click',function(){
    alert('sdasa');
  })
  */
  
  $('.green').on('click',function(){
    var p = $('#title').val();
    var x = p.html('sdadasda');
    
    
  })
});