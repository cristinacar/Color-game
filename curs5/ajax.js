$(document).ready(function(){
  $.get('https://jsonplaceholder.typicode.com/posts/', function(response){
    //console.log(response);
    for(var i = 0; i < response.length; i++){
      //console.log(response[1].title);
      
      
      $('#container').append('<h3>' + response[i].title + '</h3>');
      $('#container').append('<p>' + response[i].body + '</p>').css('color','black');
      $('p:odd').css('color','blue');
      $('p:even').css('color','yellow');
      $('h3:even').css('color','red');
      $('h3:odd').css('color','red');
      
      
      
    }
    
    $('#title').html(response.title);
    $('#content').html(response.body);
    
    
    
  });
});