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
    $('#title').html('dadadasdadasda');
    var d = $('#title').html();
    alert(d);
    $('iframe').attr('src','http://aircraft721.space');
  });
    
  $('.red').on('click',function(){
    $(this).css('display','none');
  });
    
  $('.blue').on('click',function(){
    $(this).animate({
      opacity: 0.75,
      height: '250px'
    }, 2000, function(){
      $(this).css({
        background: 'brown',
        opacity: 0.25
      });
    });
  });
  
  
  $('.yellow').draggable({
    containment: 'parent'
  });
  
  $('#magenta').resizable({
    grid: [50,50]
  });
  
  
  
  
$.get('https://jsonplaceholder.typicode.com/posts/', function(response){
    //console.log(response);
    for(var i = 0; i < response.length; i++){
      //console.log(response[1].title);
      
      
      $('#accordion').append('<h3>' + response[i].title + '</h3>');
      $('#accordion').append('<div><p>' + response[i].body + '</p></div>');
      
      //$('<h3>' + response[i].title + '</h3>').appendTo()
      
      
      
    }
    
    $('#title').html(response.title);
    $('#content').html(response.body);
    
    
    $('#accordion').accordion();
  });


  
  
});
